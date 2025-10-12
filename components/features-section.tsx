import { Card } from "@/components/ui/card"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { HoverEffect } from "@/components/ui/hover-effect"
import { CheckCircle, Shield, Zap, Users, Globe, BarChart3, Palette, Code, Database, Puzzle, Brain, TrendingUp, Layers } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-[#418087]" />,
      title: "Verified, Actionable Answers",
      description: "Responses are not just AI-generated — they are grounded in your verified internal data with reference links and context providing unmatched answer quality."
    },
    {
      icon: <Shield className="h-8 w-8 text-[#418087]" />,
      title: "Security at the Core",
      description: "NexUp AI keeps your data safe within your own environment, fully GDPR-compliant and engineered for uncompromising privacy and control."
    },
    {
      icon: <Database className="h-8 w-8 text-[#418087]" />,
      title: "Smart Citations",
      description: "Provide users with transparent sources for every answer, building trust and credibility."
    },
    {
      icon: <Palette className="h-8 w-8 text-[#418087]" />,
      title: "Department-Ready Customization",
      description: "Every department has unique needs — HR, Compliance, IT, Operations, Finance. NexUp AI adapts to each team’s workflows, tools, and knowledge base."
    },
    {
      icon: <Users className="h-8 w-8 text-[#418087]" />,
      title: "White-Label Options",
      description: "Customize NexUp AI with your brand identity, tone, and integrations — from Slack and Teams to your internal portals — making it truly your own."
    },
    {
        icon: <Code className="h-8 w-8 text-[#418087]" />,
        title: "Dynamic User Context",
        description: "Track user interactions and provide context-aware responses based on their previous queries and interactions."
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-[#418087]" />,
        title: "Scalable & Future-Ready Architecture",
        description: "Built with modular infrastructure to grow with your business — from a single department pilot to a company-wide digital employee ecosystem."
      },
    {
      icon: <Puzzle className="h-8 w-8 text-[#418087]" />,
      title: "Flexible Integration",
      description: "Share privately with your team, distribute publicly via link, or embed directly on your website."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#418087]" />,
      title: "Analytics-Driven Visibility",
      description: "Every interaction generates insight. Track query trends, knowledge gaps, and usage analytics through a powerful admin dashboard."
    },
    {
      icon: <Brain className="h-8 w-8 text-[#418087]" />,
      title: "Tailored Intelligence",
      description: "NexUp AI becomes your organization’s internal brain — trained on your private data, documents, and systems to deliver verified, company-specific insights."
    },
    {
      icon: <Zap className="h-8 w-8 text-[#418087]" />,
      title: "Powerful AI Models",
      description: "Access top-tier AI technologies, including GPT-5, GPT-4o and Claude 3.5 Sonnet, deployed on our EU-based servers."
    },
    {
      icon: <Globe className="h-8 w-8 text-[#418087]" />,
      title: "Multilingual Support",
      description: "Communicate and operate seamlessly across global or regional teams. NexUp AI understands and responds in multiple languages without losing accuracy or tone."
    }
  ]

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The NexUp Advantage
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Redefine what is possible with NexUp AI. Empowering enterprises through intelligent automation, fortified security, and limitless scalability.
          </p>
        </div>

        <HoverEffect 
          items={features.map(feature => ({
            title: feature.title,
            description: feature.description,
            link: "#",
            icon: feature.icon
          }))}
          className="gap-8"
        />
      </div>
    </section>
  )
}
