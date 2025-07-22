import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, DollarSign, Shield, Clock } from "lucide-react"

export function GoldenVisaRequirements() {
  const eligibilityRequirements = [
    {
      icon: <DollarSign className="h-6 w-6 text-emerald-600" />,
      title: "Property Investment",
      requirement: "Minimum AED 2M investment in freehold property",
      details: [
        "Residential or commercial property",
        "Must be in designated freehold areas",
        "Full ownership required",
      ],
      met: true,
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-600" />,
      title: "Clean Background",
      requirement: "No criminal record and good financial standing",
      details: ["Police clearance certificate", "No bankruptcy history", "Good credit standing"],
      met: true,
    },
    {
      icon: <FileText className="h-6 w-6 text-emerald-600" />,
      title: "Valid Documentation",
      requirement: "Valid passport and required supporting documents",
      details: ["Passport valid for 6+ months", "Attested documents", "Medical insurance"],
      met: true,
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-600" />,
      title: "Residency Commitment",
      requirement: "Visit UAE at least once every 6 months",
      details: ["Maintain residency status", "Regular UAE visits", "Comply with visa conditions"],
      met: true,
    },
  ]

  const documentChecklist = [
    { document: "Valid Passport", required: true, notes: "Minimum 6 months validity" },
    { document: "Property Ownership Deed", required: true, notes: "Registered with Dubai Land Department" },
    { document: "Bank Statements", required: true, notes: "Last 6 months" },
    { document: "Medical Insurance", required: true, notes: "UAE-approved insurance" },
    { document: "Police Clearance Certificate", required: true, notes: "From country of residence" },
    { document: "Passport Photos", required: true, notes: "Recent colored photos" },
    { document: "Marriage Certificate", required: false, notes: "If applying for spouse" },
    { document: "Birth Certificates", required: false, notes: "For children under 25" },
    { document: "Educational Certificates", required: false, notes: "Attested copies" },
  ]

  const investmentOptions = [
    {
      type: "Residential Property",
      minInvestment: "AED 2M",
      visaDuration: "5 Years",
      benefits: ["Family sponsorship", "Rental income", "Capital appreciation"],
      popular: true,
    },
    {
      type: "Commercial Property",
      minInvestment: "AED 2M",
      visaDuration: "5 Years",
      benefits: ["Business income", "Commercial rental", "Investment diversification"],
      popular: false,
    },
    {
      type: "Multiple Properties",
      minInvestment: "AED 2M+",
      visaDuration: "10 Years",
      benefits: ["Portfolio diversification", "Higher returns", "Extended visa"],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Requirements & Eligibility
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">
            Golden Visa Requirements Made Simple
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the requirements is the first step to securing your UAE Golden Visa through property
            investment.
          </p>
        </div>

        {/* Eligibility Requirements */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Eligibility Requirements</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {eligibilityRequirements.map((req, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{req.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-navy-900 mb-2">{req.title}</h4>
                      <p className="text-gray-600 mb-4">{req.requirement}</p>
                      <ul className="space-y-2">
                        {req.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                            {detail}
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

        {/* Investment Options */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Investment Options</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {investmentOptions.map((option, index) => (
              <Card
                key={index}
                className={`border-none shadow-lg hover:shadow-xl transition-shadow ${
                  option.popular ? "ring-2 ring-amber-600" : ""
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-amber-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-navy-900">{option.type}</CardTitle>
                  <div className="text-3xl font-bold text-amber-600 mt-2">{option.minInvestment}</div>
                  <Badge variant="outline" className="text-emerald-600 border-emerald-600 mt-2">
                    {option.visaDuration} Visa
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      option.popular ? "bg-amber-600 hover:bg-amber-700" : "bg-navy-900 hover:bg-navy-800"
                    } text-white`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Document Checklist */}
        <div>
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Required Documents Checklist</h3>
          <Card className="shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                {documentChecklist.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      {doc.required ? (
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                      ) : (
                        <div className="h-5 w-5 border-2 border-gray-300 rounded-full" />
                      )}
                      <div>
                        <span className="font-semibold text-navy-900">{doc.document}</span>
                        {doc.required && <Badge className="ml-2 bg-red-100 text-red-600 text-xs">Required</Badge>}
                        {!doc.required && <Badge className="ml-2 bg-gray-100 text-gray-600 text-xs">Optional</Badge>}
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">{doc.notes}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <h4 className="text-lg font-bold text-navy-900 mb-4">Need Help with Documentation?</h4>
                <p className="text-gray-600 mb-6">
                  I'll guide you through the entire documentation process and ensure everything is properly prepared.
                </p>
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Get Documentation Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
