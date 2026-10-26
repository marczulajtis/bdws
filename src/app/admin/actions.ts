"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { AGES, CATEGORIES } from "@/lib/constants";
import { requireAdmin } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/utils";

export type FormState = { error?: string };

/* ---------- logowanie ---------- */

export async function login(_: FormState, formData: FormData): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "Podaj e-mail i hasło." };

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: "Nieprawidłowy e-mail lub hasło." };
  redirect("/admin");
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

/* ---------- wpisy ---------- */

async function uniqueSlug(supabase: Awaited<ReturnType<typeof createClient>>, base: string, ownId?: string) {
  const { data } = await supabase.from("posts").select("id,slug").like("slug", `${base}%`);
  const taken = new Set((data ?? []).filter((p) => p.id !== ownId).map((p) => p.slug));
  if (!taken.has(base)) return base;
  let n = 2;
  while (taken.has(`${base}-${n}`)) n++;
  return `${base}-${n}`;
}

export async function savePost(_: FormState, formData: FormData): Promise<FormState> {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) return { error: "To konto nie ma uprawnień redakcji." };

  const id = String(formData.get("id") ?? "") || undefined;
  const intent = String(formData.get("intent") ?? "draft") as "draft" | "publish" | "unpublish";
  console.log("[admin] savePost", { id: id ?? "nowy", intent });
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const body = String(formData.get("body") ?? "");
  const categoryRaw = String(formData.get("category") ?? "");
  const category = (CATEGORIES as readonly string[]).includes(categoryRaw) ? categoryRaw : CATEGORIES[0];
  const ages = formData.getAll("ages").map(String).filter((a) => (AGES as readonly string[]).includes(a));
  const cover_url = String(formData.get("cover_url") ?? "").trim() || null;
  const featured = formData.get("featured") === "on";
  const slugInput = slugify(String(formData.get("slug") ?? "") || title);

  if (!title) return { error: "Dodaj tytuł wpisu." };
  if (intent === "publish" && !body.trim()) return { error: "Wpis potrzebuje treści przed publikacją." };

  let existing: { slug: string; published_at: string | null } | null = null;
  if (id) {
    const { data } = await supabase.from("posts").select("slug,published_at").eq("id", id).maybeSingle();
    existing = data;
  }

  const slug = await uniqueSlug(supabase, slugInput, id);
  const now = new Date().toISOString();
  const status = intent === "publish" ? "published" : "draft";
  const row = {
    title,
    excerpt,
    body,
    category,
    ages,
    cover_url,
    slug,
    status,
    featured: status === "published" ? featured : false,
    published_at: status === "published" ? existing?.published_at ?? now : existing?.published_at ?? null,
    updated_at: now,
  };

  if (row.featured) {
    const unfeature = supabase.from("posts").update({ featured: false }).eq("featured", true);
    await (id ? unfeature.neq("id", id) : unfeature);
  }

  const result = id
    ? await supabase.from("posts").update(row).eq("id", id).select("id").single()
    : await supabase.from("posts").insert(row).select("id").single();

  if (result.error) {
    console.error("[admin] savePost error", result.error);
    return { error: `Nie udało się zapisać: ${result.error.message}` };
  }

  revalidatePath("/");
  revalidatePath(`/wpis/${slug}`);
  if (existing && existing.slug !== slug) revalidatePath(`/wpis/${existing.slug}`);
  revalidatePath("/sitemap.xml");

  const msg = intent === "publish" ? "opublikowano" : intent === "unpublish" ? "cofnieto" : "zapisano";
  redirect(`/admin?info=${msg}`);
}

export async function deletePost(formData: FormData) {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) redirect("/admin");
  const id = String(formData.get("id") ?? "");
  const { data } = await supabase.from("posts").select("slug").eq("id", id).maybeSingle();
  await supabase.from("posts").delete().eq("id", id);
  revalidatePath("/");
  if (data?.slug) revalidatePath(`/wpis/${data.slug}`);
  redirect("/admin?info=usunieto");
}
