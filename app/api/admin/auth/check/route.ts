import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("admin_token")?.value

    if (!token) {
      return NextResponse.json({ message: "No token" }, { status: 401 })
    }

    jwt.verify(token, process.env.JWT_SECRET || "your-secret-key")
    return NextResponse.json({ message: "Authenticated" })
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 })
  }
}
