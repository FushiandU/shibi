"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We analyze your business goals, target market, and competitive landscape to develop a comprehensive e-commerce strategy.",
    details: ["Business analysis", "Market research", "Competitor analysis", "Strategy development"],
  },
  {
    step: "02",
    title: "Planning & Design",
    description:
      "Create detailed project plans, user experience designs, and technical specifications for your e-commerce platform.",
    details: ["Project planning", "UX/UI design", "Technical specifications", "Timeline creation"],
  },
  {
    step: "03",
    title: "Development & Setup",
    description:
      "Build and configure your e-commerce platform with all necessary features, integrations, and optimizations.",
    details: ["Platform development", "Payment integration", "Inventory setup", "Testing & QA"],
  },
  {
    step: "04",
    title: "Launch & Marketing",
    description:
      "Execute a strategic launch plan with comprehensive marketing campaigns to drive initial traffic and sales.",
    details: ["Soft launch", "Marketing campaigns", "SEO optimization", "Performance monitoring"],
  },
  {
    step: "05",
    title: "Optimization & Growth",
    description: "Continuously optimize performance, implement growth strategies, and scale your business operations.",
    details: ["Performance analysis", "Conversion optimization", "Growth strategies", "Scaling operations"],
  },
  {
    step: "06",
    title: "Ongoing Support",
    description: "Provide continuous support, maintenance, and strategic guidance to ensure long-term success.",
    details: ["Technical support", "Performance monitoring", "Strategic consulting", "Feature updates"],
  },
]

export function EcommerceProcess() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our E-commerce Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that takes your business from concept to successful e-commerce operation with
            measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-[#db8102] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#db8102] mr-3 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
