import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, TrendingUp, DollarSign, PieChart } from "lucide-react"

export function CalculatorHero() {
  const features = [
    {
      icon: <Calculator className="h-6 w-6 text-amber-600" />,
      title: "Advanced Calculations",
      description: "Comprehensive ROI analysis with multiple variables",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-amber-600" />,
      title: "Market Data",
      description: "Real-time Dubai market trends and projections",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-amber-600" />,
      title: "Multiple Currencies",
      description: "Calculate returns in AED, USD, EUR, GBP, and more",
    },
    {
      icon: <PieChart className="h-6 w-6 text-amber-600" />,
      title: "Detailed Reports",
      description: "Get comprehensive investment analysis reports",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-amber-600 text-white mb-4">ROI Calculator</Badge>
          <h1 className="text-5xl font-bold font-montserrat mb-6">
            Dubai Property <span className="text-amber-400">ROI Calculator</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Make informed investment decisions with our advanced ROI calculator. Analyze rental yields, capital
            appreciation, and total returns for Dubai properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
