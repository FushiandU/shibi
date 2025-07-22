"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Home, DollarSign } from "lucide-react"

export function MarketData() {
  const keyMetrics = [
    {
      icon: <Home className="h-8 w-8 text-amber-600" />,
      title: "Total Transactions",
      value: "24,567",
      change: "+18.5%",
      period: "Q3 2024",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-emerald-600" />,
      title: "Total Value",
      value: "AED 45.2B",
      change: "+22.3%",
      period: "Q3 2024",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Price Index",
      value: "128.4",
      change: "+12.1%",
      period: "YoY",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Rental Yield",
      value: "6.8%",
      change: "+0.5%",
      period: "Average",
    },
  ]

  const propertyTypes = [
    { type: "Apartments", share: "65%", avgPrice: "AED 1.2M", change: "+14.2%" },
    { type: "Villas", share: "25%", avgPrice: "AED 3.8M", change: "+11.7%" },
    { type: "Townhouses", share: "8%", avgPrice: "AED 2.1M", change: "+16.8%" },
    { type: "Penthouses", share: "2%", avgPrice: "AED 8.5M", change: "+9.3%" },
  ]

  const buyerSegments = [
    { segment: "UAE Nationals", share: "35%", change: "+5.2%" },
    { segment: "GCC Nationals", share: "28%", change: "+8.7%" },
    { segment: "Indian Nationals", share: "15%", change: "+12.3%" },
    { segment: "European Buyers", share: "12%", change: "+18.9%" },
    { segment: "Other Nationalities", share: "10%", change: "+7.1%" },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Market Data
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 dark:text-white font-montserrat mb-6">Key Market Metrics</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive data analysis of Dubai's real estate market performance
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="border-none shadow-lg dark:bg-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  {metric.icon}
                  <span className="text-sm text-emerald-600 font-semibold">{metric.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-1">{metric.value}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{metric.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{metric.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Property Types */}
          <Card className="border-none shadow-lg dark:bg-gray-700">
            <CardHeader>
              <CardTitle className="text-navy-900 dark:text-white">Property Types Distribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {propertyTypes.map((property, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-600 rounded-lg"
                >
                  <div>
                    <h4 className="font-semibold text-navy-900 dark:text-white">{property.type}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Avg: {property.avgPrice}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-navy-900 dark:text-white">{property.share}</p>
                    <p className="text-sm text-emerald-600">{property.change}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Buyer Segments */}
          <Card className="border-none shadow-lg dark:bg-gray-700">
            <CardHeader>
              <CardTitle className="text-navy-900 dark:text-white">Buyer Demographics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {buyerSegments.map((buyer, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-600 rounded-lg"
                >
                  <div>
                    <h4 className="font-semibold text-navy-900 dark:text-white">{buyer.segment}</h4>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-navy-900 dark:text-white">{buyer.share}</p>
                    <p className="text-sm text-emerald-600">{buyer.change}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
