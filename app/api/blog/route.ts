import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  try {
    const postData = await request.json();
    const { data, error } = await supabase
      .from("blog_posts")
      .insert([postData])
      .select()
      .single();
    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true, post: data });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error creating post" }, { status: 500 });
  }
} 