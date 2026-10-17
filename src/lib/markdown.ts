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

const BLOCK_START = /^(#|>|!!|\s*[-*]\s|\s*\d+[.)]\s|---)/;

export function renderMarkdown(source: string): string {
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
      const b = collect(/^\s*\d+[.)]\s+/, /^\s*\d+[.)]\s+/);
      out.push(`<ol>${b.map((x) => `<li>${inline(x)}</li>`).join("")}</ol>`);
      continue;
    }
    const p: string[] = [];
    while (i < lines.length && lines[i].trim() && !BLOCK_START.test(lines[i])) { p.push(lines[i]); i++; }
    if (!p.length) { p.push(line); i++; }
    out.push(`<p>${p.map(inline).join(" ")}</p>`);
  }
  return out.join("\n");
}
