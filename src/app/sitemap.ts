import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import { createPublicClient } from "@/lib/supabase/server";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const home = { url: SITE.url, changeFrequency: "weekly" as const, priority: 1 };
  if (!hasSupabaseEnv()) return [home];
  const { data } = await createPublicClient()
    .from("posts")
    .select("slug,updated_at")
    .eq("status", "published");
  return [
    home,
    ...(data ?? []).map((p) => ({
      url: `${SITE.url}/wpis/${p.slug}`,
      lastModified: p.updated_at,
      changeFrequency: "monthly" as const,
    })),
  ];
}
