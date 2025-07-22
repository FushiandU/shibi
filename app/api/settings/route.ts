import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase
    .from("settings")
    .select("*");
  if (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
  // Transform array to object
  const settingsObj = {};
  for (const row of data) {
    try {
      settingsObj[row.key] = JSON.parse(row.value);
    } catch {
      settingsObj[row.key] = row.value;
    }
  }
  return NextResponse.json(settingsObj);
}

export async function POST(request: NextRequest) {
  try {
    const { key, value } = await request.json();
    const { data, error } = await supabase
      .from("settings")
      .upsert([{ key, value }], { onConflict: ["key"] })
      .select()
      .single();
    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true, setting: data });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error updating setting" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updates = await request.json();
    // Store all values as JSON strings for consistency
    const upserts = Object.entries(updates).map(([key, value]) => ({ key, value: typeof value === "string" ? value : JSON.stringify(value) }));
    const { data, error } = await supabase
      .from("settings")
      .upsert(upserts, { onConflict: ["key"] });
    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    // Fetch and return the updated settings as an object
    const { data: newData } = await supabase.from("settings").select("*");
    const settingsObj = {};
    for (const row of newData) {
      try {
        settingsObj[row.key] = JSON.parse(row.value);
      } catch {
        settingsObj[row.key] = row.value;
      }
    }
    return NextResponse.json(settingsObj);
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error updating settings" }, { status: 500 });
  }
} 