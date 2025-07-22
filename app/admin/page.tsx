"use client"

import { useState, useEffect } from "react"
import { AdminAuth } from "@/components/admin/admin-auth"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if admin is already authenticated
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/auth/check")
        if (response.ok) {
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <AdminAuth onAuthenticated={() => setIsAuthenticated(true)} />
  }

  return <AdminDashboard />
}
