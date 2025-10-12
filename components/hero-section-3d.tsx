'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { AnimatedBackground } from "@/components/animated-background"
 
export function HeroSection3D() {
  return (
    <div className="relative min-h-screen bg-black">
      <AnimatedBackground />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#418087] text-white text-sm font-medium">
              The Future of AI Is Here
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
              Where AI Becomes Your {' '}
                <span className="text-[#418087]">Digital Employee</span>.
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Deliver instant, accurate answers across teams and customers — all while keeping your data sovereign. 
              NexUp AI combines enterprise intelligence, multilingual understanding, and secure automation for smarter operations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md bg-[#418087] hover:bg-[#3a7379] text-white px-8 py-4 text-lg">
                Get Started
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 py-4 text-lg">
                See How It Works
              </button>
            </div>
          </div>

          {/* Right content - Full 3D Animation */}
          <div className="flex-1 w-full max-w-4xl">
            <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
              />
              
              {/* Full 3D Animation covering the entire card */}
              <div className="w-full h-full">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
