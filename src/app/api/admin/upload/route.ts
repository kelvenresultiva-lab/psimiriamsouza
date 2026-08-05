import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";

const UPLOAD_PREFIX = "blog/uploads/";
const IMAGE_TYPES = ["image/png", "image/jpeg", "image/webp", "image/avif"];
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const MAX_PDF_BYTES = 25 * 1024 * 1024;

export async function POST(request: Request): Promise<NextResponse> {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        if (!pathname.startsWith(UPLOAD_PREFIX)) {
          throw new Error("Caminho de upload inválido.");
        }

        const kind = clientPayload === "pdf" ? "pdf" : "cover";

        return {
          allowedContentTypes: kind === "pdf" ? ["application/pdf"] : IMAGE_TYPES,
          maximumSizeInBytes: kind === "pdf" ? MAX_PDF_BYTES : MAX_IMAGE_BYTES,
          addRandomSuffix: true,
        };
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Falha no upload." },
      { status: 400 }
    );
  }
}
