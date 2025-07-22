import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TrendingUp, Shield, Clock, Users, Award, Target, Lightbulb } from "lucide-react"

export function ConsultationBenefits() {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
      title: "Maximize ROI",
      description: "Strategic guidance to optimize your investment returns and minimize risks.",
      stats: "Average 15-25% higher returns",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Risk Mitigation",
      description: "Comprehensive risk assessment and mitigation strategies for safer investments.",
      stats: "95% client satisfaction rate",
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Time Efficiency",
      description: "Save valuable time with expert market knowledge and streamlined processes.",
      stats: "50% faster decision making",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Network Access",
      description: "Leverage my extensive network of developers, agents, and industry professionals.",
      stats: "200+ industry connections",
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "Expert Knowledge",
      description: "Benefit from 8+ years of Dubai real estate market expertise and insights.",
      stats: "500+ successful transactions",
    },
    {
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: "Personalized Strategy",
      description: "Tailored investment strategies based on your unique goals and circumstances.",
      stats: "100% customized approach",
    },
  ]

  const clientOutcomes = [
    {
      metric: "AED 2.5M",
      description: "Average portfolio value increase",
      icon: <TrendingUp className="h-6 w-6 text-emerald-600" />,
    },
    {
      metric: "18 Months",
      description: "Average time to achieve investment goals",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
    },
    {
      metric: "8.5%",
      description: "Average annual rental yield achieved",
      icon: <Target className="h-6 w-6 text-purple-600" />,
    },
    {
      metric: "95%",
      description: "Client retention rate",
      icon: <Award className="h-6 w-6 text-amber-600" />,
    },
  ]

  const uniqueAdvantages = [
    "Exclusive access to off-market properties",
    "Direct relationships with top developers",
    "Insider knowledge of upcoming projects",
    "Negotiation expertise for better deals",
    "Golden Visa application assistance",
    "Post-purchase property management support",
    "Market timing optimization",
    "Exit strategy planning",
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Why Choose Our Consultation
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 dark:text-white font-montserrat mb-6">
            Proven Benefits & Results
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the advantages of working with a seasoned Dubai real estate investment expert
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                  {benefit.stats}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Outcomes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white text-center mb-8">Client Success Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {clientOutcomes.map((outcome, index) => (
              <Card key={index} className="border-none shadow-lg bg-white dark:bg-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">{outcome.icon}</div>
                  <h4 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">{outcome.metric}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Unique Advantages */}
        <Card className="border-none shadow-xl bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Lightbulb className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Exclusive Advantages</h3>
              <p className="text-gray-600 dark:text-gray-300">
                What sets our consultation services apart from the competition
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {uniqueAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{advantage}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
