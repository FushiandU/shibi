"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Building, Award, DollarSign, Globe } from "lucide-react"
import { useEffect, useState } from "react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: TrendingUp,
      number: "8.5%",
      label: "Average ROI",
      description: "Annual return on investment",
      color: "text-green-600",
    },
    {
      icon: Users,
      number: "1,200+",
      label: "Happy Clients",
      description: "Successful investors",
      color: "text-blue-600",
    },
    {
      icon: Building,
      number: "500+",
      label: "Properties Sold",
      description: "Across Dubai",
      color: "text-purple-600",
    },
    {
      icon: DollarSign,
      number: "AED 2.5B",
      label: "Total Sales",
      description: "Property transactions",
      color: "text-amber-600",
    },
    {
      icon: Award,
      number: "15+",
      label: "Awards Won",
      description: "Industry recognition",
      color: "text-red-600",
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries",
      description: "International clients",
      color: "text-indigo-600",
    },
  ]

  const AnimatedNumber = ({ number, isVisible }: { number: string; isVisible: boolean }) => {
    const [displayNumber, setDisplayNumber] = useState("0")

    useEffect(() => {
      if (!isVisible) return

      const numericPart = number.match(/[\d.]+/)
      if (!numericPart) {
        setDisplayNumber(number)
        return
      }

      const targetValue = Number.parseFloat(numericPart[0])
      const suffix = number.replace(numericPart[0], "")
      const duration = 2000
      const steps = 60
      const increment = targetValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= targetValue) {
          setDisplayNumber(number)
          clearInterval(timer)
        } else {
          setDisplayNumber(current.toFixed(1) + suffix)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [number, isVisible])

    return <span>{displayNumber}</span>
  }

  return (
    <section id="stats-section" className="py-20 bg-navy-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Proven Track Record of Success</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves - delivering exceptional results for our clients across Dubai's real
            estate market.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto bg-white/20`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">
                    <AnimatedNumber number={stat.number} isVisible={isVisible} />
                  </div>
                  <div className="font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-300">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why These Numbers Matter</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-amber-400">Consistent Performance</h4>
                <p className="text-sm text-gray-300">
                  Our 8.5% average ROI consistently outperforms market benchmarks, ensuring your investments grow
                  steadily.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-amber-400">Global Reach</h4>
                <p className="text-sm text-gray-300">
                  With clients from 25+ countries, we understand diverse investment needs and international
                  requirements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-amber-400">Proven Expertise</h4>
                <p className="text-sm text-gray-300">
                  AED 2.5B in successful transactions demonstrates our deep market knowledge and execution capability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
