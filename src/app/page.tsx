import Link from "next/link";
import { Suspense } from "react";
import { PostCard } from "@/components/PostCard";
import { SearchControls } from "@/components/SearchControls";
import { CATEGORIES, SITE, ageBySlug, categoryBySlug } from "@/lib/constants";
import { getPublishedPosts } from "@/lib/posts";
import { slugify } from "@/lib/utils";

export const revalidate = 60;

type SP = Promise<{ kategoria?: string; wiek?: string; q?: string }>;

export default async function Home({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const category = categoryBySlug(sp.kategoria);
  const age = ageBySlug(sp.wiek);
  const q = (sp.q ?? "").trim();
  const anyFilter = Boolean(category || age || q);

  const posts = await getPublishedPosts({ category, age, q });
  const featured = anyFilter ? undefined : posts.find((p) => p.featured);
  const rest = featured ? posts.filter((p) => p.id !== featured.id) : posts;

  const chipHref = (slug?: string) => {
    const p = new URLSearchParams();
    if (slug) p.set("kategoria", slug);
    if (sp.wiek) p.set("wiek", sp.wiek);
    if (q) p.set("q", q);
    const s = p.toString();
    return s ? `/?${s}` : "/";
  };

  return (
    <>
      <section className="wrap hero">
        <div>
          <h1 className="hero-mark">
            <span className="a">Bezpieczne</span>
            <span className="b">Dzieci w Sieci</span>
          </h1>
          <p className="hero-sub">{SITE.audience}</p>
        </div>
        <div className="tagcard">
          <div className="inner">
            <p>{SITE.tagline}</p>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="bar">
          <nav className="chips" aria-label="Kategorie">
            <Link className="chip" href={chipHref()} aria-current={!category}>Wszystkie</Link>
            {CATEGORIES.map((c) => (
              <Link key={c} className="chip" href={chipHref(slugify(c))} aria-current={category === c} scroll={false}>
                {c}
              </Link>
            ))}
          </nav>
          <Suspense>
            <SearchControls />
          </Suspense>
        </div>

        <div className="grid">
          {posts.length === 0 ? (
            <div className="empty">
              {anyFilter ? (
                <>
                  <h3>Brak wpisów dla tych filtrów</h3>
                  <p>Spróbuj innej kategorii albo wyczyść wyszukiwanie.</p>
                </>
              ) : (
                <>
                  <h3>Pierwsze wpisy już wkrótce</h3>
                  <p>Zajrzyj tu ponownie za kilka dni.</p>
                </>
              )}
            </div>
          ) : (
            <>
              {featured && <PostCard post={featured} featured />}
              {rest.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
}
