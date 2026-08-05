import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getPost, listPosts, savePost, type BlogPost } from "@/lib/blog";
import { slugify } from "@/lib/slug";

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }
  const posts = await listPosts();
  return NextResponse.json({ posts });
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const body = await request.json();
  const title = String(body.title ?? "").trim();
  if (!title) {
    return NextResponse.json({ error: "O título é obrigatório." }, { status: 400 });
  }

  const baseSlug = slugify(String(body.slug ?? title));
  if (!baseSlug) {
    return NextResponse.json({ error: "Não foi possível gerar um link para esse título." }, { status: 400 });
  }

  let slug = baseSlug;
  let suffix = 2;
  while (await getPost(slug)) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  const now = new Date().toISOString();
  const post: BlogPost = {
    slug,
    title,
    excerpt: String(body.excerpt ?? "").trim(),
    content: String(body.content ?? ""),
    coverImage: body.coverImage ?? null,
    pdfs: Array.isArray(body.pdfs) ? body.pdfs : [],
    published: Boolean(body.published),
    createdAt: now,
    updatedAt: now,
  };

  await savePost(post);

  return NextResponse.json({ post }, { status: 201 });
}
