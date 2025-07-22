import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"

export async function GET() {
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  try {
    const leadData = await request.json()
    const newLead = {
      id: Date.now().toString(),
      ...leadData,
      createdAt: new Date().toISOString(),
      status: "new",
      priority: "medium",
      notes: "",
      assignedTo: "",
      lastContact: "",
      nextFollowUp: "",
      value: 0,
      tags: [],
    }

    leads.unshift(newLead)
    return NextResponse.json(newLead)
  } catch (error) {
    return NextResponse.json({ message: "Error creating lead" }, { status: 500 })
  }
}
