import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutTimeline() {
  const milestones = [
    {
      year: "2008",
      title: "Career Beginnings",
      description: "Started career in Dubai real estate, focusing on helping expat families find their dream homes.",
      achievement: "First 50 successful property transactions",
    },
    {
      year: "2012",
      title: "Business Expansion",
      description: "Expanded services to include investment consulting and Golden Visa assistance.",
      achievement: "Established client base across 20 countries",
    },
    {
      year: "2016",
      title: "E-commerce Venture",
      description: "Launched e-commerce consulting division to help businesses enter the UAE market.",
      achievement: "Helped 100+ businesses establish UAE presence",
    },
    {
      year: "2019",
      title: "Industry Recognition",
      description: "Received Dubai Property Excellence Award for outstanding client service.",
      achievement: "AED 100M+ in managed investments",
    },
    {
      year: "2021",
      title: "Digital Innovation",
      description: "Pioneered virtual property tours and digital investment platforms.",
      achievement: "500+ virtual consultations conducted",
    },
    {
      year: "2023",
      title: "Global Impact",
      description: "Reached milestone of serving clients from 50+ countries with AED 500M+ portfolio.",
      achievement: "Top Real Estate Consultant Award",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Journey Timeline
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">15 Years of Growth & Success</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of continuous learning, growth, and helping others achieve their dreams in Dubai.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-600 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg hidden md:block" />

                  <Card className="md:ml-16 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <Badge className="bg-amber-600 text-white w-fit mb-2 md:mb-0">{milestone.year}</Badge>
                        <Badge variant="outline" className="text-emerald-600 border-emerald-600 w-fit">
                          {milestone.achievement}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
