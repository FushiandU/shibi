import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, AlertCircle } from "lucide-react"

export function MarketForecast() {
  const forecasts = [
    {
      period: "Q4 2024",
      priceGrowth: "8-12%",
      confidence: "High",
      keyDrivers: ["Expo 2030 preparations", "Infrastructure development", "Foreign investment influx"],
      outlook: "Positive",
    },
    {
      period: "2025",
      priceGrowth: "15-20%",
      confidence: "High",
      keyDrivers: ["Golden Visa expansion", "New project launches", "Economic diversification"],
      outlook: "Very Positive",
    },
    {
      period: "2026-2027",
      priceGrowth: "10-15%",
      confidence: "Medium",
      keyDrivers: ["Market maturation", "Supply-demand balance", "Regional stability"],
      outlook: "Stable Growth",
    },
  ]

  const hotspots = [
    {
      area: "Dubai South",
      growth: "25-30%",
      reason: "Al Maktoum Airport expansion",
      timeline: "2024-2026",
    },
    {
      area: "Dubai Creek Harbour",
      growth: "20-25%",
      reason: "New iconic developments",
      timeline: "2024-2025",
    },
    {
      area: "Mohammed Bin Rashid City",
      growth: "18-22%",
      reason: "Luxury residential demand",
      timeline: "2024-2027",
    },
    {
      area: "Dubai Hills Estate",
      growth: "15-20%",
      reason: "Family community appeal",
      timeline: "2024-2026",
    },
  ]

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case "High":
        return "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/20"
      case "Medium":
        return "text-amber-600 bg-amber-100 dark:bg-amber-900/20"
      default:
        return "text-gray-600 bg-gray-100 dark:bg-gray-900/20"
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Market Forecast
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 dark:text-white font-montserrat mb-6">
            Future Market Projections
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert predictions and analysis for Dubai's real estate market outlook
          </p>
        </div>

        {/* Forecast Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-8 text-center">Price Growth Forecast</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {forecasts.map((forecast, index) => (
              <Card key={index} className="border-none shadow-lg dark:bg-gray-800">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-600/20 rounded-full mb-4">
                    <Calendar className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-navy-900 dark:text-white">{forecast.period}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-emerald-600 mb-2">{forecast.priceGrowth}</p>
                    <Badge className={`${getConfidenceColor(forecast.confidence)} border-0`}>
                      {forecast.confidence} Confidence
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy-900 dark:text-white mb-2">Key Drivers:</h4>
                    <ul className="space-y-1">
                      {forecast.keyDrivers.map((driver, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 mt-2 flex-shrink-0" />
                          {driver}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Outlook:
                      <span className="font-semibold text-emerald-600 ml-1">{forecast.outlook}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment Hotspots */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-8 text-center">Investment Hotspots</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {hotspots.map((hotspot, index) => (
              <Card key={index} className="border-none shadow-lg dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-navy-900 dark:text-white mb-1">{hotspot.area}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{hotspot.timeline}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-emerald-600">{hotspot.growth}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Expected Growth</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{hotspot.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="border-none shadow-lg bg-gradient-to-r from-amber-600 to-amber-700 text-white">
            <CardContent className="p-8">
              <AlertCircle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Get Detailed Market Analysis</h3>
              <p className="mb-6 opacity-90">
                Access comprehensive market reports and personalized investment recommendations
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
                Request Full Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
