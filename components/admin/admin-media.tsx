"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Upload, ImageIcon, Video, FileText, Trash2, Edit, Search, Copy, Grid, List } from "lucide-react"

interface MediaFile {
  id: string
  filename: string
  originalName: string
  url: string
  type: "image" | "video" | "document"
  size: number
  mimeType: string
  alt: string
  caption: string
  tags: string[]
  uploadedAt: string
  usedIn: string[]
}

export function AdminMedia() {
  const [files, setFiles] = useState<MediaFile[]>([])
  const [selectedFile, setSelectedFile] = useState<MediaFile | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetchFiles()
  }, [])

  const fetchFiles = async () => {
    try {
      const response = await fetch("/api/admin/media")
      if (response.ok) {
        const data = await response.json()
        setFiles(data)
      }
    } catch (error) {
      console.error("Failed to fetch media files:", error)
    }
  }

  const uploadFile = async (file: File) => {
    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/admin/media/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const newFile = await response.json()
        setFiles([newFile, ...files])
        setMessage("File uploaded successfully!")
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to upload file")
      }
    } catch (error) {
      setMessage("Error uploading file")
    } finally {
      setIsLoading(false)
    }
  }

  const updateFile = async (fileId: string, updates: Partial<MediaFile>) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/media/${fileId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      })

      if (response.ok) {
        const updatedFile = await response.json()
        setFiles(files.map((f) => (f.id === fileId ? updatedFile : f)))
        setMessage("File updated successfully!")
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to update file")
      }
    } catch (error) {
      setMessage("Error updating file")
    } finally {
      setIsLoading(false)
    }
  }

  const deleteFile = async (fileId: string) => {
    if (!confirm("Are you sure you want to delete this file?")) return

    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/media/${fileId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setFiles(files.filter((f) => f.id !== fileId))
        setMessage("File deleted successfully!")
        setSelectedFile(null)
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to delete file")
      }
    } catch (error) {
      setMessage("Error deleting file")
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || [])
    selectedFiles.forEach((file) => {
      uploadFile(file)
    })
  }

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url)
    setMessage("URL copied to clipboard!")
    setTimeout(() => setMessage(""), 2000)
  }

  const filteredFiles = files.filter((file) => {
    const matchesSearch =
      (file.originalName || "").toLowerCase().includes((searchTerm || "").toLowerCase()) ||
      (file.alt || "").toLowerCase().includes((searchTerm || "").toLowerCase()) ||
      (Array.isArray(file.tags) ? file.tags : []).some((tag) => (tag || "").toLowerCase().includes((searchTerm || "").toLowerCase()))
    const matchesType = typeFilter === "all" || file.type === typeFilter
    return matchesSearch && matchesType
  })

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Media Library</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}>
            {viewMode === "grid" ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
          </Button>
          <Button onClick={() => fileInputRef.current?.click()}>
            <Upload className="h-4 w-4 mr-2" />
            Upload Files
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,video/*,.pdf,.doc,.docx"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
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
                  placeholder="Search files..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="image">Images</SelectItem>
                <SelectItem value="video">Videos</SelectItem>
                <SelectItem value="document">Documents</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Files Display */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredFiles.map((file) => (
            <Card key={file.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative bg-gray-100 dark:bg-gray-800">
                {file.type === "image" ? (
                  <img src={file.url || "/placeholder.svg"} alt={file.alt} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">{getFileIcon(file.type)}</div>
                )}
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="text-xs">
                    {file.type}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-3">
                <div className="text-sm font-medium truncate" title={file.originalName}>
                  {file.originalName}
                </div>
                <div className="text-xs text-gray-500 mt-1">{formatFileSize(file.size)}</div>
                <div className="flex items-center space-x-1 mt-2">
                  <Button variant="outline" size="sm" onClick={() => copyUrl(file.url)}>
                    <Copy className="h-3 w-3" />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedFile(file)}>
                        <Edit className="h-3 w-3" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Edit File</DialogTitle>
                      </DialogHeader>
                      <FileEditor
                        file={selectedFile}
                        onUpdate={(updates) => updateFile(selectedFile!.id, updates)}
                        onDelete={() => deleteFile(selectedFile!.id)}
                        isLoading={isLoading}
                      />
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" size="sm" onClick={() => deleteFile(file.id)}>
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {filteredFiles.map((file) => (
                <div
                  key={file.id}
                  className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {file.type === "image" ? (
                        <img
                          src={file.url || "/placeholder.svg"}
                          alt={file.alt}
                          className="w-12 h-12 object-cover rounded"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                          {getFileIcon(file.type)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{file.originalName}</div>
                      <div className="text-sm text-gray-500">
                        {formatFileSize(file.size)} • {file.type} • {new Date(file.uploadedAt).toLocaleDateString()}
                      </div>
                      {file.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {file.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={() => copyUrl(file.url)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setSelectedFile(file)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Edit File</DialogTitle>
                        </DialogHeader>
                        <FileEditor
                          file={selectedFile}
                          onUpdate={(updates) => updateFile(selectedFile!.id, updates)}
                          onDelete={() => deleteFile(selectedFile!.id)}
                          isLoading={isLoading}
                        />
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm" onClick={() => deleteFile(file.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {filteredFiles.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-gray-500">
              {searchTerm || typeFilter !== "all"
                ? "No files match your filters"
                : "No files uploaded yet. Upload your first file!"}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

interface FileEditorProps {
  file: MediaFile | null
  onUpdate: (updates: Partial<MediaFile>) => void
  onDelete: () => void
  isLoading: boolean
}

function FileEditor({ file, onUpdate, onDelete, isLoading }: FileEditorProps) {
  const [formData, setFormData] = useState<Partial<MediaFile>>(file || {})

  useEffect(() => {
    if (file) {
      setFormData(file)
    }
  }, [file])

  if (!file) return null

  const handleChange = (field: keyof MediaFile, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    onUpdate(formData)
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
      {/* File Preview */}
      <div className="text-center">
        {file.type === "image" ? (
          <img src={file.url || "/placeholder.svg"} alt={file.alt} className="max-w-full max-h-64 mx-auto rounded" />
        ) : (
          <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center mx-auto">
            {file.type === "video" ? <Video className="h-12 w-12" /> : <FileText className="h-12 w-12" />}
          </div>
        )}
        <div className="mt-2 text-sm text-gray-500">
          {file.originalName} • {file.size ? (file.size / 1024).toFixed(1) : 0} KB
        </div>
      </div>

      <div>
        <Label htmlFor="alt-text">Alt Text</Label>
        <Input
          id="alt-text"
          value={formData.alt || ""}
          onChange={(e) => handleChange("alt", e.target.value)}
          placeholder="Describe this image for accessibility"
        />
      </div>

      <div>
        <Label htmlFor="caption">Caption</Label>
        <Input
          id="caption"
          value={formData.caption || ""}
          onChange={(e) => handleChange("caption", e.target.value)}
          placeholder="Optional caption"
        />
      </div>

      <div>
        <Label>Tags</Label>
        <div className="flex flex-wrap gap-2 mb-2">
          {(formData.tags || []).map((tag) => (
            <Badge key={tag} variant="secondary" className="cursor-pointer">
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

      <div>
        <Label>File URL</Label>
        <div className="flex items-center space-x-2">
          <Input value={file.url} readOnly className="font-mono text-sm" />
          <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(file.url)}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {file.usedIn && file.usedIn.length > 0 && (
        <div>
          <Label>Used In</Label>
          <div className="space-y-1">
            {file.usedIn.map((location) => (
              <Badge key={location} variant="outline" className="mr-2">
                {location}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <Button variant="destructive" onClick={onDelete}>
          <Trash2 className="h-4 w-4 mr-2" />
          Delete File
        </Button>
        <Button onClick={handleSave} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  )
}
