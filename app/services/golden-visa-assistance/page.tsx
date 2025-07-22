import { GoldenVisaHero } from "@/components/golden-visa/golden-visa-hero";
import { GoldenVisaBenefits } from "@/components/golden-visa/golden-visa-benefits";
import { GoldenVisaProcess } from "@/components/golden-visa/golden-visa-process";
import { GoldenVisaRequirements } from "@/components/golden-visa/golden-visa-requirements";
import { GoldenVisaFAQ } from "@/components/golden-visa/golden-visa-faq";
import { GoldenVisaCTA } from "@/components/golden-visa/golden-visa-cta";

export default function GoldenVisaAssistancePage() {
  return (
    <main className="min-h-screen pt-32">
      <GoldenVisaHero />
      <GoldenVisaBenefits />
      <GoldenVisaProcess />
      <GoldenVisaRequirements />
      <GoldenVisaFAQ />
      <GoldenVisaCTA />
    </main>
  );
} 