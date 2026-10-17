import Link from "next/link";
import { logout } from "./actions";

export function AdminBar({ email }: { email?: string }) {
  return (
    <div className="admin-head">
      <h1>Panel admina</h1>
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
        {email && <span className="hint">{email}</span>}
        <Link href="/" className="btn btn-ghost">Zobacz bloga</Link>
        <form action={logout}>
          <button className="btn btn-line" type="submit">Wyloguj</button>
        </form>
      </div>
    </div>
  );
}

export function NoAccess() {
  return (
    <div className="empty">
      <h3>Brak uprawnień</h3>
      <p>To konto jest zalogowane, ale nie należy do redakcji. Dodaj je do tabeli <code>admins</code> w Supabase (instrukcja w README).</p>
    </div>
  );
}
