"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, ShoppingCart, DollarSign } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "Fashion E-commerce Platform",
    industry: "Fashion & Apparel",
    challenge: "Launch a premium fashion brand online with global reach",
    solution: "Custom Shopify Plus store with advanced features and multi-channel marketing",
    results: {
      revenue: "500% increase in 12 months",
      traffic: "300% organic traffic growth",
      conversion: "4.2% conversion rate",
      customers: "10,000+ active customers",
    },
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Shopify Plus", "React", "Google Analytics", "Facebook Ads"],
  },
  {
    id: 2,
    title: "Electronics Marketplace",
    industry: "Electronics & Tech",
    challenge: "Scale existing business to compete with major marketplaces",
    solution: "Multi-vendor marketplace with advanced search and recommendation engine",
    results: {
      revenue: "800% revenue growth",
      traffic: "250% increase in sessions",
      conversion: "3.8% conversion rate",
      customers: "25,000+ registered users",
    },
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["WooCommerce", "AWS", "Elasticsearch", "Machine Learning"],
  },
  {
    id: 3,
    title: "Health & Wellness Store",
    industry: "Health & Wellness",
    challenge: "Build trust and authority in competitive wellness market",
    solution: "Content-driven e-commerce with subscription model and community features",
    results: {
      revenue: "400% subscription growth",
      traffic: "180% organic growth",
      conversion: "5.1% conversion rate",
      customers: "15,000+ subscribers",
    },
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Magento", "Content Marketing", "Email Automation", "SEO"],
  },
]

export function EcommerceCaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their online presence and achieve remarkable growth through
            strategic e-commerce solutions.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#db8102]">{study.industry}</Badge>
                  </div>
                </div>

                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">{study.title}</h3>

                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">Challenge:</h4>
                    <p className="text-muted-foreground mb-4">{study.challenge}</p>

                    <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-[#db8102] mx-auto mb-2" />
                      <div className="font-bold text-lg">{study.results.revenue}</div>
                      <div className="text-sm text-muted-foreground">Revenue Growth</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Users className="h-6 w-6 text-[#db8102] mx-auto mb-2" />
                      <div className="font-bold text-lg">{study.results.traffic}</div>
                      <div className="text-sm text-muted-foreground">Traffic Growth</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <ShoppingCart className="h-6 w-6 text-[#db8102] mx-auto mb-2" />
                      <div className="font-bold text-lg">{study.results.conversion}</div>
                      <div className="text-sm text-muted-foreground">Conversion Rate</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <DollarSign className="h-6 w-6 text-[#db8102] mx-auto mb-2" />
                      <div className="font-bold text-lg">{study.results.customers}</div>
                      <div className="text-sm text-muted-foreground">Active Users</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
