"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  ImageIcon,
  Globe,
  Search,
  LogOut,
  TrendingUp,
  Eye,
} from "lucide-react"
import { AdminSEO } from "./admin-seo"
import { AdminContent } from "./admin-content"
import { AdminBlog } from "./admin-blog"
import { AdminProperties } from "./admin-properties"
import { AdminLeads } from "./admin-leads"
import { AdminMedia } from "./admin-media"
import { AdminTranslations } from "./admin-translations"
import { AdminSettings } from "./admin-settings"
import { ThemeToggle } from "@/components/theme-toggle"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    totalPosts: 0,
    pageViews: 0,
  })

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/stats")
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" })
      localStorage.removeItem("admin_token")
      window.location.reload()
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
              <Badge variant="outline" className="text-amber-600 border-amber-600">
                Shibi Kabeer Website
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen">
          <nav className="p-4">
            <div className="space-y-2">
              <Button
                variant={activeTab === "dashboard" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("dashboard")}
              >
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
              <Button
                variant={activeTab === "content" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("content")}
              >
                <FileText className="h-4 w-4 mr-2" />
                Content Management
              </Button>
              <Button
                variant={activeTab === "blog" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("blog")}
              >
                <FileText className="h-4 w-4 mr-2" />
                Blog Management
              </Button>
              <Button
                variant={activeTab === "properties" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("properties")}
              >
                <FileText className="h-4 w-4 mr-2" />
                Property Management
              </Button>
              <Button
                variant={activeTab === "leads" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("leads")}
              >
                <Users className="h-4 w-4 mr-2" />
                Lead Management
              </Button>
              <Button
                variant={activeTab === "media" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("media")}
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                Media Library
              </Button>
              <Button
                variant={activeTab === "translations" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("translations")}
              >
                <Globe className="h-4 w-4 mr-2" />
                Translations
              </Button>
              <Button
                variant={activeTab === "seo" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("seo")}
              >
                <Search className="h-4 w-4 mr-2" />
                SEO Management
              </Button>
              <Button
                variant={activeTab === "settings" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("settings")}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h2>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalLeads}</div>
                    <p className="text-xs text-muted-foreground">+{stats.newLeads} new this month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalPosts}</div>
                    <p className="text-xs text-muted-foreground">Published articles</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.pageViews.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12.5%</div>
                    <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button onClick={() => setActiveTab("content")} className="h-20 flex-col">
                      <FileText className="h-6 w-6 mb-2" />
                      Edit Content
                    </Button>
                    <Button onClick={() => setActiveTab("blog")} variant="outline" className="h-20 flex-col">
                      <FileText className="h-6 w-6 mb-2" />
                      New Blog Post
                    </Button>
                    <Button onClick={() => setActiveTab("leads")} variant="outline" className="h-20 flex-col">
                      <Users className="h-6 w-6 mb-2" />
                      View Leads
                    </Button>
                    <Button onClick={() => setActiveTab("media")} variant="outline" className="h-20 flex-col">
                      <ImageIcon className="h-6 w-6 mb-2" />
                      Upload Media
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "content" && <AdminContent />}
          {activeTab === "blog" && <AdminBlog />}
          {activeTab === "properties" && <AdminProperties />}
          {activeTab === "leads" && <AdminLeads />}
          {activeTab === "media" && <AdminMedia />}
          {activeTab === "translations" && <AdminTranslations />}
          {activeTab === "seo" && <AdminSEO />}
          {activeTab === "settings" && <AdminSettings />}
        </main>
      </div>
    </div>
  )
}
