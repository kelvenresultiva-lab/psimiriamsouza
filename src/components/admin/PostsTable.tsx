"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function PostsTable({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [busySlug, setBusySlug] = useState<string | null>(null);

  async function togglePublished(post: BlogPost) {
    setBusySlug(post.slug);
    const res = await fetch(`/api/admin/posts/${post.slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...post, published: !post.published }),
    });
    if (res.ok) {
      const { post: updated } = await res.json();
      setPosts((prev) => prev.map((p) => (p.slug === post.slug ? updated : p)));
    }
    setBusySlug(null);
  }

  async function handleDelete(post: BlogPost) {
    if (!confirm(`Excluir o post "${post.title}"? Essa ação não pode ser desfeita.`)) {
      return;
    }
    setBusySlug(post.slug);
    const res = await fetch(`/api/admin/posts/${post.slug}`, { method: "DELETE" });
    if (res.ok) {
      setPosts((prev) => prev.filter((p) => p.slug !== post.slug));
    }
    setBusySlug(null);
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-white p-10 text-center">
        <p className="font-heebo text-sm text-muted">
          Nenhum post ainda. Clique em &quot;Novo post&quot; para escrever o primeiro.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      <table className="w-full text-left">
        <thead className="bg-surface">
          <tr>
            <th className="px-5 py-3 font-lato text-xs font-semibold uppercase tracking-wide text-muted">
              Título
            </th>
            <th className="px-5 py-3 font-lato text-xs font-semibold uppercase tracking-wide text-muted">
              Status
            </th>
            <th className="px-5 py-3 font-lato text-xs font-semibold uppercase tracking-wide text-muted">
              Atualizado
            </th>
            <th className="px-5 py-3 font-lato text-xs font-semibold uppercase tracking-wide text-muted">
              PDFs
            </th>
            <th className="px-5 py-3" />
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.slug} className="border-t border-line">
              <td className="px-5 py-4 font-heebo text-sm font-medium text-ink">
                {post.title}
              </td>
              <td className="px-5 py-4">
                <button
                  type="button"
                  disabled={busySlug === post.slug}
                  onClick={() => togglePublished(post)}
                  className={`rounded-full px-3 py-1 font-lato text-xs font-semibold uppercase tracking-wide transition-colors disabled:opacity-60 ${
                    post.published
                      ? "bg-[#D57271]/15 text-[#D57271] hover:bg-[#D56B73]/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {post.published ? "Publicado" : "Rascunho"}
                </button>
              </td>
              <td className="px-5 py-4 font-heebo text-sm text-muted">
                {formatDate(post.updatedAt)}
              </td>
              <td className="px-5 py-4 font-heebo text-sm text-muted">{post.pdfs.length}</td>
              <td className="px-5 py-4">
                <div className="flex items-center justify-end gap-4">
                  <Link
                    href={`/admin/posts/${post.slug}/edit`}
                    className="font-lato text-sm font-semibold text-ink hover:text-gold-bright"
                  >
                    Editar
                  </Link>
                  <button
                    type="button"
                    disabled={busySlug === post.slug}
                    onClick={() => handleDelete(post)}
                    className="font-lato text-sm font-semibold text-red-600 hover:text-red-700 disabled:opacity-60"
                  >
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
