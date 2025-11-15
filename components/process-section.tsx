'use client'

import { useState, KeyboardEvent, Suspense } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { FlowButton } from "@/components/ui/flow-button"
import { GenerativeArtScene } from "@/components/ui/generative-art-scene"

export function ProcessSection() {
  const [query, setQuery] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    if (!query.trim() || isSubmitting) return
    
    setIsSubmitting(true)
    // Encode the query to pass it as a URL parameter
    const encodedQuery = encodeURIComponent(query.trim())
    // Open chat.nexupai.com with the query parameter
    window.open(`https://chat.nexupai.com/app?q=${encodedQuery}`, '_blank', 'noopener,noreferrer')
    
    // Reset after a short delay
    setTimeout(() => {
      setQuery('')
      setIsSubmitting(false)
    }, 500)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const industryButtons = [
    { label: "Financial Services", url: "https://chat.nexupai.com/app" },
    { label: "Education", url: "https://chat.nexupai.com/app" },
    { label: "Healthcare", url: "https://chat.nexupai.com/app" },
    { label: "Public Sector", url: "https://chat.nexupai.com/app" }
  ]

  const supportButtons = [
    { label: "IT Support", url: "https://chat.nexupai.com/app" },
    { label: "HR Support", url: "https://chat.nexupai.com/app" },
    { label: "Finance Support", url: "https://chat.nexupai.com/app" },
    { label: "Customer Support", url: "https://chat.nexupai.com/app" }
  ]

  return (
    <section id="process" className="bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <Suspense fallback={null}>
        <GenerativeArtScene />
      </Suspense>
      
      <div className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              From Data to Intelligence
            </h2>
            <div className="flex justify-center mb-8 sm:mb-10">
              <a href="/login">
                <FlowButton text="Try Pro for free" />
              </a>
            </div>
          </div>
          
          {/* Ask NexUp AI Section */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg p-6 sm:p-8">
              {/* Input Field */}
              <div className="relative mb-6">
                <div className="relative flex items-center bg-gray-800 dark:bg-gray-900 rounded-lg border border-gray-700 dark:border-gray-600 focus-within:border-[#418087] focus-within:ring-2 focus-within:ring-[#418087]/20 transition-all">
                  <div className="absolute left-4 flex items-center">
                    <Sparkles className="h-5 w-5 text-[#418087]" />
                  </div>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask NexUp AI about enterprise automation...."
                    className="w-full pl-12 pr-16 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm sm:text-base"
                    disabled={isSubmitting}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={!query.trim() || isSubmitting}
                    className="absolute right-2 p-2 bg-gray-700 dark:bg-gray-700 hover:bg-[#418087] disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
                    aria-label="Submit"
                  >
                    <ArrowRight className="h-4 w-4 text-white rotate-[-45deg]" />
                  </button>
                </div>
              </div>

              {/* Helper Text */}
              <p className="text-center text-gray-400 dark:text-gray-400 text-sm sm:text-base mb-6">
                Not sure where to start? Find out how to agentify any enterprise:
              </p>

              {/* Industry Buttons */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
                {industryButtons.map((button, index) => (
                  <a
                    key={index}
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 rounded-lg text-white font-semibold text-xs sm:text-sm uppercase tracking-wide transition-all duration-200"
                  >
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#418087] group-hover:translate-x-1 transition-transform" />
                    <span>{button.label}</span>
                  </a>
                ))}
              </div>

              {/* Support Buttons */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {supportButtons.map((button, index) => (
                  <a
                    key={index}
                    href={button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 rounded-lg text-white font-semibold text-xs sm:text-sm uppercase tracking-wide transition-all duration-200"
                  >
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#418087] group-hover:translate-x-1 transition-transform" />
                    <span>{button.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
