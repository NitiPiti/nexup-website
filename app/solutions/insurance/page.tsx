'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, FileText, TrendingUp, Users, Clock, AlertTriangle } from "lucide-react"

export default function InsuranceSolutionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black dark:from-white to-gray-700 dark:to-gray-300 leading-tight mb-6">
              Insurance Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Streamline insurance operations with AI-powered solutions that enhance underwriting, 
              claims processing, and customer service while reducing risk and fraud.
            </p>
            <Button className="bg-[#418087] hover:bg-[#3a7379] text-white text-lg px-8 py-3">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Insurance Companies Choose NexUp AI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Advanced AI solutions designed to revolutionize insurance operations, from underwriting to claims settlement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Shield className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Risk Assessment</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Advanced risk modeling and predictive analytics for more accurate underwriting decisions.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <FileText className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Claims Processing</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Automated claims assessment, fraud detection, and faster settlement processing.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <TrendingUp className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Pricing Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Dynamic pricing models based on real-time risk factors and market conditions.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Users className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Customer Service</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  24/7 intelligent customer support for policy inquiries, claims status, and coverage questions.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Clock className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Fast Processing</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Rapid policy issuance and instant claim processing for improved customer satisfaction.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <AlertTriangle className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Fraud Detection</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  AI-powered fraud prevention and detection to protect against fraudulent claims.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Insurance Use Cases
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how insurance companies leverage NexUp AI to streamline operations and improve customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Automated Underwriting</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI-powered risk assessment and instant policy approval for standard insurance products.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Claims Automation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Intelligent claims processing with automated damage assessment and settlement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Policy Management</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Smart policy administration with automated renewals and coverage adjustments.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Customer Onboarding</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Streamlined application process with automated document verification and KYC.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Risk Monitoring</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Continuous risk assessment and policy adjustment based on changing circumstances.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Customer Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Advanced customer insights for personalized products and retention strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#418087]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Revolutionize Your Insurance Operations
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join leading insurance companies using NexUp AI to enhance efficiency and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#418087] hover:bg-gray-100 text-lg px-8 py-3">
              Schedule Demo
            </Button>
            <Button className="border-2 border-white text-white hover:bg-white hover:text-[#418087] text-lg px-8 py-3">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
