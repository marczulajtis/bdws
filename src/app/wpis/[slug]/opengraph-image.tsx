import { OG_SIZE, renderOg } from "@/lib/og";
import { getPublishedPost } from "@/lib/posts";
import { SITE } from "@/lib/constants";

export const alt = SITE.name;
export const size = OG_SIZE;
export const contentType = "image/png";
export const revalidate = 3600;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPublishedPost(slug).catch(() => null);
  if (!post) return renderOg({ title: SITE.tagline });
  return renderOg({ title: post.title, label: post.category });
}
