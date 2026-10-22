"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { CONSENT_OPEN_EVENT, type Consent, readConsent, saveConsent } from "@/lib/consent";

/**
 * Baner zgody zgodny z wytycznymi EDPB (Cookie Banner Taskforce 2023) i UODO:
 * - „Akceptuję” i „Odrzucam” na pierwszym ekranie, równie widoczne,
 * - nic nie jest zaznaczone z góry, statystyki ładują się dopiero po zgodzie,
 * - zgodę można zmienić lub wycofać w każdej chwili (pływający przycisk i link w stopce),
 * - zapisujemy datę decyzji i pytamy ponownie po 6 miesiącach.
 */
export function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const [view, setView] = useState<"closed" | "banner" | "settings">("closed");
  const [analytics, setAnalytics] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = readConsent();
    setConsent(c);
    setAnalytics(c?.analytics ?? false);
    setView(c ? "closed" : "banner");
    setReady(true);
    const open = () => {
      setAnalytics(readConsent()?.analytics ?? false);
      setView("settings");
    };
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  useEffect(() => {
    if (view !== "closed") dialogRef.current?.focus();
  }, [view]);

  const decide = useCallback(
    (value: boolean) => {
      const hadAnalytics = consent?.analytics;
      const c = saveConsent(value);
      setConsent(c);
      setAnalytics(value);
      setView("closed");
      // Wycofanie zgody: przeładowanie usuwa już wczytany skrypt statystyk.
      if (hadAnalytics && !value) window.location.reload();
    },
    [consent],
  );

  if (!ready) return null;

  return (
    <>
      {consent?.analytics && <Analytics />}

      {view === "closed" && consent && (
        <button
          type="button"
          className="cc-fab"
          onClick={() => setView("settings")}
          aria-label="Ustawienia plików cookie"
          title="Ustawienia plików cookie"
        >
          <CookieIcon />
        </button>
      )}

      {view !== "closed" && (
        <div className={`cc-layer ${view === "settings" ? "cc-modal" : ""}`}>
          <div
            ref={dialogRef}
            className="cc-box"
            role="dialog"
            aria-modal={view === "settings"}
            aria-labelledby={titleId}
            tabIndex={-1}
            onKeyDown={(e) => {
              if (e.key === "Escape" && view === "settings" && consent) setView("closed");
            }}
          >
            <div className="cc-head">
              <span className="cc-icon" aria-hidden>
                <CookieIcon />
              </span>
              <h2 id={titleId}>{view === "banner" ? "Szanujemy Twoją prywatność" : "Ustawienia plików cookie"}</h2>
            </div>

            {view === "banner" ? (
              <p className="cc-text">
                Używamy tylko tego, co niezbędne do działania strony. Za Twoją zgodą włączymy też anonimowe statystyki
                odwiedzin (Vercel Web Analytics), żeby wiedzieć, które poradniki są najbardziej potrzebne. Nie mamy
                reklam ani śledzenia między stronami. Zgodę możesz zmienić w każdej chwili. Więcej w{" "}
                <Link href="/polityka-prywatnosci#cookies">polityce prywatności</Link>.
              </p>
            ) : (
              <>
                <p className="cc-text">
                  Wybierz, na co się zgadzasz. Zmiany obowiązują od razu. Szczegóły znajdziesz w{" "}
                  <Link href="/polityka-prywatnosci#cookies">polityce prywatności</Link>.
                </p>
                <ul className="cc-cats">
                  <li>
                    <div className="cc-cat-row">
                      <strong>Niezbędne</strong>
                      <span className="cc-always">Zawsze aktywne</span>
                    </div>
                    <p>
                      Zapamiętanie Twojego wyboru w tym okienku oraz sesja logowania do panelu redakcji. Bez nich strona
                      nie działa poprawnie.
                    </p>
                  </li>
                  <li>
                    <div className="cc-cat-row">
                      <label htmlFor="cc-analytics">
                        <strong>Statystyki</strong>
                      </label>
                      <span className="cc-switch">
                        <input
                          id="cc-analytics"
                          type="checkbox"
                          role="switch"
                          checked={analytics}
                          onChange={(e) => setAnalytics(e.target.checked)}
                        />
                        <span aria-hidden />
                      </span>
                    </div>
                    <p>
                      Vercel Web Analytics: zbiorcza liczba odsłon, odwiedzane strony, kraj i typ urządzenia. Bez
                      ciasteczek, bez profilowania i bez identyfikowania Cię między dniami.
                    </p>
                  </li>
                </ul>
              </>
            )}

            <div className="cc-actions">
              <button type="button" className="btn cc-btn" onClick={() => decide(false)}>
                Odrzucam
              </button>
              {view === "banner" ? (
                <button type="button" className="btn cc-btn cc-btn-link" onClick={() => setView("settings")}>
                  Ustawienia
                </button>
              ) : (
                <button type="button" className="btn cc-btn" onClick={() => decide(analytics)}>
                  Zapisz wybór
                </button>
              )}
              <button type="button" className="btn cc-btn" onClick={() => decide(true)}>
                Akceptuję wszystkie
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CookieIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a9 9 0 1 0 9 9 3 3 0 0 1-3.5-3A3 3 0 0 1 14 5.5 3 3 0 0 1 12 3Z" />
      <circle cx="8.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="15.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="16" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}
