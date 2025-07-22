"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Save, Download, Upload, Search, Plus, Edit, CheckCircle, AlertCircle } from "lucide-react"

interface Translation {
  key: string
  english: string
  arabic: string
  hindi: string
  urdu: string
  context: string
  category: string
  lastUpdated: string
}

interface Language {
  code: string
  name: string
  nativeName: string
  progress: number
  totalKeys: number
  translatedKeys: number
}

export function AdminTranslations() {
  const [translations, setTranslations] = useState<Translation[]>([])
  const [languages, setLanguages] = useState<Language[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState("arabic")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetchTranslations()
    fetchLanguages()
  }, [])

  const fetchTranslations = async () => {
    try {
      const response = await fetch("/api/admin/translations")
      if (response.ok) {
        const data = await response.json()
        setTranslations(data)
      }
    } catch (error) {
      console.error("Failed to fetch translations:", error)
    }
  }

  const fetchLanguages = async () => {
    try {
      const response = await fetch("/api/admin/translations/languages")
      if (response.ok) {
        const data = await response.json()
        setLanguages(data)
      }
    } catch (error) {
      console.error("Failed to fetch languages:", error)
    }
  }

  const updateTranslation = async (key: string, updates: Partial<Translation>) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/translations/${key}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      })

      if (response.ok) {
        const updatedTranslation = await response.json()
        setTranslations(translations.map((t) => (t.key === key ? updatedTranslation : t)))
        setMessage("Translation updated successfully!")
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to update translation")
      }
    } catch (error) {
      setMessage("Error updating translation")
    } finally {
      setIsLoading(false)
    }
  }

  const addTranslation = async (translationData: Partial<Translation>) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/admin/translations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(translationData),
      })

      if (response.ok) {
        const newTranslation = await response.json()
        setTranslations([...translations, newTranslation])
        setMessage("Translation added successfully!")
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to add translation")
      }
    } catch (error) {
      setMessage("Error adding translation")
    } finally {
      setIsLoading(false)
    }
  }

  const exportTranslations = async (language: string) => {
    try {
      const response = await fetch(`/api/admin/translations/export/${language}`)
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `translations-${language}.json`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      }
    } catch (error) {
      console.error("Failed to export translations:", error)
    }
  }

  const filteredTranslations = translations.filter((translation) => {
    const matchesSearch =
      translation.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      translation.english.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || translation.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(translations.map((t) => t.category))).filter(Boolean)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Translation Management</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={() => exportTranslations(selectedLanguage)}>
            <Download className="h-4 w-4 mr-2" />
            Export {selectedLanguage}
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Translation
          </Button>
        </div>
      </div>

      {message && (
        <Alert>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      {/* Language Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {languages.map((language) => (
          <Card key={language.code}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center justify-between">
                <span>{language.name}</span>
                <Badge variant={language.progress === 100 ? "default" : "secondary"}>{language.progress}%</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={language.progress} className="h-2" />
                <div className="text-xs text-gray-500">
                  {language.translatedKeys} of {language.totalKeys} translated
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="translations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="translations">Translations</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Operations</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="translations" className="space-y-4">
          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search translations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="urdu">Urdu</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Translations List */}
          <div className="space-y-4">
            {filteredTranslations.map((translation) => (
              <TranslationItem
                key={translation.key}
                translation={translation}
                selectedLanguage={selectedLanguage}
                onUpdate={(updates) => updateTranslation(translation.key, updates)}
                isLoading={isLoading}
              />
            ))}
          </div>

          {filteredTranslations.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="text-gray-500">
                  {searchTerm || selectedCategory !== "all"
                    ? "No translations match your filters"
                    : "No translations found"}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="bulk" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bulk Operations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Import Translations</Label>
                <div className="flex items-center space-x-2 mt-2">
                  <Input type="file" accept=".json,.csv" />
                  <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    Import
                  </Button>
                </div>
                <div className="text-sm text-gray-500 mt-1">Upload JSON or CSV file with translations</div>
              </div>

              <div>
                <Label>Auto-Translate Missing</Label>
                <div className="flex items-center space-x-2 mt-2">
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="arabic">Arabic</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="urdu">Urdu</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Globe className="h-4 w-4 mr-2" />
                    Auto-Translate
                  </Button>
                </div>
                <div className="text-sm text-gray-500 mt-1">Automatically translate missing keys using AI</div>
              </div>

              <div>
                <Label>Find Missing Translations</Label>
                <div className="flex items-center space-x-2 mt-2">
                  <Button variant="outline">
                    <Search className="h-4 w-4 mr-2" />
                    Scan Code
                  </Button>
                  <Button variant="outline">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Show Missing
                  </Button>
                </div>
                <div className="text-sm text-gray-500 mt-1">Scan codebase for untranslated strings</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Translation Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Default Language</Label>
                <Select defaultValue="english">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Fallback Language</Label>
                <Select defaultValue="english">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto-detect Language</Label>
                  <div className="text-sm text-gray-500">Automatically detect user language from browser</div>
                </div>
                <Button variant="outline">Enable</Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>RTL Support</Label>
                  <div className="text-sm text-gray-500">Enable right-to-left text direction for Arabic</div>
                </div>
                <Button variant="outline">Enable</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface TranslationItemProps {
  translation: Translation
  selectedLanguage: string
  onUpdate: (updates: Partial<Translation>) => void
  isLoading: boolean
}

function TranslationItem({ translation, selectedLanguage, onUpdate, isLoading }: TranslationItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState("")

  const currentTranslation = translation[selectedLanguage as keyof Translation] as string
  const isTranslated = Boolean(currentTranslation)

  const handleEdit = () => {
    setEditValue(currentTranslation || "")
    setIsEditing(true)
  }

  const handleSave = () => {
    onUpdate({ [selectedLanguage]: editValue })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditValue("")
    setIsEditing(false)
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{translation.key}</code>
                <Badge variant="outline" className="text-xs">
                  {translation.category}
                </Badge>
                {isTranslated ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                )}
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong>English:</strong> {translation.english}
              </div>

              {translation.context && (
                <div className="text-xs text-gray-500 mb-2">
                  <strong>Context:</strong> {translation.context}
                </div>
              )}
            </div>

            <Button variant="outline" size="sm" onClick={handleEdit} disabled={isEditing}>
              <Edit className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <Label className="text-sm font-medium">
              {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} Translation
            </Label>
            {isEditing ? (
              <div className="space-y-2 mt-1">
                <Textarea
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  placeholder={`Enter ${selectedLanguage} translation...`}
                  rows={2}
                  className={selectedLanguage === "arabic" ? "text-right" : ""}
                  dir={selectedLanguage === "arabic" ? "rtl" : "ltr"}
                />
                <div className="flex items-center space-x-2">
                  <Button size="sm" onClick={handleSave} disabled={isLoading}>
                    <Save className="h-3 w-3 mr-1" />
                    Save
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div
                className={`mt-1 p-2 bg-gray-50 dark:bg-gray-800 rounded text-sm ${
                  selectedLanguage === "arabic" ? "text-right" : ""
                }`}
                dir={selectedLanguage === "arabic" ? "rtl" : "ltr"}
              >
                {currentTranslation || <span className="text-gray-400 italic">No translation</span>}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
