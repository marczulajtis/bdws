/**
 * Wspólny wygląd obrazków podglądu linku (Open Graph): kremowe tło, logo, tytuł w Unbounded.
 * Next.js generuje z tego PNG 1200×630, który pokazuje się po wklejeniu linku na Messengerze, WhatsAppie, Facebooku itd.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "./constants";

export const OG_SIZE = { width: 1200, height: 630 };

const C = {
  paper: "#f8f6ef",
  navy: "#13395c",
  teal: "#22949a",
  spark: "#ec7a38",
  muted: "#5a6d7b",
  line: "#cdd9de",
};

// osobne nazwy dla latin-ext (ą, ę, ś, ł…): satori nie łączy dwóch plików o tej samej nazwie i grubości
async function loadFonts() {
  const dir = join(process.cwd(), "src/assets/og");
  const f = (name: string) => readFile(join(dir, name));
  const [ub, ubExt, lx5, lx5Ext, lx6, lx6Ext] = await Promise.all([
    f("unbounded-latin-800-normal.woff"),
    f("unbounded-latin-ext-800-normal.woff"),
    f("lexend-latin-500-normal.woff"),
    f("lexend-latin-ext-500-normal.woff"),
    f("lexend-latin-600-normal.woff"),
    f("lexend-latin-ext-600-normal.woff"),
  ]);
  return [
    { name: "Unbounded", data: ub, weight: 800 as const, style: "normal" as const },
    { name: "UnboundedExt", data: ubExt, weight: 800 as const, style: "normal" as const },
    { name: "Lexend", data: lx5, weight: 500 as const, style: "normal" as const },
    { name: "LexendExt", data: lx5Ext, weight: 500 as const, style: "normal" as const },
    { name: "Lexend", data: lx6, weight: 600 as const, style: "normal" as const },
    { name: "LexendExt", data: lx6Ext, weight: 600 as const, style: "normal" as const },
  ];
}

function LogoMark({ size }: { size: number }) {
  return (
    <svg width={size} height={(size * 70) / 64} viewBox="0 0 64 70">
      <path
        d="M32 3 L58 12 V34 C58 50 47 61 32 67 C17 61 6 50 6 34 V12 Z"
        fill="none" stroke={C.navy} strokeWidth="4.5" strokeLinejoin="round"
      />
      <path
        d="M20 30 h24 a7 7 0 0 1 7 7 v3 a6 6 0 0 1 -10 4.5 l-3 -3 h-12 l-3 3 A6 6 0 0 1 13 40 v-3 a7 7 0 0 1 7 -7z"
        fill={C.navy}
      />
      <path d="M22 34 v6 M19 37 h6" stroke={C.paper} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="41" cy="35" r="1.9" fill={C.spark} />
      <circle cx="45" cy="38" r="1.9" fill={C.spark} />
      <circle cx="41" cy="41" r="1.9" fill={C.spark} />
      <circle cx="37" cy="38" r="1.9" fill={C.spark} />
      <path d="M2 50 C20 60 46 58 62 40" fill="none" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function titleSize(title: string) {
  const n = title.length;
  if (n <= 32) return 72;
  if (n <= 52) return 60;
  if (n <= 75) return 50;
  return 42;
}

/** label: małe oczko nad tytułem (np. kategoria wpisu). */
export async function renderOg({ title, label }: { title: string; label?: string }) {
  const domain = SITE.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const shown = title.length > 110 ? `${title.slice(0, 107).trimEnd()}…` : title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: C.paper,
          padding: 28,
          fontFamily: "Lexend, LexendExt",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: `3px dashed ${C.line}`,
            borderRadius: 36,
            padding: "44px 56px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <LogoMark size={64} />
            <div style={{ fontFamily: "Unbounded, UnboundedExt", fontWeight: 800, fontSize: 28, color: C.navy }}>
              {SITE.name}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {label && (
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    background: C.teal,
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: 24,
                    padding: "8px 22px",
                    borderRadius: 999,
                  }}
                >
                  {label}
                </div>
              </div>
            )}
            <div
              style={{
                fontFamily: "Unbounded, UnboundedExt",
                fontWeight: 800,
                fontSize: titleSize(shown),
                lineHeight: 1.15,
                color: C.navy,
                letterSpacing: "-0.01em",
              }}
            >
              {shown}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, fontWeight: 500, color: C.muted }}>
              <div style={{ width: 14, height: 14, borderRadius: 999, background: C.spark }} />
              {domain}
            </div>
            <div style={{ fontSize: 24, fontWeight: 500, color: C.muted }}>{SITE.handle}</div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await loadFonts() },
  );
}
