import { Suspense } from "react"
import { HeroSection } from "@/components/marketing/hero-section"
import { IntegrationsSection } from "@/components/marketing/integrations-section"
import { FeaturesSection } from "@/components/marketing/features-section"
import { FeatureRowsSection } from "@/components/marketing/feature-rows-section"
import { SocialProofSection } from "@/components/marketing/social-proof-section"
import { FAQSection } from "@/components/marketing/faq-section"
import { FinalCTASection } from "@/components/marketing/final-cta-section"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen" />}>
        <HeroSection />
      </Suspense>
      <IntegrationsSection />
      <FeaturesSection />
      <FeatureRowsSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}

