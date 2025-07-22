import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  try {
    const propertyData = await request.json();
    const { data, error } = await supabase
      .from("properties")
      .insert([propertyData])
      .select()
      .single();
    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true, property: data });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error creating property" }, { status: 500 });
  }
}
