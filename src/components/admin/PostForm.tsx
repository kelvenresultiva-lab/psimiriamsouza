"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { upload } from "@vercel/blob/client";
import Image from "next/image";
import { X } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { slugify } from "@/lib/slug";
import MarkdownEditor from "@/components/admin/MarkdownEditor";

function sanitizeFileName(fileName: string): string {
  const dotIndex = fileName.lastIndexOf(".");
  const base = dotIndex > 0 ? fileName.slice(0, dotIndex) : fileName;
  const ext = dotIndex > 0 ? fileName.slice(dotIndex + 1).toLowerCase() : "";
  const safeBase = slugify(base) || "arquivo";
  return ext ? `${safeBase}.${ext}` : safeBase;
}

export default function PostForm({ initialPost }: { initialPost?: BlogPost }) {
  const router = useRouter();
  const isEditing = Boolean(initialPost);

  const [title, setTitle] = useState(initialPost?.title ?? "");
  const [slug, setSlug] = useState(initialPost?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(isEditing);
  const [excerpt, setExcerpt] = useState(initialPost?.excerpt ?? "");
  const [content, setContent] = useState(initialPost?.content ?? "");
  const [coverImage, setCoverImage] = useState<string | null>(initialPost?.coverImage ?? null);
  const [pdfs, setPdfs] = useState(initialPost?.pdfs ?? []);
  const [published, setPublished] = useState(initialPost?.published ?? false);

  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingPdf, setUploadingPdf] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slugTouched) {
      setSlug(slugify(value));
    }
  }

  async function handleCoverChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploadingCover(true);
    setError(null);
    try {
      const blob = await upload(`blog/uploads/cover-${Date.now()}-${sanitizeFileName(file.name)}`, file, {
        access: "public",
        handleUploadUrl: "/api/admin/upload",
        clientPayload: "cover",
      });
      setCoverImage(blob.url);
    } catch {
      setError("Não foi possível enviar a imagem de capa.");
    } finally {
      setUploadingCover(false);
      event.target.value = "";
    }
  }

  async function handlePdfChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploadingPdf(true);
    setError(null);
    try {
      const blob = await upload(`blog/uploads/pdf-${Date.now()}-${sanitizeFileName(file.name)}`, file, {
        access: "public",
        handleUploadUrl: "/api/admin/upload",
        clientPayload: "pdf",
      });
      setPdfs((prev) => [...prev, { name: file.name.replace(/\.pdf$/i, ""), url: blob.url }]);
    } catch {
      setError("Não foi possível enviar o PDF.");
    } finally {
      setUploadingPdf(false);
      event.target.value = "";
    }
  }

  function updatePdfName(index: number, name: string) {
    setPdfs((prev) => prev.map((pdf, i) => (i === index ? { ...pdf, name } : pdf)));
  }

  function removePdf(index: number) {
    setPdfs((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError(null);

    const payload = {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      pdfs,
      published,
    };

    const url = isEditing ? `/api/admin/posts/${initialPost!.slug}` : "/api/admin/posts";
    const method = isEditing ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Não foi possível salvar o post.");
      setSaving(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="rounded-2xl border border-line bg-white p-6">
        <label className="font-lato text-xs font-semibold uppercase tracking-wide text-muted">
          Título
        </label>
        <input
          type="text"
          value={title}
          onChange={(event) => handleTitleChange(event.target.value)}
          required
          placeholder="Ex: Como lidar com a ansiedade no dia a dia"
          className="mt-2 w-full rounded-lg border border-line px-4 py-3 font-heebo text-sm text-ink outline-none focus:border-gold-bright"
        />

        <label className="mt-4 block font-lato text-xs font-semibold uppercase tracking-wide text-muted">
          Link (gerado automaticamente)
        </label>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-heebo text-sm text-muted">/blog/</span>
          <input
            type="text"
            value={slug}
            onChange={(event) => {
              setSlugTouched(true);
              setSlug(slugify(event.target.value));
            }}
            required
            className="w-full rounded-lg border border-line px-4 py-2 font-heebo text-sm text-ink outline-none focus:border-gold-bright"
          />
        </div>

        <label className="mt-4 block font-lato text-xs font-semibold uppercase tracking-wide text-muted">
          Resumo (aparece na listagem do blog)
        </label>
        <textarea
          value={excerpt}
          onChange={(event) => setExcerpt(event.target.value)}
          rows={3}
          placeholder="Um resumo curto do post"
          className="mt-2 w-full resize-none rounded-lg border border-line px-4 py-3 font-heebo text-sm text-ink outline-none focus:border-gold-bright"
        />
      </div>

      <div className="rounded-2xl border border-line bg-white p-6">
        <label className="font-lato text-xs font-semibold uppercase tracking-wide text-muted">
          Imagem de capa
        </label>
        <div className="mt-3 flex items-center gap-4">
          {coverImage && (
            <div className="relative h-20 w-32 overflow-hidden rounded-lg border border-line">
              <Image src={coverImage} alt="Capa" fill className="object-cover" />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <input type="file" accept="image/*" onChange={handleCoverChange} disabled={uploadingCover} />
            {uploadingCover && <span className="font-heebo text-xs text-muted">Enviando...</span>}
            {coverImage && (
              <button
                type="button"
                onClick={() => setCoverImage(null)}
                className="w-fit font-lato text-xs font-semibold text-red-600 hover:text-red-700"
              >
                Remover capa
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-white p-6">
        <label className="font-lato text-xs font-semibold uppercase tracking-wide text-muted">
          Conteúdo do post
        </label>
        <div className="mt-3">
          <MarkdownEditor value={content} onChange={setContent} />
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-white p-6">
        <label className="font-lato text-xs font-semibold uppercase tracking-wide text-muted">
          PDFs para download
        </label>
        <p className="mt-1 font-heebo text-xs text-muted">
          Envie materiais, guias ou exercícios em PDF para as pessoas baixarem no post.
        </p>

        <div className="mt-4 flex flex-col gap-3">
          {pdfs.map((pdf, index) => (
            <div key={pdf.url} className="flex items-center gap-3 rounded-lg border border-line px-4 py-2">
              <input
                type="text"
                value={pdf.name}
                onChange={(event) => updatePdfName(index, event.target.value)}
                placeholder="Nome exibido para download"
                className="w-full rounded border border-transparent bg-transparent font-heebo text-sm text-ink outline-none focus:border-gold-bright"
              />
              <button
                type="button"
                onClick={() => removePdf(index)}
                aria-label="Remover PDF"
                className="shrink-0 text-muted hover:text-red-600"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <input type="file" accept="application/pdf" onChange={handlePdfChange} disabled={uploadingPdf} />
          {uploadingPdf && <span className="ml-3 font-heebo text-xs text-muted">Enviando...</span>}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-line bg-white p-6">
        <label className="flex items-center gap-3 font-heebo text-sm text-ink">
          <input
            type="checkbox"
            checked={published}
            onChange={(event) => setPublished(event.target.checked)}
            className="h-4 w-4"
          />
          Publicar (visível no blog)
        </label>

        <div className="flex items-center gap-4">
          {error && <p className="font-heebo text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={saving || uploadingCover || uploadingPdf}
            className="hover-float inline-flex items-center rounded-tl-[15px] rounded-br-[15px] bg-gold-bright px-8 py-3 font-lato text-[15px] uppercase tracking-[1.3px] text-white transition-colors duration-300 hover:bg-gold disabled:opacity-60"
          >
            {saving ? "Salvando..." : "Salvar post"}
          </button>
        </div>
      </div>
    </form>
  );
}
