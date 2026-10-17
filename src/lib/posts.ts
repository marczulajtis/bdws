import { createPublicClient } from "./supabase/server";
import type { Post, PostCardData } from "./types";

const CARD_FIELDS = "id,slug,title,excerpt,category,ages,body,cover_url,featured,published_at";

export type PostFilters = { category?: string; age?: string; q?: string };

export async function getPublishedPosts(f: PostFilters = {}): Promise<PostCardData[]> {
  const supabase = createPublicClient();
  let query = supabase
    .from("posts")
    .select(CARD_FIELDS)
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (f.category) query = query.eq("category", f.category);
  if (f.age) query = query.contains("ages", [f.age]);
  if (f.q) {
    // usuwamy znaki, które mają specjalne znaczenie w filtrze .or()
    const q = f.q.replace(/[,()%*\\]/g, " ").trim().slice(0, 80);
    if (q) query = query.or(`title.ilike.%${q}%,excerpt.ilike.%${q}%,body.ilike.%${q}%`);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return (data ?? []) as PostCardData[];
}

export async function getPublishedPost(slug: string): Promise<Post | null> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data as Post | null;
}
