import { createServerClient } from "@supabase/ssr";
import { createClient as createPlainClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { supabaseEnv } from "./env";

/** Klient z sesją użytkownika (panel admina, server actions). */
export async function createClient() {
  const { url, key } = supabaseEnv();
  const cookieStore = await cookies();
  return createServerClient(url, key, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (toSet) => {
        try {
          toSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Wywołane z Server Component — sesję odświeża middleware.
        }
      },
    },
  });
}

/** Klient bez ciasteczek do publicznych stron — pozwala cache'ować strony bloga. */
export function createPublicClient() {
  const { url, key } = supabaseEnv();
  return createPlainClient(url, key, { auth: { persistSession: false } });
}
