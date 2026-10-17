import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Bezpieczne Dzieci w Sieci</span>
        <span>Dla rodziców, szkół i opiekunów</span>
        <Link href="/admin" style={{ color: "inherit" }}>Logowanie</Link>
      </div>
    </footer>
  );
}
