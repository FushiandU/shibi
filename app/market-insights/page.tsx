import type { Metadata } from "next"
import { MarketInsightsHero } from "@/components/market-insights/market-insights-hero"
import { MarketTrends } from "@/components/market-insights/market-trends"
import { MarketData } from "@/components/market-insights/market-data"
import { MarketForecast } from "@/components/market-insights/market-forecast"
import { MarketReports } from "@/components/market-insights/market-reports"
import { MarketNewsletter } from "@/components/market-insights/market-newsletter"

export const metadata: Metadata = {
  title: "Dubai Real Estate Market Insights & Analysis | Shibi Kabeer",
  description:
    "Get expert Dubai real estate market insights, trends analysis, price forecasts, and investment opportunities. Stay ahead with professional market intelligence.",
  keywords:
    "Dubai real estate market, property market analysis, Dubai property trends, real estate insights, market forecast",
}

export default function MarketInsightsPage() {
  return (
    <main className="min-h-screen pt-32">
      <MarketInsightsHero />
      <MarketTrends />
      <MarketData />
      <MarketForecast />
      <MarketReports />
      <MarketNewsletter />
    </main>
  )
}
