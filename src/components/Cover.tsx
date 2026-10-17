import { CATEGORIES } from "@/lib/constants";

/** Okładka wpisu. Bez obrazu generuje kafelek w kolorach marki z nazwą kategorii (bez zdjęć stockowych). */
export function Cover({ url, category, className = "" }: { url: string | null; category: string; className?: string }) {
  if (url) {
    return (
      <div className={`cover ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt="" loading="lazy" />
      </div>
    );
  }
  const idx = Math.max(0, CATEGORIES.indexOf(category as (typeof CATEGORIES)[number]));
  const tone = `t${(idx % 3) + 1}`;
  const stroke = tone === "t3" ? "#13395c" : "rgba(255,255,255,.75)";
  return (
    <div className={`cover gen ${tone} ${className}`}>
      <svg viewBox="0 0 320 180" preserveAspectRatio="none" aria-hidden="true">
        <path d="M200 -10 V40 Q200 60 220 60 H300 Q320 60 320 80 V200" fill="none" stroke={stroke} strokeWidth="2" strokeDasharray="7 6" />
        <rect x="236" y="96" width="62" height="50" rx="14" fill="none" stroke={stroke} strokeWidth="2" />
        <circle cx="282" cy="112" r="3" fill="#ec7a38" />
        <circle cx="270" cy="124" r="3" fill="#ec7a38" />
      </svg>
      <span className="cv-word">{category || "Wpis"}</span>
    </div>
  );
}
