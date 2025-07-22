"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Founder",
    company: "Luxe Fashion Boutique",
    location: "USA",
    rating: 5,
    content:
      "Shibi transformed our small fashion business into a thriving online empire. Our revenue increased by 500% in the first year, and we now serve customers globally. His strategic approach and attention to detail are exceptional.",
    results: "500% Revenue Growth",
    timeframe: "12 months",
  },
  {
    name: "David Kim",
    role: "CEO",
    company: "TechGear Electronics",
    location: "South Korea",
    rating: 5,
    content:
      "Working with Shibi was a game-changer for our electronics business. He helped us build a sophisticated marketplace that competes with industry giants. The results speak for themselves - 800% growth in just 18 months.",
    results: "800% Business Growth",
    timeframe: "18 months",
  },
  {
    name: "Maria Rodriguez",
    role: "Co-founder",
    company: "Wellness Hub",
    location: "Spain",
    rating: 5,
    content:
      "Shibi's expertise in e-commerce strategy and digital marketing helped us build a loyal community of 15,000+ subscribers. His approach to content-driven commerce and subscription models was brilliant.",
    results: "15,000+ Subscribers",
    timeframe: "10 months",
  },
  {
    name: "James Thompson",
    role: "Business Owner",
    company: "Artisan Crafts Co.",
    location: "Canada",
    rating: 5,
    content:
      "From a small craft business to an international brand - Shibi made it possible. His understanding of global markets and cross-border e-commerce helped us expand to 25+ countries successfully.",
    results: "25+ Countries",
    timeframe: "24 months",
  },
]

export function EcommerceTestimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from business owners who have transformed their companies with our e-commerce consulting and achieved
            remarkable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-[#db8102] mb-4" />
                  <p className="text-lg leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Results:</span>
                      <div className="font-semibold text-[#db8102]">{testimonial.results}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Timeframe:</span>
                      <div className="font-semibold">{testimonial.timeframe}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
