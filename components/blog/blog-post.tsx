import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Eye, Share2, Heart, User, TrendingUp } from "lucide-react"

interface BlogPostProps {
  slug: string
}

export function BlogPost({ slug }: BlogPostProps) {
  // In a real app, you'd fetch the blog post data based on the slug
  const blogPost = {
    title: "Dubai Property Market Outlook 2025: What Investors Need to Know",
    excerpt:
      "Comprehensive analysis of Dubai's real estate market trends, price predictions, and the best investment opportunities for 2025. Discover which areas are set for the highest growth.",
    content: `
      <p>Dubai's real estate market continues to demonstrate remarkable resilience and growth potential as we enter 2025. With strategic government initiatives, world-class infrastructure development, and increasing international investor confidence, the emirate remains one of the most attractive property investment destinations globally.</p>

      <h2>Market Performance in 2024: A Strong Foundation</h2>
      <p>The Dubai property market showed exceptional performance throughout 2024, with average price appreciation of 12-15% across prime locations. Key areas like Downtown Dubai, Dubai Marina, and Palm Jumeirah led the growth, while emerging areas like Dubai South and Dubai Creek Harbour gained significant traction among savvy investors.</p>

      <h2>Key Trends Shaping 2025</h2>
      <h3>1. Sustainable and Smart Developments</h3>
      <p>Developers are increasingly focusing on sustainable building practices and smart home technologies. Projects like Sustainable City Phase 2 and various LEED-certified developments are setting new standards for eco-friendly living.</p>

      <h3>2. Off-Plan Investment Opportunities</h3>
      <p>Off-plan properties continue to offer the best value for investors, with payment plans extending up to 7 years and guaranteed rental yields of 8-10% in many projects. Notable launches include Emaar's latest Downtown developments and Omniyat's luxury projects.</p>

      <h3>3. Golden Visa Impact</h3>
      <p>The UAE Golden Visa program has significantly boosted demand for properties above AED 2 million. This has created a robust market for luxury properties and has contributed to price stability in the premium segment.</p>

      <h2>Top Investment Areas for 2025</h2>
      <h3>Dubai Creek Harbour</h3>
      <p>With the completion of major infrastructure projects and the upcoming Creek Beach development, this area is poised for significant appreciation. Current rental yields average 7-9% with strong capital growth potential.</p>

      <h3>Dubai South</h3>
      <p>Proximity to Al Maktoum International Airport and Expo 2020 legacy projects make Dubai South an attractive long-term investment. Properties here offer excellent value with yields reaching 10-12%.</p>

      <h3>Business Bay</h3>
      <p>The commercial heart of Dubai continues to attract investors with its central location and diverse property options. New developments are focusing on mixed-use projects that combine residential, commercial, and retail spaces.</p>

      <h2>Investment Strategies for Success</h2>
      <p>Successful property investment in Dubai requires a strategic approach:</p>
      <ul>
        <li><strong>Diversification:</strong> Consider a mix of ready properties and off-plan investments</li>
        <li><strong>Location Analysis:</strong> Focus on areas with strong infrastructure development and government backing</li>
        <li><strong>Developer Reputation:</strong> Partner with established developers like Emaar, Damac, and Omniyat</li>
        <li><strong>Rental Yield Focus:</strong> Target properties with sustainable rental yields of 7%+</li>
      </ul>

      <h2>Market Predictions for 2025</h2>
      <p>Based on current trends and economic indicators, we predict:</p>
      <ul>
        <li>Continued price appreciation of 8-12% in prime locations</li>
        <li>Increased demand for luxury properties due to Golden Visa requirements</li>
        <li>Growing interest in sustainable and smart developments</li>
        <li>Expansion of off-plan payment plan options</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Dubai's property market in 2025 presents exceptional opportunities for both first-time buyers and seasoned investors. With strategic planning, proper market analysis, and expert guidance, investors can achieve significant returns while building long-term wealth in one of the world's most dynamic real estate markets.</p>

      <p>For personalized investment advice and access to exclusive property opportunities, contact me for a consultation. Let's discuss how you can capitalize on Dubai's thriving real estate market in 2025.</p>
    `,
    author: "Shibi Kabeer",
    date: "January 15, 2025",
    readTime: "8 min read",
    views: "2,847",
    category: "Market Analysis",
    tags: ["Dubai Property", "Market Analysis", "Investment", "2025 Outlook", "Real Estate Trends"],
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    featured: true,
    trending: true,
  }

  return (
    <article className="space-y-8">
      {/* Article Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-amber-600 text-white">{blogPost.category}</Badge>
          {blogPost.featured && <Badge className="bg-emerald-600 text-white">Featured</Badge>}
          {blogPost.trending && (
            <Badge className="bg-red-600 text-white">
              <TrendingUp className="h-3 w-3 mr-1" />
              Trending
            </Badge>
          )}
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 font-montserrat leading-tight">{blogPost.title}</h1>

        <p className="text-xl text-gray-600 leading-relaxed">{blogPost.excerpt}</p>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 py-4 border-y border-gray-200">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>
              By <strong className="text-navy-900">{blogPost.author}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{blogPost.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{blogPost.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>{blogPost.views} views</span>
          </div>
        </div>

        {/* Social Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="bg-transparent">
              <Heart className="h-4 w-4 mr-2" />
              Like
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative">
        <img
          src={blogPost.image || "/placeholder.svg"}
          alt={blogPost.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Article Content */}
      <div
        className="prose prose-lg max-w-none prose-headings:text-navy-900 prose-headings:font-montserrat prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-amber-600 prose-strong:text-navy-900 prose-ul:text-gray-700 prose-li:text-gray-700"
        dangerouslySetInnerHTML={{ __html: blogPost.content }}
      />

      {/* Author Bio */}
      <Card className="bg-gradient-to-r from-amber-50 to-emerald-50 border-none">
        <CardContent className="p-8">
          <div className="flex items-start gap-6">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              alt="Shibi Kabeer"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-navy-900 mb-2">About Shibi Kabeer</h3>
              <p className="text-gray-600 mb-4">
                Dubai's premier real estate expert and e-commerce consultant with over 15 years of experience. Shibi has
                helped over 1000 clients achieve their investment goals and secure their UAE Golden Visa through
                strategic property investments.
              </p>
              <div className="flex gap-4">
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                  Book Consultation
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent">
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Newsletter CTA */}
      <Card className="bg-navy-900 text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Market Insights</h3>
          <p className="text-gray-300 mb-6">
            Get the latest Dubai property market analysis and investment opportunities delivered to your inbox.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            Subscribe to Newsletter
          </Button>
        </CardContent>
      </Card>
    </article>
  )
}
