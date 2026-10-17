import Link from "next/link";
import { Cover } from "./Cover";
import type { PostCardData } from "@/lib/types";
import { formatDate, readingMinutes } from "@/lib/utils";

export function PostMeta({ category, publishedAt, body }: { category: string; publishedAt: string | null; body: string }) {
  return (
    <div className="meta">
      <span className="cat">{category}</span>
      <span>{formatDate(publishedAt)}</span>
      <span>{readingMinutes(body)} min czytania</span>
    </div>
  );
}

export function PostCard({ post, featured = false }: { post: PostCardData; featured?: boolean }) {
  return (
    <Link href={`/wpis/${post.slug}`} className={`post${featured ? " featured" : ""}`}>
      <Cover url={post.cover_url} category={post.category} />
      <div className="body">
        {featured && <span className="flag">Polecamy</span>}
        <PostMeta category={post.category} publishedAt={post.published_at} body={post.body} />
        <h3>{post.title}</h3>
        {post.excerpt && <p>{post.excerpt}</p>}
        {post.ages.length > 0 && (
          <div className="ages">
            {post.ages.map((a) => (
              <span key={a} className="age">{a}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
