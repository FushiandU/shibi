"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react"

export function ContactFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer:
        "I typically respond to all inquiries within 2 hours during business hours (9 AM - 8 PM GST). For urgent matters, please call me directly at +971 55 799 4258.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes! I offer a complimentary 30-minute initial consultation to understand your needs and discuss how I can help you achieve your investment or business goals in Dubai.",
    },
    {
      question: "Can we meet outside of regular business hours?",
      answer:
        "Absolutely. I understand that many of my international clients are in different time zones. I'm flexible with scheduling and can arrange meetings on weekends or evenings by appointment.",
    },
    {
      question: "Do you provide virtual consultations for international clients?",
      answer:
        "Yes, I regularly conduct virtual consultations via video call for clients worldwide. I can also arrange virtual property tours and provide comprehensive digital documentation.",
    },
    {
      question: "What languages do you speak?",
      answer:
        "I'm fluent in English, Arabic, and Hindi, which allows me to serve clients from diverse backgrounds and ensure clear communication throughout our engagement.",
    },
    {
      question: "Is there a consultation fee?",
      answer:
        "The initial 30-minute consultation is completely free. For detailed analysis, property reports, or extended consulting sessions, fees may apply, which will be discussed upfront.",
    },
    {
      question: "How do you handle confidential information?",
      answer:
        "I maintain strict confidentiality for all client information and transactions. All discussions and documents are handled with the utmost discretion and professionalism.",
    },
    {
      question: "Can you help with property viewings if I'm not in Dubai?",
      answer:
        "Yes! I can conduct virtual property tours, provide detailed video walkthroughs, and coordinate with trusted partners for in-person viewings on your behalf.",
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
          <h2 className="text-4xl font-bold text-navy-900 font-montserrat mb-6">
            Common Questions About Getting Started
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about working with me and my services.
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
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Don't see your question here? I'm always happy to provide personalized answers and guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Ask Your Question
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  Schedule Free Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
