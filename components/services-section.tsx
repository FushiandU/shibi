"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Award, ShoppingCart, TrendingUp, Users, FileText, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Building,
      title: "Real Estate Investment",
      description: "Expert guidance on Dubai property investments with guaranteed ROI strategies.",
      features: ["Off-plan properties", "Ready properties", "Commercial investments", "Portfolio management"],
      price: "From AED 5,000",
      popular: false,
      href: "/services/real-estate",
    },
    {
      icon: Award,
      title: "Golden Visa Assistance",
      description: "Complete support for UAE Golden Visa through strategic property investments.",
      features: ["Visa consultation", "Property selection", "Documentation", "Application support"],
      price: "From AED 10,000",
      popular: true,
      href: "/services/golden-visa",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Consulting",
      description: "Scale your online business with proven strategies in the UAE market.",
      features: ["Business setup", "Digital marketing", "Platform optimization", "Growth strategies"],
      price: "From AED 15,000",
      popular: false,
      href: "/services/ecommerce",
    },
  ]

  const additionalServices = [
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Comprehensive market research and investment analysis",
    },
    {
      icon: Users,
      title: "Property Management",
      description: "Full-service property management and rental optimization",
    },
    {
      icon: FileText,
      title: "Legal Support",
      description: "Complete legal assistance for property transactions",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Comprehensive Investment Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From property investments to business growth, we provide end-to-end solutions tailored to your financial
            goals in Dubai's dynamic market.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                service.popular ? "ring-2 ring-amber-500 scale-105" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{service.price}</div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>

                  <Link href={service.href}>
                    <Button
                      className={`w-full ${
                        service.popular
                          ? "bg-amber-600 hover:bg-amber-700"
                          : "bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                      }`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Additional Services</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive support services to ensure your investment success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto">
                    <service.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your investment goals and discover the perfect opportunities in
              Dubai's thriving market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link href="/calculator">
                <Button size="lg" variant="outline">
                  Calculate ROI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
