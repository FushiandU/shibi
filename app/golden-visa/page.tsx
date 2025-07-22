import type { Metadata } from "next"
import { GoldenVisaHero } from "@/components/golden-visa/golden-visa-hero"
import { GoldenVisaBenefits } from "@/components/golden-visa/golden-visa-benefits"
import { GoldenVisaProcess } from "@/components/golden-visa/golden-visa-process"
import { GoldenVisaRequirements } from "@/components/golden-visa/golden-visa-requirements"
import { GoldenVisaFAQ } from "@/components/golden-visa/golden-visa-faq"
import { GoldenVisaCTA } from "@/components/golden-visa/golden-visa-cta"

export const metadata: Metadata = {
  title: "UAE Golden Visa Through Property Investment | Shibi Kabeer",
  description:
    "Secure UAE Golden Visa through property investment. 5-10 year residency, family sponsorship, no sponsor required. Expert guidance from Dubai's leading real estate consultant.",
  keywords:
    "UAE Golden Visa, Dubai Golden Visa, property investment visa, UAE residency, family sponsorship, no sponsor visa",
}

export default function GoldenVisaPage() {
  return (
    <main className="min-h-screen pt-32">
      <GoldenVisaHero />
      <GoldenVisaBenefits />
      <GoldenVisaProcess />
      <GoldenVisaRequirements />
      <GoldenVisaFAQ />
      <GoldenVisaCTA />
    </main>
  )
}
