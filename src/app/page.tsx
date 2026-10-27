import Link from "next/link";
import { Suspense } from "react";
import { CategoryIcon } from "@/components/CategoryIcon";
import { PostCard } from "@/components/PostCard";
import { SearchControls } from "@/components/SearchControls";
import { CATEGORIES, CATEGORY_INFO, PHOTOS, SITE, ageBySlug, categoryBySlug } from "@/lib/constants";
import { getPublishedPosts } from "@/lib/posts";
import { SocialLinks } from "@/components/SocialLinks";
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
    return (s ? `/?${s}` : "/") + "#wpisy";
  };

  return (
    <>
      {/* ---------- HERO ze zdjęciem (jak na poście: spłowiałe zdjęcie pod tekstem) ---------- */}
      <section className="hero-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-bg" src={PHOTOS.hero.src} alt="" fetchPriority="high" />
        <div className="wrap hero">
          <div className="hero-text">
            <h1 className="hero-mark">
              <span className="a">Bezpieczne</span>
              <span className="b">Dzieci w Sieci</span>
            </h1>
            <div className="tagcard">
              <div className="inner">
                <p>{SITE.tagline}</p>
              </div>
            </div>
            <p className="hero-sub">{SITE.audience}</p>
            <div className="hero-cta">
              <a href="#wpisy" className="btn btn-teal">Czytaj wpisy <span className="arr" /></a>
              <a href={SITE.instagram} className="btn btn-line" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- O CZYM PISZEMY (granatowy pas) ---------- */}
      <section className="band band-navy">
        <div className="wrap">
          <h2 className="band-title">O czym piszemy</h2>
          <div className="topics">
            {CATEGORIES.map((c) => (
              <Link key={c} href={chipHref(slugify(c))} className="topic">
                <span className="topic-icon"><CategoryIcon name={c} /></span>
                <span className="topic-name">{c}</span>
                <span className="topic-desc">{CATEGORY_INFO[c]}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WPISY ---------- */}
      <section className="wrap" id="wpisy">
        <div className="section-head">
          <h2>Najnowsze wpisy</h2>
        </div>
        <div className="bar">
          <nav className="chips" aria-label="Kategorie">
            <Link className="chip" href={chipHref()} aria-current={!category} scroll={false}>Wszystkie</Link>
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

      {/* ---------- NASZE PODEJŚCIE (zdjęcie + tekst) ---------- */}
      <section className="band band-tint">
        <div className="wrap split">
          <div className="split-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTOS.approach.src} alt={PHOTOS.approach.alt} loading="lazy" />
          </div>
          <div className="split-text">
            <span className="eyebrow">Kim jesteśmy</span>
            <h2>Rodzice, którzy na co dzień pracują w IT</h2>
            <p>
              Tłumaczymy gry, aplikacje i ustawienia telefonu tak, jak tłumaczylibyśmy je znajomym przy kawie.
              Bez straszenia i bez technicznego żargonu.
            </p>
            <ul className="checks-list">
              <li>Rozmowa zamiast zakazów</li>
              <li>Konkretne ustawienia, krok po kroku</li>
              <li>Porady dopasowane do wieku dziecka</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- DLA SZKÓŁ (turkusowy pas) ---------- */}
      <section className="band band-teal">
        <div className="wrap schools">
          <div>
            <span className="eyebrow">Dla szkół i placówek oświatowych</span>
            <h2>Pracujemy nad materiałami dla szkół</h2>
            <p>
              Przygotowujemy materiały pomocowe i szkoleniowe dla nauczycieli, wychowawców i pedagogów. Zostaw e-mail,
              a damy znać, gdy będą gotowe.
            </p>
          </div>
          <Link href="/dla-szkol#zapis" className="btn btn-white">
            Powiadom mnie <span className="arr" />
          </Link>
        </div>
      </section>

      {/* ---------- OBSERWUJ (zdjęcie w tle) ---------- */}
      <section className="follow">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="follow-bg" src={PHOTOS.follow.src} alt="" loading="lazy" />
        <div className="wrap follow-inner">
          <div className="follow-card">
            <h2>Codziennie krótkie wskazówki na Instagramie</h2>
            <p>Infografiki, zrzuty ekranu z ustawień i odpowiedzi na Wasze pytania.</p>
            <a href={SITE.instagram} className="btn btn-teal" target="_blank" rel="noopener noreferrer">
              Obserwuj {SITE.handle} <span className="arr" />
            </a>
            <p className="follow-more">Jesteśmy też na Facebooku i LinkedInie:</p>
            <SocialLinks className="socials socials-labels" labels only={["facebook", "linkedin"]} />
          </div>
        </div>
      </section>
    </>
  );
}
