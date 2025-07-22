import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { code: "en", name: "English" },
    { code: "ar", name: "Arabic" }
  ]);
} 