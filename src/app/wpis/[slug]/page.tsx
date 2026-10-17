import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cover } from "@/components/Cover";
import { CopyLink } from "@/components/CopyLink";
import { PostMeta } from "@/components/PostCard";
import { getPublishedPost } from "@/lib/posts";
import { renderMarkdown } from "@/lib/markdown";

export const revalidate = 60;

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) return { title: "Nie znaleziono wpisu" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/wpis/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.published_at ?? undefined,
      images: post.cover_url ? [post.cover_url] : undefined,
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) notFound();

  return (
    <article className="wrap">
      <div className="article">
        <Link href="/" className="btn btn-ghost">← Wszystkie wpisy</Link>
        <PostMeta category={post.category} publishedAt={post.published_at} body={post.body} />
        <h1>{post.title}</h1>
        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        {post.ages.length > 0 && (
          <div className="ages" style={{ marginBottom: 18 }}>
            {post.ages.map((a) => (
              <span key={a} className="age">Wiek: {a}</span>
            ))}
          </div>
        )}
        {post.cover_url && <Cover url={post.cover_url} category={post.category} />}
        <div className="prose" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }} />
        <div className="share">
          <span>Podziel się z innymi rodzicami</span>
          <CopyLink />
        </div>
      </div>
    </article>
  );
}
