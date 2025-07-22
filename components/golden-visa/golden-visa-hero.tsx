import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Shield, CheckCircle } from "lucide-react"

export function GoldenVisaHero() {
  const highlights = [
    { icon: <Clock className="h-6 w-6" />, text: "5-10 Year Residency" },
    { icon: <Users className="h-6 w-6" />, text: "Family Sponsorship" },
    { icon: <Shield className="h-6 w-6" />, text: "No Sponsor Required" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "95% Success Rate" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <Badge className="bg-amber-600 text-white mb-4">UAE Golden Visa</Badge>
              <h1 className="text-5xl font-bold font-montserrat mb-6">
                Secure Your <span className="text-amber-400">UAE Golden Visa</span> Through Property Investment
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Obtain long-term UAE residency for you and your family through strategic property investment. Enjoy the
                benefits of living in one of the world's most dynamic economies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-amber-400">{highlight.icon}</div>
                  <span className="text-gray-300">{highlight.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Start Your Application
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
              >
                Download Guide
              </Button>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Golden Visa Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Minimum Investment:</span>
                  <span className="font-bold text-amber-400">AED 2M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Visa Duration:</span>
                  <span className="font-bold text-amber-400">5-10 Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Processing Time:</span>
                  <span className="font-bold text-amber-400">4-6 Weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Success Rate:</span>
                  <span className="font-bold text-amber-400">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Family Members:</span>
                  <span className="font-bold text-amber-400">Included</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-gray-300 mb-4">
                  Get a free eligibility assessment and personalized guidance from Dubai's leading Golden Visa expert.
                </p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">Check Eligibility</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
