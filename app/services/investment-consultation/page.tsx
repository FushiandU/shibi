import type { Metadata } from "next"
import { InvestmentConsultationHero } from "@/components/services/investment-consultation/investment-consultation-hero"
import { ConsultationProcess } from "@/components/services/investment-consultation/consultation-process"
import { ConsultationBenefits } from "@/components/services/investment-consultation/consultation-benefits"
import { ConsultationPackages } from "@/components/services/investment-consultation/consultation-packages"
import { ConsultationTestimonials } from "@/components/services/investment-consultation/consultation-testimonials"
import { ConsultationCTA } from "@/components/services/investment-consultation/consultation-cta"

export const metadata: Metadata = {
  title: "Dubai Property Investment Consultation Services | Shibi Kabeer",
  description:
    "Expert Dubai property investment consultation services. Get personalized investment strategies, market analysis, and professional guidance for maximum returns.",
  keywords:
    "Dubai property investment consultation, real estate investment advice, property investment strategy, Dubai investment consultant",
}

export default function InvestmentConsultationPage() {
  return (
    <main className="min-h-screen pt-32">
      <InvestmentConsultationHero />
      <ConsultationProcess />
      <ConsultationBenefits />
      <ConsultationPackages />
      <ConsultationTestimonials />
      <ConsultationCTA />
    </main>
  )
}
