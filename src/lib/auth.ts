import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";

/** Zwraca zalogowanego admina albo przekierowuje do logowania. */
export async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data } = await supabase.from("admins").select("user_id").eq("user_id", user.id).maybeSingle();
  return { supabase, user, isAdmin: Boolean(data) };
}
