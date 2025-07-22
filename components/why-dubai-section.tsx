"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, Globe, Plane, Building, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function WhyDubaiSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Tax-Free Environment",
      description: "0% personal income tax, 0% capital gains tax, and 0% inheritance tax on property investments.",
      highlight: "Save up to 45% compared to other markets",
    },
    {
      icon: TrendingUp,
      title: "High ROI Potential",
      description: "Dubai properties offer 6-12% rental yields, significantly higher than global averages.",
      highlight: "Average 8.5% annual returns",
    },
    {
      icon: Globe,
      title: "Strategic Location",
      description: "Gateway between East and West, connecting 2.5 billion people within 4 hours flight time.",
      highlight: "World's busiest international airport",
    },
    {
      icon: Plane,
      title: "Golden Visa Benefits",
      description: "Long-term residency for property investors, with visa validity up to 10 years.",
      highlight: "Minimum AED 2M investment",
    },
    {
      icon: Building,
      title: "World-Class Infrastructure",
      description: "State-of-the-art facilities, smart city initiatives, and continuous urban development.",
      highlight: "Expo 2020 legacy projects",
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "Over 200 nationalities call Dubai home, creating a truly international lifestyle.",
      highlight: "85% expatriate population",
    },
  ]

  const marketInsights = [
    {
      metric: "Population Growth",
      value: "5.2%",
      description: "Annual population increase driving housing demand",
    },
    {
      metric: "GDP Growth",
      value: "3.1%",
      description: "Steady economic expansion and diversification",
    },
    {
      metric: "Tourism Growth",
      value: "15M+",
      description: "Annual visitors boosting short-term rental market",
    },
    {
      metric: "Infrastructure Investment",
      value: "AED 71B",
      description: "Government spending on future projects",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600">
            Why Dubai?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            The World's Premier Investment Destination
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dubai offers unparalleled opportunities for property investors, combining tax advantages, high returns, and
            world-class lifestyle in one dynamic market.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="relative mb-16">
          <div className="aspect-[21/9] relative overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Dubai Skyline"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white space-y-4">
                  <h3 className="text-3xl font-bold">Dubai: Where Vision Meets Reality</h3>
                  <p className="text-lg opacity-90">
                    From desert to global metropolis in just 50 years, Dubai continues to redefine what's possible in
                    urban development and economic growth.
                  </p>
                  <Link href="/market-insights">
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      Explore Market Insights
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        {benefit.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Insights */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Market Performance Indicators</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Key metrics demonstrating Dubai's continued growth and investment potential
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">{insight.value}</div>
                <div className="font-semibold text-gray-900 dark:text-white mb-1">{insight.metric}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{insight.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Dubai vs Other Global Cities</h3>
            <p className="text-gray-600 dark:text-gray-300">
              See how Dubai stacks up against other major investment destinations
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">City</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900 dark:text-white">Rental Yield</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900 dark:text-white">
                    Capital Gains Tax
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900 dark:text-white">Income Tax</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900 dark:text-white">Residency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr className="bg-amber-50 dark:bg-amber-900/20">
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Dubai, UAE</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">6-12%</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">0%</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">0%</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">Golden Visa</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">London, UK</td>
                  <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">3-5%</td>
                  <td className="px-6 py-4 text-center text-red-600">28%</td>
                  <td className="px-6 py-4 text-center text-red-600">45%</td>
                  <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">Complex</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">New York, USA</td>
                  <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">4-6%</td>
                  <td className="px-6 py-4 text-center text-red-600">20%</td>
                  <td className="px-6 py-4 text-center text-red-600">37%</td>
                  <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">Limited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">Singapore</td>
                  <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">2-4%</td>
                  <td className="px-6 py-4 text-center text-yellow-600">0-20%</td>
                  <td className="px-6 py-4 text-center text-yellow-600">22%</td>
                  <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">Investor Visa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-navy-900 dark:bg-gray-950 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Invest in Dubai's Future?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of successful investors who have made Dubai their investment destination of choice. Start
              your journey with expert guidance and proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/properties">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Explore Properties
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/golden-visa">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
                >
                  Learn About Golden Visa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
