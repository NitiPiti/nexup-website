'use client'

import { Navigation } from "@/components/navigation"
import { HeroSection3D } from "@/components/hero-section-3d"
import { HeroSectionOriginal } from "@/components/hero-section-original"
import { LogosMarquee } from "@/components/logos-marquee"
import { ProcessSection } from "@/components/process-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function DemoPage() {
  const [show3D, setShow3D] = useState(true)

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Toggle Buttons */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-4">
        <div className="container mx-auto px-4 flex justify-center space-x-4">
          <Button 
            onClick={() => setShow3D(true)}
            variant={show3D ? "default" : "outline"}
            className="px-6"
          >
            NexUp AI with 3D Animation
          </Button>
          <Button 
            onClick={() => setShow3D(false)}
            variant={!show3D ? "default" : "outline"}
            className="px-6"
          >
            NexUp AI with Icons
          </Button>
        </div>
      </div>

      {/* Conditional Hero Sections */}
      {show3D ? <HeroSection3D /> : <HeroSectionOriginal />}
      
      <LogosMarquee />
      <ProcessSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
