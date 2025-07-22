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

interface Property {
  id: string
  name: string
  location: string
  developer: string
  price: string
  price_per_sqft: string
  type: string
  size: string
  yield: string
  status: string
  handover: string
  image: string
  features: string[]
  golden_visa: boolean
  createdAt: string
  updatedAt: string
}

export function AdminProperties() {
  const [properties, setProperties] = useState<Property[]>([])
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    fetchProperties()
  }, [])

  const fetchProperties = async () => {
    try {
      const response = await fetch("/api/admin/properties")
      if (response.ok) {
        const data = await response.json()
        setProperties(data)
      }
    } catch (error) {
      console.error("Failed to fetch properties:", error)
    }
  }

  const createProperty = async (propertyData: Partial<Property>) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/admin/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyData),
      })

      if (response.ok) {
        const newProperty = await response.json()
        setProperties([newProperty, ...properties])
        setMessage("Property created successfully!")
        setIsEditing(false)
        setSelectedProperty(null)
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to create property")
      }
    } catch (error) {
      setMessage("Error creating property")
    } finally {
      setIsLoading(false)
    }
  }

  const updateProperty = async (propertyId: string, updates: Partial<Property>) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/properties/${propertyId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      })

      if (response.ok) {
        const updatedProperty = await response.json()
        setProperties(properties.map((p) => (p.id === propertyId ? updatedProperty : p)))
        setMessage("Property updated successfully!")
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to update property")
      }
    } catch (error) {
      setMessage("Error updating property")
    } finally {
      setIsLoading(false)
    }
  }

  const deleteProperty = async (propertyId: string) => {
    if (!confirm("Are you sure you want to delete this property?")) return

    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/properties/${propertyId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setProperties(properties.filter((p) => p.id !== propertyId))
        setMessage("Property deleted successfully!")
        setSelectedProperty(null)
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to delete property")
      }
    } catch (error) {
      setMessage("Error deleting property")
    } finally {
      setIsLoading(false)
    }
  }

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || property.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Property Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setSelectedProperty(null)
                setIsEditing(true)
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              New Property
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedProperty ? "Edit Property" : "Create New Property"}</DialogTitle>
            </DialogHeader>
            <PropertyEditor
              property={selectedProperty}
              onSave={selectedProperty ? (updates) => updateProperty(selectedProperty.id, updates) : createProperty}
              onCancel={() => {
                setIsEditing(false)
                setSelectedProperty(null)
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
                  placeholder="Search properties..."
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
                <SelectItem value="Ready">Ready</SelectItem>
                <SelectItem value="Off-Plan">Off-Plan</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Properties List */}
      <div className="grid gap-6">
        {filteredProperties.map((property) => (
          <Card key={property.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold">{property.name}</h3>
                    <Badge
                      variant={
                        property.status === "Ready" ? "default" : "secondary"
                      }
                    >
                      {property.status}
                    </Badge>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-3">{property.location}</p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {property.handover}
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {property.type}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="outline" size="sm" onClick={() => window.open(`/properties/${property.id}`, "_blank")}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedProperty(property)
                          setIsEditing(true)
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Edit Property</DialogTitle>
                      </DialogHeader>
                      <PropertyEditor
                        property={selectedProperty}
                        onSave={(updates) => updateProperty(selectedProperty!.id, updates)}
                        onCancel={() => {
                          setIsEditing(false)
                          setSelectedProperty(null)
                        }}
                        isLoading={isLoading}
                      />
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" size="sm" onClick={() => deleteProperty(property.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-gray-500">
              {searchTerm || statusFilter !== "all"
                ? "No properties match your filters"
                : "No properties yet. Create your first property!"}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

interface PropertyEditorProps {
  property: Property | null
  onSave: (propertyData: Partial<Property>) => void
  onCancel: () => void
  isLoading: boolean
}

function PropertyEditor({ property, onSave, onCancel, isLoading }: PropertyEditorProps) {
  const [formData, setFormData] = useState<Partial<Property>>({
    name: "",
    location: "",
    developer: "",
    price: "",
    price_per_sqft: "",
    type: "Apartment",
    size: "",
    yield: "",
    status: "Ready",
    handover: "",
    image: "",
    features: [],
    golden_visa: false,
    ...property,
  })

  const handleChange = (field: keyof Property, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    onSave(formData)
  }

  const addFeature = () => {
    const feature = prompt("Enter feature name:")
    if (feature && !formData.features?.includes(feature)) {
      handleChange("features", [...(formData.features || []), feature])
    }
  }

  const removeFeature = (feature: string) => {
    handleChange(
      "features",
      (formData.features || []).filter((f) => f !== feature),
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Enter property name"
          />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location || ""}
            onChange={(e) => handleChange("location", e.target.value)}
            placeholder="Enter property location"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="developer">Developer</Label>
          <Input
            id="developer"
            value={formData.developer || ""}
            onChange={(e) => handleChange("developer", e.target.value)}
            placeholder="Enter developer name"
          />
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            value={formData.price || ""}
            onChange={(e) => handleChange("price", e.target.value)}
            placeholder="Enter price"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="price_per_sqft">Price per sqft</Label>
          <Input
            id="price_per_sqft"
            value={formData.price_per_sqft || ""}
            onChange={(e) => handleChange("price_per_sqft", e.target.value)}
            placeholder="Enter price per sqft"
          />
        </div>
        <div>
          <Label htmlFor="size">Size</Label>
          <Input
            id="size"
            value={formData.size || ""}
            onChange={(e) => handleChange("size", e.target.value)}
            placeholder="Enter size"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="yield">Yield</Label>
          <Input
            id="yield"
            value={formData.yield || ""}
            onChange={(e) => handleChange("yield", e.target.value)}
            placeholder="Enter yield"
          />
        </div>
        <div>
          <Label htmlFor="handover">Handover</Label>
          <Input
            id="handover"
            value={formData.handover || ""}
            onChange={(e) => handleChange("handover", e.target.value)}
            placeholder="Enter handover"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="image">Image</Label>
        <div className="flex items-center space-x-2">
          <Input
            id="image"
            value={formData.image || ""}
            onChange={(e) => handleChange("image", e.target.value)}
            placeholder="Image URL"
          />
          <Button variant="outline">
            <ImageIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="type">Type</Label>
          <Select value={formData.type || "Apartment"} onValueChange={(value) => handleChange("type", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Apartment">Apartment</SelectItem>
              <SelectItem value="Villa">Villa</SelectItem>
              <SelectItem value="Commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select value={formData.status || "Ready"} onValueChange={(value) => handleChange("status", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ready">Ready</SelectItem>
              <SelectItem value="Off-Plan">Off-Plan</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label>Features</Label>
        <div className="flex flex-wrap gap-2 mb-2">
          {(formData.features || []).map((feature) => (
            <Badge key={feature} variant="secondary" className="cursor-pointer">
              {feature}
              <button onClick={() => removeFeature(feature)} className="ml-2 text-xs">
                ×
              </button>
            </Badge>
          ))}
        </div>
        <Button variant="outline" size="sm" onClick={addFeature}>
          Add Feature
        </Button>
      </div>

      <div>
        <Label htmlFor="golden_visa">Golden Visa</Label>
        <Select value={String(formData.golden_visa) || "false"} onValueChange={(value) => handleChange("golden_visa", value === "true")}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Yes</SelectItem>
              <SelectItem value="false">No</SelectItem>
            </SelectContent>
          </Select>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={handleSave} disabled={isLoading}>
          <Save className="h-4 w-4 mr-2" />
          {isLoading ? "Saving..." : "Save Property"}
        </Button>
      </div>
    </div>
  )
}
