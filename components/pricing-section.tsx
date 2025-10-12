'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { useState } from "react"

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Essential",
      description: "For individuals and personal projects.",
      price: { monthly: 17, yearly: 170 },
      features: [
        "3 chatbots",
        "2,000 questions for GPT-4o mini and equivalent models per month",
        "Extensive document and website support, including Google Drive sync",
        "10,000 pages of source documents per month",
        "Share privately with a link or embed on your site",
        "Standard support via chat and email"
      ],
      popular: false
    },
    {
      name: "Pro",
      description: "Most Popular",
      price: { monthly: 37, yearly: 370 },
      features: [
        "Unlimited chatbots",
        "10,000 questions for GPT-4o mini, 800 questions for GPT-4o, or 666 questions for GPT-5, per month",
        "End-to-end EU data residency",
        "Extensive document and website support, including Google Drive sync",
        "100,000 pages of source documents per month",
        "Share privately or embed on websites",
        "Branding and white label options",
        "Team features with up to 5 seats",
        "Priority support via chat and email"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large teams with specific needs.",
      price: { monthly: "Let's talk", yearly: "Let's talk" },
      features: [
        "All Pro features",
        "As many questions, pages, and seats as you need",
        "Azure OpenAI integration",
        "Dedicated Slack channel for support",
        "White glove onboarding for initial setup",
        "Dedicated support and custom integrations"
      ],
      popular: false,
      custom: true
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Premium Features, Accessible Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get enterprise-grade AI chatbots at a fraction of the cost.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Yearly (2 Months Free)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative hover:shadow-lg transition-shadow duration-300 ${
                plan.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#418087] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  {plan.custom ? (
                    <div className="text-3xl font-bold text-gray-900">{plan.price.monthly}</div>
                  ) : (
                    <div>
                      <span className="text-4xl font-bold text-gray-900">
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-gray-600">/month</span>
                    </div>
                  )}
                </div>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-[#418087] hover:bg-[#3a7379] text-white' 
                      : plan.custom 
                        ? 'bg-gray-600 hover:bg-gray-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.custom ? 'Contact Us' : 'Subscribe'}
                </Button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-600">
            All plans include AI provider API costs. No hidden fees.
          </p>
          <div className="bg-[#418087]/10 border border-[#418087]/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-[#418087] mb-2">Free Trial</h4>
            <p className="text-[#418087] mb-4">
              14-day free trial. No credit card required.
            </p>
            <ul className="text-sm text-[#418087] space-y-1">
              <li>• Full access to Pro features.</li>
            </ul>
            <Button className="mt-4 bg-[#418087] hover:bg-[#3a7379] text-white">
              Free for 14 Days
            </Button>
          </div>
          <Button variant="outline" className="mt-4">
            Try DocuChat Now
          </Button>
        </div>
      </div>
    </section>
  )
}
