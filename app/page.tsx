'use client'

import { Navigation } from "@/components/navigation"
import { HeroSection3D } from "@/components/hero-section-3d"
import { LogosMarquee } from "@/components/logos-marquee"
import { ProcessSection } from "@/components/process-section"
import { WhySection } from "@/components/why-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import IntegrationsSection from "@/components/integrations-section"
import { Footer } from "@/components/footer"
import { ShadowOverlay } from "@/components/ui/shadow-overlay"
import ChatEmbedWidget from "@/components/chat-embed-widget"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection3D />
      
      {/* Background for all sections except hero */}
      <div className="relative">
        <ShadowOverlay 
          color="rgba(65, 128, 135, 0.05)"
          animation={{ scale: 20, speed: 30 }}
          noise={{ opacity: 0.1, scale: 1 }}
        />
        
        <LogosMarquee />
        <ProcessSection />
        <WhySection />
        <FeaturesSection />
        <TestimonialsSection />
        <IntegrationsSection />
        <Footer />
      </div>
      <ChatEmbedWidget />
    </div>
  )
}
