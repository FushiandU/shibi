import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, Phone, Mail } from "lucide-react"

export function ServicesCTA() {
  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat mb-6">
            Ready to Transform Your <span className="text-amber-400">Investment Journey</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take the first step towards financial freedom and business success in Dubai. Let's discuss how I can help
            you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <Calendar className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Book Consultation</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Schedule a free 30-minute consultation to discuss your goals.
              </p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Schedule Now</Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Live Chat</h3>
              <p className="text-gray-300 mb-6 text-sm">Get instant answers to your questions through our live chat.</p>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
              >
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <Phone className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Call Direct</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Speak directly with me for immediate assistance and guidance.
              </p>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
              >
                +971 55 799 4258
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <CardContent className="p-8">
              <Mail className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Send Email</h3>
              <p className="text-gray-300 mb-6 text-sm">Send me a detailed message about your requirements.</p>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-amber-600 to-amber-700 border-none max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Special Offer for New Clients</h3>
              <p className="text-amber-100 mb-6">
                Book your consultation this month and receive a complimentary market analysis report worth AED 500.
              </p>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                Claim Your Free Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
