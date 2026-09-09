import type { NextRequest } from "next/server";
import { createServerClient } from "@/lib/supabase/server";

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const { isSupabaseConfigured } = await import("@/lib/supabase/server");

  if (!isSupabaseConfigured) {
    return Response.json(
      { error: "Storage is not configured. Add Supabase environment variables." },
      { status: 503 }
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const applicationId = formData.get("application_id")?.toString() || `unlinked-${Date.now()}`;

  if (!file || !(file instanceof File)) {
    return Response.json({ error: "No file provided." }, { status: 400 });
  }

  // Validate file type and size
  const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  if (!allowed.includes(file.type)) {
    return Response.json({ error: "Only PDF, DOC and DOCX files are allowed." }, { status: 400 });
  }
  if (file.size > 2 * 1024 * 1024) {
    return Response.json({ error: "File must be under 2MB." }, { status: 400 });
  }

  const client = createServerClient();
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const path = `${applicationId}/${safeName}`;

  const { error: uploadError } = await client.storage
    .from("resumes")
    .upload(path, file, {
      contentType: file.type,
      upsert: false,
    });

  if (uploadError) {
    return Response.json({ error: `Upload failed: ${uploadError.message}` }, { status: 500 });
  }

  const { data: urlData } = client.storage.from("resumes").getPublicUrl(path);
  const publicUrl = urlData?.publicUrl ?? null;

  return Response.json({ url: publicUrl, path }, { status: 200 });
}