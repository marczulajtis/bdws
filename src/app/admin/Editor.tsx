"use client";

import Link from "next/link";
import { useActionState, useMemo, useRef, useState } from "react";
import { AGES, CATEGORIES } from "@/lib/constants";
import { renderMarkdown } from "@/lib/markdown";
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
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const isPublished = post?.status === "published";
  const preview = useMemo(() => renderMarkdown(body), [body]);

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
          </div>
          <textarea id="body" name="body" ref={bodyRef} className="body-input" value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={"Pisz zwykłym tekstem.\n## Nagłówek\n- punkt listy\n!! wskazówka dla rodzica"} />
        </div>

        <label style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 14 }}>
          <input type="checkbox" name="featured" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
          Wyróżnij na górze strony głównej
        </label>

        {state.error && <p className="error" role="alert">{state.error}</p>}

        <div className="actions">
          <button className="btn btn-teal" type="submit" name="intent" value="publish" disabled={pending || uploading}>
            {isPublished ? "Zapisz zmiany" : "Opublikuj"} <span className="arr" />
          </button>
          {isPublished ? (
            <button className="btn btn-line" type="submit" name="intent" value="unpublish" disabled={pending}>Cofnij do szkiców</button>
          ) : (
            <button className="btn btn-line" type="submit" name="intent" value="draft" disabled={pending || uploading}>Zapisz szkic</button>
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
