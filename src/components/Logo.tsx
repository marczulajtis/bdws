/** Uproszczona wersja logo: tarcza z padem i turkusową orbitą. Podmień na własny plik SVG w /public, jeśli chcesz. */
export function Logo() {
  return (
    <svg viewBox="0 0 64 70" aria-hidden="true">
      <path
        d="M32 3 L58 12 V34 C58 50 47 61 32 67 C17 61 6 50 6 34 V12 Z"
        fill="none" stroke="var(--navy)" strokeWidth="4.5" strokeLinejoin="round"
      />
      <path
        d="M20 30 h24 a7 7 0 0 1 7 7 v3 a6 6 0 0 1 -10 4.5 l-3 -3 h-12 l-3 3 A6 6 0 0 1 13 40 v-3 a7 7 0 0 1 7 -7z"
        fill="var(--navy)"
      />
      <path d="M22 34 v6 M19 37 h6" stroke="var(--paper)" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="41" cy="35" r="1.9" fill="var(--spark)" />
      <circle cx="45" cy="38" r="1.9" fill="var(--spark)" />
      <circle cx="41" cy="41" r="1.9" fill="var(--spark)" />
      <circle cx="37" cy="38" r="1.9" fill="var(--spark)" />
      <path d="M2 50 C20 60 46 58 62 40" fill="none" stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
