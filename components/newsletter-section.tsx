"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Mail, TrendingUp, Building, Lightbulb, Award } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [interests, setInterests] = useState<string[]>([])
  const [isSubscribed, setIsSubscribed] = useState(false)

  const interestOptions = [
    { id: "market-trends", label: "Market Trends & Analysis", icon: <TrendingUp className="h-4 w-4" /> },
    { id: "new-launches", label: "New Property Launches", icon: <Building className="h-4 w-4" /> },
    { id: "investment-tips", label: "Investment Tips & Strategies", icon: <Lightbulb className="h-4 w-4" /> },
    { id: "golden-visa", label: "Golden Visa Updates", icon: <Award className="h-4 w-4" /> },
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-amber-600" />,
      title: "Market Analysis",
      description: "Weekly market trends and price analysis",
    },
    {
      icon: <Building className="h-6 w-6 text-amber-600" />,
      title: "Exclusive Launches",
      description: "First access to new property launches",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
      title: "Expert Tips",
      description: "Investment strategies from industry experts",
    },
  ]

  const handleInterestChange = (interestId: string, checked: boolean) => {
    if (checked) {
      setInterests([...interests, interestId])
    } else {
      setInterests(interests.filter((id) => id !== interestId))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", { email, interests })
    setIsSubscribed(true)
    // Handle newsletter subscription
  }

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-r from-amber-600 to-emerald-600">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Thank You for Subscribing!</h3>
              <p className="text-gray-600 mb-6">
                You'll receive our latest market insights and exclusive property opportunities directly in your inbox.
              </p>
              <Badge className="bg-emerald-600 text-white">Welcome to our community of successful investors!</Badge>
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
              <Badge className="bg-white/20 text-white mb-4">Stay Updated</Badge>
              <h2 className="text-4xl font-bold font-montserrat mb-4">Stay Ahead of Dubai's Real Estate Market</h2>
              <p className="text-xl text-amber-100">
                Get exclusive market insights, new property launches, and investment opportunities delivered to your
                inbox
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-amber-100 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Subscribe to Newsletter</h3>
                  <p className="text-gray-600">
                    Join thousands of successful investors staying informed about Dubai's market
                  </p>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-base font-semibold">What interests you most?</Label>
                  <div className="grid grid-cols-1 gap-3 mt-3">
                    {interestOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={option.id}
                          checked={interests.includes(option.id)}
                          onCheckedChange={(checked) => handleInterestChange(option.id, checked as boolean)}
                        />
                        <Label htmlFor={option.id} className="flex items-center space-x-2 cursor-pointer">
                          {option.icon}
                          <span>{option.label}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg"
                  disabled={!email}
                >
                  Subscribe to Newsletter
                </Button>

                <div className="text-center">
                  <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
                  <p className="text-xs text-gray-500 mt-1">
                    By subscribing, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
