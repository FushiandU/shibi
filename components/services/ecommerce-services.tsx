import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, BarChart3, Globe, Lightbulb, Truck, Megaphone, Settings, TrendingUp } from "lucide-react"

export function EcommerceServices() {
  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-emerald-600" />,
      title: "Market Entry Strategy",
      description: "Comprehensive market research and entry strategies for the UAE e-commerce market.",
      features: [
        "Market size and opportunity analysis",
        "Competitor landscape research",
        "Target audience identification",
        "Go-to-market roadmap",
      ],
      price: "AED 3,500",
      duration: "2-3 weeks",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-emerald-600" />,
      title: "Business Setup & Registration",
      description: "Complete business setup and registration services for UAE e-commerce operations.",
      features: [
        "UAE business license acquisition",
        "Trade name registration",
        "Bank account opening",
        "Legal compliance setup",
      ],
      price: "AED 5,000",
      duration: "3-4 weeks",
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600" />,
      title: "Digital Marketing Strategy",
      description: "Tailored digital marketing strategies to reach your target audience effectively.",
      features: [
        "Social media marketing plans",
        "SEO optimization strategies",
        "Paid advertising campaigns",
        "Content marketing roadmap",
      ],
      price: "AED 2,500",
      duration: "1-2 weeks",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-emerald-600" />,
      title: "Innovation Consulting",
      description: "Strategic consulting to innovate and stay ahead in the competitive e-commerce landscape.",
      features: [
        "Technology integration advice",
        "Process optimization",
        "Innovation workshops",
        "Future planning sessions",
      ],
      price: "AED 4,000",
      duration: "2-4 weeks",
    },
    {
      icon: <Truck className="h-8 w-8 text-emerald-600" />,
      title: "Logistics & Supply Chain",
      description: "Optimize your supply chain and logistics for efficient UAE operations.",
      features: [
        "Warehouse setup guidance",
        "Shipping partner negotiations",
        "Inventory management systems",
        "Last-mile delivery solutions",
      ],
      price: "AED 3,000",
      duration: "2-3 weeks",
    },
    {
      icon: <Megaphone className="h-8 w-8 text-emerald-600" />,
      title: "Brand Development",
      description: "Build a strong brand presence in the UAE market with localized strategies.",
      features: [
        "Brand positioning strategy",
        "Visual identity development",
        "Local market adaptation",
        "Brand launch campaigns",
      ],
      price: "AED 6,000",
      duration: "4-6 weeks",
    },
    {
      icon: <Settings className="h-8 w-8 text-emerald-600" />,
      title: "Platform Development",
      description: "Custom e-commerce platform development and optimization services.",
      features: [
        "Website/app development",
        "Payment gateway integration",
        "Mobile optimization",
        "Performance optimization",
      ],
      price: "AED 8,000+",
      duration: "6-12 weeks",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
      title: "Growth & Scaling",
      description: "Strategic guidance for scaling your e-commerce business in the UAE and beyond.",
      features: [
        "Growth strategy development",
        "Market expansion planning",
        "Partnership opportunities",
        "Investment readiness",
      ],
      price: "AED 5,500",
      duration: "3-5 weeks",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-emerald-600 border-emerald-600 mb-4">
            E-commerce Services
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">
            Complete E-commerce Business Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From market entry to scaling, I provide comprehensive support for your e-commerce success in the UAE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-lg text-navy-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2 mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center text-sm mb-3">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold text-emerald-600">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-navy-900">{service.duration}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
