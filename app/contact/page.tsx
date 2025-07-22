import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"
import { ContactFAQ } from "@/components/contact/contact-faq"

export const metadata: Metadata = {
  title: "Contact Shibi Kabeer - Dubai Real Estate Expert | Get In Touch",
  description:
    "Contact Shibi Kabeer for Dubai real estate investment consultation, Golden Visa assistance, and e-commerce consulting. Schedule your free consultation today.",
  keywords: "contact Shibi Kabeer, Dubai real estate consultant, property investment consultation, Golden Visa help",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32">
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
      <ContactFAQ />
    </main>
  )
}
