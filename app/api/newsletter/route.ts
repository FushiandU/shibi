import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(request: NextRequest) {
  try {
    const { email, interests } = await request.json();
    // Store in newsletter_subscribers table (create if needed)
    await supabase.from("newsletter_subscribers").insert([
      { email, interests, subscribed_at: new Date().toISOString() },
    ]);
    // Send welcome email
    await sendEmail({
      to: email,
      subject: "Welcome to the Shibi Kabeer Newsletter!",
      text: "Thank you for subscribing. You'll receive the latest market insights and opportunities.",
      html: `<p>Thank you for subscribing to the <b>Shibi Kabeer</b> newsletter!<br/>You'll receive the latest market insights and exclusive opportunities.</p>`
    });
    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error subscribing" }, { status: 500 });
  }
} 