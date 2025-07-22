import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase
    .from("media")
    .select("*")
    .order("uploaded_at", { ascending: false });
  if (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
    }
    const fileName = `${Date.now()}-${file.name}`;
    // Upload to Supabase Storage
    const { data: storageData, error: storageError } = await supabase.storage
      .from("media")
      .upload(fileName, file, { upsert: false });
    if (storageError) {
      return NextResponse.json({ success: false, message: storageError.message }, { status: 500 });
    }
    const publicUrl = supabase.storage.from("media").getPublicUrl(fileName).data.publicUrl;
    // Store metadata in media table
    const { data: dbData, error: dbError } = await supabase
      .from("media")
      .insert([
        {
          filename: fileName,
          original_name: file.name,
          url: publicUrl,
          type: file.type,
          size: file.size,
          mime_type: file.type,
          alt: formData.get("alt") || "",
          caption: formData.get("caption") || "",
          tags: formData.get("tags") ? String(formData.get("tags")).split(",") : [],
        },
      ])
      .select()
      .single();
    if (dbError) {
      return NextResponse.json({ success: false, message: dbError.message }, { status: 500 });
    }
    return NextResponse.json({ success: true, file: dbData });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error uploading file" }, { status: 500 });
  }
} 