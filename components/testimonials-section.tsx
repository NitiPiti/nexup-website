import { Card } from "@/components/ui/card"
import { Star, TrendingUp, Users, Clock } from "lucide-react"

export function TestimonialsSection() {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-[#418087]" />,
      title: "Cost Savings Up to 70%",
      description: "Cut support costs by automating responses to common inquiries. Chatbots resolve above 90% of questions without human intervention."
    },
    {
      icon: <Star className="h-8 w-8 text-[#418087]" />,
      title: "Satisfaction Rate Above 90%",
      description: "End users consistently report high satisfaction, with over 90% of interactions rated positively."
    },
    {
      icon: <Clock className="h-8 w-8 text-[#418087]" />,
      title: "Implementation in 5 Minutes",
      description: "Businesses are up and running with chatbots in mere minutes, thanks to our best-in-class user interface."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Customer Support Manager",
      company: "TechCorp",
      content: "DocuChat has revolutionized our customer support. We've reduced response times by 80% and our customers love the instant, accurate answers.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "InnovateLabs",
      content: "The EU data residency was crucial for our compliance needs. DocuChat delivers enterprise-grade security with incredible ease of use.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "HR Manager",
      company: "Global Solutions",
      content: "Our internal knowledge base is now accessible 24/7. Employees can get instant answers to HR questions, saving hours every week.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Real Results from Satisfied Customers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Join businesses that have transformed their customer support and internal processes with DocuChat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center space-y-4">
                {stat.icon}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{stat.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            User Testimonials
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hear directly from our customers about their experience with DocuChat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">"{testimonial.content}"</p>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            All based on real-world data from our feedback logs and customer surveys.
          </p>
        </div>
      </div>
    </section>
  )
}
