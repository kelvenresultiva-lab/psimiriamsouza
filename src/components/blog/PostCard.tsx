import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="hover-float group flex flex-col overflow-hidden rounded-2xl border border-line bg-white"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-playfair text-3xl text-line">
            {post.title.charAt(0)}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="font-lato text-xs font-semibold uppercase tracking-[1px] text-gold">
          {formatDate(post.createdAt)}
        </span>
        <h2 className="font-playfair text-lg font-semibold leading-snug text-ink">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="font-heebo text-sm leading-relaxed text-muted line-clamp-3">
            {post.excerpt}
          </p>
        )}
        <span className="mt-auto pt-2 font-lato text-sm font-semibold text-gold-bright group-hover:text-gold">
          Ler texto completo →
        </span>
      </div>
    </Link>
  );
}
