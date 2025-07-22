import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogFeatured } from "@/components/blog/blog-featured"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCategories } from "@/components/blog/blog-categories"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"

export const metadata: Metadata = {
  title: "Dubai Real Estate Blog - Market Insights & Investment Tips | Shibi Kabeer",
  description:
    "Stay updated with the latest Dubai real estate market trends, investment strategies, Golden Visa updates, and e-commerce insights from expert Shibi Kabeer.",
  keywords: "Dubai real estate blog, property market insights, investment tips, Golden Visa news, UAE market trends",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32">
      <BlogHero />
      <BlogFeatured />
      <div className="grid lg:grid-cols-4 gap-8 container mx-auto px-4 py-12">
        <div className="lg:col-span-3">
          <BlogGrid />
        </div>
        <div className="lg:col-span-1">
          <BlogCategories />
        </div>
      </div>
      <BlogNewsletter />
    </main>
  )
}
