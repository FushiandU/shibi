import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Replace with real DB queries
  return NextResponse.json([
    { key: "hello", english: "Hello", arabic: "مرحبا" },
    { key: "bye", english: "Goodbye", arabic: "مع السلامة" }
  ]);
} 