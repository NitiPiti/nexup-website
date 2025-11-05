import { Timeline } from "@/components/ui/timeline"
import { ChatInterface } from "@/components/ui/chat-interface"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FlowButton } from "@/components/ui/flow-button"
import { Upload, Settings, BarChart3, Database } from "lucide-react"

export function ProcessSection() {
  const timelineData = [
    {
      title: "Data Collection",
      content: (
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-6 w-6 text-[#418087]" />
              Import Your Resources
            </CardTitle>
            <CardDescription>Upload documents, sync websites, or connect Google Drive</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Easily import your existing knowledge base with support for multiple formats including PDFs, Word docs, web pages, and more. Our system automatically processes and indexes your content for optimal AI performance.
            </p>
          </CardContent>
        </Card>
      )
    },
    {
      title: "AI Training",
      content: (
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-6 w-6 text-[#418087]" />
              Smart Processing
            </CardTitle>
            <CardDescription>Advanced AI analyzes and understands your content</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Our sophisticated AI algorithms process your content, understanding context, relationships, and key concepts to create an intelligent knowledge base that can answer complex questions accurately.
            </p>
          </CardContent>
        </Card>
      )
    },
    {
      title: "Customization",
      content: (
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-6 w-6 text-[#418087]" />
              Personalize Your Bot
            </CardTitle>
            <CardDescription>Customize appearance, behavior, and responses</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Tailor your chatbot's personality, visual design, and response style to match your brand. Set up custom workflows, integrate with your existing systems, and configure advanced features.
            </p>
          </CardContent>
        </Card>
      )
    },
    {
      title: "Deployment",
      content: (
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-[#418087]" />
              Go Live
            </CardTitle>
            <CardDescription>Deploy across multiple channels instantly</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Launch your AI chatbot on your website, mobile app, or messaging platforms. Monitor performance with detailed analytics and continuously improve based on user interactions.
            </p>
          </CardContent>
        </Card>
      )
    }
  ]

  return (
    <section id="process" className="bg-gray-50 dark:bg-gray-900">
      {/* Chat Interface Section */}
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              From Data to Intelligence
            </h2>
            <div className="flex justify-center">
              <FlowButton text="Try Pro for free" />
            </div>
          </div>
          
          <div className="h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="h-full w-full max-w-4xl mx-auto">
              <ChatInterface />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <Timeline data={timelineData} />
    </section>
  )
}
