'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Users, Brain, Globe, Award } from "lucide-react"

export default function EducationSolutionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black dark:from-white to-gray-700 dark:to-gray-300 leading-tight mb-6">
              Higher Education Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Transform higher education with AI-powered solutions that enhance learning experiences, 
              streamline administration, and support academic excellence.
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
              Why Higher Education Institutions Choose NexUp AI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to support academic institutions, faculty, and students in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <GraduationCap className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Student Support</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  24/7 AI-powered academic assistance, course guidance, and personalized learning support.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <BookOpen className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Academic Research</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  AI-assisted research tools, literature analysis, and academic writing support for faculty and students.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Users className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Administrative Efficiency</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Streamlined admissions, enrollment, and student services with intelligent automation.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Brain className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Personalized Learning</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Adaptive learning paths and personalized educational content based on student performance.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Globe className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Global Accessibility</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Multilingual support and accessibility features for diverse international student populations.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center text-center space-y-4">
                <Award className="h-12 w-12 text-[#418087]" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Academic Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  AI-powered assessment tools and academic performance analytics for continuous improvement.
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
              Higher Education Use Cases
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how universities and colleges leverage NexUp AI to enhance education and administrative processes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Admissions Processing</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automated application review, document verification, and admission decision support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Course Planning</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI-powered course recommendation and academic pathway planning for students.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Academic Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Intelligent tutoring, homework assistance, and study guidance for students.
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
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Research Assistance</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI-powered literature review, data analysis, and research methodology support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Student Services</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automated student support for financial aid, housing, and campus services.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Faculty Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI-assisted grading, curriculum development, and teaching resource recommendations.
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
            Transform Higher Education
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join leading universities and colleges using NexUp AI to enhance education and student success.
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
