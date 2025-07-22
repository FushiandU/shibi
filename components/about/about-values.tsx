import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Lightbulb, Users, Target, Zap } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      title: "Empowerment",
      description:
        "Empowering clients to achieve financial independence and business success through strategic guidance and support.",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Integrity",
      description:
        "Maintaining the highest ethical standards in all business dealings, ensuring transparency and trust.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-amber-600" />,
      title: "Innovation",
      description: "Embracing cutting-edge strategies and technologies to deliver superior results for our clients.",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Collaboration",
      description:
        "Building strong partnerships with clients, developers, and industry professionals for mutual success.",
    },
    {
      icon: <Target className="h-8 w-8 text-amber-600" />,
      title: "Excellence",
      description: "Striving for excellence in every project, consultation, and client interaction without compromise.",
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-600" />,
      title: "Results-Driven",
      description: "Focusing on measurable outcomes and tangible results that create lasting value for our clients.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Core Values
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">Values That Drive Success</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide every decision and interaction in my business practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 text-center mb-4">{value.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
