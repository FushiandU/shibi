"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, TrendingUp, Calendar, ArrowRight, Heart, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export function PropertyShowcase() {
  const [activeFilter, setActiveFilter] = useState("all")
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

  const filters = [
    { id: "all", label: "All Properties" },
    { id: "apartment", label: "Apartments" },
    { id: "villa", label: "Villas" },
    { id: "commercial", label: "Commercial" },
    { id: "off-plan", label: "Off-Plan" },
    { id: "ready", label: "Ready" },
  ]

  const filteredProperties = properties.filter((property) => {
    if (activeFilter === "all") return true
    if (activeFilter === "off-plan" || activeFilter === "ready") {
      return (property.status || property.status) === activeFilter
    }
    return (property.type || property.type) === activeFilter
  })

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-amber-600 border-amber-600">
            Featured Properties
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Premium Investment Opportunities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover handpicked properties with exceptional ROI potential in Dubai's most sought-after locations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading properties...</div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.name || property.title || "Property"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant={property.status === "Ready" || property.status === "ready" ? "default" : "secondary"}
                        className={property.status === "Ready" || property.status === "ready" ? "bg-green-600" : "bg-blue-600"}
                      >
                        {property.status === "Ready" || property.status === "ready" ? "Ready" : "Off-Plan"}
                      </Badge>
                    </div>

                    {/* Popular Badge */}
                    {property.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-amber-600">Popular</Badge>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-2xl font-bold">{property.price}</div>
                      <div className="text-sm opacity-90">{property.price_per_sqft || property.pricePerSqft}</div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{property.name || property.title}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                    {property.bedrooms > 0 && (
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>{property.bedrooms} Bed</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms} Bath</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.size || property.area} sqft</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>{property.yield}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {(property.features || []).slice(0, 3).map((feature: string, index: number) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {property.features && property.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{property.features.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Developer & Completion */}
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 pt-2 border-t">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{property.handover || property.completion}</span>
                    </div>
                    <span className="font-medium">{property.developer}</span>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-2 pt-2">
                    <Link href={`/properties/${property.id}`} className="flex-1">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline">Inquire</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Explore More Investment Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Browse our complete portfolio of premium properties across Dubai's most prestigious locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/properties">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  View All Properties
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calculator">
                <Button size="lg" variant="outline">
                  Calculate Investment Returns
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
