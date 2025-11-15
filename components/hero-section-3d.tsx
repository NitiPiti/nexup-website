'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { AnimatedBackground } from "@/components/animated-background"
import { Card } from "@/components/ui/card"
 
export function HeroSection3D() {
  return (
    <div className="relative min-h-screen bg-black w-full overflow-hidden">
      <AnimatedBackground />
      
      {/* Teal light background - top positioned with downward expansion */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#418087]/40 via-[#418087]/20 to-transparent from-0% via-30% to-100%" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-[#418087]/30 rounded-full blur-3xl" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[300px] bg-[#418087]/50 rounded-full blur-2xl" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[150px] bg-[#418087]/60 rounded-full blur-xl" />
      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left content */}
          <div className="flex-1 space-y-6 sm:space-y-8 w-full">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#418087] text-white text-xs sm:text-sm font-medium">
              The Future of AI Is Here
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Where AI Becomes Your {' '}
                <span className="text-[#418087]">Digital Employee</span>.
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Deliver instant, accurate answers across teams and customers — all while keeping your data sovereign. 
              NexUp AI combines enterprise intelligence, multilingual understanding, and secure automation for smarter operations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="/login" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 sm:h-11 rounded-md bg-[#418087] hover:bg-[#3a7379] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                Get Started
              </a>
              <a href="https://chat.nexupai.com/app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 sm:h-11 rounded-md px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                See How It Works
              </a>
            </div>
          </div>

          {/* Right content - 3D Robot Animation */}
          <div className="flex-1 w-full max-w-4xl relative z-10">
            <Card className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-black/[0.96] relative overflow-hidden border-2 border-white rounded-lg">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
              />
              
              {/* Dark glow effect at the top */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-60 z-10"></div>
              
              {/* Spline 3D Robot Animation */}
              <div className="w-full h-full">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
              
              {/* Subtle dark glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-500/10 via-transparent to-transparent pointer-events-none"></div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
