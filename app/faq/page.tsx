'use client'

import { Navigation } from "@/components/navigation"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { AIAssistantInterface } from "@/components/ui/ai-assistant-interface"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* AI Assistant Interface Section */}
      <div className="relative pt-24 py-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <AIAssistantInterface />
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </div>
  )
}
