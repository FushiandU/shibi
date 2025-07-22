"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Target, BarChart3, Palette, Search, Zap } from "lucide-react"

const services = [
  {
    icon: Rocket,
    title: "E-commerce Strategy",
    description:
      "Comprehensive business strategy development to launch and scale your online business with proven methodologies.",
    features: ["Business Model Design", "Market Analysis", "Competitive Research", "Growth Planning"],
  },
  {
    icon: Palette,
    title: "Store Development",
    description:
      "Custom e-commerce website and mobile app development with focus on user experience and conversion optimization.",
    features: ["Custom Design", "Mobile Optimization", "Payment Integration", "Inventory Management"],
  },
  {
    icon: Target,
    title: "Digital Marketing",
    description:
      "Multi-channel marketing strategies to drive traffic, increase conversions, and build brand awareness.",
    features: ["Social Media Marketing", "Email Campaigns", "Content Marketing", "Influencer Partnerships"],
  },
  {
    icon: Search,
    title: "SEO & SEM",
    description:
      "Search engine optimization and marketing to improve visibility and drive qualified traffic to your store.",
    features: ["Keyword Research", "On-page SEO", "Google Ads", "Performance Tracking"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Optimization",
    description: "Data-driven insights and continuous optimization to improve performance and maximize ROI.",
    features: ["Performance Analytics", "A/B Testing", "Conversion Optimization", "ROI Analysis"],
  },
  {
    icon: Zap,
    title: "Automation & Scaling",
    description: "Business process automation and scaling strategies to grow your business efficiently.",
    features: ["Workflow Automation", "Inventory Management", "Customer Service", "Operations Scaling"],
  },
]

export function EcommerceServices() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete E-commerce Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to scale, we provide end-to-end e-commerce consulting services to help you build and grow a
            successful online business.
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
