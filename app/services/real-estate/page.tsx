import { RealEstateHero } from "@/components/services/real-estate/real-estate-hero"
import { RealEstateServices } from "@/components/services/real-estate/real-estate-services"
import { RealEstateProcess } from "@/components/services/real-estate/real-estate-process"
import { RealEstatePortfolio } from "@/components/services/real-estate/real-estate-portfolio"
import { RealEstateTestimonials } from "@/components/services/real-estate/real-estate-testimonials"
import { RealEstateCTA } from "@/components/services/real-estate/real-estate-cta"

export default function RealEstatePage() {
  return (
    <div className="min-h-screen">
      <RealEstateHero />
      <RealEstateServices />
      <RealEstateProcess />
      <RealEstatePortfolio />
      <RealEstateTestimonials />
      <RealEstateCTA />
    </div>
  )
}
