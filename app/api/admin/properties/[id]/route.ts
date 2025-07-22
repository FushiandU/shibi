import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const propertyData = await request.json();
    const { data, error } = await supabase
      .from("properties")
      .update(propertyData)
      .eq("id", params.id)
      .select()
      .single();
    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true, property: data });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error updating property" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { error } = await supabase.from("properties").delete().eq("id", params.id);
    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error deleting property" }, { status: 500 });
  }
}
