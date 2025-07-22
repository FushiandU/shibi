import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, ShoppingCart, Award, Users } from "lucide-react"

export function ServicesHero() {
  const serviceStats = [
    { icon: <Building className="h-6 w-6" />, value: "500+", label: "Properties Sold" },
    { icon: <ShoppingCart className="h-6 w-6" />, value: "200+", label: "Businesses Launched" },
    { icon: <Award className="h-6 w-6" />, value: "95%", label: "Success Rate" },
    { icon: <Users className="h-6 w-6" />, value: "1000+", label: "Satisfied Clients" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-amber-600 text-white mb-4">Our Services</Badge>
          <h1 className="text-5xl font-bold font-montserrat mb-6">
            Comprehensive Solutions for <span className="text-amber-400">Your Success</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From tax-free real estate investments to e-commerce business growth, I provide end-to-end solutions tailored
            to your unique needs in the UAE market.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Real Estate Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
            >
              E-commerce Consultation
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceStats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center text-amber-400 mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-amber-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
