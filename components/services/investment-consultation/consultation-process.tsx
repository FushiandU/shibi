import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, BarChart3, Target, Handshake, TrendingUp, Shield } from "lucide-react"

export function ConsultationProcess() {
  const steps = [
    {
      step: "01",
      icon: <Search className="h-8 w-8 text-amber-600" />,
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your financial goals, risk tolerance, and investment timeline.",
      duration: "60 minutes",
      deliverables: ["Investment profile analysis", "Goal setting framework", "Risk assessment report"],
    },
    {
      step: "02",
      icon: <BarChart3 className="h-8 w-8 text-amber-600" />,
      title: "Market Analysis",
      description:
        "In-depth analysis of current market conditions and identification of optimal investment opportunities.",
      duration: "2-3 days",
      deliverables: ["Market research report", "Opportunity identification", "Comparative analysis"],
    },
    {
      step: "03",
      icon: <Target className="h-8 w-8 text-amber-600" />,
      title: "Strategy Development",
      description: "Creation of a personalized investment strategy aligned with your goals and market conditions.",
      duration: "3-5 days",
      deliverables: ["Investment strategy document", "Portfolio recommendations", "Timeline planning"],
    },
    {
      step: "04",
      icon: <Handshake className="h-8 w-8 text-amber-600" />,
      title: "Implementation Support",
      description: "Hands-on assistance with property selection, negotiations, and transaction completion.",
      duration: "Ongoing",
      deliverables: ["Property shortlisting", "Negotiation support", "Transaction assistance"],
    },
    {
      step: "05",
      icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
      title: "Performance Monitoring",
      description: "Regular monitoring of investment performance and strategy adjustments as needed.",
      duration: "Quarterly",
      deliverables: ["Performance reports", "Market updates", "Strategy refinements"],
    },
    {
      step: "06",
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Ongoing Support",
      description: "Continuous support for portfolio optimization, exit strategies, and new opportunities.",
      duration: "Lifetime",
      deliverables: ["24/7 support access", "Market alerts", "Exit planning"],
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Our Process
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 dark:text-white font-montserrat mb-6">
            Structured Consultation Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A systematic approach to ensure you make informed investment decisions with confidence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <Badge variant="outline" className="text-amber-600 border-amber-600 text-xs">
                        Step {step.step}
                      </Badge>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{step.description}</p>

                      <div className="mb-4">
                        <span className="text-sm font-semibold text-amber-600">Duration: </span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{step.duration}</span>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-navy-900 dark:text-white mb-2">Deliverables:</h4>
                        <ul className="space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 mt-2 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
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
