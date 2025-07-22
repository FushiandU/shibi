"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What is the minimum investment required for Dubai real estate?",
      answer:
        "The minimum investment varies by property type and location. For apartments, you can start from AED 500,000 ($136,000), while villas typically start from AED 1.5 million ($408,000). Off-plan properties often have lower entry points with flexible payment plans.",
    },
    {
      question: "Can foreigners buy property in Dubai?",
      answer:
        "Yes, foreigners can buy freehold properties in designated areas of Dubai. These include popular locations like Dubai Marina, Downtown Dubai, Palm Jumeirah, and many others. You'll receive a title deed and full ownership rights.",
    },
    {
      question: "What are the additional costs when buying property in Dubai?",
      answer:
        "Additional costs include: 4% Dubai Land Department (DLD) transfer fee, 2% real estate agent commission, AED 4,000 registration fee, property valuation fees (AED 2,500-5,000), and mortgage arrangement fees if financing (typically 1-2% of loan amount).",
    },
    {
      question: "How does the Golden Visa program work?",
      answer:
        "The UAE Golden Visa offers 5 or 10-year renewable residency. For real estate investors, you need to own property worth at least AED 2 million ($544,000) for a 5-year visa, or AED 5 million ($1.36M) for a 10-year visa. The visa includes your spouse and children.",
    },
    {
      question: "What rental yields can I expect in Dubai?",
      answer:
        "Rental yields in Dubai typically range from 5-8% annually, depending on location and property type. Areas like Dubai South and Dubailand offer higher yields (7-8%), while prime locations like Downtown Dubai offer 4-6% but better capital appreciation potential.",
    },
    {
      question: "Is financing available for foreign buyers?",
      answer:
        "Yes, UAE banks offer mortgages to foreign buyers. You can typically finance up to 75% of the property value (80% for UAE nationals). Requirements include minimum salary of AED 15,000/month, down payment of 25%, and various documentation.",
    },
    {
      question: "What are the best areas to invest in Dubai?",
      answer:
        "Top investment areas include: Dubai Marina (high rental demand), Downtown Dubai (premium location), Business Bay (growing business hub), Dubai Hills Estate (family-friendly), and Dubai South (near Al Maktoum Airport with high growth potential).",
    },
    {
      question: "How long does the property buying process take?",
      answer:
        "For ready properties, the process typically takes 2-4 weeks from offer acceptance to completion. Off-plan properties follow the developer's construction timeline (1-3 years). The actual transfer process at DLD takes 1-2 days once all documents are ready.",
    },
    {
      question: "What ongoing costs should I consider?",
      answer:
        "Annual costs include: service charges (AED 5-25 per sq ft), municipality fees (5% of annual rent), property management (5-10% of rental income if rented), insurance (0.1-0.3% of property value), and maintenance reserves.",
    },
    {
      question: "Can I get a residence visa through property investment?",
      answer:
        "Yes, property owners can apply for a renewable residence visa. Requirements vary: AED 1 million+ property value for standard investor visa, AED 2 million+ for 5-year Golden Visa, or AED 5 million+ for 10-year Golden Visa.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
            FAQ
          </Badge>
          <h2 className="text-4xl font-bold text-navy-900 dark:text-white font-montserrat mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get answers to the most common questions about Dubai real estate investment
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-none shadow-lg dark:bg-gray-800">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-white pr-4">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
