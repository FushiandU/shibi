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
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Save, Eye, Upload, Trash2, Plus, Video } from "lucide-react"

interface ContentSection {
  id: string
  name: string
  type: "hero" | "about" | "services" | "testimonials" | "properties" | "contact"
  visible: boolean
  order: number
  content: any
}

export function AdminContent() {
  const [sections, setSections] = useState<ContentSection[]>([])
  const [selectedSection, setSelectedSection] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetchSections()
  }, [])

  const fetchSections = async () => {
    try {
      const response = await fetch("/api/admin/content/sections")
      if (response.ok) {
        const data = await response.json()
        setSections(data)
        if (data.length > 0) {
          setSelectedSection(data[0].id)
        }
      }
    } catch (error) {
      console.error("Failed to fetch sections:", error)
    }
  }

  const updateSection = async (sectionId: string, updates: Partial<ContentSection>) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/content/sections/${sectionId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      })

      if (response.ok) {
        setMessage("Section updated successfully!")
        fetchSections()
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to update section")
      }
    } catch (error) {
      setMessage("Error updating section")
    } finally {
      setIsLoading(false)
    }
  }

  const currentSection = sections.find((s) => s.id === selectedSection)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Content Management</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Preview Changes
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Publish All
          </Button>
        </div>
      </div>

      {message && (
        <Alert>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Section List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Page Sections</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedSection === section.id
                    ? "bg-amber-50 border-amber-200 dark:bg-amber-900/20"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setSelectedSection(section.id)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{section.name}</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant={section.visible ? "default" : "secondary"}>
                      {section.visible ? "Visible" : "Hidden"}
                    </Badge>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mt-1">Order: {section.order}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Section Editor */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {currentSection ? `Edit ${currentSection.name}` : "Select a Section"}
              {currentSection && (
                <div className="flex items-center space-x-2">
                  <Label htmlFor="section-visible">Visible</Label>
                  <Switch
                    id="section-visible"
                    checked={currentSection.visible}
                    onCheckedChange={(checked) => updateSection(currentSection.id, { visible: checked })}
                  />
                </div>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentSection ? (
              <SectionEditor
                section={currentSection}
                onUpdate={(updates) => updateSection(currentSection.id, updates)}
                isLoading={isLoading}
              />
            ) : (
              <div className="text-center py-12 text-gray-500">Select a section from the left to start editing</div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface SectionEditorProps {
  section: ContentSection
  onUpdate: (updates: Partial<ContentSection>) => void
  isLoading: boolean
}

function SectionEditor({ section, onUpdate, isLoading }: SectionEditorProps) {
  const [content, setContent] = useState(section.content)

  const handleContentChange = (field: string, value: any) => {
    const updatedContent = { ...content, [field]: value }
    setContent(updatedContent)
  }

  const handleSave = () => {
    onUpdate({ content })
  }

  const renderEditor = () => {
    switch (section.type) {
      case "hero":
        return <HeroEditor content={content} onChange={handleContentChange} />
      case "about":
        return <AboutEditor content={content} onChange={handleContentChange} />
      case "services":
        return <ServicesEditor content={content} onChange={handleContentChange} />
      case "testimonials":
        return <TestimonialsEditor content={content} onChange={handleContentChange} />
      case "properties":
        return <PropertiesEditor content={content} onChange={handleContentChange} />
      case "contact":
        return <ContactEditor content={content} onChange={handleContentChange} />
      default:
        return <GenericEditor content={content} onChange={handleContentChange} />
    }
  }

  return (
    <div className="space-y-6">
      {renderEditor()}

      <div className="flex justify-end space-x-2">
        <Button variant="outline">
          <Eye className="h-4 w-4 mr-2" />
          Preview
        </Button>
        <Button onClick={handleSave} disabled={isLoading}>
          <Save className="h-4 w-4 mr-2" />
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  )
}

function HeroEditor({ content, onChange }: { content: any; onChange: (field: string, value: any) => void }) {
  return (
    <Tabs defaultValue="content" className="space-y-4">
      <TabsList>
        <TabsTrigger value="content">Content</TabsTrigger>
        <TabsTrigger value="media">Media</TabsTrigger>
        <TabsTrigger value="styling">Styling</TabsTrigger>
      </TabsList>

      <TabsContent value="content" className="space-y-4">
        <div>
          <Label htmlFor="hero-title">Main Title</Label>
          <Input
            id="hero-title"
            value={content.title || ""}
            onChange={(e) => onChange("title", e.target.value)}
            placeholder="Enter hero title"
          />
        </div>

        <div>
          <Label htmlFor="hero-subtitle">Subtitle</Label>
          <Input
            id="hero-subtitle"
            value={content.subtitle || ""}
            onChange={(e) => onChange("subtitle", e.target.value)}
            placeholder="Enter hero subtitle"
          />
        </div>

        <div>
          <Label htmlFor="hero-description">Description</Label>
          <Textarea
            id="hero-description"
            value={content.description || ""}
            onChange={(e) => onChange("description", e.target.value)}
            placeholder="Enter hero description"
            rows={4}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="primary-button">Primary Button Text</Label>
            <Input
              id="primary-button"
              value={content.primaryButton?.text || ""}
              onChange={(e) =>
                onChange("primaryButton", {
                  ...content.primaryButton,
                  text: e.target.value,
                })
              }
              placeholder="Button text"
            />
          </div>
          <div>
            <Label htmlFor="primary-button-link">Primary Button Link</Label>
            <Input
              id="primary-button-link"
              value={content.primaryButton?.link || ""}
              onChange={(e) =>
                onChange("primaryButton", {
                  ...content.primaryButton,
                  link: e.target.value,
                })
              }
              placeholder="/properties"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="secondary-button">Secondary Button Text</Label>
            <Input
              id="secondary-button"
              value={content.secondaryButton?.text || ""}
              onChange={(e) =>
                onChange("secondaryButton", {
                  ...content.secondaryButton,
                  text: e.target.value,
                })
              }
              placeholder="Button text"
            />
          </div>
          <div>
            <Label htmlFor="secondary-button-link">Secondary Button Link</Label>
            <Input
              id="secondary-button-link"
              value={content.secondaryButton?.link || ""}
              onChange={(e) =>
                onChange("secondaryButton", {
                  ...content.secondaryButton,
                  link: e.target.value,
                })
              }
              placeholder="https://youtube.com/watch?v=..."
            />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="media" className="space-y-4">
        <div>
          <Label htmlFor="hero-background">Background Image</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="hero-background"
              value={content.backgroundImage || ""}
              onChange={(e) => onChange("backgroundImage", e.target.value)}
              placeholder="Image URL or upload"
            />
            <Button variant="outline">
              <Upload className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <Label htmlFor="hero-video">Background Video (Optional)</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="hero-video"
              value={content.backgroundVideo || ""}
              onChange={(e) => onChange("backgroundVideo", e.target.value)}
              placeholder="Video URL"
            />
            <Button variant="outline">
              <Video className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="styling" className="space-y-4">
        <div>
          <Label htmlFor="text-color">Text Color</Label>
          <Select value={content.textColor || "white"} onValueChange={(value) => onChange("textColor", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="white">White</SelectItem>
              <SelectItem value="black">Black</SelectItem>
              <SelectItem value="gray">Gray</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="overlay-opacity">Background Overlay Opacity</Label>
          <Input
            id="overlay-opacity"
            type="range"
            min="0"
            max="100"
            value={content.overlayOpacity || 40}
            onChange={(e) => onChange("overlayOpacity", Number.parseInt(e.target.value))}
          />
          <div className="text-sm text-gray-500 mt-1">{content.overlayOpacity || 40}%</div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

function AboutEditor({ content, onChange }: { content: any; onChange: (field: string, value: any) => void }) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="about-title">Section Title</Label>
        <Input
          id="about-title"
          value={content.title || ""}
          onChange={(e) => onChange("title", e.target.value)}
          placeholder="About section title"
        />
      </div>

      <div>
        <Label htmlFor="about-description">Description</Label>
        <Textarea
          id="about-description"
          value={content.description || ""}
          onChange={(e) => onChange("description", e.target.value)}
          placeholder="About description"
          rows={6}
        />
      </div>

      <div>
        <Label htmlFor="about-image">Profile Image</Label>
        <div className="flex items-center space-x-2">
          <Input
            id="about-image"
            value={content.image || ""}
            onChange={(e) => onChange("image", e.target.value)}
            placeholder="Image URL"
          />
          <Button variant="outline">
            <Upload className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div>
        <Label>Key Achievements</Label>
        <div className="space-y-2">
          {(content.achievements || []).map((achievement: any, index: number) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                value={achievement.title || ""}
                onChange={(e) => {
                  const newAchievements = [...(content.achievements || [])]
                  newAchievements[index] = { ...achievement, title: e.target.value }
                  onChange("achievements", newAchievements)
                }}
                placeholder="Achievement title"
              />
              <Input
                value={achievement.value || ""}
                onChange={(e) => {
                  const newAchievements = [...(content.achievements || [])]
                  newAchievements[index] = { ...achievement, value: e.target.value }
                  onChange("achievements", newAchievements)
                }}
                placeholder="Value"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const newAchievements = (content.achievements || []).filter((_: any, i: number) => i !== index)
                  onChange("achievements", newAchievements)
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() => {
              const newAchievements = [...(content.achievements || []), { title: "", value: "", description: "" }]
              onChange("achievements", newAchievements)
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Achievement
          </Button>
        </div>
      </div>
    </div>
  )
}

function ServicesEditor({ content, onChange }: { content: any; onChange: (field: string, value: any) => void }) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="services-title">Section Title</Label>
        <Input
          id="services-title"
          value={content.title || ""}
          onChange={(e) => onChange("title", e.target.value)}
          placeholder="Services section title"
        />
      </div>

      <div>
        <Label htmlFor="services-description">Description</Label>
        <Textarea
          id="services-description"
          value={content.description || ""}
          onChange={(e) => onChange("description", e.target.value)}
          placeholder="Services description"
          rows={3}
        />
      </div>

      <div>
        <Label>Services</Label>
        <div className="space-y-4">
          {(content.services || []).map((service: any, index: number) => (
            <Card key={index}>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Service {index + 1}</h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const newServices = (content.services || []).filter((_: any, i: number) => i !== index)
                      onChange("services", newServices)
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Input
                    value={service.title || ""}
                    onChange={(e) => {
                      const newServices = [...(content.services || [])]
                      newServices[index] = { ...service, title: e.target.value }
                      onChange("services", newServices)
                    }}
                    placeholder="Service title"
                  />
                  <Input
                    value={service.icon || ""}
                    onChange={(e) => {
                      const newServices = [...(content.services || [])]
                      newServices[index] = { ...service, icon: e.target.value }
                      onChange("services", newServices)
                    }}
                    placeholder="Icon name (e.g., Building)"
                  />
                </div>

                <Textarea
                  value={service.description || ""}
                  onChange={(e) => {
                    const newServices = [...(content.services || [])]
                    newServices[index] = { ...service, description: e.target.value }
                    onChange("services", newServices)
                  }}
                  placeholder="Service description"
                  rows={2}
                />
              </CardContent>
            </Card>
          ))}

          <Button
            variant="outline"
            onClick={() => {
              const newServices = [...(content.services || []), { title: "", description: "", icon: "" }]
              onChange("services", newServices)
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Service
          </Button>
        </div>
      </div>
    </div>
  )
}

function TestimonialsEditor({ content, onChange }: { content: any; onChange: (field: string, value: any) => void }) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="testimonials-title">Section Title</Label>
        <Input
          id="testimonials-title"
          value={content.title || ""}
          onChange={(e) => onChange("title", e.target.value)}
          placeholder="Testimonials section title"
        />
      </div>

      <div>
        <Label>Testimonials</Label>
        <div className="space-y-4">
          {(content.testimonials || []).map((testimonial: any, index: number) => (
            <Card key={index}>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Testimonial {index + 1}</h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const newTestimonials = (content.testimonials || []).filter((_: any, i: number) => i !== index)
                      onChange("testimonials", newTestimonials)
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Input
                    value={testimonial.name || ""}
                    onChange={(e) => {
                      const newTestimonials = [...(content.testimonials || [])]
                      newTestimonials[index] = { ...testimonial, name: e.target.value }
                      onChange("testimonials", newTestimonials)
                    }}
                    placeholder="Client name"
                  />
                  <Input
                    value={testimonial.location || ""}
                    onChange={(e) => {
                      const newTestimonials = [...(content.testimonials || [])]
                      newTestimonials[index] = { ...testimonial, location: e.target.value }
                      onChange("testimonials", newTestimonials)
                    }}
                    placeholder="Location"
                  />
                </div>

                <Textarea
                  value={testimonial.text || ""}
                  onChange={(e) => {
                    const newTestimonials = [...(content.testimonials || [])]
                    newTestimonials[index] = { ...testimonial, text: e.target.value }
                    onChange("testimonials", newTestimonials)
                  }}
                  placeholder="Testimonial text"
                  rows={3}
                />

                <div className="grid grid-cols-2 gap-3">
                  <Input
                    value={testimonial.investment || ""}
                    onChange={(e) => {
                      const newTestimonials = [...(content.testimonials || [])]
                      newTestimonials[index] = { ...testimonial, investment: e.target.value }
                      onChange("testimonials", newTestimonials)
                    }}
                    placeholder="Investment amount"
                  />
                  <Input
                    type="number"
                    min="1"
                    max="5"
                    value={testimonial.rating || 5}
                    onChange={(e) => {
                      const newTestimonials = [...(content.testimonials || [])]
                      newTestimonials[index] = { ...testimonial, rating: Number.parseInt(e.target.value) }
                      onChange("testimonials", newTestimonials)
                    }}
                    placeholder="Rating (1-5)"
                  />
                </div>
              </CardContent>
            </Card>
          ))}

          <Button
            variant="outline"
            onClick={() => {
              const newTestimonials = [
                ...(content.testimonials || []),
                {
                  name: "",
                  location: "",
                  text: "",
                  rating: 5,
                  investment: "",
                },
              ]
              onChange("testimonials", newTestimonials)
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Testimonial
          </Button>
        </div>
      </div>
    </div>
  )
}

function PropertiesEditor({ content, onChange }: { content: any; onChange: (field: string, value: any) => void }) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="properties-title">Section Title</Label>
        <Input
          id="properties-title"
          value={content.title || ""}
          onChange={(e) => onChange("title", e.target.value)}
          placeholder="Properties section title"
        />
      </div>

      <div>
        <Label>Featured Properties</Label>
        <div className="space-y-4">
          {(content.properties || []).map((property: any, index: number) => (
            <Card key={index}>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Property {index + 1}</h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const newProperties = (content.properties || []).filter((_: any, i: number) => i !== index)
                      onChange("properties", newProperties)
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Input
                    value={property.name || ""}
                    onChange={(e) => {
                      const newProperties = [...(content.properties || [])]
                      newProperties[index] = { ...property, name: e.target.value }
                      onChange("properties", newProperties)
                    }}
                    placeholder="Property name"
                  />
                  <Input
                    value={property.location || ""}
                    onChange={(e) => {
                      const newProperties = [...(content.properties || [])]
                      newProperties[index] = { ...property, location: e.target.value }
                      onChange("properties", newProperties)
                    }}
                    placeholder="Location"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <Input
                    value={property.price || ""}
                    onChange={(e) => {
                      const newProperties = [...(content.properties || [])]
                      newProperties[index] = { ...property, price: e.target.value }
                      onChange("properties", newProperties)
                    }}
                    placeholder="Starting price"
                  />
                  <Input
                    value={property.yield || ""}
                    onChange={(e) => {
                      const newProperties = [...(content.properties || [])]
                      newProperties[index] = { ...property, yield: e.target.value }
                      onChange("properties", newProperties)
                    }}
                    placeholder="Rental yield"
                  />
                  <Input
                    value={property.developer || ""}
                    onChange={(e) => {
                      const newProperties = [...(content.properties || [])]
                      newProperties[index] = { ...property, developer: e.target.value }
                      onChange("properties", newProperties)
                    }}
                    placeholder="Developer"
                  />
                </div>

                <div>
                  <Input
                    value={property.image || ""}
                    onChange={(e) => {
                      const newProperties = [...(content.properties || [])]
                      newProperties[index] = { ...property, image: e.target.value }
                      onChange("properties", newProperties)
                    }}
                    placeholder="Image URL"
                  />
                </div>

                <Textarea
                  value={property.description || ""}
                  onChange={(e) => {
                    const newProperties = [...(content.properties || [])]
                    newProperties[index] = { ...property, description: e.target.value }
                    onChange("properties", newProperties)
                  }}
                  placeholder="Property description"
                  rows={2}
                />
              </CardContent>
            </Card>
          ))}

          <Button
            variant="outline"
            onClick={() => {
              const newProperties = [
                ...(content.properties || []),
                {
                  name: "",
                  location: "",
                  price: "",
                  yield: "",
                  developer: "",
                  image: "",
                  description: "",
                },
              ]
              onChange("properties", newProperties)
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Property
          </Button>
        </div>
      </div>
    </div>
  )
}

function ContactEditor({ content, onChange }: { content: any; onChange: (field: string, value: any) => void }) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="contact-title">Section Title</Label>
        <Input
          id="contact-title"
          value={content.title || ""}
          onChange={(e) => onChange("title", e.target.value)}
          placeholder="Contact section title"
        />
      </div>

      <div>
        <Label htmlFor="contact-description">Description</Label>
        <Textarea
          id="contact-description"
          value={content.description || ""}
          onChange={(e) => onChange("description", e.target.value)}
          placeholder="Contact description"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="contact-phone">Phone Number</Label>
          <Input
            id="contact-phone"
            value={content.phone || ""}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="+971 55 799 4258"
          />
        </div>
        <div>
          <Label htmlFor="contact-email">Email Address</Label>
          <Input
            id="contact-email"
            value={content.email || ""}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="shibikabeer@gmail.com"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="contact-address">Office Address</Label>
        <Textarea
          id="contact-address"
          value={content.address || ""}
          onChange={(e) => onChange("address", e.target.value)}
          placeholder="Office address"
          rows={2}
        />
      </div>

      <div>
        <Label htmlFor="contact-hours">Business Hours</Label>
        <Textarea
          id="contact-hours"
          value={content.hours || ""}
          onChange={(e) => onChange("hours", e.target.value)}
          placeholder="Business hours"
          rows={2}
        />
      </div>
    </div>
  )
}

function GenericEditor({ content, onChange }: { content: any; onChange: (field: string, value: any) => void }) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="generic-title">Section Title</Label>
        <Input
          id="generic-title"
          value={content.title || ""}
          onChange={(e) => onChange("title", e.target.value)}
          placeholder="Section title"
        />
      </div>

      <div>
        <Label htmlFor="generic-content">Content (JSON)</Label>
        <Textarea
          id="generic-content"
          value={JSON.stringify(content, null, 2)}
          onChange={(e) => {
            try {
              const parsed = JSON.parse(e.target.value)
              Object.keys(parsed).forEach((key) => {
                onChange(key, parsed[key])
              })
            } catch (error) {
              // Invalid JSON, ignore
            }
          }}
          placeholder="Edit content as JSON"
          rows={10}
          className="font-mono text-sm"
        />
      </div>
    </div>
  )
}
