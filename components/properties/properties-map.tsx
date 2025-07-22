"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"

export function PropertiesMap() {
  const mapLocations = [
    { name: "Downtown Dubai", properties: 45, avgPrice: "AED 2.5M", yield: "7-9%" },
    { name: "Dubai Marina", properties: 38, avgPrice: "AED 2.8M", yield: "8-10%" },
    { name: "Palm Jumeirah", properties: 12, avgPrice: "AED 15M", yield: "6-8%" },
    { name: "Business Bay", properties: 52, avgPrice: "AED 1.8M", yield: "8-11%" },
    { name: "Dubai Hills", properties: 28, avgPrice: "AED 3.2M", yield: "7-9%" },
    { name: "JBR", properties: 31, avgPrice: "AED 2.1M", yield: "9-11%" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Property Locations
          </Badge>
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Explore Dubai's Prime Locations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover investment opportunities across Dubai's most sought-after neighborhoods
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Dubai Properties Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  <Navigation className="h-4 w-4 mr-2" />
                  View Interactive Map
                </Button>
              </div>
            </div>
          </div>

          {/* Location Stats */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Popular Investment Areas</h3>
            {mapLocations.map((location, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-amber-600" />
                      <h4 className="text-lg font-semibold text-navy-900">{location.name}</h4>
                    </div>
                    <Badge className="bg-emerald-600 text-white">{location.yield} Yield</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Available Properties:</span>
                      <div className="font-semibold text-navy-900">{location.properties}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Average Price:</span>
                      <div className="font-semibold text-navy-900">{location.avgPrice}</div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                    View Properties in {location.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
