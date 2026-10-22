"use client";

import { openCookieSettings } from "@/lib/consent";

export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" className={className ?? "linklike"} onClick={openCookieSettings}>
      Ustawienia cookies
    </button>
  );
}
