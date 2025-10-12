import { Card } from "@/components/ui/card"
import { Upload, Settings, BarChart3 } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-[#418087]" />,
      title: "Import Resources",
      description: "Upload documents or sync websites and Google Drive folders instantly. Add as many as you like, in any language."
    },
    {
      icon: <Settings className="h-12 w-12 text-[#418087]" />,
      title: "Customize & Refine",
      description: "Personalize every aspect of your chatbot, from visual style to conversational logic. No coding required."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-[#418087]" />,
      title: "Deploy & Analyze",
      description: "Embed on your site or share via link. Monitor performance with in-depth analytics to continually improve user satisfaction."
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Transform Your Support in Minutes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Set up your AI chatbots effortlessly and start saving time and resources immediately. Here's how we help you get there:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center space-y-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-4">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
