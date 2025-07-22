import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Award } from "lucide-react"

export function InvestmentConsultationHero() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="text-amber-400 border-amber-400 mb-6">
            Investment Consultation
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-white font-montserrat mb-8">
            Personalized Investment
            <span className="block text-amber-400">Consultation Services</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get expert guidance tailored to your investment goals. From market analysis to portfolio optimization, I
            provide comprehensive consultation services to maximize your Dubai real estate investments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Calendar className="h-5 w-5 mr-2" />
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
            >
              View Consultation Packages
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600/20 rounded-full mb-4">
                <Users className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">500+</h3>
              <p className="text-gray-300">Clients Served</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600/20 rounded-full mb-4">
                <Award className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AED 2B+</h3>
              <p className="text-gray-300">Investments Facilitated</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600/20 rounded-full mb-4">
                <Clock className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">8+ Years</h3>
              <p className="text-gray-300">Market Experience</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600/20 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7</h3>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
