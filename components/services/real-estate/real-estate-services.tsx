"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, Search, FileText, TrendingUp, Shield, Users } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Property Search & Analysis",
    description:
      "Comprehensive market research and property evaluation to identify the best investment opportunities in Dubai's prime locations.",
    features: ["Market Analysis", "Location Assessment", "Price Comparison", "Investment Potential"],
  },
  {
    icon: FileText,
    title: "Legal & Documentation",
    description:
      "Complete legal support for property transactions, ensuring all documentation is properly handled and compliant with UAE regulations.",
    features: ["Contract Review", "Legal Compliance", "Documentation", "Registration Support"],
  },
  {
    icon: TrendingUp,
    title: "Investment Strategy",
    description:
      "Personalized investment strategies based on your goals, budget, and risk tolerance to maximize returns in Dubai's real estate market.",
    features: ["Portfolio Planning", "ROI Analysis", "Risk Assessment", "Growth Strategies"],
  },
  {
    icon: Building2,
    title: "Property Management",
    description:
      "End-to-end property management services to ensure your investment generates consistent returns with minimal hassle.",
    features: ["Tenant Management", "Maintenance", "Rent Collection", "Property Marketing"],
  },
  {
    icon: Shield,
    title: "Due Diligence",
    description:
      "Thorough property inspections and background checks to ensure you're making informed investment decisions.",
    features: ["Property Inspection", "Developer Verification", "Title Verification", "Market Validation"],
  },
  {
    icon: Users,
    title: "Investor Relations",
    description:
      "Ongoing support and consultation to help you navigate the Dubai real estate market and optimize your investment portfolio.",
    features: ["Regular Updates", "Market Insights", "Performance Reports", "Strategic Advice"],
  },
]

export function RealEstateServices() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Real Estate Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to property management, we provide end-to-end real estate investment services
            tailored to the Dubai market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-[#db8102]/20"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="bg-[#db8102]/10 p-4 rounded-full w-fit mb-4 group-hover:bg-[#db8102]/20 transition-colors">
                    <service.icon className="h-8 w-8 text-[#db8102]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-[#db8102] rounded-full mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
