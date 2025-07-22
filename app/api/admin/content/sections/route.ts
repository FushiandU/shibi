import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// GET: List all content sections (optionally filter by page)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  let query = supabase.from("content_sections").select("*").order("order_index", { ascending: true });
  if (page) query = query.eq("page", page);
  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

// POST: Create a new content section
export async function POST(request: NextRequest) {
  try {
    const { page, section, content, order_index } = await request.json();
    const { data, error } = await supabase
      .from("content_sections")
      .insert([{ page, section, content, order_index }])
      .select()
      .single();
    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true, section: data });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error creating section" }, { status: 500 });
  }
}

// PUT: Update a content section by id
export async function PUT(request: NextRequest) {
  try {
    const { id, content, order_index } = await request.json();
    const { data, error } = await supabase
      .from("content_sections")
      .update({ content, order_index, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();
    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true, section: data });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error updating section" }, { status: 500 });
  }
}

// DELETE: Delete a content section by id
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    const { error } = await supabase.from("content_sections").delete().eq("id", id);
    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error deleting section" }, { status: 500 });
  }
} 