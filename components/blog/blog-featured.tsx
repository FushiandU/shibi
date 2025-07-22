import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"

export function BlogFeatured() {
  const featuredPost = {
    id: 1,
    title: "Dubai Property Market Outlook 2025: What Investors Need to Know",
    excerpt:
      "Comprehensive analysis of Dubai's real estate market trends, price predictions, and the best investment opportunities for 2025. Discover which areas are set for the highest growth.",
    category: "Market Analysis",
    author: "Shibi Kabeer",
    date: "January 15, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800&text=Dubai+Skyline+2025",
    featured: true,
    trending: true,
  }

  const recentPosts = [
    {
      id: 2,
      title: "Golden Visa Updates: New Requirements and Benefits in 2025",
      category: "Golden Visa",
      date: "January 12, 2025",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300&text=Golden+Visa",
    },
    {
      id: 3,
      title: "Top 5 Off-Plan Projects to Watch This Year",
      category: "Investment Tips",
      date: "January 10, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300&text=Off+Plan+Projects",
    },
    {
      id: 4,
      title: "E-commerce Business Setup Guide for UAE Entrepreneurs",
      category: "Business",
      date: "January 8, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300&text=E-commerce+Setup",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Featured Content
          </Badge>
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Latest Market Insights</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Featured Post */}
          <Card className="overflow-hidden shadow-xl">
            <div className="relative">
              <img
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-amber-600 text-white">Featured</Badge>
                {featuredPost.trending && (
                  <Badge className="bg-red-600 text-white">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>
            </div>

            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <Badge variant="outline" className="text-amber-600 border-amber-600">
                  {featuredPost.category}
                </Badge>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-navy-900 mb-4">{featuredPost.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  By <span className="font-semibold text-navy-900">{featuredPost.author}</span>
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Read Full Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Posts */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Recent Articles</h3>
            {recentPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-32 h-24 object-cover flex-shrink-0"
                  />
                  <CardContent className="p-4 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h4 className="font-bold text-navy-900 mb-2 line-clamp-2">{post.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                      <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700 p-0">
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}

            <Button variant="outline" className="w-full bg-transparent">
              View All Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
