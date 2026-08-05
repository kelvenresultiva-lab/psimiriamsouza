import { del, list, put } from "@vercel/blob";

export type BlogPdf = {
  name: string;
  url: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  pdfs: BlogPdf[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

const POSTS_PREFIX = "blog/posts/";

function postPath(slug: string): string {
  return `${POSTS_PREFIX}${slug}.json`;
}

export async function listPosts(): Promise<BlogPost[]> {
  const { blobs } = await list({ prefix: POSTS_PREFIX });
  const posts = await Promise.all(
    blobs
      .filter((blob) => blob.pathname.endsWith(".json"))
      .map(async (blob) => {
        const res = await fetch(blob.url, { cache: "no-store" });
        return (await res.json()) as BlogPost;
      })
  );
  return posts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const { blobs } = await list({ prefix: postPath(slug), limit: 1 });
  const match = blobs.find((blob) => blob.pathname === postPath(slug));
  if (!match) return null;
  const res = await fetch(match.url, { cache: "no-store" });
  return (await res.json()) as BlogPost;
}

export async function savePost(post: BlogPost): Promise<void> {
  await put(postPath(post.slug), JSON.stringify(post), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  });
}

export async function deletePost(slug: string): Promise<void> {
  await del(postPath(slug));
}
