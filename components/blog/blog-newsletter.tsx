"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, TrendingUp, Bell, Star } from "lucide-react"

export function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
  }

  const benefits = [
    { icon: <TrendingUp className="h-5 w-5" />, text: "Weekly market analysis" },
    { icon: <Bell className="h-5 w-5" />, text: "Breaking news alerts" },
    { icon: <Star className="h-5 w-5" />, text: "Exclusive investment tips" },
  ]

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-r from-amber-600 to-emerald-600">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Welcome to Our Community!</h3>
              <p className="text-gray-600 mb-6">
                You're now subscribed to receive weekly market insights and exclusive investment opportunities.
              </p>
              <Badge className="bg-emerald-600 text-white">You'll receive your first newsletter this week!</Badge>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 to-emerald-600">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Newsletter</Badge>
              <h2 className="text-4xl font-bold font-montserrat mb-4">
                Stay Ahead of the <span className="text-amber-200">Market</span>
              </h2>
              <p className="text-xl text-amber-100">
                Join thousands of successful investors who rely on our weekly insights to make informed decisions in
                Dubai's dynamic real estate market.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-amber-200">{benefit.icon}</div>
                  <span className="text-amber-100">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="text-amber-200 font-semibold">
              Join 5,000+ investors • Free weekly newsletter • Unsubscribe anytime
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Get Weekly Market Insights</h3>
                  <p className="text-gray-600">
                    Receive expert analysis, investment opportunities, and market trends directly in your inbox.
                  </p>
                </div>

                <div>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="text-lg py-3"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg"
                  disabled={!email}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe to Newsletter
                </Button>

                <div className="text-center">
                  <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
