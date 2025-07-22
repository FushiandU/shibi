import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, Download } from "lucide-react"

export function AboutCTA() {
  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat mb-6">
            Ready to Start Your <span className="text-amber-400">Success Story</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how my expertise can help you achieve your real estate investment and business goals in Dubai.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <Calendar className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Schedule Consultation</h3>
              <p className="text-gray-300 mb-6">Book a free 30-minute consultation to discuss your investment goals.</p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Book Now</Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-300 mb-6">Have questions? Send me a message and I'll get back to you promptly.</p>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
              >
                Contact Me
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <Download className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Download Portfolio</h3>
              <p className="text-gray-300 mb-6">Get my comprehensive investment guide and success stories.</p>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
              >
                Download
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
