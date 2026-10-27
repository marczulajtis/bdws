import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { CookieSettingsLink } from "@/components/CookieSettingsLink";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <strong>{SITE.name}</strong>
          <span>{SITE.tagline}</span>
        </div>
        <SocialLinks className="socials socials-round" />
      </div>
      <div className="wrap footer-bottom">
        <nav className="footer-links" aria-label="Informacje">
          <Link href="/dla-szkol">Dla szkół</Link>
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          <CookieSettingsLink />
        </nav>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <Link href="/admin" className="footer-admin" aria-label="Logowanie redakcji" title="Logowanie redakcji">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
