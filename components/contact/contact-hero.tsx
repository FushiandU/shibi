import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactHero() {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-amber-600" />,
      title: "Phone",
      value: "+971 55 799 4258",
      description: "Available 9 AM - 8 PM GST",
    },
    {
      icon: <Mail className="h-6 w-6 text-amber-600" />,
      title: "Email",
      value: "shibikabeer@gmail.com",
      description: "Response within 2 hours",
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-600" />,
      title: "Office",
      value: "Silver Tower, Business Bay",
      description: "Dubai, UAE",
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-600" />,
      title: "Hours",
      value: "Mon - Sat: 9 AM - 8 PM",
      description: "Sunday: By appointment",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-amber-600 text-white mb-4">Get In Touch</Badge>
          <h1 className="text-5xl font-bold font-montserrat mb-6">
            Let's Start Your <span className="text-amber-400">Success Journey</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to invest in Dubai's thriving real estate market or launch your e-commerce business? I'm here to guide
            you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-amber-400 font-semibold mb-1">{method.value}</p>
                <p className="text-gray-300 text-sm">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
