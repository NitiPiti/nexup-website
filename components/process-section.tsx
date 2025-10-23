import { ContainerScroll } from "@/components/ui/container-scroll"
import { Timeline } from "@/components/ui/timeline"
import { ChatInterface } from "@/components/ui/chat-interface"
import { TextRevealCard } from "@/components/ui/text-reveal-card"

const timelineData = [
  {
    title: "Data Collection",
    cardTitle: "Import Your Resources",
    cardSubtitle: "Upload documents, sync websites, or connect Google Drive",
    cardDetailedText: "Easily import your existing knowledge base with support for multiple formats including PDFs, Word docs, web pages, and more. Our system automatically processes and indexes your content for optimal AI performance.",
    icon: "📁"
  },
  {
    title: "AI Training",
    cardTitle: "Smart Processing",
    cardSubtitle: "Advanced AI analyzes and understands your content",
    cardDetailedText: "Our sophisticated AI algorithms process your content, understanding context, relationships, and key concepts to create an intelligent knowledge base that can answer complex questions accurately.",
    icon: "🧠"
  },
  {
    title: "Customization",
    cardTitle: "Personalize Your Bot",
    cardSubtitle: "Customize appearance, behavior, and responses",
    cardDetailedText: "Tailor your chatbot's personality, visual design, and response style to match your brand. Set up custom workflows, integrate with your existing systems, and configure advanced features.",
    icon: "⚙️"
  },
  {
    title: "Deployment",
    cardTitle: "Go Live",
    cardSubtitle: "Deploy across multiple channels instantly",
    cardDetailedText: "Launch your AI chatbot on your website, mobile app, or messaging platforms. Monitor performance with detailed analytics and continuously improve based on user interactions.",
    icon: "🚀"
  }
]

export function ProcessSection() {
  return (
    <section id="process" className="bg-gray-50 dark:bg-gray-900">
      <ContainerScroll
        titleComponent={
          <div className="text-center space-y-6 py-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              From Data to Intelligence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto pb-4">
              Set up your AI chatbots effortlessly and start saving time and resources immediately.
            </p>
          </div>
        }
      >
        <ChatInterface />
      </ContainerScroll>
      
      {/* Timeline Section */}
      <Timeline data={timelineData} />
    </section>
  )
}
