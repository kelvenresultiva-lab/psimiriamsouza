import { NextRequest, NextResponse } from "next/server";
import { del } from "@vercel/blob";
import { isAuthenticated } from "@/lib/auth";
import { deletePost, getPost, savePost } from "@/lib/blog";

type Params = { params: Promise<{ slug: string }> };

export async function GET(_request: NextRequest, { params }: Params) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    return NextResponse.json({ error: "Post não encontrado." }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function PUT(request: NextRequest, { params }: Params) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }
  const { slug } = await params;
  const existing = await getPost(slug);
  if (!existing) {
    return NextResponse.json({ error: "Post não encontrado." }, { status: 404 });
  }

  const body = await request.json();
  const title = String(body.title ?? "").trim();
  if (!title) {
    return NextResponse.json({ error: "O título é obrigatório." }, { status: 400 });
  }

  const updated = {
    ...existing,
    title,
    excerpt: String(body.excerpt ?? "").trim(),
    content: String(body.content ?? ""),
    coverImage: body.coverImage ?? null,
    pdfs: Array.isArray(body.pdfs) ? body.pdfs : [],
    published: Boolean(body.published),
    updatedAt: new Date().toISOString(),
  };

  await savePost(updated);

  return NextResponse.json({ post: updated });
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }
  const { slug } = await params;
  const existing = await getPost(slug);
  if (!existing) {
    return NextResponse.json({ error: "Post não encontrado." }, { status: 404 });
  }

  const filesToRemove = [
    existing.coverImage,
    ...existing.pdfs.map((pdf) => pdf.url),
  ].filter((url): url is string => Boolean(url));

  await Promise.all(filesToRemove.map((url) => del(url).catch(() => undefined)));
  await deletePost(slug);

  return NextResponse.json({ ok: true });
}
