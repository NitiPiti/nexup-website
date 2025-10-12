'use client'

import { Navigation } from "@/components/navigation"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { CheckCircle, Star } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section for Pricing */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black dark:from-white to-gray-700 dark:to-gray-300 leading-tight mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All plans include AI provider API costs with no hidden fees.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <PricingSection />

      {/* Additional Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose NexUp AI?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get enterprise-grade AI chatbots at a fraction of the cost with unmatched features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center dark:bg-gray-900 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-[#418087]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                No Hidden Fees
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                All AI provider API costs are included in your subscription. What you see is what you pay.
              </p>
            </Card>

            <Card className="p-8 text-center dark:bg-gray-900 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <Star className="h-12 w-12 text-[#418087]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                14-Day Free Trial
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try all Pro features for 14 days with no credit card required. Full access to test everything.
              </p>
            </Card>

            <Card className="p-8 text-center dark:bg-gray-900 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-[#418087]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                EU Data Residency
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Full GDPR compliance with all data processing and storage within the European Union.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
