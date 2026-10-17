import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import type { Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { AdminBar, NoAccess } from "./AdminBar";

export const metadata: Metadata = { title: "Panel admina", robots: { index: false } };
export const dynamic = "force-dynamic";

const INFO: Record<string, string> = {
  opublikowano: "Wpis opublikowany.",
  zapisano: "Szkic zapisany.",
  cofnieto: "Wpis przeniesiony do szkiców.",
  usunieto: "Wpis usunięty.",
};

type SP = Promise<{ status?: string; info?: string }>;

export default async function AdminList({ searchParams }: { searchParams: SP }) {
  const { status, info } = await searchParams;
  const { supabase, user, isAdmin } = await requireAdmin();

  if (!isAdmin) {
    return (
      <section className="wrap admin">
        <AdminBar email={user.email} />
        <NoAccess />
      </section>
    );
  }

  const { data } = await supabase
    .from("posts")
    .select("id,title,slug,category,status,featured,published_at,updated_at")
    .order("updated_at", { ascending: false });
  const all = (data ?? []) as Pick<Post, "id" | "title" | "slug" | "category" | "status" | "featured" | "published_at" | "updated_at">[];
  const pub = all.filter((p) => p.status === "published");
  const drafts = all.filter((p) => p.status === "draft");
  const list = status === "published" ? pub : status === "draft" ? drafts : all;

  const tab = (key: string | undefined, label: string, n: number) => (
    <Link className="chip" href={key ? `/admin?status=${key}` : "/admin"} aria-current={status === key}>
      {label} ({n})
    </Link>
  );

  return (
    <section className="wrap admin">
      <AdminBar email={user.email} />
      {info && INFO[info] && <p className="notice" role="status" style={{ marginTop: 0 }}>{INFO[info]}</p>}

      <div className="admin-head">
        <div className="chips">
          {tab(undefined, "Wszystkie", all.length)}
          {tab("published", "Opublikowane", pub.length)}
          {tab("draft", "Szkice", drafts.length)}
        </div>
        <Link href="/admin/nowy" className="btn btn-teal">Nowy wpis <span className="arr" /></Link>
      </div>

      {list.length === 0 ? (
        <div className="empty">
          <h3>Nic tu jeszcze nie ma</h3>
          <p>Kliknij „Nowy wpis”, napisz artykuł i zapisz go jako szkic albo od razu opublikuj.</p>
        </div>
      ) : (
        <div className="table">
          {list.map((p) => (
            <div className="row" key={p.id}>
              <div>
                <div className="t">
                  {p.title || "(bez tytułu)"}
                  {p.featured && <span className="pill dr" style={{ marginLeft: 8 }}>Polecany</span>}
                </div>
                <div className="s">
                  {p.category} ·{" "}
                  {p.status === "published" ? `opublikowano ${formatDate(p.published_at)}` : `edytowano ${formatDate(p.updated_at)}`}
                </div>
              </div>
              <span className={`pill ${p.status === "published" ? "pub" : "dr"}`}>
                {p.status === "published" ? "Opublikowany" : "Szkic"}
              </span>
              <div className="acts">
                <Link className="btn btn-ghost" href={`/admin/${p.id}`}>Edytuj</Link>
                {p.status === "published" && (
                  <Link className="btn btn-ghost" href={`/wpis/${p.slug}`} target="_blank">Zobacz</Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
