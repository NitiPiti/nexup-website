import { RulerCarousel, CarouselItem } from "@/components/ui/ruler-carousel"
import { Upload, Settings, BarChart3, Database } from "lucide-react"
import { useState } from "react"

export function TransformSupportSection() {
  const steps = [
    {
      id: 1,
      icon: <Upload className="h-8 w-8 text-[#418087]" />,
      title: "Import Your Resources",
      description: "Easily import your existing knowledge base with support for multiple formats including PDFs, Word docs, web pages, and more. Our system automatically processes and indexes your content for optimal AI performance."
    },
    {
      id: 2,
      icon: <Database className="h-8 w-8 text-[#418087]" />,
      title: "Smart Processing",
      description: "Our sophisticated AI algorithms process your content, understanding context, relationships, and key concepts to create an intelligent knowledge base that can answer complex questions accurately."
    },
    {
      id: 3,
      icon: <Settings className="h-8 w-8 text-[#418087]" />,
      title: "Personalize Your Bot",
      description: "Tailor your chatbot's personality, visual design, and response style to match your brand. Set up custom workflows, integrate with your existing systems, and configure advanced features."
    },
    {
      id: 4,
      icon: <BarChart3 className="h-8 w-8 text-[#418087]" />,
      title: "Go Live",
      description: "Launch your AI chatbot on your website, mobile app, or messaging platforms. Monitor performance with detailed analytics and continuously improve based on user interactions."
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const carouselItems: CarouselItem[] = steps.map(step => ({
    id: step.id,
    title: step.title,
    icon: step.icon,
    description: step.description
  }))

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Transform Your Support in Minutes
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Set up your AI chatbots effortlessly and start saving time and resources immediately. Here's how we help you get there:
          </p>
        </div>
        
        <div className="mb-12">
          <RulerCarousel 
            originalItems={carouselItems} 
            onActiveIndexChange={setActiveIndex}
          />
        </div>
      </div>
    </section>
  )
}

