import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Crown, Zap } from "lucide-react"

export function ConsultationPackages() {
  const packages = [
    {
      name: "Starter Consultation",
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      price: "Free",
      originalPrice: null,
      duration: "30 minutes",
      description: "Perfect for first-time investors looking to understand the Dubai market",
      features: [
        "Market overview and trends",
        "Investment basics explanation",
        "Goal setting discussion",
        "Basic Q&A session",
        "Resource recommendations",
      ],
      popular: false,
      cta: "Book Free Session",
    },
    {
      name: "Comprehensive Analysis",
      icon: <Star className="h-8 w-8 text-amber-600" />,
      price: "AED 2,500",
      originalPrice: "AED 3,500",
      duration: "2-3 hours + report",
      description: "In-depth analysis and personalized investment strategy development",
      features: [
        "Detailed financial assessment",
        "Market analysis report",
        "Personalized investment strategy",
        "Property recommendations",
        "ROI projections",
        "Risk assessment",
        "Follow-up session included",
      ],
      popular: true,
      cta: "Get Started",
    },
    {
      name: "Premium Partnership",
      icon: <Crown className="h-8 w-8 text-purple-600" />,
      price: "AED 15,000",
      originalPrice: "AED 20,000",
      duration: "6 months support",
      description: "Complete end-to-end investment partnership with ongoing support",
      features: [
        "Everything in Comprehensive",
        "Dedicated investment manager",
        "Property sourcing and viewing",
        "Negotiation support",
        "Transaction management",
        "Golden Visa assistance",
        "Quarterly portfolio reviews",
        "24/7 priority support",
        "Exit strategy planning",
      ],
      popular: false,
      cta: "Start Partnership",
    },
  ]

  const addOns = [
    {
      name: "Golden Visa Consultation",
      price: "AED 1,500",
      description: "Complete guidance on Golden Visa requirements and application process",
    },
    {
      name: "Property Management Setup",
      price: "AED 2,000",
      description: "Setup and optimization of property management for rental properties",
    },
    {
      name: "Legal Review Service",
      price: "AED 1,200",
      description: "Professional legal review of contracts and documentation",
    },
    {
      name: "Market Research Report",
      price: "AED 800",
      description: "Detailed market research report for specific areas or property types",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Consultation Packages
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 dark:text-white font-montserrat mb-6">
            Choose Your Investment Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flexible consultation packages designed to meet your specific investment needs and budget
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`border-none shadow-xl relative ${pkg.popular ? "ring-2 ring-amber-600 scale-105" : ""} dark:bg-gray-800`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                  {pkg.icon}
                </div>
                <CardTitle className="text-2xl text-navy-900 dark:text-white">{pkg.name}</CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-navy-900 dark:text-white">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{pkg.duration}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300 text-center">{pkg.description}</p>

                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${pkg.popular ? "bg-amber-600 hover:bg-amber-700" : ""}`}
                  variant={pkg.popular ? "default" : "outline"}
                  size="lg"
                >
                  {pkg.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-on Services */}
        <div>
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white text-center mb-8">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-navy-900 dark:text-white mb-2">{addon.name}</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-3">{addon.price}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{addon.description}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Add to Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <Card className="mt-16 border-none shadow-xl bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600/20 rounded-full mb-6">
              <CheckCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">100% Satisfaction Guarantee</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              If you're not completely satisfied with our consultation services within the first 30 days, we'll provide
              a full refund. Your success is our commitment.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
