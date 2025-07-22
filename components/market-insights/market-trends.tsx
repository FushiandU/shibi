import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export function MarketTrends() {
  const trends = [
    {
      area: "Dubai Marina",
      priceChange: "+12.5%",
      trend: "up",
      avgPrice: "AED 1,850/sq ft",
      volume: "+8.3%",
      description: "Strong demand from international investors",
    },
    {
      area: "Downtown Dubai",
      priceChange: "+8.2%",
      trend: "up",
      avgPrice: "AED 2,100/sq ft",
      volume: "+5.1%",
      description: "Premium location maintaining steady growth",
    },
    {
      area: "Business Bay",
      priceChange: "+15.7%",
      trend: "up",
      avgPrice: "AED 1,650/sq ft",
      volume: "+12.4%",
      description: "Emerging business hub with high potential",
    },
    {
      area: "Palm Jumeirah",
      priceChange: "+6.8%",
      trend: "up",
      avgPrice: "AED 2,850/sq ft",
      volume: "+3.2%",
      description: "Luxury market showing consistent appreciation",
    },
    {
      area: "Dubai Hills Estate",
      priceChange: "+18.3%",
      trend: "up",
      avgPrice: "AED 1,450/sq ft",
      volume: "+22.1%",
      description: "Family-friendly community with strong demand",
    },
    {
      area: "Dubai South",
      priceChange: "+25.4%",
      trend: "up",
      avgPrice: "AED 950/sq ft",
      volume: "+35.7%",
      description: "Fastest growing area near Al Maktoum Airport",
    },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-5 w-5 text-emerald-600" />
      case "down":
        return <TrendingDown className="h-5 w-5 text-red-600" />
      default:
        return <Minus className="h-5 w-5 text-gray-600" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-emerald-600"
      case "down":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Market Trends
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 dark:text-white font-montserrat mb-6">
            Current Market Performance
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time analysis of Dubai's top performing real estate areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trends.map((trend, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-navy-900 dark:text-white">{trend.area}</CardTitle>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(trend.trend)}
                    <span className={`font-semibold ${getTrendColor(trend.trend)}`}>{trend.priceChange}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Avg Price</p>
                    <p className="font-semibold text-navy-900 dark:text-white">{trend.avgPrice}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Volume Change</p>
                    <p className="font-semibold text-emerald-600">{trend.volume}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{trend.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
