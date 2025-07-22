"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Rocket, BarChart3, Users } from "lucide-react"
import Link from "next/link"

export function EcommerceCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join successful entrepreneurs who have built thriving e-commerce businesses with our expert guidance. Let's
            discuss your vision and create a roadmap to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <Rocket className="h-12 w-12 text-[#db8102] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Strategy Session</h3>
              <p className="text-slate-300 mb-6">
                Get a comprehensive business analysis and strategic roadmap for your e-commerce success.
              </p>
              <Button className="bg-[#db8102] hover:bg-[#db8102]/90 w-full">
                <Link href="/contact">Book Strategy Call</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <BarChart3 className="h-12 w-12 text-[#db8102] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Business Audit</h3>
              <p className="text-slate-300 mb-6">
                Receive a detailed analysis of your current business and optimization recommendations.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 w-full bg-transparent"
              >
                <Link href="/contact">Request Audit</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-[#db8102] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Success Stories</h3>
              <p className="text-slate-300 mb-6">
                Learn from real case studies and see how other businesses achieved remarkable growth.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 w-full bg-transparent"
              >
                <Link href="#case-studies">View Case Studies</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#db8102] hover:bg-[#db8102]/90 px-8 py-4 text-lg">
            <Link href="/contact" className="flex items-center">
              Start Your E-commerce Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-slate-400 mt-4">Free consultation • No commitment • Expert guidance</p>
        </div>
      </div>
    </section>
  )
}
