'use client'

import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { Bot, Sparkles, Zap, Brain, MessageSquare, Users } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
 
export function HeroSectionOriginal() {
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
                v3.9.0 is out! 🎉
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white">
              Where AI Becomes Your Digital Workforce.{' '}
                <span className="text-[#418087]">Digital Employee</span>.
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                Reduce support costs, delight customers and employees with AI chatbots trained on your content. 
                Experience unrivaled accuracy in answers and full EU data residency — set up in mere minutes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#418087] hover:bg-[#3a7379] text-white px-8 py-4 text-lg">
                Get Started for Free
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                14-day free trial — No credit card required
              </Button>
            </div>
          </div>

          {/* Right content - Interactive Elements without 3D */}
          <div className="flex-1 w-full max-w-2xl">
            <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
              />
              
              <div className="flex h-full">
                {/* Left content */}
                <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Interactive 3D
                  </h2>
                  <p className="mt-4 text-neutral-300 max-w-lg">
                    Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
                    that capture attention and enhance your design.
                  </p>
                </div>

                {/* Right content - Animated Icons and Elements */}
                <div className="flex-1 relative flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Main Bot Icon */}
                    <div className="relative">
                      <div className="absolute inset-0 animate-pulse">
                        <Bot className="h-32 w-32 text-blue-400 opacity-20" />
                      </div>
                      <Bot className="h-32 w-32 text-blue-500 relative z-10" />
                      
                      {/* Floating Icons around the bot */}
                      <div className="absolute -top-4 -right-4 animate-bounce">
                        <Sparkles className="h-8 w-8 text-yellow-400" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 animate-bounce delay-300">
                        <Zap className="h-8 w-8 text-purple-400" />
                      </div>
                      <div className="absolute top-8 -left-8 animate-bounce delay-150">
                        <Brain className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="absolute -top-8 left-8 animate-bounce delay-75">
                        <MessageSquare className="h-6 w-6 text-pink-400" />
                      </div>
                      <div className="absolute bottom-8 -right-8 animate-bounce delay-200">
                        <Users className="h-6 w-6 text-orange-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
