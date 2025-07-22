import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function BlogRelated() {
  const relatedPosts = [
    {
      id: 1,
      title: "Golden Visa Updates: New Requirements and Benefits in 2025",
      excerpt: "Latest changes to the UAE Golden Visa program and how they affect property investors.",
      category: "Golden Visa",
      date: "January 12, 2025",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      slug: "golden-visa-updates-2025",
    },
    {
      id: 2,
      title: "Top 5 Off-Plan Projects to Watch This Year",
      excerpt: "Discover the most promising off-plan developments offering exceptional investment potential.",
      category: "Investment Tips",
      date: "January 10, 2025",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      slug: "top-off-plan-projects-2025",
    },
    {
      id: 3,
      title: "Dubai Creek Harbour: The Next Investment Hotspot",
      excerpt: "Why Dubai Creek Harbour is becoming the preferred choice for savvy investors.",
      category: "Investment Tips",
      date: "January 8, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      slug: "dubai-creek-harbour-investment",
    },
  ]

  return (
    <section className="py-16 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Related Articles</h2>
        <p className="text-gray-600">Continue reading about Dubai's real estate market and investment opportunities</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
            <div className="relative">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-amber-600 text-white">{post.category}</Badge>
              </div>
            </div>

            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="text-xl font-bold text-navy-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-gray-600 leading-relaxed line-clamp-3">{post.excerpt}</p>

              <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0 h-auto">
                Read Full Article
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" variant="outline" className="bg-transparent">
          View All Articles
        </Button>
      </div>
    </section>
  )
}
