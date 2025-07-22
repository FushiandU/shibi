import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MessageCircle, Download, Phone, CheckCircle, Star } from "lucide-react"

export function GoldenVisaCTA() {
  const guarantees = ["95% success rate", "Full documentation support", "End-to-end guidance", "Money-back guarantee*"]

  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-amber-600 text-white mb-4">Ready to Apply?</Badge>
          <h2 className="text-4xl font-bold font-montserrat mb-6">
            Start Your <span className="text-amber-400">Golden Visa Journey</span> Today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take the first step towards UAE residency with expert guidance and guaranteed results. Your new life in
            Dubai awaits.
          </p>
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              <span className="text-gray-300">{guarantee}</span>
            </div>
          ))}
        </div>

        {/* CTA Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <Calendar className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Free Consultation</h3>
              <p className="text-gray-300 mb-6 text-sm">
                30-minute consultation to assess your eligibility and discuss your options.
              </p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Book Now</Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">WhatsApp Support</h3>
              <p className="text-gray-300 mb-6 text-sm">Get instant answers to your Golden Visa questions.</p>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
              >
                Chat Now
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <Download className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Complete Guide</h3>
              <p className="text-gray-300 mb-6 text-sm">Download comprehensive Golden Visa guide and checklist.</p>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
              >
                Download
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <Phone className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Call Direct</h3>
              <p className="text-gray-300 mb-6 text-sm">Speak directly with me for immediate assistance.</p>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
              >
                +971 55 799 4258
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA */}
        <Card className="bg-gradient-to-r from-amber-600 to-amber-700 border-none max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <Star className="h-8 w-8 text-white mr-2" />
              <h3 className="text-3xl font-bold text-white">Special Launch Offer</h3>
              <Star className="h-8 w-8 text-white ml-2" />
            </div>
            <p className="text-amber-100 text-xl mb-8">Book your Golden Visa consultation this month and receive:</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">FREE</div>
                <div className="text-amber-100">Property Portfolio Review</div>
                <div className="text-sm text-amber-200">(Worth AED 500)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">FREE</div>
                <div className="text-amber-100">Document Preparation</div>
                <div className="text-sm text-amber-200">(Worth AED 1,000)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">FREE</div>
                <div className="text-amber-100">Application Tracking</div>
                <div className="text-sm text-amber-200">(Worth AED 300)</div>
              </div>
            </div>
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 text-xl px-12 py-4">
              Claim Your Golden Visa Package - AED 1,800 Value FREE
            </Button>
            <p className="text-amber-200 text-sm mt-4">*Limited time offer. Terms and conditions apply.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
