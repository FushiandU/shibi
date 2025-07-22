"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react"

export function GoldenVisaFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "What is the minimum property investment required for Golden Visa?",
      answer:
        "The minimum property investment required is AED 2 million in designated freehold areas of Dubai. This can be a single property or multiple properties totaling AED 2M or more. The property must be fully owned (not mortgaged) and registered with Dubai Land Department.",
    },
    {
      question: "How long does the Golden Visa application process take?",
      answer:
        "The complete Golden Visa process typically takes 4-6 weeks from property purchase to visa issuance. This includes property registration (1-2 weeks), document preparation (1 week), application submission and processing (2-4 weeks), and final visa stamping (1 week).",
    },
    {
      question: "Can I include my family members in the Golden Visa application?",
      answer:
        "Yes, you can sponsor your spouse, unmarried children under 25, and parents over 60 years old. Each family member will receive the same visa duration as the main applicant. Additional fees apply for each family member, and they must meet health and character requirements.",
    },
    {
      question: "What happens if I sell my property after getting the Golden Visa?",
      answer:
        "If you sell your property, you must maintain the minimum AED 2M investment in UAE real estate to keep your Golden Visa valid. You can purchase another property of equal or greater value, or invest in multiple properties totaling AED 2M+. Failure to maintain the investment may result in visa cancellation.",
    },
    {
      question: "Do I need to live in the UAE full-time with a Golden Visa?",
      answer:
        "No, you don't need to live in the UAE full-time. However, you must visit the UAE at least once every 6 months to maintain your residency status. You can stay outside the UAE for extended periods without losing your visa, making it ideal for international investors and business owners.",
    },
    {
      question: "Can I work or start a business in the UAE with a Golden Visa?",
      answer:
        "Yes, Golden Visa holders can work for any employer in the UAE without needing a work permit, and can establish their own businesses. You can set up companies in mainland UAE or free zones, and even hold 100% ownership in certain business activities.",
    },
    {
      question: "What are the renewal requirements for the Golden Visa?",
      answer:
        "Golden Visas are typically issued for 5-10 years and can be renewed as long as you maintain the minimum property investment of AED 2M. You must also maintain a clean criminal record, valid health insurance, and continue to meet the residency visit requirements.",
    },
    {
      question: "Are there any restrictions on the type of property I can buy?",
      answer:
        "The property must be in designated freehold areas where foreign ownership is allowed. This includes popular areas like Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, and Dubai Hills Estate. Both residential and commercial properties qualify, but the property must be fully owned (not under mortgage).",
    },
    {
      question: "What is your success rate for Golden Visa applications?",
      answer:
        "I have a 95% success rate for Golden Visa applications. My comprehensive approach includes thorough eligibility assessment, proper documentation preparation, and expert guidance throughout the process. I only proceed with applications that have a high probability of success.",
    },
    {
      question: "How much does the Golden Visa application cost in total?",
      answer:
        "The total cost includes government fees (AED 2,800 for main applicant), Emirates ID fees (AED 1,000), medical examination (AED 500), and my professional service fees (AED 2,500). Additional costs apply for family members. Property-related costs (registration, agent fees) are separate.",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">Golden Visa Questions Answered</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about UAE Golden Visa through property investment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-navy-900 pr-4">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  )}
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-white border-none shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Still Have Questions About Golden Visa?</h3>
              <p className="text-gray-600 mb-6">
                I'm here to provide personalized answers and guide you through your Golden Visa journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Ask Your Question
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  Schedule Free Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
