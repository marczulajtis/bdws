import Link from "next/link";
import { PHOTOS, SITE } from "@/lib/constants";

export function Footer() {
  const credits = Array.from(
    new Set(Object.values(PHOTOS).flatMap((p) => (p.credit ? [p.credit] : []))),
  );
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Bezpieczne Dzieci w Sieci</span>
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
          {SITE.handle}
        </a>
        <Link href="/admin" style={{ color: "inherit" }}>Logowanie</Link>
      </div>
      {credits.length > 0 && (
        <div className="wrap credits">
          Zdjęcia: {credits.join(", ")} / <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
        </div>
      )}
    </footer>
  );
}
