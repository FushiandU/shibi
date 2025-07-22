import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Award, Users, Star } from "lucide-react"

export function ContactInfo() {
  const achievements = [
    { icon: <Award className="h-5 w-5" />, text: "500+ Properties Sold" },
    { icon: <Users className="h-5 w-5" />, text: "1000+ Happy Clients" },
    { icon: <Star className="h-5 w-5" />, text: "95% Success Rate" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* Contact Information */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Phone</h4>
                    <p className="text-gray-600 mb-1">+971 55 799 4258</p>
                    <p className="text-sm text-gray-500">Available 9 AM - 8 PM GST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Email</h4>
                    <p className="text-gray-600 mb-1">shibikabeer@gmail.com</p>
                    <p className="text-sm text-gray-500">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Office Location</h4>
                    <p className="text-gray-600 mb-1">Silver Tower, Business Bay</p>
                    <p className="text-sm text-gray-500">Dubai, United Arab Emirates</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600 mb-1">Monday - Saturday: 9 AM - 8 PM</p>
                    <p className="text-sm text-gray-500">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Quick Actions</h3>

              <div className="space-y-4">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 justify-start">
                  <Calendar className="h-4 w-4 mr-3" />
                  Schedule Free Consultation
                </Button>

                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <MessageCircle className="h-4 w-4 mr-3" />
                  WhatsApp Me Now
                </Button>

                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Phone className="h-4 w-4 mr-3" />
                  Request Callback
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Why Choose Me?</h3>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-amber-600">{achievement.icon}</div>
                    <span className="text-gray-700">{achievement.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Badge className="bg-emerald-600 text-white mb-3">Trusted Expert</Badge>
                <p className="text-gray-600 text-sm">
                  As a second-generation UAE expat and female entrepreneur, I bring unique insights and personalized
                  service to help you succeed in Dubai's dynamic market.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="shadow-lg bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-navy-900 mb-4">Need Urgent Assistance?</h3>
              <p className="text-gray-600 mb-6">
                For time-sensitive matters or urgent property opportunities, call me directly.
              </p>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Phone className="h-4 w-4 mr-2" />
                Call Now: +971 55 799 4258
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
