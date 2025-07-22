import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    // Store contact message in Supabase (optional: create a 'contact_messages' table)
    await supabase.from("contact_messages").insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        service: formData.service,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        newsletter: formData.newsletter,
        whatsapp: formData.whatsapp,
        created_at: new Date().toISOString(),
      },
    ]);
    // Send email notification to admin
    await sendEmail({
      to: process.env.CONTACT_NOTIFICATION_EMAIL || "shibikabeer@gmail.com",
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      text: `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCountry: ${formData.country}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nMessage: ${formData.message}\nNewsletter: ${formData.newsletter}\nWhatsApp: ${formData.whatsapp}`,
    });
    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error sending message" }, { status: 500 });
  }
} 