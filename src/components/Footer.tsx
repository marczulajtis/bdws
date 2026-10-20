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
        <nav className="footer-links" aria-label="Informacje">
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          <Link href="/admin">Logowanie</Link>
        </nav>
      </div>
      {credits.length > 0 && (
        <div className="wrap credits">
          Zdjęcia: {credits.join(", ")} / <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
        </div>
      )}
    </footer>
  );
}
