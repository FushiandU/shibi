import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
              My Story
            </Badge>
            <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">From Dubai Roots to Global Impact</h2>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Early Beginnings</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Born and raised in Dubai as a second-generation expat, I witnessed firsthand the incredible
                  transformation of this city from a trading hub to a global metropolis. My family's journey in the UAE
                  instilled in me a deep appreciation for the opportunities this country offers to those willing to
                  dream big and work hard.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Growing up in a multicultural environment, I learned to navigate different cultures and languages,
                  skills that would prove invaluable in my future career helping international investors and
                  entrepreneurs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Entrepreneurial Journey</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  My entrepreneurial journey began with a passion for real estate and a vision to help others achieve
                  financial freedom through strategic property investments. I recognized the unique advantages Dubai
                  offered - tax-free income, high rental yields, and the Golden Visa program - and dedicated myself to
                  becoming an expert in these areas.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As a female entrepreneur in a traditionally male-dominated industry, I faced challenges that only
                  strengthened my resolve to succeed and pave the way for other women in business.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Expanding Horizons</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Recognizing the growing importance of e-commerce in the UAE's economic diversification, I expanded my
                  expertise to include business consulting and digital transformation. This dual focus allows me to
                  offer comprehensive solutions to clients looking to invest in real estate while also building
                  successful online businesses.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, I'm proud to have helped over 1000 clients from 50+ countries achieve their investment and
                  business goals in the UAE, with a combined portfolio value exceeding AED 500 million.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
