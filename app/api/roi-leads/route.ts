import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { sendEmail } from "@/lib/sendEmail";

export async function GET() {
  const { data, error } = await supabase
    .from("roi_leads")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  try {
    const leadData = await request.json();
    const { data, error } = await supabase
      .from("roi_leads")
      .insert([leadData])
      .select()
      .single();
    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    // Send notification email to admin
    await sendEmail({
      to: process.env.CONTACT_NOTIFICATION_EMAIL || "shibikabeer@gmail.com",
      subject: `New ROI Lead: ${leadData.full_name}`,
      text: `Name: ${leadData.full_name}\nEmail: ${leadData.email}\nPhone: ${leadData.phone}\nInvestment Amount: ${leadData.investment_amount}\nExpected ROI: ${leadData.expected_roi}\nNotes: ${leadData.notes}`,
    });
    return NextResponse.json({ success: true, lead: data });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error creating ROI lead" }, { status: 500 });
  }
} 