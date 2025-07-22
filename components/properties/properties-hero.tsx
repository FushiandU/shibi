import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, TrendingUp, Award } from "lucide-react"

export function PropertiesHero() {
  const stats = [
    { icon: <TrendingUp className="h-6 w-6" />, value: "8%+", label: "Average Yield" },
    { icon: <Award className="h-6 w-6" />, value: "500+", label: "Properties Sold" },
    { icon: <MapPin className="h-6 w-6" />, value: "25+", label: "Prime Locations" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-amber-600 text-white mb-4">Premium Properties</Badge>
          <h1 className="text-5xl font-bold font-montserrat mb-6">
            Discover Dubai's <span className="text-amber-400">Premium Properties</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore exceptional investment opportunities in Dubai's most prestigious locations with guaranteed high
            returns and Golden Visa eligibility.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-amber-400 mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Input
                placeholder="Search by location, developer, or property name..."
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
            </div>
            <Select>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-amber-600 hover:bg-amber-700">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
