import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Replace with real DB queries
  return NextResponse.json([
    { id: 1, filename: "image1.jpg", url: "/media/image1.jpg", type: "image", uploadedAt: new Date().toISOString() },
    { id: 2, filename: "doc1.pdf", url: "/media/doc1.pdf", type: "document", uploadedAt: new Date().toISOString() }
  ]);
} 