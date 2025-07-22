import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, TrendingUp, Users, Globe, Star, Building } from "lucide-react"

export function AboutAchievements() {
  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Industry Recognition",
      description: "Top Real Estate Consultant Award 2023",
      metric: "Dubai Property Awards",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
      title: "Investment Success",
      description: "Average 8.5% ROI for client portfolios",
      metric: "Above Market Average",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Client Satisfaction",
      description: "98% client satisfaction rate",
      metric: "1000+ Reviews",
    },
    {
      icon: <Globe className="h-8 w-8 text-amber-600" />,
      title: "Global Reach",
      description: "Clients from 50+ countries",
      metric: "International Network",
    },
    {
      icon: <Star className="h-8 w-8 text-amber-600" />,
      title: "Golden Visa Success",
      description: "500+ successful Golden Visa applications",
      metric: "95% Approval Rate",
    },
    {
      icon: <Building className="h-8 w-8 text-amber-600" />,
      title: "Portfolio Value",
      description: "AED 500M+ in managed investments",
      metric: "Growing Portfolio",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Achievements
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">Proven Track Record of Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My commitment to excellence and client success has earned recognition and trust from investors worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-3">{achievement.description}</p>
                <Badge variant="outline" className="text-amber-600 border-amber-600">
                  {achievement.metric}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
