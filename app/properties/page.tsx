import type { Metadata } from "next"
import { PropertiesHero } from "@/components/properties/properties-hero"
import { PropertiesFilter } from "@/components/properties/properties-filter"
import { PropertiesGrid } from "@/components/properties/properties-grid"
import { PropertiesMap } from "@/components/properties/properties-map"
import { ROICalculator } from "@/components/roi-calculator"

export const metadata: Metadata = {
  title: "Premium Dubai Properties - Investment Opportunities | Shibi Kabeer",
  description:
    "Explore premium Dubai real estate investment opportunities with 8%+ rental yields, Golden Visa eligibility, and tax-free returns. Properties from Emaar, Omniyat, and top developers.",
  keywords: "Dubai properties, real estate investment, Golden Visa, tax-free returns, Emaar, Omniyat, rental yields",
}

export default function PropertiesPage() {
  return (
    <main className="min-h-screen pt-32">
      <PropertiesHero />
      <PropertiesFilter />
      <PropertiesGrid />
      <PropertiesMap />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Calculate Your Investment Returns</h2>
            <p className="text-gray-600">Use our advanced ROI calculator to estimate your potential returns</p>
          </div>
          <ROICalculator />
        </div>
      </section>
    </main>
  )
}
