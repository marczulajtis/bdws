import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/constants";

export function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="Strona główna">
          <Logo />
          <span className="wordmark">
            <span className="a">Bezpieczne</span>
            <span className="b">Dzieci w Sieci</span>
          </span>
        </Link>
        <nav>
          <span className="handle">{SITE.handle}</span>
        </nav>
      </div>
    </header>
  );
}
