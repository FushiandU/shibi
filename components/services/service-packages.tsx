import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Zap } from "lucide-react"

export function ServicePackages() {
  const packages = [
    {
      name: "Starter Package",
      icon: <Zap className="h-8 w-8 text-amber-600" />,
      price: "AED 2,500",
      description: "Perfect for first-time investors or small business owners",
      features: [
        "Initial consultation (60 minutes)",
        "Market analysis report",
        "Investment recommendations",
        "Basic ROI calculations",
        "Email support for 30 days",
        "Property shortlist (up to 5 properties)",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional Package",
      icon: <Star className="h-8 w-8 text-amber-600" />,
      price: "AED 7,500",
      description: "Comprehensive solution for serious investors",
      features: [
        "Everything in Starter Package",
        "Detailed financial modeling",
        "Golden Visa eligibility assessment",
        "Property viewing coordination",
        "Legal documentation support",
        "Financing assistance",
        "3 months of ongoing support",
        "Priority customer service",
      ],
      popular: true,
      cta: "Most Popular",
    },
    {
      name: "Premium Package",
      icon: <Crown className="h-8 w-8 text-amber-600" />,
      price: "AED 15,000",
      description: "Complete end-to-end service for high-net-worth clients",
      features: [
        "Everything in Professional Package",
        "Dedicated account manager",
        "Portfolio management service",
        "Property management setup",
        "Tax optimization strategies",
        "Investment diversification planning",
        "12 months of ongoing support",
        "VIP access to exclusive properties",
        "Quarterly portfolio reviews",
      ],
      popular: false,
      cta: "Premium Service",
    },
  ]

  const ecommercePackages = [
    {
      name: "Launch Package",
      icon: <Zap className="h-8 w-8 text-emerald-600" />,
      price: "AED 5,000",
      description: "Essential services to launch your e-commerce business",
      features: [
        "Market entry strategy",
        "Business registration assistance",
        "Basic digital marketing plan",
        "Platform setup guidance",
        "2 months of support",
        "Launch checklist and timeline",
      ],
      popular: false,
      cta: "Launch Now",
    },
    {
      name: "Growth Package",
      icon: <Star className="h-8 w-8 text-emerald-600" />,
      price: "AED 12,000",
      description: "Comprehensive growth solution for scaling businesses",
      features: [
        "Everything in Launch Package",
        "Advanced marketing strategies",
        "Supply chain optimization",
        "Brand development support",
        "Performance analytics setup",
        "6 months of ongoing support",
        "Monthly strategy sessions",
      ],
      popular: true,
      cta: "Scale Up",
    },
    {
      name: "Enterprise Package",
      icon: <Crown className="h-8 w-8 text-emerald-600" />,
      price: "AED 25,000",
      description: "Full-service solution for established businesses",
      features: [
        "Everything in Growth Package",
        "Custom platform development",
        "Advanced analytics and reporting",
        "Multi-channel expansion strategy",
        "Investment readiness preparation",
        "12 months of dedicated support",
        "Quarterly business reviews",
        "Priority access to partnerships",
      ],
      popular: false,
      cta: "Enterprise Solution",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Service Packages
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">Choose Your Success Package</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored service packages designed to meet your specific needs and budget requirements.
          </p>
        </div>

        {/* Real Estate Packages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Real Estate Investment Packages</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`border-none shadow-lg hover:shadow-xl transition-shadow relative ${pkg.popular ? "ring-2 ring-amber-600" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-amber-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">{pkg.icon}</div>
                  <CardTitle className="text-2xl text-navy-900">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-amber-600 mt-2">{pkg.price}</div>
                  <p className="text-gray-600 text-sm mt-2">{pkg.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${pkg.popular ? "bg-amber-600 hover:bg-amber-700" : "bg-navy-900 hover:bg-navy-800"} text-white`}
                  >
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* E-commerce Packages */}
        <div>
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">E-commerce Business Packages</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ecommercePackages.map((pkg, index) => (
              <Card
                key={index}
                className={`border-none shadow-lg hover:shadow-xl transition-shadow relative ${pkg.popular ? "ring-2 ring-emerald-600" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">{pkg.icon}</div>
                  <CardTitle className="text-2xl text-navy-900">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-emerald-600 mt-2">{pkg.price}</div>
                  <p className="text-gray-600 text-sm mt-2">{pkg.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${pkg.popular ? "bg-emerald-600 hover:bg-emerald-700" : "bg-navy-900 hover:bg-navy-800"} text-white`}
                  >
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
