import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, Calendar, Eye } from "lucide-react"

export function BlogHero() {
  const stats = [
    { icon: <TrendingUp className="h-5 w-5" />, value: "150+", label: "Articles Published" },
    { icon: <Calendar className="h-5 w-5" />, value: "Weekly", label: "New Content" },
    { icon: <Eye className="h-5 w-5" />, value: "50K+", label: "Monthly Readers" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-amber-600 text-white mb-4">Market Insights</Badge>
          <h1 className="text-5xl font-bold font-montserrat mb-6">
            Dubai Real Estate <span className="text-amber-400">Market Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay ahead of the market with expert analysis, investment strategies, and the latest trends in Dubai's
            dynamic real estate and business landscape.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search articles, topics, or keywords..."
                  className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700">Search</Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-amber-400 mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
