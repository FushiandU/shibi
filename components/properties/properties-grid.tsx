"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Eye, Download, Calendar, Heart, Share2 } from "lucide-react"

export function PropertiesGrid() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/properties")
        const data = await res.json()
        setProperties(Array.isArray(data) ? data : [])
      } catch (e) {
        setProperties([])
      } finally {
        setLoading(false)
      }
    }
    fetchProperties()
  }, [])

  const toggleFavorite = (propertyId: string) => {
    setFavorites((prev) => (prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-2">Available Properties</h2>
            <p className="text-gray-600">{properties.length} properties found</p>
          </div>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Highest Yield</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading properties...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.name || property.title || "Property"}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <Badge className={`${property.status === "Ready" || property.status === "ready" ? "bg-emerald-600" : "bg-blue-600"} text-white`}>
                      {property.status}
                    </Badge>
                    <Badge className="bg-amber-600 text-white">{property.yield} Yield</Badge>
                    {property.golden_visa && <Badge className="bg-purple-600 text-white text-xs">Golden Visa</Badge>}
                  </div>
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button
                      onClick={() => toggleFavorite(property.id)}
                      className={`p-2 rounded-full ${
                        favorites.includes(property.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/80 text-gray-600 hover:bg-white"
                      } transition-colors`}
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-full bg-white/80 text-gray-600 hover:bg-white transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-1">{property.name || property.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </div>
                    <p className="text-sm text-gray-500">{property.developer}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Price:</span>
                      <div className="font-semibold text-navy-900">{property.price}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Per sq ft:</span>
                      <div className="font-semibold text-navy-900">{property.price_per_sqft || property.pricePerSqft}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Type:</span>
                      <div className="font-semibold text-navy-900">{property.type}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Size:</span>
                      <div className="font-semibold text-navy-900">{property.size}</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-600 text-sm">Handover:</span>
                    <div className="font-semibold text-navy-900">{property.handover || property.completion}</div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {(property.features || []).slice(0, 3).map((feature: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {property.features && property.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{property.features.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-amber-600 hover:bg-amber-700">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <Calendar className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="bg-transparent">
            Load More Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
