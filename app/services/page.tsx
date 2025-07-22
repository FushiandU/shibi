import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { RealEstateServices } from "@/components/services/real-estate-services"
import { EcommerceServices } from "@/components/services/ecommerce-services"
import { ServiceProcess } from "@/components/services/service-process"
import { ServicePackages } from "@/components/services/service-packages"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Real Estate & E-commerce Services - Dubai Investment Expert | Shibi Kabeer",
  description:
    "Comprehensive real estate investment and e-commerce consulting services in Dubai. Golden Visa assistance, property management, business setup, and digital marketing solutions.",
  keywords:
    "Dubai real estate services, e-commerce consulting, Golden Visa assistance, property management, business setup UAE",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32">
      <ServicesHero />
      <RealEstateServices />
      <EcommerceServices />
      <ServiceProcess />
      <ServicePackages />
      <ServicesCTA />
    </main>
  )
}
