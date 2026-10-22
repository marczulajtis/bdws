import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { mailConfigured } from "@/lib/mail";
import { LIST, roleLabel } from "@/lib/subscribers";
import { formatDate } from "@/lib/utils";
import { AdminBar, NoAccess } from "../AdminBar";
import { deleteSubscriber } from "./actions";
import { Composer } from "./Composer";

export const metadata: Metadata = { title: "Zapisy: materiały dla szkół", robots: { index: false } };
export const dynamic = "force-dynamic";

type Row = { id: string; email: string; role: string | null; status: string; consent_at: string; confirmed_at: string | null };
type Mailing = { id: string; subject: string; recipients: number; created_at: string };

export default async function SubscribersPage() {
  const { supabase, user, isAdmin } = await requireAdmin();
  if (!isAdmin) {
    return (
      <section className="wrap admin">
        <AdminBar email={user.email} />
        <NoAccess />
      </section>
    );
  }

  const [{ data, error }, { data: sent }] = await Promise.all([
    supabase
      .from("subscribers")
      .select("id,email,role,status,consent_at,confirmed_at")
      .eq("list", LIST)
      .order("created_at", { ascending: false }),
    supabase.from("mailings").select("id,subject,recipients,created_at").order("created_at", { ascending: false }).limit(10),
  ]);
  const rows = (data ?? []) as Row[];
  const confirmed = rows.filter((r) => r.status === "confirmed");
  const pending = rows.length - confirmed.length;

  return (
    <section className="wrap admin">
      <AdminBar email={user.email} />

      <div className="admin-head">
        <div>
          <h2 className="panel-title" style={{ margin: 0 }}>Materiały dla szkół: lista zapisów</h2>
          <p className="hint">
            Potwierdzone: <b>{confirmed.length}</b> · czekają na potwierdzenie: <b>{pending}</b> · formularz:{" "}
            <Link href="/dla-szkol">/dla-szkol</Link>
          </p>
        </div>
        <a className="btn btn-line" href="/admin/zapisy/eksport">Pobierz CSV</a>
      </div>

      {error && (
        <p className="error" role="alert">
          Nie udało się wczytać listy. Czy w Supabase uruchomiono plik <code>supabase/zapisy.sql</code>? ({error.message})
        </p>
      )}
      {!mailConfigured() && (
        <p className="notice">
          Wysyłka e-maili nie jest skonfigurowana. Dodaj zmienne <code>RESEND_API_KEY</code>, <code>MAIL_FROM</code> i{" "}
          <code>SUPABASE_SERVICE_ROLE_KEY</code> (instrukcja w README). Bez nich formularz nie przyjmie zapisów.
        </p>
      )}

      <div className="subs">
        <Composer confirmed={confirmed.length} />

        <div className="panel">
          <h2 className="panel-title">Osoby na liście</h2>
          {rows.length === 0 ? (
            <p className="hint">Nikt się jeszcze nie zapisał.</p>
          ) : (
            <div className="table">
              {rows.map((r) => (
                <div className="row" key={r.id}>
                  <div>
                    <div className="t">
                      {r.email}{" "}
                      <span className={`pill ${r.status === "confirmed" ? "pub" : "dr"}`}>
                        {r.status === "confirmed" ? "Potwierdzony" : "Czeka"}
                      </span>
                    </div>
                    <div className="s">
                      {roleLabel(r.role) || "rola nie podana"} · zgoda {formatDate(r.consent_at)}
                      {r.confirmed_at && ` · potwierdzono ${formatDate(r.confirmed_at)}`}
                    </div>
                  </div>
                  <form action={deleteSubscriber} className="acts">
                    <input type="hidden" name="id" value={r.id} />
                    <button className="btn btn-ghost" type="submit" style={{ color: "var(--danger)" }}>Usuń</button>
                  </form>
                </div>
              ))}
            </div>
          )}
          {sent && sent.length > 0 && (
            <>
              <h2 className="panel-title" style={{ marginTop: 10 }}>Wysłane wiadomości</h2>
              <ul className="hint" style={{ margin: 0, paddingLeft: 18 }}>
                {(sent as Mailing[]).map((m) => (
                  <li key={m.id}>
                    {formatDate(m.created_at)}: „{m.subject}” ({m.recipients})
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
