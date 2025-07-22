import { EcommerceHero } from "@/components/services/ecommerce/ecommerce-hero";
import { EcommerceServices } from "@/components/services/ecommerce/ecommerce-services";
import { EcommerceProcess } from "@/components/services/ecommerce/ecommerce-process";
import { EcommerceCaseStudies } from "@/components/services/ecommerce/ecommerce-case-studies";
import { EcommerceTestimonials } from "@/components/services/ecommerce/ecommerce-testimonials";
import { EcommerceCTA } from "@/components/services/ecommerce/ecommerce-cta";

export default function EcommerceConsultingPage() {
  return (
    <main className="min-h-screen pt-32">
      <EcommerceHero />
      <EcommerceServices />
      <EcommerceProcess />
      <EcommerceCaseStudies />
      <EcommerceTestimonials />
      <EcommerceCTA />
    </main>
  );
} 