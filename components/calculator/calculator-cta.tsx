import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Download, MessageCircle, Calendar } from "lucide-react"

export function CalculatorCTA() {
  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-amber-600 text-white mb-4">Take Action</Badge>
          <h2 className="text-4xl font-bold font-montserrat mb-6">
            Ready to <span className="text-amber-400">Invest Smart</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Use our calculator results to make informed investment decisions. Get personalized guidance from Dubai's
            leading property expert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <Download className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Get Detailed Report</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Download a comprehensive investment analysis report based on your calculations.
              </p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Download Report</Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Discuss Results</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Get expert interpretation of your calculations and personalized investment advice.
              </p>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
              >
                Chat with Expert
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <Calendar className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Book Consultation</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Schedule a free consultation to discuss your investment strategy and property options.
              </p>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
              >
                Schedule Call
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA */}
        <Card className="bg-gradient-to-r from-amber-600 to-amber-700 border-none max-w-3xl mx-auto">
          <CardContent className="p-12 text-center">
            <Calculator className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">Turn Calculations into Reality</h3>
            <p className="text-amber-100 text-xl mb-8">
              Ready to invest in Dubai's thriving property market? Let me help you find the perfect investment
              opportunity.
            </p>
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 text-xl px-12 py-4">
              Find My Perfect Investment
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
