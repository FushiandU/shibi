import { ServicesHero } from "@/components/services/services-hero";
import { MarketInsightsHero } from "@/components/market-insights/market-insights-hero";
import { MarketTrends } from "@/components/market-insights/market-trends";
import { MarketData } from "@/components/market-insights/market-data";
import { MarketForecast } from "@/components/market-insights/market-forecast";
import { MarketReports } from "@/components/market-insights/market-reports";
import { ServicesCTA } from "@/components/services/services-cta";

export default function MarketAnalysisPage() {
  return (
    <main className="min-h-screen pt-32">
      <ServicesHero title="Market Analysis" subtitle="Expert insights and data-driven strategies for Dubai real estate." />
      <MarketInsightsHero />
      <MarketTrends />
      <MarketData />
      <MarketForecast />
      <MarketReports />
      <ServicesCTA />
    </main>
  );
} 