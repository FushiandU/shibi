"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react"
import Link from "next/link"

export function RealEstateCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Dubai Real Estate Journey?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of successful investors who have built wealth through Dubai's thriving real estate market.
            Let's discuss your investment goals today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <Phone className="h-12 w-12 text-[#db8102] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Free Consultation</h3>
              <p className="text-slate-300 mb-6">
                Get expert advice on Dubai real estate investment opportunities tailored to your goals.
              </p>
              <Button className="bg-[#db8102] hover:bg-[#db8102]/90 w-full">
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <Mail className="h-12 w-12 text-[#db8102] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Market Reports</h3>
              <p className="text-slate-300 mb-6">
                Receive detailed market analysis and investment opportunities directly in your inbox.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 w-full bg-transparent"
              >
                <Link href="/market-insights">Get Reports</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <Calendar className="h-12 w-12 text-[#db8102] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Property Tours</h3>
              <p className="text-slate-300 mb-6">
                Schedule personalized property tours to explore the best investment opportunities in Dubai.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 w-full bg-transparent"
              >
                <Link href="/properties">Schedule Tour</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#db8102] hover:bg-[#db8102]/90 px-8 py-4 text-lg">
            <Link href="/contact" className="flex items-center">
              Start Your Investment Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-slate-400 mt-4">No obligation • Free consultation • Expert guidance</p>
        </div>
      </div>
    </section>
  )
}
