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
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}
