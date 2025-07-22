import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Replace with real DB queries
  return NextResponse.json({
    totalLeads: 10,
    totalPosts: 5,
    pageViews: 1234,
    newLeads: 2,
  });
} 