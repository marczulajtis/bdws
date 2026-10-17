export type PostStatus = "draft" | "published";

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  ages: string[];
  body: string;
  cover_url: string | null;
  featured: boolean;
  status: PostStatus;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type PostCardData = Pick<
  Post,
  "id" | "slug" | "title" | "excerpt" | "category" | "ages" | "body" | "cover_url" | "featured" | "published_at"
>;
