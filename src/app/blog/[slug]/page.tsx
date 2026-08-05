import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { getPost } from "@/lib/blog";
import { site } from "@/data/content";
import MarkdownContent from "@/components/blog/MarkdownContent";

export const dynamic = "force-dynamic";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post || !post.published) {
    return { title: `Blog | ${site.name}` };
  }

  return {
    title: `${post.title} | Blog ${site.name}`,
    description: post.excerpt || site.metaDescription,
    openGraph: {
      title: post.title,
      description: post.excerpt || site.metaDescription,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-lato text-sm font-semibold text-muted hover:text-gold-bright"
      >
        <ArrowLeft size={16} />
        Voltar para o blog
      </Link>

      <span className="mt-8 block font-lato text-xs font-semibold uppercase tracking-[1px] text-gold">
        {formatDate(post.createdAt)}
      </span>
      <h1 className="mt-3 font-playfair text-3xl font-semibold text-ink lg:text-4xl">
        {post.title}
      </h1>

      {post.coverImage && (
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
        </div>
      )}

      <div className="mt-10">
        <MarkdownContent content={post.content} />
      </div>

      {post.pdfs.length > 0 && (
        <div className="mt-12 rounded-2xl border border-line bg-surface p-6">
          <h2 className="font-playfair text-lg font-semibold text-ink">Materiais para baixar</h2>
          <div className="mt-4 flex flex-col gap-3">
            {post.pdfs.map((pdf) => (
              <a
                key={pdf.url}
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="hover-float flex items-center justify-between gap-4 rounded-xl border border-line bg-white px-5 py-4 transition-colors hover:border-gold-bright"
              >
                <span className="flex items-center gap-3 font-heebo text-sm font-medium text-ink">
                  <FileText size={18} className="text-gold-bright" />
                  {pdf.name}
                </span>
                <Download size={18} className="text-muted" />
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
