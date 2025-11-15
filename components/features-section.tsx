"use client"

import { Suspense } from "react"
import { Card } from "@/components/ui/card"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { HoverEffect } from "@/components/ui/hover-effect"
import { SparksCarousel, SparkItem } from "@/components/ui/sparks-carousel"
import { CheckCircle, Shield, Zap, Users, Globe, BarChart3, Palette, Code, Database, Puzzle, Brain, TrendingUp, Layers } from "lucide-react"
import Hyperspeed from "@/components/ui/hyperspeed"

export function FeaturesSection() {
  // Convert features to SparkItem format for the carousel
  const sparkItems: SparkItem[] = [
    {
      id: 1,
      icon: <CheckCircle className="h-8 w-8 text-[#418087]" />,
      title: "Next-Level Answer Quality",
      description: "Responses are not just AI-generated, they are grounded in your verified internal data with reference links and context providing unmatched answer quality."
    },
    {
      id: 2,
      icon: <Shield className="h-8 w-8 text-[#418087]" />,
      title: "Security at the Core",
      description: "NexUp AI keeps your data safe within your own environment, fully GDPR-compliant and engineered for uncompromising privacy and control."
    },
    {
      id: 3,
      icon: <Zap className="h-8 w-8 text-[#418087]" />,
      title: "Powerful AI Models",
      description: "Access top-tier AI technologies, including GPT-5, GPT-4o and Claude 3.5 Sonnet, deployed on our EU-based servers."
    },
    {
      id: 4,
      icon: <Palette className="h-8 w-8 text-[#418087]" />,
      title: "Department-Ready Customization",
      description: "Every department has unique needs, NexUp AI adapts to each team's workflows, tools, and knowledge base."
    },
    {
      id: 5,
      icon: <Users className="h-8 w-8 text-[#418087]" />,
      title: "White-Label Options",
      description: "Customize NexUp AI with your brand identity, tone, and integrations from Slack and Teams to your internal portals making it truly your own."
    },
    {
      id: 6,
      icon: <Code className="h-8 w-8 text-[#418087]" />,
      title: "Dynamic User Context",
      description: "Track user interactions and provide context-aware responses based on their previous queries and interactions."
    },
    {
      id: 7,
      icon: <Database className="h-8 w-8 text-[#418087]" />,
      title: "Smart Citations",
      description: "Provide users with transparent sources for every answer, building trust and credibility."
    },
    {
      id: 8,
      icon: <TrendingUp className="h-8 w-8 text-[#418087]" />,
      title: "Scalable & Future-Ready",
      description: "Built with modular infrastructure to grow with your business — from a single department pilot to a company-wide digital employee ecosystem."
    },
    {
      id: 9,
      icon: <Puzzle className="h-8 w-8 text-[#418087]" />,
      title: "Flexible Integration",
      description: "Share privately with your team, distribute publicly via link, or embed directly on your website."
    },
    {
      id: 10,
      icon: <BarChart3 className="h-8 w-8 text-[#418087]" />,
      title: "Analytical Visibility",
      description: "Every interaction generates insight. Track query trends, knowledge gaps, and usage analytics through a powerful admin dashboard."
    },
    {
      id: 11,
      icon: <Brain className="h-8 w-8 text-[#418087]" />,
      title: "Tailored Intelligence",
      description: "NexUp AI becomes your organization's internal brain trained on your private data, documents, and systems to deliver verified, company-specific insights."
    },
    {
      id: 12,
      icon: <Globe className="h-8 w-8 text-[#418087]" />,
      title: "Multilingual Support",
      description: "Communicate and operate seamlessly across global teams. NexUp AI understands and responds in multiple languages without losing accuracy or tone."
    }
  ]

  return (
    <section id="features" className="relative py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Animation */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 flex items-center justify-center opacity-30 dark:opacity-20">
          <div className="w-full h-full max-w-4xl mx-auto">
            <Hyperspeed 
            effectOptions={{
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 0,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0x418087, 0x3a7379, 0x4a9ba3],
                rightCars: [0x418087, 0x3a7379, 0x4a9ba3],
                sticks: 0x418087
              }
            }}
          />
          </div>
        </div>
      </Suspense>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            The NexUp Advantage
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Redefine what is possible with NexUp AI. Empowering enterprises through intelligent automation, fortified security, and limitless scalability.
          </p>
        </div>
        
        <SparksCarousel 
          title=""
          subtitle=""
          items={sparkItems}
        />
      </div>
    </section>
  )
}
