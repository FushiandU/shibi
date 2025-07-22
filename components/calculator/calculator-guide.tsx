import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, DollarSign, PieChart, BarChart3, Target } from "lucide-react"

export function CalculatorGuide() {
  const calculationFactors = [
    {
      icon: <DollarSign className="h-6 w-6 text-amber-600" />,
      title: "Property Price",
      description: "The total purchase price of the property including all fees and charges.",
      factors: ["Purchase price", "Registration fees", "Agent commission", "Legal fees"],
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-amber-600" />,
      title: "Rental Yield",
      description: "Annual rental income as a percentage of the property's purchase price.",
      factors: ["Monthly rent", "Occupancy rate", "Service charges", "Management fees"],
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-amber-600" />,
      title: "Capital Appreciation",
      description: "The increase in property value over time based on market trends.",
      factors: ["Market growth rate", "Location premium", "Development plans", "Economic factors"],
    },
    {
      icon: <Calculator className="h-6 w-6 text-amber-600" />,
      title: "Financing Costs",
      description: "Mortgage interest rates and associated financing expenses.",
      factors: ["Interest rate", "Down payment", "Loan term", "Processing fees"],
    },
    {
      icon: <PieChart className="h-6 w-6 text-amber-600" />,
      title: "Operating Expenses",
      description: "Ongoing costs associated with property ownership and maintenance.",
      factors: ["Service charges", "Maintenance costs", "Insurance", "Property tax"],
    },
    {
      icon: <Target className="h-6 w-6 text-amber-600" />,
      title: "Investment Period",
      description: "The duration of your investment and exit strategy considerations.",
      factors: ["Holding period", "Exit costs", "Market timing", "Reinvestment options"],
    },
  ]

  const tips = [
    {
      title: "Use Conservative Estimates",
      description: "Always use conservative rental yields and appreciation rates to avoid overestimating returns.",
    },
    {
      title: "Factor in All Costs",
      description: "Include all purchase costs, ongoing expenses, and potential vacancy periods in your calculations.",
    },
    {
      title: "Consider Market Cycles",
      description: "Dubai's property market has cycles - factor in both growth and correction periods.",
    },
    {
      title: "Compare Multiple Properties",
      description: "Use the calculator to compare different properties and locations for the best returns.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            How It Works
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">Understanding ROI Calculations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how our calculator analyzes various factors to provide accurate investment return projections.
          </p>
        </div>

        {/* Calculation Factors */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Key Calculation Factors</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {calculationFactors.map((factor, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">{factor.icon}</div>
                  <CardTitle className="text-lg text-navy-900">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm text-center">{factor.description}</p>
                  <ul className="space-y-2">
                    {factor.factors.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div>
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Expert Tips for Accurate Calculations</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tips.map((tip, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-navy-900 mb-3">{tip.title}</h4>
                  <p className="text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
