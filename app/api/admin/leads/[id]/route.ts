import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"

export async function PUT(request: NextRequest, context: { params: { id: string } } | Promise<{ params: { id: string } }>) {
  try {
    // Await params if it's a promise (Next.js 13+ dynamic route API)
    const { params } = await Promise.resolve(context);
    const updates = await request.json()
    const { data, error } = await supabase
      .from("leads")
      .update({ ...updates })
      .eq("id", params.id)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ message: "Error updating lead" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, context: { params: { id: string } } | Promise<{ params: { id: string } }>) {
  try {
    const { params } = await Promise.resolve(context);
    leads = leads.filter((l) => l.id !== params.id)
    return NextResponse.json({ message: "Lead deleted" })
  } catch (error) {
    return NextResponse.json({ message: "Error deleting lead" }, { status: 500 })
  }
}
