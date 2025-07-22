import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Shield, CheckCircle, Briefcase, Plane, Home, Heart } from "lucide-react"

export function GoldenVisaBenefits() {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      title: "5-10 Year Residency",
      description: "Long-term renewable visa with multiple entry privileges",
      details: ["Renewable every 5-10 years", "Multiple entry visa", "No need to renew frequently"],
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Family Sponsorship",
      description: "Include spouse, children, and parents in your application",
      details: ["Spouse inclusion", "Children under 25", "Parents over 60", "Domestic helpers"],
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "No Sponsor Required",
      description: "Complete independence from local sponsors or employers",
      details: ["Full independence", "No employer dependency", "Self-sponsored status", "Business freedom"],
    },
    {
      icon: <Briefcase className="h-8 w-8 text-amber-600" />,
      title: "Business Setup Rights",
      description: "Establish and operate businesses in the UAE",
      details: ["100% business ownership", "Multiple business licenses", "Free zone access", "Mainland operations"],
    },
    {
      icon: <Plane className="h-8 w-8 text-amber-600" />,
      title: "Travel Freedom",
      description: "Stay outside UAE for extended periods without losing residency",
      details: ["6 months abroad allowed", "No exit permit required", "Global mobility", "Visa-free travel benefits"],
    },
    {
      icon: <Home className="h-8 w-8 text-amber-600" />,
      title: "Property Rights",
      description: "Full property ownership rights in designated areas",
      details: ["Freehold ownership", "Inheritance rights", "Rental income", "Capital appreciation"],
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-amber-600" />,
      title: "Banking & Finance",
      description: "Access to UAE banking and financial services",
      details: ["Bank account opening", "Credit facilities", "Investment products", "Insurance services"],
    },
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      title: "Healthcare & Education",
      description: "Access to world-class healthcare and education",
      details: ["Health insurance eligibility", "School admissions", "University access", "Medical facilities"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Golden Visa Benefits
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">
            Unlock Exclusive Benefits with UAE Golden Visa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive advantages that come with UAE Golden Visa residency through property investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
