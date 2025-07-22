"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Edit, Trash2, Save, Eye, Calendar, Tag, ImageIcon, Search } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  author: string
  status: "draft" | "published" | "scheduled"
  publishDate: string
  categories: string[]
  tags: string[]
  metaTitle: string
  metaDescription: string
  readTime: number
  views: number
  createdAt: string
  updatedAt: string
}

export function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/admin/blog/posts")
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error)
    }
  }

  const createPost = async (postData: Partial<BlogPost>) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/admin/blog/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })

      if (response.ok) {
        const newPost = await response.json()
        setPosts([newPost, ...posts])
        setMessage("Post created successfully!")
        setIsEditing(false)
        setSelectedPost(null)
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to create post")
      }
    } catch (error) {
      setMessage("Error creating post")
    } finally {
      setIsLoading(false)
    }
  }

  const updatePost = async (postId: string, updates: Partial<BlogPost>) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/blog/posts/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      })

      if (response.ok) {
        const updatedPost = await response.json()
        setPosts(posts.map((p) => (p.id === postId ? updatedPost : p)))
        setMessage("Post updated successfully!")
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to update post")
      }
    } catch (error) {
      setMessage("Error updating post")
    } finally {
      setIsLoading(false)
    }
  }

  const deletePost = async (postId: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return

    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/blog/posts/${postId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setPosts(posts.filter((p) => p.id !== postId))
        setMessage("Post deleted successfully!")
        setSelectedPost(null)
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to delete post")
      }
    } catch (error) {
      setMessage("Error deleting post")
    } finally {
      setIsLoading(false)
    }
  }

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || post.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Blog Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setSelectedPost(null)
                setIsEditing(true)
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedPost ? "Edit Post" : "Create New Post"}</DialogTitle>
            </DialogHeader>
            <BlogPostEditor
              post={selectedPost}
              onSave={selectedPost ? (updates) => updatePost(selectedPost.id, updates) : createPost}
              onCancel={() => {
                setIsEditing(false)
                setSelectedPost(null)
              }}
              isLoading={isLoading}
            />
          </DialogContent>
        </Dialog>
      </div>

      {message && (
        <Alert>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Posts List */}
      <div className="grid gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <Badge
                      variant={
                        post.status === "published" ? "default" : post.status === "draft" ? "secondary" : "outline"
                      }
                    >
                      {post.status}
                    </Badge>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-3">{post.excerpt}</p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views} views
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {(post.categories || []).join(", ")}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="outline" size="sm" onClick={() => window.open(`/blog/${post.slug}`, "_blank")}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedPost(post)
                          setIsEditing(true)
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Edit Post</DialogTitle>
                      </DialogHeader>
                      <BlogPostEditor
                        post={selectedPost}
                        onSave={(updates) => updatePost(selectedPost!.id, updates)}
                        onCancel={() => {
                          setIsEditing(false)
                          setSelectedPost(null)
                        }}
                        isLoading={isLoading}
                      />
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" size="sm" onClick={() => deletePost(post.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-gray-500">
              {searchTerm || statusFilter !== "all"
                ? "No posts match your filters"
                : "No blog posts yet. Create your first post!"}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

interface BlogPostEditorProps {
  post: BlogPost | null
  onSave: (postData: Partial<BlogPost>) => void
  onCancel: () => void
  isLoading: boolean
}

function BlogPostEditor({ post, onSave, onCancel, isLoading }: BlogPostEditorProps) {
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featuredImage: "",
    author: "Shibi Kabeer",
    status: "draft",
    publishDate: new Date().toISOString().split("T")[0],
    categories: [],
    tags: [],
    metaTitle: "",
    metaDescription: "",
    ...post,
  })

  const handleChange = (field: keyof BlogPost, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Auto-generate slug from title
    if (field === "title" && !post) {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
      setFormData((prev) => ({ ...prev, slug }))
    }
  }

  const handleSave = () => {
    onSave(formData)
  }

  const addCategory = () => {
    const category = prompt("Enter category name:")
    if (category && !formData.categories?.includes(category)) {
      handleChange("categories", [...(formData.categories || []), category])
    }
  }

  const removeCategory = (category: string) => {
    handleChange(
      "categories",
      (formData.categories || []).filter((c) => c !== category),
    )
  }

  const addTag = () => {
    const tag = prompt("Enter tag name:")
    if (tag && !formData.tags?.includes(tag)) {
      handleChange("tags", [...(formData.tags || []), tag])
    }
  }

  const removeTag = (tag: string) => {
    handleChange(
      "tags",
      (formData.tags || []).filter((t) => t !== tag),
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={formData.title || ""}
            onChange={(e) => handleChange("title", e.target.value)}
            placeholder="Enter post title"
          />
        </div>
        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            value={formData.slug || ""}
            onChange={(e) => handleChange("slug", e.target.value)}
            placeholder="post-url-slug"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          value={formData.excerpt || ""}
          onChange={(e) => handleChange("excerpt", e.target.value)}
          placeholder="Brief description of the post"
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          value={formData.content || ""}
          onChange={(e) => handleChange("content", e.target.value)}
          placeholder="Write your post content here..."
          rows={12}
          className="font-mono"
        />
      </div>

      <div>
        <Label htmlFor="featured-image">Featured Image</Label>
        <div className="flex items-center space-x-2">
          <Input
            id="featured-image"
            value={formData.featuredImage || ""}
            onChange={(e) => handleChange("featuredImage", e.target.value)}
            placeholder="Image URL"
          />
          <Button variant="outline">
            <ImageIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label htmlFor="status">Status</Label>
          <Select value={formData.status || "draft"} onValueChange={(value) => handleChange("status", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            value={formData.author || ""}
            onChange={(e) => handleChange("author", e.target.value)}
            placeholder="Author name"
          />
        </div>
        <div>
          <Label htmlFor="publish-date">Publish Date</Label>
          <Input
            id="publish-date"
            type="date"
            value={formData.publishDate || ""}
            onChange={(e) => handleChange("publishDate", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Categories</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {(formData.categories || []).map((category) => (
              <Badge key={category} variant="secondary" className="cursor-pointer">
                {category}
                <button onClick={() => removeCategory(category)} className="ml-2 text-xs">
                  ×
                </button>
              </Badge>
            ))}
          </div>
          <Button variant="outline" size="sm" onClick={addCategory}>
            Add Category
          </Button>
        </div>
        <div>
          <Label>Tags</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {(formData.tags || []).map((tag) => (
              <Badge key={tag} variant="outline" className="cursor-pointer">
                {tag}
                <button onClick={() => removeTag(tag)} className="ml-2 text-xs">
                  ×
                </button>
              </Badge>
            ))}
          </div>
          <Button variant="outline" size="sm" onClick={addTag}>
            Add Tag
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="meta-title">Meta Title</Label>
          <Input
            id="meta-title"
            value={formData.metaTitle || ""}
            onChange={(e) => handleChange("metaTitle", e.target.value)}
            placeholder="SEO title"
          />
        </div>
        <div>
          <Label htmlFor="meta-description">Meta Description</Label>
          <Input
            id="meta-description"
            value={formData.metaDescription || ""}
            onChange={(e) => handleChange("metaDescription", e.target.value)}
            placeholder="SEO description"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={handleSave} disabled={isLoading}>
          <Save className="h-4 w-4 mr-2" />
          {isLoading ? "Saving..." : "Save Post"}
        </Button>
      </div>
    </div>
  )
}
