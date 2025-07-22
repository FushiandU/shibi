"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, TrendingUp, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutSection() {
  const achievements = [
    {
      icon: TrendingUp,
      number: "8+",
      label: "Years Experience",
      description: "In Dubai real estate market",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Happy Clients",
      description: "Successful investments",
    },
    {
      icon: Award,
      number: "500+",
      label: "Properties Sold",
      description: "Across Dubai",
    },
    {
      icon: Star,
      number: "4.9",
      label: "Client Rating",
      description: "Average satisfaction score",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-amber-600 border-amber-600">
                About Shibi Kabeer
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Your Trusted Dubai Investment Partner
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                As a second-generation UAE expat and successful female entrepreneur, I understand the unique challenges
                and opportunities that come with investing in Dubai's dynamic market.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                With over 8 years of experience in Dubai's real estate sector, I've helped thousands of investors
                achieve their financial goals through strategic property investments and comprehensive e-commerce
                solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                My expertise spans across residential and commercial properties, Golden Visa assistance, and digital
                business growth strategies that leverage Dubai's tax-free environment.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">Specializations</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Off-plan investments</li>
                  <li>• Golden Visa properties</li>
                  <li>• Rental yield optimization</li>
                  <li>• E-commerce consulting</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">Languages</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• English (Native)</li>
                  <li>• Arabic (Fluent)</li>
                  <li>• Hindi (Conversational)</li>
                  <li>• Malayalam (Native)</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image & Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <Image
                  src="https://i.ibb.co/4Z7y4dBC/IMG-3700.jpg"
                  alt="Shibi Kabeer - Dubai Real Estate Expert"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Achievement Card */}
              <Card className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 shadow-xl">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900 dark:text-white">Top Performer</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">2023 Real Estate Awards</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
