import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, Building, Award, ShoppingCart, FileText, Users } from "lucide-react"

export function BlogCategories() {
  const categories = [
    {
      name: "Market Analysis",
      count: 28,
      icon: <TrendingUp className="h-4 w-4" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Investment Tips",
      count: 35,
      icon: <Building className="h-4 w-4" />,
      color: "bg-amber-100 text-amber-600",
    },
    { name: "Golden Visa", count: 22, icon: <Award className="h-4 w-4" />, color: "bg-purple-100 text-purple-600" },
    {
      name: "Business",
      count: 18,
      icon: <ShoppingCart className="h-4 w-4" />,
      color: "bg-emerald-100 text-emerald-600",
    },
    { name: "Legal Updates", count: 15, icon: <FileText className="h-4 w-4" />, color: "bg-red-100 text-red-600" },
    { name: "Success Stories", count: 12, icon: <Users className="h-4 w-4" />, color: "bg-indigo-100 text-indigo-600" },
  ]

  const popularTags = [
    "Dubai Property",
    "Investment",
    "ROI",
    "Off-Plan",
    "Rental Yields",
    "Business Bay",
    "Downtown Dubai",
    "Palm Jumeirah",
    "DIFC",
    "Marina",
  ]

  const recentPosts = [
    {
      title: "2025 Property Market Predictions",
      date: "Jan 15, 2025",
      views: "2.1K",
    },
    {
      title: "Golden Visa Requirements Update",
      date: "Jan 12, 2025",
      views: "1.8K",
    },
    {
      title: "Best Areas for Rental Income",
      date: "Jan 10, 2025",
      views: "3.2K",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Search */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg text-navy-900">Search Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search topics..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg text-navy-900">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${category.color}`}>{category.icon}</div>
                <span className="font-medium text-navy-900">{category.name}</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg text-navy-900">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-amber-50 hover:border-amber-600 hover:text-amber-600 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg text-navy-900">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
              <h4 className="font-semibold text-navy-900 mb-2 hover:text-amber-600 transition-colors cursor-pointer">
                {post.title}
              </h4>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{post.date}</span>
                <span>{post.views} views</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="shadow-lg bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-bold text-navy-900 mb-3">Stay Updated</h3>
          <p className="text-gray-600 text-sm mb-4">Get the latest market insights delivered to your inbox weekly.</p>
          <Button className="w-full bg-amber-600 hover:bg-amber-700 mb-3">Subscribe Now</Button>
          <p className="text-xs text-gray-500">Join 5,000+ investors getting weekly updates</p>
        </CardContent>
      </Card>
    </div>
  )
}
