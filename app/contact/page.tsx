'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe } from "@/components/ui/globe"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <div className="relative pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Animated Globe Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Globe className="opacity-20 dark:opacity-10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black dark:from-white to-gray-700 dark:to-gray-300 leading-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Ready to transform your business with AI? We're here to help you get started. 
              Reach out to our team for a personalized consultation.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  We're here to help you succeed. Get in touch with our team through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#418087] rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">General Inquiries</p>
                    <a href="mailto:hello@nexupai.com" className="text-[#418087] hover:underline">
                      hello@nexupai.com
                    </a>
                    <p className="text-gray-600 dark:text-gray-300 mb-1 mt-3">Support</p>
                    <a href="mailto:support@nexupai.com" className="text-[#418087] hover:underline">
                      support@nexupai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#418087] rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">Business Hours</p>
                    <a href="tel:+1-555-NEXUP-AI" className="text-[#418087] hover:underline">
                      +1 (555) NEXUP-AI
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#418087] rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      NexUp AI Headquarters<br />
                      123 Innovation Drive<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#418087] rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 4:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Send us a Message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#418087] focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#418087] focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#418087] focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#418087] focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#418087] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="demo">Request a Demo</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#418087] focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <Button className="w-full bg-[#418087] hover:bg-[#3a7379] text-white text-lg py-3">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions about NexUp AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 dark:bg-gray-700 dark:border-gray-600">
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-[#418087] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    How quickly can I get started?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Most customers are up and running within 24-48 hours. Our team provides full onboarding support.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 dark:bg-gray-700 dark:border-gray-600">
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-[#418087] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Do you offer custom solutions?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Yes! We work with enterprise clients to create tailored AI solutions for specific business needs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 dark:bg-gray-700 dark:border-gray-600">
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-[#418087] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    What kind of support do you provide?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We offer 24/7 technical support, dedicated account managers, and comprehensive training resources.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 dark:bg-gray-700 dark:border-gray-600">
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-[#418087] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Is my data secure?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Absolutely. We use enterprise-grade security and are fully GDPR compliant with data sovereignty guarantees.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#418087]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of businesses already using NexUp AI to transform their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#418087] hover:bg-gray-100 text-lg px-8 py-3">
              Schedule a Demo
            </Button>
            <Button className="border-2 border-white text-white hover:bg-white hover:text-[#418087] text-lg px-8 py-3">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
