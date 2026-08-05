import { notFound } from "next/navigation";
import { getPost } from "@/lib/blog";
import PostForm from "@/components/admin/PostForm";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-playfair text-3xl font-semibold text-ink">Editar post</h1>
      <PostForm initialPost={post} />
    </div>
  );
}
