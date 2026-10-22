/**
 * Prosty, bezpieczny parser treści wpisów. Najpierw escapuje HTML, potem dodaje formatowanie.
 *
 * Obsługiwana składnia:
 *   ## Nagłówek / ### Podnagłówek
 *   **pogrubienie**, *kursywa*, `kod`, [link](https://...)
 *   - lista punktowana, 1. lista numerowana
 *   > cytat
 *   !! wskazówka dla rodzica (ramka w stylu marki)
 *   --- linia oddzielająca
 *   ![podpis](https://...)      zdjęcie w osobnej linijce (podpis jest opcjonalny)
 *   :::galeria                  galeria: kilka zdjęć obok siebie
 *   ![podpis](https://...)
 *   ![podpis](https://...)
 *   :::
 *   [ZRZUT 3: opis]             miejsce na zrzut ekranu. Widać je tylko w podglądzie w panelu,
 *                               czytelnicy go nie zobaczą.
 */
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function inline(src: string): string {
  let s = esc(src);
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
  s = s.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  return s;
}

/** Linijka ze zdjęciem: ![podpis](adres). Adres: https://… albo ścieżka z naszej domeny (/…). */
export const IMAGE_LINE = /^\s*!\[([^\]]*)\]\(((?:https:\/\/|\/(?!\/))[^\s)]+)\)\s*$/;
/** Miejsce na zrzut ekranu: [ZRZUT 3: opis] albo [ZRZUT: opis]. */
export const PLACEHOLDER_LINE = /^\s*\[zrzut(?:\s*(\d+))?\s*[:.\-–]?\s*([^\]]*)\]\s*$/i;
const GALLERY_START = /^\s*:::\s*galeria\s*$/i;
const GALLERY_END = /^\s*:::\s*$/;

const BLOCK_START = /^(#|>|!!|\s*[-*]\s|\s*\d+[.)]\s|---|\s*!\[|\s*:::|\s*\[zrzut)/i;

function figure(alt: string, url: string, inGallery = false): string {
  const cap = alt.trim();
  return (
    `<figure class="figure${inGallery ? " in-gallery" : ""}">` +
    `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">` +
    `<img src="${esc(url)}" alt="${esc(cap)}" loading="lazy" decoding="async"></a>` +
    (cap ? `<figcaption>${inline(cap)}</figcaption>` : "") +
    `</figure>`
  );
}

export type RenderOptions = {
  /** true w panelu admina: pokazuje miejsca na zrzuty ekranu. */
  preview?: boolean;
};

export function renderMarkdown(source: string, opts: RenderOptions = {}): string {
  const lines = (source || "").replace(/\r/g, "").split("\n");
  const out: string[] = [];
  let i = 0;

  const collect = (re: RegExp, strip: RegExp) => {
    const items: string[] = [];
    while (i < lines.length && re.test(lines[i])) {
      items.push(lines[i].replace(strip, ""));
      i++;
    }
    return items;
  };

  while (i < lines.length) {
    const line = lines[i];
    let m: RegExpMatchArray | null;
    if (!line.trim()) { i++; continue; }
    if (/^---+$/.test(line.trim())) { out.push("<hr>"); i++; continue; }
    if ((m = line.match(/^###\s+(.*)/))) { out.push(`<h3>${inline(m[1])}</h3>`); i++; continue; }
    if ((m = line.match(/^##?\s+(.*)/))) { out.push(`<h2>${inline(m[1])}</h2>`); i++; continue; }
    if (GALLERY_START.test(line)) {
      i++;
      const imgs: string[] = [];
      while (i < lines.length && !GALLERY_END.test(lines[i])) {
        const im = lines[i].match(IMAGE_LINE);
        if (im) imgs.push(figure(im[1], im[2], true));
        else if (opts.preview && PLACEHOLDER_LINE.test(lines[i])) imgs.push(placeholder(lines[i]));
        i++;
      }
      i++; // zamykające :::
      if (imgs.length) out.push(`<div class="gallery g${Math.min(imgs.length, 3)}">${imgs.join("")}</div>`);
      continue;
    }
    if ((m = line.match(IMAGE_LINE))) { out.push(figure(m[1], m[2])); i++; continue; }
    if (PLACEHOLDER_LINE.test(line)) {
      if (opts.preview) out.push(placeholder(line));
      i++;
      continue;
    }
    if (/^!!\s?/.test(line)) {
      const b = collect(/^!!\s?/, /^!!\s?/);
      out.push(`<aside class="tip"><b class="tip-label">Wskazówka dla rodzica</b><p>${b.map(inline).join("<br>")}</p></aside>`);
      continue;
    }
    if (/^>\s?/.test(line)) {
      const b = collect(/^>\s?/, /^>\s?/);
      out.push(`<blockquote>${b.map(inline).join("<br>")}</blockquote>`);
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)) {
      const b = collect(/^\s*[-*]\s+/, /^\s*[-*]\s+/);
      out.push(`<ul>${b.map((x) => `<li>${inline(x)}</li>`).join("")}</ul>`);
      continue;
    }
    if (/^\s*\d+[.)]\s+/.test(line)) {
      const first = parseInt(line.trim(), 10);
      const b = collect(/^\s*\d+[.)]\s+/, /^\s*\d+[.)]\s+/);
      const start = first > 1 ? ` start="${first}"` : "";
      out.push(`<ol${start}>${b.map((x) => `<li>${inline(x)}</li>`).join("")}</ol>`);
      continue;
    }
    const p: string[] = [];
    while (i < lines.length && lines[i].trim() && !BLOCK_START.test(lines[i])) { p.push(lines[i]); i++; }
    if (!p.length) { p.push(line); i++; }
    out.push(`<p>${p.map(inline).join(" ")}</p>`);
  }
  return out.join("\n");
}

function placeholder(line: string): string {
  const m = line.match(PLACEHOLDER_LINE)!;
  const label = m[1] ? `Zrzut ${m[1]}` : "Zrzut ekranu";
  return `<div class="shot-slot"><b>${label}</b>${m[2] ? `<span>${inline(m[2])}</span>` : ""}<small>Widać tylko w panelu. Kliknij tę linijkę w treści i użyj „Zdjęcie”.</small></div>`;
}

/** Ile miejsc na zrzuty zostało jeszcze w treści. */
export function countPlaceholders(source: string): number {
  return (source || "").split("\n").filter((l) => PLACEHOLDER_LINE.test(l)).length;
}
