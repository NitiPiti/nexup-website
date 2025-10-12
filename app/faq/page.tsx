'use client'

import { Navigation } from "@/components/navigation"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section for FAQ */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black dark:from-white to-gray-700 dark:to-gray-300 leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Have questions? We have answers. You can also reach out to us at hi@nexup.ai.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </div>
  )
}
