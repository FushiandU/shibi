"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Save, Search, BarChart3, ImageIcon, CheckCircle, AlertCircle } from "lucide-react"

interface SEOPage {
  id: string
  path: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  ogTitle: string
  ogDescription: string
  ogImage: string
  canonicalUrl: string
  robots: string
  schema: any
  lastUpdated: string
}

export function AdminSEO() {
  const [pages, setPages] = useState<SEOPage[]>([])
  const [selectedPage, setSelectedPage] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [seoScore, setSeoScore] = useState(0)

  useEffect(() => {
    fetchPages()
  }, [])

  const fetchPages = async () => {
    try {
      const response = await fetch("/api/admin/seo/pages")
      if (response.ok) {
        const data = await response.json()
        setPages(data)
        if (data.length > 0) {
          setSelectedPage(data[0].id)
        }
      }
    } catch (error) {
      console.error("Failed to fetch SEO pages:", error)
    }
  }

  const updatePage = async (pageId: string, updates: Partial<SEOPage>) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/seo/pages/${pageId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      })

      if (response.ok) {
        setMessage("SEO settings updated successfully!")
        fetchPages()
        calculateSEOScore(updates)
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to update SEO settings")
      }
    } catch (error) {
      setMessage("Error updating SEO settings")
    } finally {
      setIsLoading(false)
    }
  }

  const calculateSEOScore = (page: Partial<SEOPage>) => {
    let score = 0
    const checks = [
      { condition: page.metaTitle && page.metaTitle.length >= 30 && page.metaTitle.length <= 60, points: 15 },
      {
        condition: page.metaDescription && page.metaDescription.length >= 120 && page.metaDescription.length <= 160,
        points: 15,
      },
      { condition: page.keywords && page.keywords.length >= 3, points: 10 },
      { condition: page.ogTitle && page.ogTitle.length > 0, points: 10 },
      { condition: page.ogDescription && page.ogDescription.length > 0, points: 10 },
      { condition: page.ogImage && page.ogImage.length > 0, points: 10 },
      { condition: page.canonicalUrl && page.canonicalUrl.length > 0, points: 10 },
      { condition: page.schema && Object.keys(page.schema || {}).length > 0, points: 20 },
    ]

    checks.forEach((check) => {
      if (check.condition) score += check.points
    })

    setSeoScore(score)
  }

  const currentPage = pages.find((p) => p.id === selectedPage)

  useEffect(() => {
    if (currentPage) {
      calculateSEOScore(currentPage)
    }
  }, [currentPage])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">SEO Management</h2>
        <div className="flex items-center space-x-2">
          <Badge variant={seoScore >= 80 ? "default" : seoScore >= 60 ? "secondary" : "destructive"}>
            SEO Score: {seoScore}/100
          </Badge>
          <Button>
            <BarChart3 className="h-4 w-4 mr-2" />
            Analytics
          </Button>
        </div>
      </div>

      {message && (
        <Alert>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Page List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Pages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {pages.map((page) => (
              <div
                key={page.id}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedPage === page.id
                    ? "bg-amber-50 border-amber-200 dark:bg-amber-900/20"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setSelectedPage(page.id)}
              >
                <div className="font-medium">{page.title}</div>
                <div className="text-sm text-gray-500">{page.path}</div>
                <div className="flex items-center mt-2">
                  {page.metaTitle && page.metaDescription ? (
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-yellow-500 mr-1" />
                  )}
                  <span className="text-xs text-gray-500">
                    {page.metaTitle && page.metaDescription ? "Optimized" : "Needs attention"}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* SEO Editor */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>{currentPage ? `SEO Settings - ${currentPage.title}` : "Select a Page"}</CardTitle>
          </CardHeader>
          <CardContent>
            {currentPage ? (
              <SEOEditor
                page={currentPage}
                onUpdate={(updates) => updatePage(currentPage.id, updates)}
                isLoading={isLoading}
              />
            ) : (
              <div className="text-center py-12 text-gray-500">Select a page from the left to manage SEO settings</div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface SEOEditorProps {
  page: SEOPage
  onUpdate: (updates: Partial<SEOPage>) => void
  isLoading: boolean
}

function SEOEditor({ page, onUpdate, isLoading }: SEOEditorProps) {
  const [formData, setFormData] = useState(page)

  const handleChange = (field: keyof SEOPage, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    onUpdate(formData)
  }

  const addKeyword = () => {
    const newKeywords = [...(formData.keywords || []), ""]
    handleChange("keywords", newKeywords)
  }

  const updateKeyword = (index: number, value: string) => {
    const newKeywords = [...(formData.keywords || [])]
    newKeywords[index] = value
    handleChange("keywords", newKeywords)
  }

  const removeKeyword = (index: number) => {
    const newKeywords = (formData.keywords || []).filter((_, i) => i !== index)
    handleChange("keywords", newKeywords)
  }

  return (
    <Tabs defaultValue="basic" className="space-y-4">
      <TabsList>
        <TabsTrigger value="basic">Basic SEO</TabsTrigger>
        <TabsTrigger value="social">Social Media</TabsTrigger>
        <TabsTrigger value="technical">Technical</TabsTrigger>
        <TabsTrigger value="schema">Schema Markup</TabsTrigger>
      </TabsList>

      <TabsContent value="basic" className="space-y-4">
        <div>
          <Label htmlFor="meta-title">Meta Title</Label>
          <Input
            id="meta-title"
            value={formData.metaTitle || ""}
            onChange={(e) => handleChange("metaTitle", e.target.value)}
            placeholder="Enter meta title (30-60 characters)"
            maxLength={60}
          />
          <div className="text-sm text-gray-500 mt-1">{(formData.metaTitle || "").length}/60 characters</div>
        </div>

        <div>
          <Label htmlFor="meta-description">Meta Description</Label>
          <Textarea
            id="meta-description"
            value={formData.metaDescription || ""}
            onChange={(e) => handleChange("metaDescription", e.target.value)}
            placeholder="Enter meta description (120-160 characters)"
            maxLength={160}
            rows={3}
          />
          <div className="text-sm text-gray-500 mt-1">{(formData.metaDescription || "").length}/160 characters</div>
        </div>

        <div>
          <Label>Keywords</Label>
          <div className="space-y-2">
            {(formData.keywords || []).map((keyword, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={keyword}
                  onChange={(e) => updateKeyword(index, e.target.value)}
                  placeholder="Enter keyword"
                />
                <Button variant="outline" size="sm" onClick={() => removeKeyword(index)}>
                  Remove
                </Button>
              </div>
            ))}
            <Button variant="outline" onClick={addKeyword}>
              Add Keyword
            </Button>
          </div>
        </div>

        <div>
          <Label htmlFor="canonical-url">Canonical URL</Label>
          <Input
            id="canonical-url"
            value={formData.canonicalUrl || ""}
            onChange={(e) => handleChange("canonicalUrl", e.target.value)}
            placeholder="https://shibikabeer.com/page"
          />
        </div>

        <div>
          <Label htmlFor="robots">Robots Meta Tag</Label>
          <Select value={formData.robots || "index,follow"} onValueChange={(value) => handleChange("robots", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="index,follow">Index, Follow</SelectItem>
              <SelectItem value="noindex,follow">No Index, Follow</SelectItem>
              <SelectItem value="index,nofollow">Index, No Follow</SelectItem>
              <SelectItem value="noindex,nofollow">No Index, No Follow</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </TabsContent>

      <TabsContent value="social" className="space-y-4">
        <div>
          <Label htmlFor="og-title">Open Graph Title</Label>
          <Input
            id="og-title"
            value={formData.ogTitle || ""}
            onChange={(e) => handleChange("ogTitle", e.target.value)}
            placeholder="Title for social media sharing"
          />
        </div>

        <div>
          <Label htmlFor="og-description">Open Graph Description</Label>
          <Textarea
            id="og-description"
            value={formData.ogDescription || ""}
            onChange={(e) => handleChange("ogDescription", e.target.value)}
            placeholder="Description for social media sharing"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="og-image">Open Graph Image</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="og-image"
              value={formData.ogImage || ""}
              onChange={(e) => handleChange("ogImage", e.target.value)}
              placeholder="Image URL for social media sharing"
            />
            <Button variant="outline">
              <ImageIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-sm text-gray-500 mt-1">Recommended size: 1200x630 pixels</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="twitter-card">Twitter Card Type</Label>
            <Select
              value={formData.schema?.twitterCard || "summary_large_image"}
              onValueChange={(value) =>
                handleChange("schema", {
                  ...formData.schema,
                  twitterCard: value,
                })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="summary">Summary</SelectItem>
                <SelectItem value="summary_large_image">Summary Large Image</SelectItem>
                <SelectItem value="app">App</SelectItem>
                <SelectItem value="player">Player</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="twitter-site">Twitter Site Handle</Label>
            <Input
              id="twitter-site"
              value={formData.schema?.twitterSite || ""}
              onChange={(e) =>
                handleChange("schema", {
                  ...formData.schema,
                  twitterSite: e.target.value,
                })
              }
              placeholder="@shibikabeer"
            />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="technical" className="space-y-4">
        <div>
          <Label htmlFor="hreflang">Hreflang Tags</Label>
          <Textarea
            id="hreflang"
            value={formData.schema?.hreflang || ""}
            onChange={(e) =>
              handleChange("schema", {
                ...formData.schema,
                hreflang: e.target.value,
              })
            }
            placeholder="en-US, ar-AE, hi-IN"
            rows={2}
          />
          <div className="text-sm text-gray-500 mt-1">Comma-separated language codes for multilingual content</div>
        </div>

        <div>
          <Label htmlFor="sitemap-priority">Sitemap Priority</Label>
          <Select
            value={formData.schema?.sitemapPriority || "0.8"}
            onValueChange={(value) =>
              handleChange("schema", {
                ...formData.schema,
                sitemapPriority: value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1.0">1.0 (Highest)</SelectItem>
              <SelectItem value="0.9">0.9</SelectItem>
              <SelectItem value="0.8">0.8</SelectItem>
              <SelectItem value="0.7">0.7</SelectItem>
              <SelectItem value="0.6">0.6</SelectItem>
              <SelectItem value="0.5">0.5 (Default)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="change-frequency">Change Frequency</Label>
          <Select
            value={formData.schema?.changeFrequency || "weekly"}
            onValueChange={(value) =>
              handleChange("schema", {
                ...formData.schema,
                changeFrequency: value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="always">Always</SelectItem>
              <SelectItem value="hourly">Hourly</SelectItem>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
              <SelectItem value="never">Never</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="redirect-url">301 Redirect URL (Optional)</Label>
          <Input
            id="redirect-url"
            value={formData.schema?.redirectUrl || ""}
            onChange={(e) =>
              handleChange("schema", {
                ...formData.schema,
                redirectUrl: e.target.value,
              })
            }
            placeholder="https://shibikabeer.com/new-page"
          />
        </div>
      </TabsContent>

      <TabsContent value="schema" className="space-y-4">
        <div>
          <Label htmlFor="schema-type">Schema Type</Label>
          <Select
            value={formData.schema?.type || "WebPage"}
            onValueChange={(value) =>
              handleChange("schema", {
                ...formData.schema,
                type: value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="WebPage">Web Page</SelectItem>
              <SelectItem value="Article">Article</SelectItem>
              <SelectItem value="BlogPosting">Blog Posting</SelectItem>
              <SelectItem value="RealEstateAgent">Real Estate Agent</SelectItem>
              <SelectItem value="LocalBusiness">Local Business</SelectItem>
              <SelectItem value="Organization">Organization</SelectItem>
              <SelectItem value="Person">Person</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="schema-json">Custom Schema JSON</Label>
          <Textarea
            id="schema-json"
            value={JSON.stringify(formData.schema?.customSchema || {}, null, 2)}
            onChange={(e) => {
              try {
                const parsed = JSON.parse(e.target.value)
                handleChange("schema", {
                  ...formData.schema,
                  customSchema: parsed,
                })
              } catch (error) {
                // Invalid JSON, ignore
              }
            }}
            placeholder="Enter custom schema markup as JSON"
            rows={8}
            className="font-mono text-sm"
          />
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Schema Preview</h4>
          <pre className="text-sm text-gray-600 dark:text-gray-400 overflow-auto">
            {JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": formData.schema?.type || "WebPage",
                name: formData.metaTitle,
                description: formData.metaDescription,
                url: formData.canonicalUrl,
                image: formData.ogImage,
                ...formData.schema?.customSchema,
              },
              null,
              2,
            )}
          </pre>
        </div>
      </TabsContent>

      <div className="flex justify-end space-x-2 pt-4">
        <Button variant="outline">
          <Search className="h-4 w-4 mr-2" />
          Test SEO
        </Button>
        <Button onClick={handleSave} disabled={isLoading}>
          <Save className="h-4 w-4 mr-2" />
          {isLoading ? "Saving..." : "Save SEO Settings"}
        </Button>
      </div>
    </Tabs>
  )
}
