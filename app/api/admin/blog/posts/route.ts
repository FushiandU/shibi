import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Replace with real DB queries
  return NextResponse.json([
    { id: 1, title: "Sample Blog Post", excerpt: "This is a sample post.", status: "published", createdAt: new Date().toISOString() },
    { id: 2, title: "Another Post", excerpt: "Another example.", status: "draft", createdAt: new Date().toISOString() }
  ]);
}

export async function POST(request) {
  // TODO: Implement real create logic
  return NextResponse.json({ success: true, post: { id: 3, ...await request.json() } });
} 