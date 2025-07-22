"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Play, TrendingUp, Award, Users } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
    language: "English",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "hero-form",
        }),
      })

      if (response.ok) {
        setMessage("Thank you! We'll contact you soon.")
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          interest: "",
          language: "English",
        })
      } else {
        setMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setMessage(""), 5000)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with improved contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-800/90 to-slate-900/95"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522093014132-d14155f4a73b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold font-montserrat leading-tight text-white drop-shadow-lg">
                Empower Your Future with <span className="text-amber-400 drop-shadow-lg">Shibi Kabeer</span>
              </h1>
              <p className="text-xl lg:text-2xl text-amber-100 font-light drop-shadow-md">
                Dubai's Premier Real Estate & E-commerce Expert
              </p>
              <p className="text-lg text-gray-100 max-w-2xl drop-shadow-md">
                Discover Tax-Free Investments and Business Growth Strategies with a Visionary UAE Entrepreneur
              </p>
            </div>

            {/* Stats with improved visibility */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-600 rounded-full mb-2 mx-auto shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-amber-400 drop-shadow-md">8%+</div>
                <div className="text-sm text-gray-100">Average ROI</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-600 rounded-full mb-2 mx-auto shadow-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-amber-400 drop-shadow-md">500+</div>
                <div className="text-sm text-gray-100">Successful Deals</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-600 rounded-full mb-2 mx-auto shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-amber-400 drop-shadow-md">1000+</div>
                <div className="text-sm text-gray-100">Happy Clients</div>
              </div>
            </div>

            {/* CTA Buttons with proper links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/properties">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg shadow-xl border-2 border-amber-500 hover:border-amber-600 transition-all duration-300 w-full sm:w-auto"
                >
                  Explore Properties
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg bg-white/10 backdrop-blur-sm shadow-xl transition-all duration-300"
                onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Virtual Tour
              </Button>
            </div>
          </div>

          {/* Right Column - Lead Generation Form with improved contrast */}
          <Card className="bg-white/98 backdrop-blur-md shadow-2xl border border-white/50">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Get Your Personalized Investment Guide</h3>
                  <p className="text-gray-700">Start your Dubai investment journey with expert guidance</p>
                </div>

                {message && (
                  <div
                    className={`p-3 rounded-lg text-center ${
                      message.includes("Thank you")
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-800 font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      required
                      disabled={isSubmitting}
                      className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-800 font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      required
                      disabled={isSubmitting}
                      className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-800 font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      required
                      disabled={isSubmitting}
                      className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interest" className="text-gray-800 font-medium">
                      Investment Interest
                    </Label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) => setFormData({ ...formData, interest: value })}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Property</SelectItem>
                        <SelectItem value="commercial">Commercial Property</SelectItem>
                        <SelectItem value="off-plan">Off-Plan Projects</SelectItem>
                        <SelectItem value="rental">Rental Income Focus</SelectItem>
                        <SelectItem value="capital">Capital Appreciation Focus</SelectItem>
                        <SelectItem value="ecommerce">E-commerce Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="language" className="text-gray-800 font-medium">
                      Preferred Language
                    </Label>
                    <Select
                      value={formData.language}
                      onValueChange={(value) => setFormData({ ...formData, language: value })}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Arabic">العربية</SelectItem>
                        <SelectItem value="Hindi">हिन्दी</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Guide"}
                  </Button>
                </form>

                <p className="text-xs text-gray-600 text-center">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
