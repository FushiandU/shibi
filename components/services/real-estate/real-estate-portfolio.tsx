"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, TrendingUp } from "lucide-react"
import Link from "next/link"

const portfolioProperties = [
  {
    id: 1,
    title: "Luxury Apartment in Downtown Dubai",
    location: "Downtown Dubai",
    price: "AED 2,500,000",
    roi: "12% Annual ROI",
    bedrooms: 2,
    bathrooms: 3,
    area: "1,200 sq ft",
    status: "Sold",
    image: "/placeholder.svg?height=300&width=400",
    description: "Premium 2-bedroom apartment with Burj Khalifa views",
  },
  {
    id: 2,
    title: "Villa in Arabian Ranches",
    location: "Arabian Ranches",
    price: "AED 4,200,000",
    roi: "15% Annual ROI",
    bedrooms: 4,
    bathrooms: 5,
    area: "3,500 sq ft",
    status: "Sold",
    image: "/placeholder.svg?height=300&width=400",
    description: "Spacious family villa with private garden and pool",
  },
  {
    id: 3,
    title: "Commercial Office in DIFC",
    location: "Dubai International Financial Centre",
    price: "AED 1,800,000",
    roi: "18% Annual ROI",
    bedrooms: 0,
    bathrooms: 2,
    area: "800 sq ft",
    status: "Sold",
    image: "/placeholder.svg?height=300&width=400",
    description: "Prime commercial space in Dubai's financial district",
  },
  {
    id: 4,
    title: "Penthouse in Marina",
    location: "Dubai Marina",
    price: "AED 6,500,000",
    roi: "14% Annual ROI",
    bedrooms: 3,
    bathrooms: 4,
    area: "2,800 sq ft",
    status: "Available",
    image: "/placeholder.svg?height=300&width=400",
    description: "Stunning penthouse with panoramic marina views",
  },
]

export function RealEstatePortfolio() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful real estate investments that have delivered exceptional returns for our
            clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioProperties.map((property) => (
            <Card key={property.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={property.status === "Sold" ? "default" : "secondary"}
                    className={property.status === "Sold" ? "bg-green-600" : "bg-[#db8102]"}
                  >
                    {property.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#db8102]/90 text-white">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {property.roi}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{property.description}</p>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
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
                    <span>{property.area}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-[#db8102]">{property.price}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#db8102] hover:bg-[#db8102]/90">
            <Link href="/properties">View All Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
