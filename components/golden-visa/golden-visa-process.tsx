import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, CreditCard, Home, Award, Users } from "lucide-react"

export function GoldenVisaProcess() {
  const processSteps = [
    {
      step: "1",
      icon: <Home className="h-8 w-8 text-amber-600" />,
      title: "Property Investment",
      description: "Invest in property worth AED 2M or more in designated freehold areas",
      duration: "1-4 weeks",
      requirements: [
        "Minimum AED 2M investment",
        "Freehold area property",
        "Property deed registration",
        "Payment completion",
      ],
    },
    {
      step: "2",
      icon: <FileText className="h-8 w-8 text-amber-600" />,
      title: "Document Preparation",
      description: "Gather and prepare all required documents for the application",
      duration: "1-2 weeks",
      requirements: ["Valid passport (6+ months)", "Property ownership deed", "Bank statements", "Medical insurance"],
    },
    {
      step: "3",
      icon: <CreditCard className="h-8 w-8 text-amber-600" />,
      title: "Application Submission",
      description: "Submit Golden Visa application through official channels",
      duration: "1 week",
      requirements: ["Online application form", "Document upload", "Fee payment (AED 2,800)", "Biometric appointment"],
    },
    {
      step: "4",
      icon: <CheckCircle className="h-8 w-8 text-amber-600" />,
      title: "Processing & Approval",
      description: "Application review and approval by UAE authorities",
      duration: "2-4 weeks",
      requirements: ["Background verification", "Document authentication", "Property verification", "Final approval"],
    },
    {
      step: "5",
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Visa Issuance",
      description: "Receive your Golden Visa and Emirates ID",
      duration: "1 week",
      requirements: ["Visa stamping", "Emirates ID application", "Medical examination", "Final documentation"],
    },
    {
      step: "6",
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Family Sponsorship",
      description: "Add family members to your Golden Visa (optional)",
      duration: "2-3 weeks",
      requirements: ["Family member documents", "Relationship proof", "Additional fees", "Medical examinations"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Application Process
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">Simple 6-Step Golden Visa Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes obtaining your UAE Golden Visa straightforward and stress-free.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow relative">
                <CardContent className="p-8">
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>

                  <div className="pt-4 space-y-4">
                    <div className="flex justify-center">{step.icon}</div>
                    <h3 className="text-xl font-bold text-navy-900 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center">{step.description}</p>

                    <div className="space-y-2">
                      <div className="text-center">
                        <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                          Duration: {step.duration}
                        </Badge>
                      </div>
                      <ul className="space-y-2">
                        {step.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Ready to Start Your Golden Visa Journey?</h3>
              <p className="text-gray-600 mb-6">
                Let me guide you through every step of the process and ensure your application is successful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Start Application Process
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  Download Process Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
