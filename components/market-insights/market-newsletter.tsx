"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, TrendingUp, Bell, CheckCircle } from "lucide-react"

export function MarketNewsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  const features = [
    "Weekly market updates and trends",
    "Exclusive investment opportunities",
    "Price movement alerts",
    "New project launches",
    "Expert analysis and insights",
    "Golden Visa updates",
  ]

  const recentUpdates = [
    {
      title: "Dubai Marina Prices Surge 15% in Q3",
      date: "2 days ago",
      type: "Price Alert",
    },
    {
      title: "New Off-Plan Launch in Business Bay",
      date: "5 days ago",
      type: "New Project",
    },
    {
      title: "Golden Visa Requirements Updated",
      date: "1 week ago",
      type: "Policy Update",
    },
  ]

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-none shadow-xl bg-white dark:bg-gray-800">
            <CardContent className="p-12 text-center">
              <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">Welcome to Market Insights!</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Thank you for subscribing! You'll receive your first market update within 24 hours.
              </p>
              <Button onClick={() => setIsSubscribed(false)} variant="outline">
                Subscribe Another Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
              Market Newsletter
            </Badge>
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white font-montserrat mb-6">
              Stay Ahead of the Market
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get exclusive market insights, investment opportunities, and expert analysis delivered to your inbox
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter Signup */}
            <Card className="border-none shadow-xl dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-amber-600/20 rounded-full">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 dark:text-white">Market Insights Newsletter</h3>
                    <p className="text-gray-600 dark:text-gray-300">Join 5,000+ investors</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                  <Button type="submit" size="lg" className="w-full bg-amber-600 hover:bg-amber-700">
                    Subscribe for Free
                  </Button>
                </form>

                <div className="space-y-3">
                  <h4 className="font-semibold text-navy-900 dark:text-white">What you'll get:</h4>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
                  No spam. Unsubscribe anytime. Your email is safe with us.
                </p>
              </CardContent>
            </Card>

            {/* Recent Updates Preview */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Recent Market Updates</h3>
                <p className="text-gray-600 dark:text-gray-300">See what our subscribers are reading about</p>
              </div>

              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <Card key={index} className="border-none shadow-lg dark:bg-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <Badge variant="outline" className="text-xs mb-2">
                            {update.type}
                          </Badge>
                          <h4 className="font-semibold text-navy-900 dark:text-white mb-1">{update.title}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{update.date}</p>
                        </div>
                        <TrendingUp className="h-5 w-5 text-amber-600 flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-2 border-amber-600 bg-amber-50 dark:bg-amber-900/20">
                <CardContent className="p-6 text-center">
                  <Bell className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-navy-900 dark:text-white mb-2">Never Miss an Opportunity</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Get instant alerts on price drops, new launches, and investment opportunities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
