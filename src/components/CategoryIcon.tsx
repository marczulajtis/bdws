/** Proste ikony kategorii (kreska 2px, kolor z currentColor). */
export function CategoryIcon({ name }: { name: string }) {
  const common = {
    width: 34, height: 34, viewBox: "0 0 32 32", fill: "none",
    stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "Gry i platformy":
      return (
        <svg {...common}>
          <path d="M9 11h14a6 6 0 0 1 6 6v2a4 4 0 0 1-7 2.6L20 19h-8l-2 2.6A4 4 0 0 1 3 19v-2a6 6 0 0 1 6-6z" />
          <path d="M9 14v4M7 16h4" />
          <circle cx="21" cy="15" r=".6" fill="currentColor" /><circle cx="23.5" cy="17.5" r=".6" fill="currentColor" />
        </svg>
      );
    case "Media społecznościowe":
      return (
        <svg {...common}>
          <path d="M6 7h20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H14l-6 5v-5H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
          <path d="M16 18s-4-2.3-4-5a2 2 0 0 1 4-.6 2 2 0 0 1 4 .6c0 2.7-4 5-4 5z" />
        </svg>
      );
    case "Kontrola rodzicielska":
      return (
        <svg {...common}>
          <path d="M16 3l11 4v8c0 7-5 11.5-11 14C10 26.5 5 22 5 15V7z" />
          <path d="M11 16l3.5 3.5L21 13" />
        </svg>
      );
    case "Rozmowa z dzieckiem":
      return (
        <svg {...common}>
          <path d="M4 6h15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H10l-4 3.5V17H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
          <path d="M24 11h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v3.5L22 22h-6a2 2 0 0 1-2-2v-1" />
        </svg>
      );
    case "Prywatność i dane":
      return (
        <svg {...common}>
          <rect x="7" y="14" width="18" height="14" rx="3" />
          <path d="M11 14v-4a5 5 0 0 1 10 0v4" />
          <circle cx="16" cy="21" r="1.6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M3 12l13-7 13 7-13 7z" />
          <path d="M8 15v6c0 2 3.6 4 8 4s8-2 8-4v-6" />
          <path d="M29 12v8" />
        </svg>
      );
  }
}
