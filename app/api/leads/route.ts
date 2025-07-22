import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"

export async function POST(request: NextRequest) {
  try {
    const leadData = await request.json()
    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          full_name: leadData.fullName,
          email: leadData.email,
          phone: leadData.phone,
          interest: leadData.interest,
          language: leadData.language,
          source: leadData.source,
          status: "new",
          priority: leadData.priority || "medium",
          notes: leadData.notes || "",
          assigned_to: leadData.assignedTo || "",
          last_contact: leadData.lastContact || null,
          next_follow_up: leadData.nextFollowUp || null,
          value: leadData.value || 0,
          tags: leadData.tags || [],
        },
      ])
      .select()
      .single()

    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Lead captured successfully", lead: data })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error capturing lead" }, { status: 500 })
  }
}
