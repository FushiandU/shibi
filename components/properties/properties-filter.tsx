"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Filter, X } from "lucide-react"

export function PropertiesFilter() {
  const [priceRange, setPriceRange] = useState([1000000, 50000000])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const locations = ["Downtown Dubai", "Dubai Marina", "Palm Jumeirah", "Business Bay", "Dubai Hills", "JBR", "DIFC"]
  const developers = ["Emaar", "Omniyat", "Damac", "Nakheel", "Dubai Properties", "Meraas"]
  const amenities = ["Pool", "Gym", "Parking", "Beach Access", "Golf Course", "Metro Access"]

  const addFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter))
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
    setPriceRange([1000000, 50000000])
  }

  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-semibold text-navy-900">Filter Properties</h3>
              </div>
              {selectedFilters.length > 0 && (
                <Button variant="outline" size="sm" onClick={clearAllFilters}>
                  Clear All
                </Button>
              )}
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <Select onValueChange={(value) => addFilter(`Location: ${value}`)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Developer</label>
                <Select onValueChange={(value) => addFilter(`Developer: ${value}`)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select developer" />
                  </SelectTrigger>
                  <SelectContent>
                    {developers.map((developer) => (
                      <SelectItem key={developer} value={developer}>
                        {developer}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                <Select onValueChange={(value) => addFilter(`Bedrooms: ${value}`)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="1">1 Bedroom</SelectItem>
                    <SelectItem value="2">2 Bedrooms</SelectItem>
                    <SelectItem value="3">3 Bedrooms</SelectItem>
                    <SelectItem value="4+">4+ Bedrooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                <Select onValueChange={(value) => addFilter(`Amenity: ${value}`)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select amenity" />
                  </SelectTrigger>
                  <SelectContent>
                    {amenities.map((amenity) => (
                      <SelectItem key={amenity} value={amenity}>
                        {amenity}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Price Range: AED {priceRange[0].toLocaleString()} - AED {priceRange[1].toLocaleString()}
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={50000000}
                min={500000}
                step={100000}
                className="w-full"
              />
            </div>

            {selectedFilters.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Active Filters:</label>
                <div className="flex flex-wrap gap-2">
                  {selectedFilters.map((filter, index) => (
                    <Badge key={index} variant="outline" className="text-amber-600 border-amber-600">
                      {filter}
                      <button onClick={() => removeFilter(filter)} className="ml-2 hover:text-red-600">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
