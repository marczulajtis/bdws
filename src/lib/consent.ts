/**
 * Zgoda na ciasteczka i podobne technologie (art. 399 Prawa komunikacji elektronicznej, RODO, wytyczne EDPB/UODO).
 * Wybór zapisujemy w localStorage. To zapis niezbędny do zapamiętania decyzji, więc nie wymaga zgody.
 * Zmiana CONSENT_VERSION (np. po dodaniu nowego narzędzia) sprawi, że baner pokaże się wszystkim ponownie.
 */
export const CONSENT_KEY = "bdws-consent";
export const CONSENT_VERSION = 1;
/** Po tylu dniach pytamy ponownie (UODO/EDPB: zgodę warto odnawiać, praktyka: 6–12 miesięcy). */
export const CONSENT_MAX_DAYS = 180;
export const CONSENT_OPEN_EVENT = "bdws:open-cookie-settings";

export type Consent = {
  v: number;
  /** Statystyki odwiedzin (Vercel Web Analytics). */
  analytics: boolean;
  /** ISO data decyzji, żeby można było wykazać, kiedy zgoda została udzielona. */
  date: string;
};

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    if (c.v !== CONSENT_VERSION) return null;
    const ageDays = (Date.now() - new Date(c.date).getTime()) / 86_400_000;
    if (!(ageDays >= 0 && ageDays <= CONSENT_MAX_DAYS)) return null;
    return c;
  } catch {
    return null;
  }
}

export function saveConsent(analytics: boolean): Consent {
  const c: Consent = { v: CONSENT_VERSION, analytics, date: new Date().toISOString() };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
  } catch {
    /* tryb prywatny itp. – baner pokaże się przy następnej wizycie */
  }
  return c;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}
