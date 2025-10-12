'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Shield, Users, Activity, Clock, Stethoscope } from "lucide-react"

export default function HealthcareSolutionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black dark:from-white to-gray-700 dark:to-gray-300 leading-tight mb-6">
              Health Care Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Revolutionize healthcare delivery with AI-powered solutions that improve patient outcomes, 
              streamline operations, and enhance clinical decision-making.
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
              Why Healthcare Organizations Choose NexUp AI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              HIPAA-compliant AI solutions designed specifically for healthcare providers, hospitals, and medical institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Heart className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Patient Care</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  AI-powered patient monitoring, symptom analysis, and personalized treatment recommendations.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Shield className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">HIPAA Compliance</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Built-in privacy protection and security measures to ensure complete HIPAA compliance.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Users className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Clinical Support</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Intelligent clinical decision support and evidence-based treatment recommendations.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Activity className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Diagnostic Assistance</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Advanced diagnostic tools and medical image analysis for improved accuracy.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Clock className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">24/7 Support</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Round-the-clock patient assistance and emergency response capabilities.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Stethoscope className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Telemedicine</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Virtual consultation support and remote patient monitoring solutions.
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
              Healthcare Use Cases
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how healthcare providers leverage NexUp AI to improve patient care and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Symptom Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI-powered symptom checker and preliminary diagnosis assistance for healthcare providers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Medical Records</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Intelligent medical record analysis and automated documentation for better patient care.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Drug Interaction</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Real-time drug interaction checking and medication management assistance.
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
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Appointment Scheduling</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Smart scheduling system that optimizes patient appointments and resource allocation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Patient Education</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Personalized health education and treatment plan explanations for patients.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Clinical Research</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI-assisted clinical trial management and medical research data analysis.
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
            Transform Healthcare with AI
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join leading healthcare providers using NexUp AI to enhance patient care and improve outcomes.
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
