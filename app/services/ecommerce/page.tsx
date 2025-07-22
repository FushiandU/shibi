import { EcommerceHero } from "@/components/services/ecommerce/ecommerce-hero"
import { EcommerceServices } from "@/components/services/ecommerce/ecommerce-services"
import { EcommerceProcess } from "@/components/services/ecommerce/ecommerce-process"
import { EcommerceCaseStudies } from "@/components/services/ecommerce/ecommerce-case-studies"
import { EcommerceTestimonials } from "@/components/services/ecommerce/ecommerce-testimonials"
import { EcommerceCTA } from "@/components/services/ecommerce/ecommerce-cta"

export default function EcommercePage() {
  return (
    <div className="min-h-screen">
      <EcommerceHero />
      <EcommerceServices />
      <EcommerceProcess />
      <EcommerceCaseStudies />
      <EcommerceTestimonials />
      <EcommerceCTA />
    </div>
  )
}
