"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We start with a comprehensive consultation to understand your investment goals, budget, and preferences.",
    details: ["Investment goal assessment", "Budget analysis", "Risk tolerance evaluation", "Timeline planning"],
  },
  {
    step: "02",
    title: "Market Research",
    description:
      "Our team conducts thorough market research to identify the best opportunities that match your criteria.",
    details: ["Market trend analysis", "Location comparison", "Price evaluation", "Growth potential assessment"],
  },
  {
    step: "03",
    title: "Property Selection",
    description: "We present you with carefully curated property options that align with your investment strategy.",
    details: ["Property shortlisting", "Detailed presentations", "Site visits", "Investment analysis"],
  },
  {
    step: "04",
    title: "Due Diligence",
    description: "Comprehensive property and legal checks to ensure your investment is secure and compliant.",
    details: ["Property inspection", "Legal verification", "Developer background check", "Documentation review"],
  },
  {
    step: "05",
    title: "Transaction Support",
    description: "Complete support throughout the buying process, from negotiation to final registration.",
    details: ["Price negotiation", "Contract preparation", "Payment facilitation", "Registration assistance"],
  },
  {
    step: "06",
    title: "Post-Purchase Support",
    description: "Ongoing support to help you maximize your investment returns and manage your property.",
    details: ["Property management", "Rental assistance", "Performance monitoring", "Strategic advice"],
  },
]

export function RealEstateProcess() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Investment Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to real estate investment that ensures you make informed decisions and maximize your
            returns in Dubai's property market.
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
