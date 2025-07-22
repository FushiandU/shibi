"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Plane, GraduationCap, Heart, Building, ArrowRight, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function GoldenVisaSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Long-term Residency",
      description: "5 or 10-year renewable visa with no sponsor required",
    },
    {
      icon: Users,
      title: "Family Inclusion",
      description: "Spouse, children, and parents can be included",
    },
    {
      icon: Plane,
      title: "Travel Freedom",
      description: "Multiple entry visa with no restrictions",
    },
    {
      icon: GraduationCap,
      title: "Education Benefits",
      description: "Access to world-class schools and universities",
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Premium healthcare system and insurance",
    },
    {
      icon: Building,
      title: "Business Opportunities",
      description: "100% business ownership in many sectors",
    },
  ]

  const requirements = [
    {
      category: "Real Estate Investment",
      amount: "AED 2 Million",
      description: "Purchase property worth minimum AED 2M",
      popular: true,
    },
    {
      category: "Business Investment",
      amount: "AED 2 Million",
      description: "Invest in existing or new business",
      popular: false,
    },
    {
      category: "Bank Deposit",
      amount: "AED 2 Million",
      description: "Fixed deposit for 3 years minimum",
      popular: false,
    },
  ]

  const process = [
    {
      step: 1,
      title: "Consultation",
      description: "Free consultation to assess eligibility and options",
      duration: "1 day",
    },
    {
      step: 2,
      title: "Property Selection",
      description: "Choose from pre-approved Golden Visa properties",
      duration: "1-2 weeks",
    },
    {
      step: 3,
      title: "Documentation",
      description: "Prepare and submit all required documents",
      duration: "2-3 weeks",
    },
    {
      step: 4,
      title: "Application",
      description: "Submit Golden Visa application to authorities",
      duration: "2-4 weeks",
    },
    {
      step: 5,
      title: "Approval",
      description: "Receive Golden Visa approval and Emirates ID",
      duration: "1-2 weeks",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600">
            UAE Golden Visa
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Your Gateway to UAE Residency
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Secure long-term residency in the UAE through strategic property investment. Enjoy visa-free living with
            your family in one of the world's most dynamic economies.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose UAE Golden Visa?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                The UAE Golden Visa offers unparalleled benefits for investors and their families, providing a stable
                foundation for long-term success in the region.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{benefit.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/golden-visa">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Learn More About Golden Visa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="UAE Golden Visa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-2xl font-bold mb-2">10-Year Visa</div>
                <div className="text-sm opacity-90">Renewable long-term residency</div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Requirements */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Investment Requirements</h3>
            <p className="text-gray-600 dark:text-gray-300">Multiple pathways to qualify for UAE Golden Visa</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {requirements.map((requirement, index) => (
              <Card key={index} className={`relative ${requirement.popular ? "ring-2 ring-amber-500" : ""}`}>
                {requirement.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-amber-600">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 text-center space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{requirement.category}</h4>
                    <div className="text-3xl font-bold text-amber-600 mb-2">{requirement.amount}</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{requirement.description}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Eligible for 10-year visa</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Golden Visa Process</h3>
            <p className="text-gray-600 dark:text-gray-300">Simple 5-step process to secure your UAE residency</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-200 dark:bg-amber-800 hidden lg:block" />

            <div className="space-y-8">
              {process.map((step, index) => (
                <div
                  key={step.step}
                  className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">{step.description}</p>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-amber-600" />
                              <span className="text-sm text-amber-600 font-medium">{step.duration}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-4 h-4 bg-amber-600 rounded-full border-4 border-white dark:border-gray-900 relative z-10" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Start Your Golden Visa Journey Today</h3>
              <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                Book a free consultation to explore your Golden Visa options and discover the perfect property
                investment for your residency requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/properties?filter=golden-visa">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
                  >
                    View Golden Visa Properties
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
