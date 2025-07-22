"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Eye, Heart, Share2 } from "lucide-react"

export function BlogGrid() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [blogPosts, setBlogPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/blog")
        if (!res.ok) throw new Error("Failed to fetch blog posts")
        const data = await res.json()
        setBlogPosts(data)
      } catch (err: any) {
        setError(err.message || "Error loading blog posts")
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const toggleFavorite = (postId: string) => {
    setFavorites((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  if (loading) {
    return <div className="text-center py-12">Loading blog posts...</div>
  }
  if (error) {
    return <div className="text-center py-12 text-red-600">{error}</div>
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-navy-900">All Articles</h2>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
          <option>Sort by: Latest</option>
          <option>Most Popular</option>
          <option>Most Viewed</option>
          <option>Oldest First</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
            <div className="relative">
              <img
                src={post.featured_image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-amber-600 text-white">{post.category || (post.categories && post.categories[0])}</Badge>
              </div>
              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={() => toggleFavorite(post.id)}
                  className={`p-2 rounded-full ${
                    favorites.includes(post.id) ? "bg-red-500 text-white" : "bg-white/80 text-gray-600 hover:bg-white"
                  } transition-colors`}
                >
                  <Heart className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-full bg-white/80 text-gray-600 hover:bg-white transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.publish_date ? new Date(post.publish_date).toLocaleDateString() : ""}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.read_time ? `${post.read_time} min read` : ""}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {post.views || 0}
                </div>
              </div>

              <h3 className="text-xl font-bold text-navy-900 group-hover:text-amber-600 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2">
                {(post.tags || []).map((tag: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-600">
                  By <span className="font-semibold text-navy-900">{post.author}</span>
                </div>
                <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" variant="outline" className="bg-transparent">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}
