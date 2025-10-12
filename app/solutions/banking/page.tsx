'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, TrendingUp, Users, BarChart3, Clock, Globe } from "lucide-react"

export default function BankingSolutionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black dark:from-white to-gray-700 dark:to-gray-300 leading-tight mb-6">
              Banking & Finance Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Transform your financial services with AI-powered solutions that enhance customer experience, 
              ensure compliance, and drive operational efficiency.
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
              Why Banking & Finance Choose NexUp AI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Specialized AI solutions designed for the unique challenges and opportunities in financial services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Shield className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Regulatory Compliance</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ensure adherence to financial regulations with AI-powered compliance monitoring and automated reporting.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <TrendingUp className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Risk Management</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Advanced risk assessment and fraud detection capabilities powered by machine learning algorithms.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Users className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Customer Service</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  24/7 intelligent customer support for account inquiries, loan applications, and financial guidance.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <BarChart3 className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Analytics & Insights</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Deep insights into customer behavior, market trends, and operational performance.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Clock className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Real-time Processing</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Instant transaction processing and decision-making for faster, more efficient operations.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Globe className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Global Reach</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Multilingual support for international banking operations and cross-border services.
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
              Banking Use Cases
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how leading financial institutions leverage NexUp AI for competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Loan Processing Automation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Streamline loan applications with AI-powered document analysis, credit scoring, and automated decision-making.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fraud Detection</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Real-time transaction monitoring and anomaly detection to prevent fraudulent activities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Investment Advisory</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Personalized investment recommendations based on risk profile and market analysis.
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
                    Automated KYC processes and identity verification for faster account setup.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Regulatory Reporting</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automated generation of compliance reports and regulatory submissions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Wealth Management</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI-powered portfolio optimization and personalized financial planning.
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
            Ready to Transform Your Banking Operations?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join leading financial institutions already using NexUp AI to enhance customer experience and drive growth.
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
