import PostForm from "@/components/admin/PostForm";

export default function NewPostPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-playfair text-3xl font-semibold text-ink">Novo post</h1>
      <PostForm />
    </div>
  );
}
