import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building } from "lucide-react"

export function CalculatorComparison() {
  const locationComparison = [
    {
      location: "Downtown Dubai",
      avgPrice: "AED 1,800/sq ft",
      rentalYield: "6-8%",
      appreciation: "8-10%",
      totalROI: "14-18%",
      icon: <Building className="h-6 w-6 text-amber-600" />,
      highlights: ["Prime location", "High demand", "Tourist attraction"],
    },
    {
      location: "Dubai Marina",
      avgPrice: "AED 1,600/sq ft",
      rentalYield: "7-9%",
      appreciation: "7-9%",
      totalROI: "14-18%",
      icon: <Building className="h-6 w-6 text-amber-600" />,
      highlights: ["Waterfront living", "High rental demand", "Established community"],
    },
    {
      location: "Business Bay",
      avgPrice: "AED 1,400/sq ft",
      rentalYield: "8-10%",
      appreciation: "6-8%",
      totalROI: "14-18%",
      icon: <Building className="h-6 w-6 text-amber-600" />,
      highlights: ["Business district", "High yields", "Growing area"],
    },
    {
      location: "Dubai Hills Estate",
      avgPrice: "AED 1,200/sq ft",
      rentalYield: "6-8%",
      appreciation: "10-12%",
      totalROI: "16-20%",
      icon: <Building className="h-6 w-6 text-amber-600" />,
      highlights: ["Family community", "Golf course", "High appreciation"],
    },
  ]

  const propertyTypes = [
    {
      type: "Studio Apartments",
      priceRange: "AED 500K - 800K",
      yield: "8-12%",
      pros: ["High rental yields", "Easy to rent", "Lower entry cost"],
      cons: ["Limited appreciation", "High turnover", "Small living space"],
    },
    {
      type: "1-2 Bedroom Apartments",
      priceRange: "AED 800K - 2M",
      yield: "7-10%",
      pros: ["Balanced returns", "Good demand", "Moderate maintenance"],
      cons: ["Moderate yields", "Competition", "Market dependent"],
    },
    {
      type: "3+ Bedroom Apartments",
      priceRange: "AED 1.5M - 5M",
      yield: "6-8%",
      pros: ["Family appeal", "Stable tenants", "Good appreciation"],
      cons: ["Lower yields", "Higher costs", "Longer vacancy periods"],
    },
    {
      type: "Villas",
      priceRange: "AED 2M - 20M+",
      yield: "5-7%",
      pros: ["High appreciation", "Luxury market", "Land ownership"],
      cons: ["Lower yields", "High maintenance", "Limited liquidity"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Market Comparison
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">Compare Investment Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use these market insights to make informed decisions about where and what to invest in Dubai.
          </p>
        </div>

        {/* Location Comparison */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Top Investment Locations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationComparison.map((location, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3">{location.icon}</div>
                  <CardTitle className="text-lg text-navy-900">{location.location}</CardTitle>
                  <Badge className="bg-emerald-600 text-white mt-2">{location.totalROI} Total ROI</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Price:</span>
                      <span className="font-semibold text-navy-900">{location.avgPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rental Yield:</span>
                      <span className="font-semibold text-navy-900">{location.rentalYield}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Appreciation:</span>
                      <span className="font-semibold text-navy-900">{location.appreciation}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <h4 className="font-semibold text-navy-900 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {location.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-700">
                          <div className="w-1 h-1 bg-amber-600 rounded-full mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Property Type Comparison */}
        <div>
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Property Type Analysis</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {propertyTypes.map((property, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-navy-900">{property.type}</CardTitle>
                    <Badge className="bg-amber-600 text-white">{property.yield} Yield</Badge>
                  </div>
                  <p className="text-gray-600">{property.priceRange}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-emerald-600 mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {property.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2 mt-2 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {property.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
