"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, MapPin, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      location: "Saudi Arabia",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 5,
      investment: "AED 3.2M",
      roi: "9.2%",
      property: "Dubai Marina Apartment",
      testimonial:
        "Shibi's expertise in Dubai's real estate market is unmatched. She guided me through every step of my Golden Visa investment, and I'm now earning 9.2% annual returns. The process was seamless, and her market insights were invaluable.",
      date: "January 2024",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "United Kingdom",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 5,
      investment: "AED 2.8M",
      roi: "8.5%",
      property: "Downtown Dubai Penthouse",
      testimonial:
        "As a first-time investor in Dubai, I was nervous about the process. Shibi made everything clear and transparent. Her e-commerce consulting also helped me establish my online business in the UAE. Highly recommended!",
      date: "December 2023",
    },
    {
      id: 3,
      name: "Raj Patel",
      location: "India",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 5,
      investment: "AED 4.5M",
      roi: "10.1%",
      property: "Business Bay Commercial",
      testimonial:
        "Shibi helped me diversify my portfolio with Dubai commercial real estate. The ROI has exceeded my expectations, and the Golden Visa benefits for my family have been life-changing. Professional service from start to finish.",
      date: "November 2023",
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      location: "Spain",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 5,
      investment: "AED 2.1M",
      roi: "7.8%",
      property: "Arabian Ranches Villa",
      testimonial:
        "The level of service and attention to detail from Shibi is exceptional. She understood my family's needs and found us the perfect villa. The investment returns are steady, and we love living in Dubai.",
      date: "October 2023",
    },
    {
      id: 5,
      name: "David Chen",
      location: "Singapore",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 5,
      investment: "AED 5.2M",
      roi: "11.3%",
      property: "DIFC Office Complex",
      testimonial:
        "Shibi's market knowledge and network in Dubai are impressive. She helped me acquire a prime commercial property in DIFC that's generating excellent returns. Her ongoing support has been invaluable.",
      date: "September 2023",
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-amber-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">What Our Investors Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real stories from real investors who have achieved exceptional returns and transformed their financial
            future through Dubai real estate.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Content */}
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[activeTestimonial].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {testimonials[activeTestimonial].name}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <MapPin className="h-4 w-4" />
                        <span>{testimonials[activeTestimonial].location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-amber-600 opacity-50" />
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-6">
                      {testimonials[activeTestimonial].testimonial}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonials[activeTestimonial].date}
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {testimonials[activeTestimonial].property}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-600 mb-2">
                        {testimonials[activeTestimonial].investment}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Total Investment</div>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                        <div className="text-3xl font-bold text-green-600">{testimonials[activeTestimonial].roi}</div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Annual ROI</div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        ⭐ {testimonials[activeTestimonial].rating}.0
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Client Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeTestimonial ? "bg-amber-600" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="h-3 w-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-1">{renderStars(testimonial.rating)}</div>

                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4">{testimonial.testimonial}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t">
                  <span>{testimonial.investment}</span>
                  <span className="text-green-600 font-medium">{testimonial.roi} ROI</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Trusted by Investors Worldwide</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">4.9/5</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">1,200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
