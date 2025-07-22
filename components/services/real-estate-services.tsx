import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, TrendingUp, Award, Users, FileText, Calculator, Eye, Headphones } from "lucide-react"

export function RealEstateServices() {
  const services = [
    {
      icon: <Building className="h-8 w-8 text-amber-600" />,
      title: "Property Investment Consultation",
      description: "Personalized investment strategies based on your goals, budget, and risk tolerance.",
      features: [
        "Market analysis and trends",
        "Property selection guidance",
        "Investment portfolio planning",
        "Risk assessment and mitigation",
      ],
      price: "Free Initial Consultation",
      duration: "60 minutes",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
      title: "ROI Analysis & Forecasting",
      description: "Comprehensive financial analysis to maximize your investment returns.",
      features: [
        "Detailed ROI calculations",
        "Cash flow projections",
        "Market appreciation forecasts",
        "Tax optimization strategies",
      ],
      price: "AED 500",
      duration: "2-3 business days",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Golden Visa Assistance",
      description: "Complete support for UAE Golden Visa applications through property investment.",
      features: ["Eligibility assessment", "Document preparation", "Application submission", "Follow-up and support"],
      price: "AED 2,500",
      duration: "4-6 weeks",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Property Management",
      description: "Full-service property management for rental income optimization.",
      features: [
        "Tenant sourcing and screening",
        "Rent collection and reporting",
        "Maintenance coordination",
        "Legal compliance management",
      ],
      price: "5% of rental income",
      duration: "Ongoing",
    },
    {
      icon: <FileText className="h-8 w-8 text-amber-600" />,
      title: "Legal & Documentation",
      description: "Expert assistance with all legal aspects of property transactions.",
      features: [
        "Contract review and negotiation",
        "Due diligence support",
        "Title deed processing",
        "Mortgage facilitation",
      ],
      price: "AED 1,500",
      duration: "1-2 weeks",
    },
    {
      icon: <Calculator className="h-8 w-8 text-amber-600" />,
      title: "Financing Solutions",
      description: "Access to competitive mortgage rates and financing options.",
      features: ["Mortgage pre-approval", "Bank negotiations", "Rate comparisons", "Application support"],
      price: "No fee (bank commission)",
      duration: "2-4 weeks",
    },
    {
      icon: <Eye className="h-8 w-8 text-amber-600" />,
      title: "Virtual Property Tours",
      description: "Immersive virtual tours for international investors.",
      features: [
        "360° property walkthroughs",
        "Live video consultations",
        "Detailed property reports",
        "Neighborhood insights",
      ],
      price: "Complimentary",
      duration: "30 minutes",
    },
    {
      icon: <Headphones className="h-8 w-8 text-amber-600" />,
      title: "After-Sales Support",
      description: "Ongoing support after property purchase for peace of mind.",
      features: ["Handover assistance", "Utility connections", "Insurance guidance", "Resale support"],
      price: "Included with purchase",
      duration: "Lifetime",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Real Estate Services
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">
            Complete Real Estate Investment Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to ongoing management, I provide comprehensive support for your Dubai property
            investments.
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
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 mt-2 flex-shrink-0" />
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
