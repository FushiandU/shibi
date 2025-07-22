"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export function RealEstateHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-[#db8102]/20 p-4 rounded-full">
              <Building className="h-12 w-12 text-[#db8102]" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Dubai Real Estate
            <span className="block text-[#db8102]">Investment Services</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Navigate Dubai's dynamic property market with expert guidance. From luxury apartments to commercial
            investments, we help you build wealth through strategic real estate decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-[#db8102] hover:bg-[#db8102]/90 text-white px-8 py-4 text-lg">
              <Link href="/contact" className="flex items-center">
                Start Your Investment Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/properties">View Properties</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-[#db8102]" />
              </div>
              <div className="text-3xl font-bold text-[#db8102] mb-2">15%+</div>
              <div className="text-slate-300">Average Annual ROI</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Building className="h-8 w-8 text-[#db8102]" />
              </div>
              <div className="text-3xl font-bold text-[#db8102] mb-2">500+</div>
              <div className="text-slate-300">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-[#db8102]" />
              </div>
              <div className="text-3xl font-bold text-[#db8102] mb-2">200+</div>
              <div className="text-slate-300">Happy Investors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
