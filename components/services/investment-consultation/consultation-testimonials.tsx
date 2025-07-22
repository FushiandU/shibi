import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function ConsultationTestimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      role: "Business Owner",
      location: "UAE National",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      investment: "AED 3.2M Portfolio",
      testimonial:
        "Shibi's consultation transformed my investment approach. His market insights helped me build a diversified portfolio that's generating 12% annual returns. The personalized strategy was exactly what I needed.",
      results: "12% annual returns, 3 properties acquired",
    },
    {
      name: "Sarah Johnson",
      role: "Tech Executive",
      location: "British Expat",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      investment: "AED 1.8M Investment",
      testimonial:
        "As a first-time investor in Dubai, I was overwhelmed by the options. Shibi's comprehensive analysis gave me confidence to make informed decisions. The Golden Visa guidance was invaluable.",
      results: "Golden Visa approved, 15% property appreciation",
    },
    {
      name: "Raj Patel",
      role: "Investment Banker",
      location: "Indian National",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      investment: "AED 5.5M Portfolio",
      testimonial:
        "The premium partnership package exceeded expectations. Shibi's network access got me exclusive off-market deals. His negotiation skills saved me over AED 200K on my purchases.",
      results: "AED 200K+ savings, 2 off-market acquisitions",
    },
    {
      name: "Maria Rodriguez",
      role: "Entrepreneur",
      location: "Spanish National",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      investment: "AED 2.1M Investment",
      testimonial:
        "Shibi's ongoing support has been incredible. From property selection to rental management setup, he guided me through every step. My properties are now generating steady passive income.",
      results: "8.5% rental yield, full occupancy achieved",
    },
    {
      name: "David Chen",
      role: "Finance Director",
      location: "Chinese National",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      investment: "AED 4.3M Portfolio",
      testimonial:
        "The market timing advice was spot-on. Shibi helped me enter the market at the perfect time and exit some positions for significant gains. His expertise is unmatched.",
      results: "25% capital appreciation, strategic exits",
    },
    {
      name: "Jennifer Smith",
      role: "Medical Professional",
      location: "American Expat",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      investment: "AED 1.5M Investment",
      testimonial:
        "The consultation process was thorough and professional. Shibi understood my risk tolerance and created a conservative strategy that's delivering consistent returns without stress.",
      results: "Consistent 9% returns, low-risk portfolio",
    },
  ]

  const stats = [
    { number: "500+", label: "Satisfied Clients" },
    { number: "AED 2B+", label: "Investments Facilitated" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "4.9/5", label: "Average Rating" },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 dark:text-white font-montserrat mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real testimonials from investors who have achieved success through our consultation services
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg text-center dark:bg-gray-700">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold text-amber-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-navy-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-amber-600/30 mb-4" />

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">"{testimonial.testimonial}"</p>

                <div className="border-t border-gray-100 dark:border-gray-600 pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Investment:</span>
                    <span className="font-semibold text-navy-900 dark:text-white">{testimonial.investment}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs text-emerald-600 font-medium">{testimonial.results}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="mt-16 border-none shadow-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Start your investment journey with a free consultation and discover how we can help you achieve your
              financial goals in Dubai's real estate market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors">
                View All Packages
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
