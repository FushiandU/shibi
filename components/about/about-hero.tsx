import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Users, TrendingUp, Globe } from "lucide-react"

export function AboutHero() {
  const stats = [
    { icon: <Award className="h-6 w-6" />, value: "15+", label: "Years Experience" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "AED 500M+", label: "Deals Closed" },
    { icon: <Users className="h-6 w-6" />, value: "1000+", label: "Happy Clients" },
    { icon: <Globe className="h-6 w-6" />, value: "50+", label: "Countries Served" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <Badge className="bg-amber-600 text-white mb-4">About Shibi Kabeer</Badge>
              <h1 className="text-5xl font-bold font-montserrat mb-6">
                Empowering Dreams Through <span className="text-amber-400">Innovation & Leadership</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                As a second-generation UAE expat and visionary female entrepreneur, I've dedicated my career to
                empowering individuals and businesses to thrive in Dubai's dynamic market.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center text-amber-400 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
              >
                Download Portfolio
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Shibi Kabeer - Professional Portrait"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-amber-600/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
