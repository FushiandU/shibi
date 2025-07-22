import type { Metadata } from "next"
import { CalculatorHero } from "@/components/calculator/calculator-hero"
import { ROICalculator } from "@/components/roi-calculator"
import { CalculatorGuide } from "@/components/calculator/calculator-guide"
import { CalculatorComparison } from "@/components/calculator/calculator-comparison"
import { CalculatorCTA } from "@/components/calculator/calculator-cta"

export const metadata: Metadata = {
  title: "Dubai Property ROI Calculator - Investment Returns Calculator | Shibi Kabeer",
  description:
    "Calculate your Dubai property investment returns with our advanced ROI calculator. Analyze rental yields, capital appreciation, and total returns for informed investment decisions.",
  keywords:
    "Dubai property calculator, ROI calculator, rental yield calculator, property investment returns, Dubai real estate calculator",
}

export default function CalculatorPage() {
  return (
    <main className="min-h-screen pt-32">
      <CalculatorHero />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ROICalculator />
        </div>
      </section>
      <CalculatorGuide />
      <CalculatorComparison />
      <CalculatorCTA />
    </main>
  )
}
