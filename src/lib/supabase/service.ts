import { createClient } from "@supabase/supabase-js";

/**
 * Klient z kluczem service_role. Omija RLS, więc używaj go TYLKO w kodzie serwera
 * (server actions, route handlers) i nigdy nie przekazuj do przeglądarki.
 * Potrzebny do zapisów na listę: czytelnicy nie mają dostępu do tabeli subscribers.
 */
export function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  if (!isServiceKey(key)) {
    console.error(
      "[supabase] SUPABASE_SERVICE_ROLE_KEY to nie jest klucz serwisowy (wygląda na publishable/anon). " +
        "Wklej klucz secret (sb_secret_…) albo service_role z Supabase → Project Settings → API Keys."
    );
    return null;
  }
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

/** Odrzuca klucze publiczne: nowe „sb_publishable_…” i stare JWT z rolą „anon”. */
function isServiceKey(key: string): boolean {
  if (key.startsWith("sb_secret_")) return true;
  if (key.startsWith("sb_publishable_")) return false;
  try {
    const payload = JSON.parse(Buffer.from(key.split(".")[1] ?? "", "base64").toString("utf8"));
    return payload?.role === "service_role";
  } catch {
    return false;
  }
}
