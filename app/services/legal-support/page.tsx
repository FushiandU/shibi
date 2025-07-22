import { ServicesHero } from "@/components/services/services-hero";
import { ServiceProcess } from "@/components/services/service-process";
import { ServicesCTA } from "@/components/services/services-cta";
import { Card, CardContent } from "@/components/ui/card";

export default function LegalSupportPage() {
  return (
    <main className="min-h-screen pt-32">
      <ServicesHero title="Legal Support Services" subtitle="Expert legal guidance for Dubai real estate and business." />
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Card className="shadow-lg mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">Comprehensive Legal Support</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our legal support services cover all aspects of real estate transactions, business setup, contract review, due diligence, and regulatory compliance in Dubai. Work with experienced legal professionals to ensure your investments and business operations are secure and fully compliant with UAE law.
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2">
                <li>Property purchase & sale agreements</li>
                <li>Business setup & licensing</li>
                <li>Contract drafting & review</li>
                <li>Due diligence & risk assessment</li>
                <li>Golden Visa legal assistance</li>
                <li>Dispute resolution & mediation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      <ServiceProcess />
      <ServicesCTA />
    </main>
  );
} 