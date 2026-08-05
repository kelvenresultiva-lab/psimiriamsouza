import type { Metadata } from "next";
import { listPosts } from "@/lib/blog";
import { site } from "@/data/content";
import PostCard from "@/components/blog/PostCard";

export const metadata: Metadata = {
  title: `Blog | ${site.name}`,
  description: `Textos e materiais de ${site.name}, psicóloga clínica e social, sobre saúde emocional e bem-estar.`,
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = (await listPosts()).filter((post) => post.published);

  return (
    <div className="mx-auto max-w-[1140px] px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-lato text-xs font-semibold uppercase tracking-[1.3px] text-gold">
          Blog
        </span>
        <h1 className="mt-3 font-playfair text-3xl font-semibold text-ink lg:text-4xl">
          Textos e materiais sobre saúde emocional
        </h1>
        <p className="mt-4 font-heebo text-base text-muted">
          Reflexões, orientações e materiais em PDF para apoiar o seu processo de autoconhecimento.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="mt-16 text-center font-heebo text-sm text-muted">
          Em breve novos textos por aqui.
        </p>
      ) : (
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
