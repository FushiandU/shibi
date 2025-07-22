"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Save, Settings, Globe, Mail, Shield, Palette, Database, Key, Upload } from "lucide-react"

interface SiteSettings {
  siteName: string
  siteDescription: string
  siteUrl: string
  contactEmail: string
  contactPhone: string
  address: string
  socialLinks: {
    facebook: string
    instagram: string
    linkedin: string
    twitter: string
    youtube: string
  }
  features: {
    darkMode: boolean
    multilingual: boolean
    blog: boolean
    events: boolean
    newsletter: boolean
    analytics: boolean
  }
  seo: {
    googleAnalytics: string
    googleTagManager: string
    facebookPixel: string
    metaKeywords: string
  }
  email: {
    smtpHost: string
    smtpPort: string
    smtpUser: string
    smtpPassword: string
    fromEmail: string
    fromName: string
  }
  security: {
    twoFactorAuth: boolean
    ipWhitelist: string[]
    sessionTimeout: number
    maxLoginAttempts: number
  }
}

export function AdminSettings() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: "",
    siteDescription: "",
    siteUrl: "",
    contactEmail: "",
    contactPhone: "",
    address: "",
    socialLinks: {
      facebook: "",
      instagram: "",
      linkedin: "",
      twitter: "",
      youtube: "",
    },
    features: {
      darkMode: true,
      multilingual: true,
      blog: true,
      events: true,
      newsletter: true,
      analytics: true,
    },
    seo: {
      googleAnalytics: "",
      googleTagManager: "",
      facebookPixel: "",
      metaKeywords: "",
    },
    email: {
      smtpHost: "",
      smtpPort: "",
      smtpUser: "",
      smtpPassword: "",
      fromEmail: "",
      fromName: "",
    },
    security: {
      twoFactorAuth: false,
      ipWhitelist: [],
      sessionTimeout: 30,
      maxLoginAttempts: 5,
    },
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const response = await fetch("/api/admin/settings")
      if (response.ok) {
        const data = await response.json()
        setSettings({ ...settings, ...data })
      }
    } catch (error) {
      console.error("Failed to fetch settings:", error)
    }
  }

  const updateSettings = async (updates: Partial<SiteSettings>) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      })

      if (response.ok) {
        setSettings({ ...settings, ...updates })
        setMessage("Settings updated successfully!")
        setTimeout(() => setMessage(""), 3000)
      } else {
        setMessage("Failed to update settings")
      }
    } catch (error) {
      setMessage("Error updating settings")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (section: keyof SiteSettings, field: string, value: any) => {
    if (typeof settings[section] === "object" && settings[section] !== null) {
      setSettings({
        ...settings,
        [section]: {
          ...(settings[section] as any),
          [field]: value,
        },
      })
    } else {
      setSettings({
        ...settings,
        [section]: value,
      })
    }
  }

  const handleSave = () => {
    updateSettings(settings)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h2>
        <Button onClick={handleSave} disabled={isLoading}>
          <Save className="h-4 w-4 mr-2" />
          {isLoading ? "Saving..." : "Save All Changes"}
        </Button>
      </div>

      {message && (
        <Alert>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="site-name">Site Name</Label>
                <Input
                  id="site-name"
                  value={settings.siteName}
                  onChange={(e) => handleChange("siteName", "", e.target.value)}
                  placeholder="Shibi Kabeer"
                />
              </div>

              <div>
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea
                  id="site-description"
                  value={settings.siteDescription}
                  onChange={(e) => handleChange("siteDescription", "", e.target.value)}
                  placeholder="Dubai's Premier Real Estate & E-commerce Expert"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="site-url">Site URL</Label>
                <Input
                  id="site-url"
                  value={settings.siteUrl}
                  onChange={(e) => handleChange("siteUrl", "", e.target.value)}
                  placeholder="https://shibikabeer.com"
                />
              </div>

              <div>
                <Label>Logo Upload</Label>
                <div className="flex items-center space-x-2">
                  <Input type="file" accept="image/*" />
                  <Button variant="outline">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input
                    id="contact-email"
                    value={settings.contactEmail}
                    onChange={(e) => handleChange("contactEmail", "", e.target.value)}
                    placeholder="shibikabeer@gmail.com"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input
                    id="contact-phone"
                    value={settings.contactPhone}
                    onChange={(e) => handleChange("contactPhone", "", e.target.value)}
                    placeholder="+971 55 799 4258"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Office Address</Label>
                <Textarea
                  id="address"
                  value={settings.address}
                  onChange={(e) => handleChange("address", "", e.target.value)}
                  placeholder="Silver Tower Business Bay, Dubai, UAE"
                  rows={3}
                />
              </div>

              <div>
                <Label>Social Media Links</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input
                      id="facebook"
                      value={settings.socialLinks.facebook}
                      onChange={(e) => handleChange("socialLinks", "facebook", e.target.value)}
                      placeholder="https://facebook.com/shibikabeer"
                    />
                  </div>
                  <div>
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input
                      id="instagram"
                      value={settings.socialLinks.instagram}
                      onChange={(e) => handleChange("socialLinks", "instagram", e.target.value)}
                      placeholder="https://instagram.com/shibikabeer"
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      value={settings.socialLinks.linkedin}
                      onChange={(e) => handleChange("socialLinks", "linkedin", e.target.value)}
                      placeholder="https://linkedin.com/in/shibikabeer"
                    />
                  </div>
                  <div>
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input
                      id="twitter"
                      value={settings.socialLinks.twitter}
                      onChange={(e) => handleChange("socialLinks", "twitter", e.target.value)}
                      placeholder="https://twitter.com/shibikabeer"
                    />
                  </div>
                  <div>
                    <Label htmlFor="youtube">YouTube</Label>
                    <Input
                      id="youtube"
                      value={settings.socialLinks.youtube}
                      onChange={(e) => handleChange("socialLinks", "youtube", e.target.value)}
                      placeholder="https://youtube.com/@shibikabeer"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                Website Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Dark Mode</Label>
                    <div className="text-sm text-gray-500">Allow users to switch between light and dark themes</div>
                  </div>
                  <Switch
                    checked={settings.features.darkMode}
                    onCheckedChange={(checked) => handleChange("features", "darkMode", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Multilingual Support</Label>
                    <div className="text-sm text-gray-500">Enable multiple language support</div>
                  </div>
                  <Switch
                    checked={settings.features.multilingual}
                    onCheckedChange={(checked) => handleChange("features", "multilingual", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Blog System</Label>
                    <div className="text-sm text-gray-500">Enable blog functionality</div>
                  </div>
                  <Switch
                    checked={settings.features.blog}
                    onCheckedChange={(checked) => handleChange("features", "blog", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Events System</Label>
                    <div className="text-sm text-gray-500">Enable events and calendar functionality</div>
                  </div>
                  <Switch
                    checked={settings.features.events}
                    onCheckedChange={(checked) => handleChange("features", "events", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Newsletter</Label>
                    <div className="text-sm text-gray-500">Enable newsletter subscription</div>
                  </div>
                  <Switch
                    checked={settings.features.newsletter}
                    onCheckedChange={(checked) => handleChange("features", "newsletter", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Analytics</Label>
                    <div className="text-sm text-gray-500">Enable analytics tracking</div>
                  </div>
                  <Switch
                    checked={settings.features.analytics}
                    onCheckedChange={(checked) => handleChange("features", "analytics", checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                SEO & Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="google-analytics">Google Analytics ID</Label>
                <Input
                  id="google-analytics"
                  value={settings.seo.googleAnalytics}
                  onChange={(e) => handleChange("seo", "googleAnalytics", e.target.value)}
                  placeholder="G-XXXXXXXXXX"
                />
              </div>

              <div>
                <Label htmlFor="google-tag-manager">Google Tag Manager ID</Label>
                <Input
                  id="google-tag-manager"
                  value={settings.seo.googleTagManager}
                  onChange={(e) => handleChange("seo", "googleTagManager", e.target.value)}
                  placeholder="GTM-XXXXXXX"
                />
              </div>

              <div>
                <Label htmlFor="facebook-pixel">Facebook Pixel ID</Label>
                <Input
                  id="facebook-pixel"
                  value={settings.seo.facebookPixel}
                  onChange={(e) => handleChange("seo", "facebookPixel", e.target.value)}
                  placeholder="123456789012345"
                />
              </div>

              <div>
                <Label htmlFor="meta-keywords">Default Meta Keywords</Label>
                <Textarea
                  id="meta-keywords"
                  value={settings.seo.metaKeywords}
                  onChange={(e) => handleChange("seo", "metaKeywords", e.target.value)}
                  placeholder="dubai real estate, property investment, golden visa"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Email Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="smtp-host">SMTP Host</Label>
                  <Input
                    id="smtp-host"
                    value={settings.email.smtpHost}
                    onChange={(e) => handleChange("email", "smtpHost", e.target.value)}
                    placeholder="smtp.gmail.com"
                  />
                </div>
                <div>
                  <Label htmlFor="smtp-port">SMTP Port</Label>
                  <Input
                    id="smtp-port"
                    value={settings.email.smtpPort}
                    onChange={(e) => handleChange("email", "smtpPort", e.target.value)}
                    placeholder="587"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="smtp-user">SMTP Username</Label>
                  <Input
                    id="smtp-user"
                    value={settings.email.smtpUser}
                    onChange={(e) => handleChange("email", "smtpUser", e.target.value)}
                    placeholder="your-email@gmail.com"
                  />
                </div>
                <div>
                  <Label htmlFor="smtp-password">SMTP Password</Label>
                  <Input
                    id="smtp-password"
                    type="password"
                    value={settings.email.smtpPassword}
                    onChange={(e) => handleChange("email", "smtpPassword", e.target.value)}
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="from-email">From Email</Label>
                  <Input
                    id="from-email"
                    value={settings.email.fromEmail}
                    onChange={(e) => handleChange("email", "fromEmail", e.target.value)}
                    placeholder="noreply@shibikabeer.com"
                  />
                </div>
                <div>
                  <Label htmlFor="from-name">From Name</Label>
                  <Input
                    id="from-name"
                    value={settings.email.fromName}
                    onChange={(e) => handleChange("email", "fromName", e.target.value)}
                    placeholder="Shibi Kabeer"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline">Test Email Configuration</Button>
                <Badge variant="outline">Status: Not Tested</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <div className="text-sm text-gray-500">Require 2FA for admin login</div>
                </div>
                <Switch
                  checked={settings.security.twoFactorAuth}
                  onCheckedChange={(checked) => handleChange("security", "twoFactorAuth", checked)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Input
                    id="session-timeout"
                    type="number"
                    value={settings.security.sessionTimeout}
                    onChange={(e) => handleChange("security", "sessionTimeout", Number.parseInt(e.target.value))}
                    placeholder="30"
                  />
                </div>
                <div>
                  <Label htmlFor="max-login-attempts">Max Login Attempts</Label>
                  <Input
                    id="max-login-attempts"
                    type="number"
                    value={settings.security.maxLoginAttempts}
                    onChange={(e) => handleChange("security", "maxLoginAttempts", Number.parseInt(e.target.value))}
                    placeholder="5"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="ip-whitelist">IP Whitelist</Label>
                <Textarea
                  id="ip-whitelist"
                  value={settings.security.ipWhitelist.join("\n")}
                  onChange={(e) => handleChange("security", "ipWhitelist", e.target.value.split("\n").filter(Boolean))}
                  placeholder="192.168.1.1&#10;10.0.0.1"
                  rows={4}
                />
                <div className="text-sm text-gray-500 mt-1">One IP address per line. Leave empty to allow all IPs.</div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline">
                  <Key className="h-4 w-4 mr-2" />
                  Generate API Key
                </Button>
                <Button variant="outline">
                  <Database className="h-4 w-4 mr-2" />
                  Backup Database
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
