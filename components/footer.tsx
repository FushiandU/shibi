"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setEmail("")
        alert("Thank you for subscribing!")
      }
    } catch (error) {
      console.error("Newsletter subscription failed:", error)
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <footer className="bg-navy-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SK</span>
              </div>
              <div>
                <div className="font-bold text-xl">Shibi Kabeer</div>
                <div className="text-sm text-gray-400">Dubai Real Estate Expert</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering your future with expert real estate investment guidance and e-commerce consulting in Dubai's
              dynamic market.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/shibikabeer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/shibikabeer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/shibikabeer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/shibikabeer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com/@shibikabeer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  About Shibi
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/golden-visa" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  Golden Visa
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/investment-consultation"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Investment Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/property-management"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Property Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/golden-visa-assistance"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Golden Visa Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce-consulting"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  E-commerce Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/market-analysis"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/services/legal-support"
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Legal Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-amber-400" />
                <span className="text-gray-300">+971 55 799 4258</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-amber-400" />
                <span className="text-gray-300">shibikabeer@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-amber-400 mt-0.5" />
                <span className="text-gray-300">
                  Silver Tower, Business Bay
                  <br />
                  Dubai, UAE
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-2">
              <h4 className="font-medium">Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubscribing}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button type="submit" size="sm" disabled={isSubscribing} className="bg-amber-600 hover:bg-amber-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">© 2025 Shibi Kabeer. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-amber-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
