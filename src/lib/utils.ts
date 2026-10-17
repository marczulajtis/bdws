const PL: Record<string, string> = { ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z" };

export function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[ąćęłńóśźż]/g, (c) => PL[c])
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 80) || "wpis"
  );
}

export function readingMinutes(text: string): number {
  return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 200));
}

export function formatDate(iso: string | null | undefined): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
}
