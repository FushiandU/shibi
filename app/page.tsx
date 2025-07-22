import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PropertyShowcase } from "@/components/property-showcase"
import { StatsSection } from "@/components/stats-section"
import { WhyDubaiSection } from "@/components/why-dubai-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GoldenVisaSection } from "@/components/golden-visa-section"
import { FAQSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PropertyShowcase />
      <StatsSection />
      <WhyDubaiSection />
      <TestimonialsSection />
      <GoldenVisaSection />
      <FAQSection />
      <NewsletterSection />
    </div>
  )
}
