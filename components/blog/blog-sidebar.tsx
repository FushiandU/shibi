import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Calendar, User } from "lucide-react"

export function BlogSidebar() {
  const categories = [
    { name: "Market Analysis", count: 24 },
    { name: "Investment Tips", count: 18 },
    { name: "Golden Visa", count: 12 },
    { name: "Property Reviews", count: 15 },
    { name: "Dubai News", count: 21 },
    { name: "Legal Updates", count: 8 },
  ]

  const popularPosts = [
    {
      title: "Top 5 Areas to Invest in Dubai 2024",
      date: "Nov 15, 2024",
      views: "2.3k",
    },
    {
      title: "Golden Visa Requirements Updated",
      date: "Nov 12, 2024",
      views: "1.8k",
    },
    {
      title: "Dubai Marina vs Downtown: Investment Comparison",
      date: "Nov 10, 2024",
      views: "1.5k",
    },
    {
      title: "Off-Plan vs Ready Properties: Pros and Cons",
      date: "Nov 8, 2024",
      views: "1.2k",
    },
  ]

  const tags = [
    "Dubai Real Estate",
    "Investment",
    "Golden Visa",
    "Property Market",
    "ROI",
    "Off-Plan",
    "Rental Yield",
    "Market Trends",
    "Dubai Marina",
    "Downtown Dubai",
    "Business Bay",
    "Palm Jumeirah",
  ]

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card className="border-none shadow-lg dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-lg text-navy-900 dark:text-white">Search Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="border-none shadow-lg dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-lg text-navy-900 dark:text-white">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded cursor-pointer transition-colors"
            >
              <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
              <Badge variant="outline" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Posts */}
      <Card className="border-none shadow-lg dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-lg text-navy-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-amber-600" />
            Popular Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
              <h4 className="font-medium text-navy-900 dark:text-white text-sm mb-2 hover:text-amber-600 cursor-pointer transition-colors">
                {post.title}
              </h4>
              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {post.views} views
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tags */}
      <Card className="border-none shadow-lg dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-lg text-navy-900 dark:text-white">Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-colors text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="border-none shadow-lg bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Get the latest market insights delivered to your inbox
          </p>
          <div className="space-y-3">
            <Input placeholder="Your email address" />
            <Button className="w-full bg-amber-600 hover:bg-amber-700">Subscribe</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
