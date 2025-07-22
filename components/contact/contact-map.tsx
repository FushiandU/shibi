import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Clock, Car } from "lucide-react"

export function ContactMap() {
  const nearbyLandmarks = [
    { name: "Dubai Mall", distance: "5 min drive", icon: "🛍️" },
    { name: "Burj Khalifa", distance: "7 min drive", icon: "🏢" },
    { name: "Dubai Metro", distance: "2 min walk", icon: "🚇" },
    { name: "DIFC", distance: "3 min drive", icon: "🏦" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Visit Our Office
          </Badge>
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Conveniently Located in Business Bay</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our office is strategically located in the heart of Dubai's business district, easily accessible by car,
            metro, or taxi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=500&width=500&text=Dubai+Business+Bay+Map"
                alt="Office Location Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Office Address</h3>
                    <p className="text-gray-600 mb-1">Silver Tower</p>
                    <p className="text-gray-600 mb-1">Business Bay</p>
                    <p className="text-gray-600 mb-3">Dubai, United Arab Emirates</p>
                    <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                      Prime Location
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Nearby Landmarks</h3>
                <div className="grid grid-cols-2 gap-4">
                  {nearbyLandmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-2xl">{landmark.icon}</span>
                      <div>
                        <p className="font-semibold text-navy-900 text-sm">{landmark.name}</p>
                        <p className="text-gray-600 text-xs">{landmark.distance}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Getting Here</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Car className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">By Car</p>
                      <p className="text-gray-600 text-xs">Valet parking available</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <span className="text-amber-600">🚇</span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">By Metro</p>
                      <p className="text-gray-600 text-xs">Business Bay Station - 2 min walk</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <span className="text-amber-600">🚕</span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">By Taxi/Uber</p>
                      <p className="text-gray-600 text-xs">Easy pickup and drop-off</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-amber-600" />
                  <h3 className="text-xl font-bold text-navy-900">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday:</span>
                    <span className="font-semibold text-navy-900">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday:</span>
                    <span className="font-semibold text-navy-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday:</span>
                    <span className="font-semibold text-navy-900">By Appointment</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Schedule Office Visit</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
