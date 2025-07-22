import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Phone, MessageCircle, Clock, CheckCircle, Star } from "lucide-react"

export function ConsultationCTA() {
  const contactMethods = [
    {
      icon: <Calendar className="h-6 w-6 text-amber-600" />,
      title: "Book Online",
      description: "Schedule your consultation using our online calendar",
      action: "Book Now",
      popular: true,
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Call Direct",
      description: "Speak with me directly for immediate assistance",
      action: "+971 50 123 4567",
      popular: false,
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-emerald-600" />,
      title: "WhatsApp",
      description: "Quick questions? Message me on WhatsApp",
      action: "Chat Now",
      popular: false,
    },
  ]

  const guarantees = [
    "Free initial consultation (30 minutes)",
    "No obligation to proceed",
    "Confidential discussion",
    "Personalized recommendations",
    "Same-day response guarantee",
  ]

  const urgencyFactors = [
    {
      icon: <Clock className="h-5 w-5 text-red-500" />,
      text: "Market conditions are changing rapidly",
    },
    {
      icon: <Star className="h-5 w-5 text-amber-500" />,
      text: "Limited slots available this month",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-emerald-500" />,
      text: "Early bird pricing ends soon",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-amber-400 border-amber-400 mb-4">
              Ready to Start?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat mb-6">
              Take the First Step Towards
              <span className="block text-amber-400">Investment Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Don't let another opportunity pass by. Book your consultation today and start building your Dubai real
              estate portfolio with expert guidance.
            </p>
          </div>

          {/* Urgency Factors */}
          <Card className="border-none shadow-xl bg-red-50 dark:bg-red-900/20 mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {urgencyFactors.map((factor, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {factor.icon}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{factor.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`border-none shadow-xl relative ${method.popular ? "ring-2 ring-amber-400" : ""} dark:bg-gray-800`}
              >
                {method.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{method.description}</p>
                  <Button
                    className={`w-full ${method.popular ? "bg-amber-600 hover:bg-amber-700" : ""}`}
                    variant={method.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Guarantees */}
          <Card className="border-none shadow-xl bg-emerald-50 dark:bg-emerald-900/20 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white text-center mb-6">
                Our Commitment to You
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{guarantee}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <Card className="border-none shadow-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Don't Wait - Markets Don't Wait</h3>
              <p className="text-xl mb-8 opacity-90">
                Every day you delay is a potential opportunity missed. Start your investment journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Free Consultation Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg bg-transparent"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call +971 50 123 4567
                </Button>
              </div>
              <p className="text-sm mt-6 opacity-75">
                Available 7 days a week • Response within 2 hours • Free consultation included
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
