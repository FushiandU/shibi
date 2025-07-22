import type { Metadata } from "next"
import { BlogPost } from "@/components/blog/blog-post"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { BlogRelated } from "@/components/blog/blog-related"
import { BlogComments } from "@/components/blog/blog-comments"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // In a real app, you'd fetch the blog post data here
  const title = "Dubai Property Market Outlook 2025 | Shibi Kabeer"
  const description =
    "Comprehensive analysis of Dubai's real estate market trends, price predictions, and the best investment opportunities for 2025."

  return {
    title,
    description,
    keywords:
      "Dubai property market, real estate trends 2025, Dubai investment opportunities, property market analysis",
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main className="min-h-screen pt-32">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <BlogPost slug={params.slug} />
            <BlogComments />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
        <BlogRelated />
      </div>
    </main>
  )
}
