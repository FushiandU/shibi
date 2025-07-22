import { NextRequest, NextResponse } from "next/server"

// Proxy GET, POST, PUT to /api/settings
export async function GET(request: NextRequest) {
  const res = await fetch(`${request.nextUrl.origin}/api/settings`, {
    method: "GET",
    headers: request.headers,
    cache: "no-store",
  })
  const data = await res.text()
  return new NextResponse(data, { status: res.status, headers: res.headers })
}

export async function POST(request: NextRequest) {
  const res = await fetch(`${request.nextUrl.origin}/api/settings`, {
    method: "POST",
    headers: request.headers,
    body: request.body,
    cache: "no-store",
    duplex: "half", // Fix for Node.js fetch
  })
  const data = await res.text()
  return new NextResponse(data, { status: res.status, headers: res.headers })
}

export async function PUT(request: NextRequest) {
  const res = await fetch(`${request.nextUrl.origin}/api/settings`, {
    method: "PUT",
    headers: request.headers,
    body: request.body,
    cache: "no-store",
    duplex: "half", // Fix for Node.js fetch
  })
  const data = await res.text()
  return new NextResponse(data, { status: res.status, headers: res.headers })
} 