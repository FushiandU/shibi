import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BarChart3, PieChart } from "lucide-react"

export function MarketInsightsHero() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="text-amber-400 border-amber-400 mb-6">
            Market Intelligence
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-white font-montserrat mb-8">
            Dubai Real Estate
            <span className="block text-amber-400">Market Insights</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with comprehensive market analysis, trends, and forecasts. Make informed investment decisions
            with real-time data and expert insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              View Latest Reports
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
            >
              Subscribe to Updates
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600/20 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Market Trends</h3>
              <p className="text-gray-300">Real-time market movement analysis</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600/20 rounded-full mb-4">
                <BarChart3 className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Price Analytics</h3>
              <p className="text-gray-300">Comprehensive pricing data and forecasts</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600/20 rounded-full mb-4">
                <PieChart className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Investment Insights</h3>
              <p className="text-gray-300">Expert analysis and recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
