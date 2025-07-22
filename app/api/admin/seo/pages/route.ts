import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Replace with real DB queries
  return NextResponse.json([
    { id: 1, path: "/", title: "Home", metaTitle: "Home - Shibi Kabeer", metaDescription: "Welcome to Shibi Kabeer website.", keywords: ["dubai", "real estate"] },
    { id: 2, path: "/about", title: "About", metaTitle: "About - Shibi Kabeer", metaDescription: "About Shibi Kabeer.", keywords: ["about", "shibi"] }
  ]);
} 