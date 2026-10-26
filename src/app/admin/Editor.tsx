"use client";

import Link from "next/link";
import { useActionState, useMemo, useRef, useState } from "react";
import { AGES, CATEGORIES } from "@/lib/constants";
import { PLACEHOLDER_LINE, countPlaceholders, renderMarkdown } from "@/lib/markdown";
import { createClient } from "@/lib/supabase/client";
import type { Post } from "@/lib/types";
import { readingMinutes, slugify } from "@/lib/utils";
import { deletePost, savePost, type FormState } from "./actions";

const TOOLS: { label: string; prefix?: string; wrap?: string; link?: boolean }[] = [
  { label: "Nagłówek", prefix: "## " },
  { label: "Pogrubienie", wrap: "**" },
  { label: "Kursywa", wrap: "*" },
  { label: "Lista", prefix: "- " },
  { label: "Kroki", prefix: "1. " },
  { label: "Wskazówka", prefix: "!! " },
  { label: "Cytat", prefix: "> " },
  { label: "Link", link: true },
];

export function Editor({ post }: { post: Post | null }) {
  const [state, action, pending] = useActionState<FormState, FormData>(savePost, {});
  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [category, setCategory] = useState(post?.category ?? CATEGORIES[0]);
  const [ages, setAges] = useState<string[]>(post?.ages ?? []);
  const [body, setBody] = useState(post?.body ?? "");
  const [cover, setCover] = useState(post?.cover_url ?? "");
  const [featured, setFeatured] = useState(post?.featured ?? false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [imgBusy, setImgBusy] = useState("");
  const [imgError, setImgError] = useState("");
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  /** Który przycisk kliknięto. Trzymamy to w ukrytym polu, bo nie każda przeglądarka dołącza do formularza name/value przycisku. */
  const intentInput = useRef<HTMLInputElement>(null);
  const setIntent = (v: "publish" | "draft" | "unpublish") => {
    if (intentInput.current) intentInput.current.value = v;
  };
  const galleryInput = useRef<HTMLInputElement>(null);

  const isPublished = post?.status === "published";
  const preview = useMemo(() => renderMarkdown(body, { preview: true }), [body]);
  const slotsLeft = useMemo(() => countPlaceholders(body), [body]);

  /** Wysyła obraz do Supabase Storage (bucket „covers”, folder „wpisy”) i zwraca publiczny adres. */
  async function uploadImage(file: File, folder: string): Promise<string> {
    const prepared = await shrinkImage(file);
    if (prepared.size > 5 * 1024 * 1024) throw new Error("too-big");
    const supabase = createClient();
    const ext = prepared.type === "image/webp" ? "webp" : file.name.split(".").pop()?.toLowerCase() || "jpg";
    const base = slugify(file.name.replace(/\.[^.]+$/, "")).slice(0, 40);
    const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 7)}-${base}.${ext}`;
    const { error } = await supabase.storage.from("covers").upload(path, prepared, { contentType: prepared.type || file.type });
    if (error) throw error;
    return supabase.storage.from("covers").getPublicUrl(path).data.publicUrl;
  }

  /**
   * Wstawia zdjęcie albo galerię w linijce z kursorem.
   * Jeśli kursor stoi na miejscu na zrzut ([ZRZUT 3: opis]), to miejsce zostaje zastąpione,
   * a opis z niego staje się podpisem zdjęcia.
   */
  async function insertImages(files: File[], gallery: boolean) {
    const ta = bodyRef.current;
    if (!ta || !files.length) return;
    setImgError("");
    const caret = ta.selectionStart;
    const value = ta.value;
    const lineStart = value.lastIndexOf("\n", caret - 1) + 1;
    const nl = value.indexOf("\n", caret);
    const lineEnd = nl === -1 ? value.length : nl;
    const line = value.slice(lineStart, lineEnd);
    const slot = line.match(PLACEHOLDER_LINE);
    // podpis = opis miejsca bez dopisku w nawiasie na końcu (tam są wskazówki dla redakcji)
    const caption = slot ? slot[2].replace(/\s*\([^)]*\)\s*$/, "").replace(/[\]\[]/g, "").trim() : "";

    setImgBusy(files.length > 1 ? `Wysyłanie 0/${files.length}…` : "Wysyłanie…");
    const urls: string[] = [];
    try {
      for (const f of files) {
        urls.push(await uploadImage(f, `wpisy/${slugify(slug || title || "wpis")}`));
        if (files.length > 1) setImgBusy(`Wysyłanie ${urls.length}/${files.length}…`);
      }
    } catch (e) {
      setImgError(
        e instanceof Error && e.message === "too-big"
          ? "Zdjęcie jest za duże. Maksymalnie 5 MB."
          : "Nie udało się wysłać zdjęcia. Sprawdź połączenie i bucket „covers” (README)."
      );
      setImgBusy("");
      if (!urls.length) return;
    }
    setImgBusy("");

    const md =
      gallery || urls.length > 1
        ? [":::galeria", ...urls.map((u, n) => `![${n === 0 ? caption : ""}](${u})`), ":::"].join("\n")
        : `![${caption}](${urls[0]})`;

    let next: string;
    let pos: number;
    if (slot) {
      next = value.slice(0, lineStart) + md + value.slice(lineEnd);
      pos = lineStart + md.length;
    } else {
      const before = value.slice(0, lineEnd);
      const after = value.slice(lineEnd);
      const pre = before.trim() ? "\n\n" : "";
      next = before + pre + md + "\n" + after;
      pos = before.length + pre.length + md.length;
    }
    setBody(next);
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(pos, pos);
    });
  }

  /** Zaznacza następne miejsce na zrzut w treści, żeby od razu wstawić tam zdjęcie. */
  function nextSlot() {
    const ta = bodyRef.current;
    if (!ta) return;
    const lines = ta.value.split("\n");
    const from = ta.value.slice(0, ta.selectionEnd).split("\n").length; // numer linijki po kursorze
    const order = [...lines.keys()].slice(from).concat([...lines.keys()].slice(0, from));
    const idx = order.find((n) => PLACEHOLDER_LINE.test(lines[n]));
    if (idx === undefined) return;
    const start = lines.slice(0, idx).join("\n").length + (idx ? 1 : 0);
    ta.focus();
    ta.setSelectionRange(start, start + lines[idx].length);
    const lh = parseFloat(getComputedStyle(ta).lineHeight) || 22;
    ta.scrollTop = Math.max(0, idx * lh - ta.clientHeight / 3);
  }

  function applyTool(t: (typeof TOOLS)[number]) {
    const ta = bodyRef.current;
    if (!ta) return;
    const { selectionStart: s, selectionEnd: e, value } = ta;
    const sel = value.slice(s, e);
    let next: string;
    let caret: number;
    if (t.prefix) {
      const lineStart = value.lastIndexOf("\n", s - 1) + 1;
      next = value.slice(0, lineStart) + t.prefix + value.slice(lineStart);
      caret = e + t.prefix.length;
    } else if (t.wrap) {
      const rep = t.wrap + (sel || "tekst") + t.wrap;
      next = value.slice(0, s) + rep + value.slice(e);
      caret = s + rep.length;
    } else {
      const rep = `[${sel || "opis linku"}](https://)`;
      next = value.slice(0, s) + rep + value.slice(e);
      caret = s + rep.length - 1;
    }
    setBody(next);
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(caret, caret);
    });
  }

  async function uploadCover(file: File) {
    setUploadError("");
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("Plik jest za duży. Maksymalnie 5 MB.");
      return;
    }
    setUploading(true);
    try {
      const supabase = createClient();
      const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const path = `${Date.now()}-${slugify(title || "okladka")}.${ext}`;
      const { error } = await supabase.storage.from("covers").upload(path, file, { contentType: file.type });
      if (error) throw error;
      setCover(supabase.storage.from("covers").getPublicUrl(path).data.publicUrl);
    } catch {
      setUploadError("Nie udało się wysłać obrazu. Sprawdź, czy bucket „covers” istnieje (README).");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="editor">
      <form action={action} className="panel">
        <div>
          <Link href="/admin" className="btn btn-ghost" style={{ paddingLeft: 0 }}>← Lista wpisów</Link>
          <span className={`pill ${isPublished ? "pub" : "dr"}`}>{isPublished ? "Opublikowany" : "Szkic"}</span>
        </div>

        {post && <input type="hidden" name="id" value={post.id} />}
        <input type="hidden" name="cover_url" value={cover} />
        <input ref={intentInput} type="hidden" name="intent" defaultValue="draft" />

        <div className="field">
          <label htmlFor="title">Tytuł</label>
          <input id="title" name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}
            placeholder="np. Roblox w 10 minut: co rodzic musi wiedzieć" required />
        </div>

        <div className="field">
          <label htmlFor="slug">Adres wpisu</label>
          <input id="slug" name="slug" type="text" value={slug} onChange={(e) => setSlug(e.target.value)}
            placeholder={slugify(title || "tytul-wpisu")} />
          <p className="hint">/wpis/{slug ? slugify(slug) : slugify(title || "tytul-wpisu")}
            {isPublished && " · zmiana adresu zepsuje stare linki"}</p>
        </div>

        <div className="field">
          <label htmlFor="excerpt">Zajawka (1–2 zdania na kafelek i do Google)</label>
          <textarea id="excerpt" name="excerpt" rows={2} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} maxLength={300} />
        </div>

        <div className="field">
          <label htmlFor="category">Kategoria</label>
          <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>

        <fieldset className="field" style={{ border: 0, padding: 0, margin: 0 }}>
          <legend className="lbl" style={{ marginBottom: 6 }}>Dla jakiego wieku</legend>
          <div className="checks">
            {AGES.map((a) => (
              <label key={a}>
                <input type="checkbox" name="ages" value={a} checked={ages.includes(a)}
                  onChange={(e) => setAges((prev) => (e.target.checked ? [...prev, a] : prev.filter((x) => x !== a)))} />
                {a}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="field">
          <span className="lbl">Okładka (opcjonalnie: infografika lub zrzut ekranu)</span>
          <div className="coverbox">
            <div className="thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {cover && <img src={cover} alt="" />}
            </div>
            <label className="btn btn-line" htmlFor="cover-file" style={{ cursor: "pointer" }}>
              {uploading ? "Wysyłanie…" : "Wybierz obraz"}
            </label>
            <input id="cover-file" type="file" accept="image/*" hidden
              onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadCover(f); e.target.value = ""; }} />
            {cover && <button type="button" className="btn btn-ghost" onClick={() => setCover("")}>Usuń okładkę</button>}
          </div>
          {uploadError && <p className="error">{uploadError}</p>}
          <p className="hint">Bez okładki wpis dostanie kolorowy kafelek z nazwą kategorii.</p>
        </div>

        <div className="field">
          <label htmlFor="body">Treść</label>
          <div className="tool">
            {TOOLS.map((t) => (
              <button type="button" key={t.label} onClick={() => applyTool(t)}>{t.label}</button>
            ))}
            <button type="button" className="tool-img" disabled={Boolean(imgBusy)} onClick={() => imageInput.current?.click()}>
              Zdjęcie
            </button>
            <button type="button" className="tool-img" disabled={Boolean(imgBusy)} onClick={() => galleryInput.current?.click()}>
              Galeria
            </button>
            <input ref={imageInput} type="file" accept="image/*" hidden
              onChange={(e) => { const f = e.target.files?.[0]; if (f) insertImages([f], false); e.target.value = ""; }} />
            <input ref={galleryInput} type="file" accept="image/*" multiple hidden
              onChange={(e) => { const fs = Array.from(e.target.files ?? []); if (fs.length) insertImages(fs, true); e.target.value = ""; }} />
          </div>
          {(imgBusy || slotsLeft > 0) && (
            <div className="slots">
              {imgBusy ? (
                <span>{imgBusy}</span>
              ) : (
                <>
                  <span>Miejsca na zrzuty do uzupełnienia: <b>{slotsLeft}</b></span>
                  <button type="button" className="btn btn-ghost" onClick={nextSlot}>Przejdź do następnego</button>
                </>
              )}
            </div>
          )}
          {imgError && <p className="error">{imgError}</p>}
          <textarea id="body" name="body" ref={bodyRef} className="body-input" value={body}
            onChange={(e) => setBody(e.target.value)}
            onPaste={(e) => {
              // zrzut ekranu wklejony ze schowka (Cmd+V) trafia od razu do linijki z kursorem
              const fs = Array.from(e.clipboardData.files).filter((f) => f.type.startsWith("image/"));
              if (!fs.length || imgBusy) return;
              e.preventDefault();
              insertImages(fs, fs.length > 1);
            }}
            onDragOver={(e) => { if (e.dataTransfer.types.includes("Files")) e.preventDefault(); }}
            onDrop={(e) => {
              const fs = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith("image/"));
              if (!fs.length || imgBusy) return;
              e.preventDefault();
              insertImages(fs, fs.length > 1);
            }}
            placeholder={"Pisz zwykłym tekstem.\n## Nagłówek\n- punkt listy\n!! wskazówka dla rodzica"} />
          <p className="hint">
            Zdjęcie trafia do linijki z kursorem. Możesz też wkleić zrzut ze schowka (Cmd+V) albo przeciągnąć pliki na pole
            treści. Podpis wpisz w nawiasie: ![podpis](adres). „Galeria” pozwala wybrać kilka zdjęć naraz i ustawia je
            obok siebie. Linijki [ZRZUT …] to miejsca na zrzuty: czytelnicy ich nie widzą.
          </p>
        </div>

        <label style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 14 }}>
          <input type="checkbox" name="featured" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
          Wyróżnij na górze strony głównej
        </label>

        {state.error && <p className="error" role="alert">{state.error}</p>}

        <div className="actions">
          <button className="btn btn-teal" type="submit" onClick={() => setIntent("publish")} disabled={pending || uploading || Boolean(imgBusy)}>
            {isPublished ? "Zapisz zmiany" : "Opublikuj"} <span className="arr" />
          </button>
          {isPublished ? (
            <button className="btn btn-line" type="submit" onClick={() => setIntent("unpublish")} disabled={pending}>Cofnij do szkiców</button>
          ) : (
            <button className="btn btn-line" type="submit" onClick={() => setIntent("draft")} disabled={pending || uploading}>Zapisz szkic</button>
          )}
          {post && !confirmDelete && (
            <button type="button" className="btn btn-ghost" style={{ color: "var(--danger)" }} onClick={() => setConfirmDelete(true)}>Usuń</button>
          )}
        </div>
      </form>

      <div className="panel preview">
        {post && confirmDelete && (
          <form action={deletePost} className="confirm">
            <input type="hidden" name="id" value={post.id} />
            Usunąć ten wpis na stałe?
            <button className="btn btn-danger" type="submit">Tak, usuń</button>
            <button className="btn btn-ghost" type="button" onClick={() => setConfirmDelete(false)}>Anuluj</button>
          </form>
        )}
        <span className="lbl">Podgląd</span>
        <div className="meta">
          <span className="cat">{category}</span>
          <span>{readingMinutes(body)} min czytania</span>
        </div>
        <h2 style={{ fontFamily: "var(--f-display)", margin: 0, fontSize: 22, lineHeight: 1.2 }}>{title || "Tytuł wpisu"}</h2>
        {excerpt && <p className="hint" style={{ fontSize: 15 }}>{excerpt}</p>}
        {body.trim() ? (
          <div className="prose" dangerouslySetInnerHTML={{ __html: preview }} />
        ) : (
          <p className="hint">Tu zobaczysz, jak wpis wygląda dla czytelników.</p>
        )}
      </div>
    </div>
  );
}

/**
 * Zmniejsza duże zdjęcia przed wysłaniem (dłuższy bok maks. 1600 px, WebP).
 * Zrzuty z telefonu ważą wtedy zwykle 100–300 KB zamiast kilku MB. GIF-y i SVG zostają bez zmian.
 */
async function shrinkImage(file: File): Promise<File | Blob> {
  if (!/^image\/(jpeg|png|webp|heic|heif)$/.test(file.type)) return file;
  try {
    const bmp = await createImageBitmap(file);
    const max = 1600;
    const scale = Math.min(1, max / Math.max(bmp.width, bmp.height));
    if (scale === 1 && file.size < 600 * 1024) return file;
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bmp.width * scale);
    canvas.height = Math.round(bmp.height * scale);
    canvas.getContext("2d")!.drawImage(bmp, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/webp", 0.86));
    return blob && blob.type === "image/webp" && blob.size < file.size ? blob : file;
  } catch {
    return file;
  }
}
