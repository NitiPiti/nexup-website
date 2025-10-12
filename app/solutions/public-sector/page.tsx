'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Shield, Users, FileText, Globe, Scale } from "lucide-react"

export default function PublicSectorSolutionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black dark:from-white to-gray-700 dark:to-gray-300 leading-tight mb-6">
              Public Sector Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Transform government operations with AI-powered solutions that enhance citizen services, 
              improve transparency, and streamline administrative processes.
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
              Why Government Agencies Choose NexUp AI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Secure, compliant AI solutions designed specifically for government operations and citizen services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Building className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Citizen Services</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  AI-powered citizen portals and automated service delivery for improved public engagement.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Shield className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Security & Compliance</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Government-grade security with FISMA compliance and data sovereignty guarantees.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Users className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Public Engagement</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Intelligent public consultation and feedback analysis for better policy decisions.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <FileText className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Document Processing</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Automated document classification, processing, and archival for government records.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Globe className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Multi-language Support</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Multilingual citizen services and automated translation for diverse communities.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Scale className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Policy Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  AI-assisted policy development and impact assessment for better governance.
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
              Public Sector Use Cases
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how government agencies leverage NexUp AI to improve citizen services and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Permit Processing</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automated permit applications, review processes, and approval workflows for faster service delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tax Administration</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Intelligent tax filing assistance, compliance checking, and automated refund processing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Emergency Response</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI-powered emergency dispatch, resource allocation, and public safety coordination.
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
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Social Services</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automated benefit eligibility assessment and streamlined application processes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Public Records</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Intelligent document search, classification, and public records management.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Urban Planning</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI-assisted city planning, infrastructure analysis, and development impact assessment.
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
            Modernize Government Services
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join forward-thinking government agencies using NexUp AI to enhance citizen services and operational efficiency.
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
