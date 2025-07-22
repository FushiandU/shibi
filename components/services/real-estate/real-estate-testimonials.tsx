"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "Property Investor",
    location: "UAE",
    rating: 5,
    content:
      "Shibi's expertise in Dubai real estate is unmatched. He helped me build a portfolio worth over AED 10 million with consistent 15%+ returns. His market insights and professional approach made all the difference.",
    investment: "AED 10M+ Portfolio",
    roi: "15%+ Annual Returns",
  },
  {
    name: "Sarah Johnson",
    role: "International Investor",
    location: "UK",
    rating: 5,
    content:
      "As a foreign investor, I was nervous about investing in Dubai. Shibi guided me through every step, handled all the legal aspects, and found me the perfect property in Downtown Dubai. Excellent service!",
    investment: "Downtown Dubai Apartment",
    roi: "12% Annual Returns",
  },
  {
    name: "Mohammed Hassan",
    role: "Business Owner",
    location: "Dubai",
    rating: 5,
    content:
      "I've worked with several real estate consultants, but Shibi stands out for his honesty, market knowledge, and commitment to client success. He's helped me make smart investment decisions consistently.",
    investment: "Commercial Properties",
    roi: "18% Annual Returns",
  },
  {
    name: "Lisa Chen",
    role: "Expat Professional",
    location: "Singapore",
    rating: 5,
    content:
      "Shibi made my Dubai property investment journey seamless. From property selection to final handover, everything was handled professionally. My investment has already appreciated by 20% in just 2 years.",
    investment: "Marina Apartment",
    roi: "20% Capital Appreciation",
  },
]

export function RealEstateTestimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our satisfied clients who have achieved exceptional returns through our real estate investment
            services.
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
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Investment:</span>
                      <div className="font-semibold">{testimonial.investment}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Returns:</span>
                      <div className="font-semibold text-[#db8102]">{testimonial.roi}</div>
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
