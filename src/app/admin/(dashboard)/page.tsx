import { listPosts } from "@/lib/blog";
import PostsTable from "@/components/admin/PostsTable";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const posts = await listPosts();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-playfair text-3xl font-semibold text-ink">Seus posts</h1>
        <p className="mt-1 font-heebo text-sm text-muted">
          Crie, edite e publique textos para o blog, com PDFs para download.
        </p>
      </div>
      <PostsTable initialPosts={posts} />
    </div>
  );
}
