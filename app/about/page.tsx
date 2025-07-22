import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutAchievements } from "@/components/about/about-achievements"
import { AboutValues } from "@/components/about/about-values"
import { AboutTimeline } from "@/components/about/about-timeline"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Shibi Kabeer - Dubai Real Estate & E-commerce Expert",
  description:
    "Learn about Shibi Kabeer's journey as a second-generation UAE expat, female entrepreneur, and leading expert in Dubai real estate investment and e-commerce consulting.",
  keywords: "Shibi Kabeer, Dubai entrepreneur, female leadership, UAE expat, real estate expert, e-commerce consultant",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32">
      <AboutHero />
      <AboutStory />
      <AboutAchievements />
      <AboutValues />
      <AboutTimeline />
      <AboutCTA />
    </main>
  )
}
