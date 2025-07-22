import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageCircle, FileText, Rocket, BarChart3, Headphones } from "lucide-react"

export function ServiceProcess() {
  const processSteps = [
    {
      step: "1",
      icon: <MessageCircle className="h-8 w-8 text-amber-600" />,
      title: "Initial Consultation",
      description: "We start with a comprehensive discussion about your goals, budget, and timeline.",
      duration: "30-60 minutes",
      deliverable: "Needs assessment report",
    },
    {
      step: "2",
      icon: <FileText className="h-8 w-8 text-amber-600" />,
      title: "Strategy Development",
      description: "Based on your requirements, we develop a customized strategy and action plan.",
      duration: "3-5 business days",
      deliverable: "Detailed strategy document",
    },
    {
      step: "3",
      icon: <CheckCircle className="h-8 w-8 text-amber-600" />,
      title: "Proposal & Agreement",
      description: "We present our proposal with clear timelines, deliverables, and investment required.",
      duration: "1-2 business days",
      deliverable: "Service agreement",
    },
    {
      step: "4",
      icon: <Rocket className="h-8 w-8 text-amber-600" />,
      title: "Implementation",
      description: "We execute the agreed strategy with regular updates and milestone checkpoints.",
      duration: "Varies by service",
      deliverable: "Regular progress reports",
    },
    {
      step: "5",
      icon: <BarChart3 className="h-8 w-8 text-amber-600" />,
      title: "Monitoring & Optimization",
      description: "We track performance and make necessary adjustments to ensure optimal results.",
      duration: "Ongoing",
      deliverable: "Performance analytics",
    },
    {
      step: "6",
      icon: <Headphones className="h-8 w-8 text-amber-600" />,
      title: "Ongoing Support",
      description: "Continued support and guidance to ensure long-term success and growth.",
      duration: "As needed",
      deliverable: "Support documentation",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Our Process
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">How We Work Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven 6-step process that ensures successful outcomes for every client engagement.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow relative">
                <CardContent className="p-8">
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>

                  <div className="pt-4 space-y-4">
                    <div className="flex justify-center">{step.icon}</div>
                    <h3 className="text-xl font-bold text-navy-900 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>

                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold text-navy-900">{step.duration}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Deliverable:</span>
                        <span className="font-semibold text-emerald-600">{step.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
