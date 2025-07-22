import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// In production, use a proper database
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // password
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (username !== ADMIN_CREDENTIALS.username) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
    }

    const isValidPassword = await bcrypt.compare(password, ADMIN_CREDENTIALS.password)
    if (!isValidPassword) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
    }

    const token = jwt.sign({ username, role: "admin" }, process.env.JWT_SECRET || "your-secret-key", {
      expiresIn: "24h",
    })

    const response = NextResponse.json({ token, message: "Login successful" })
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400, // 24 hours
    })

    return response
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
