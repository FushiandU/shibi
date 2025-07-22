import { ServicesHero } from "@/components/services/services-hero";
import { RealEstateServices } from "@/components/services/real-estate-services";
import { ServiceProcess } from "@/components/services/service-process";
import { ServicesCTA } from "@/components/services/services-cta";
import { Card, CardContent } from "@/components/ui/card";

export default function PropertyManagementPage() {
  return (
    <main className="min-h-screen pt-32">
      <ServicesHero title="Property Management" subtitle="Comprehensive management for your Dubai real estate portfolio." />
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Card className="shadow-lg mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">Full-Service Property Management</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our property management services ensure your Dubai investments are well-maintained, tenanted, and delivering optimal returns. From tenant screening to maintenance and financial reporting, we handle every aspect with professionalism and care.
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2">
                <li>Tenant sourcing & screening</li>
                <li>Rent collection & financial reporting</li>
                <li>Maintenance & repairs</li>
                <li>Legal compliance & documentation</li>
                <li>Vacancy management</li>
                <li>Owner portal & regular updates</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      <RealEstateServices />
      <ServiceProcess />
      <ServicesCTA />
    </main>
  );
} 