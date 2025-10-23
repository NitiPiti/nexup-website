import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What sets NexUp AI apart from other chatbot builders?",
      answer: "NexUp AI delivers unmatched answer quality and genuine GDPR compliance, without the premium price tag. As an EU-based company, we ensure complete data residency with all storage and AI processing on EU servers, backed by carefully vetted EU-based subprocessors. Our intuitive interface enables anyone to set up and deploy highly accurate chatbots in minutes, offering a unique combination of performance, compliance, and ease of use that sets us apart in the market."
    },
    {
      question: "How does NexUp AI ensure the best answer quality?",
      answer: "NexUp AI ensures superior answer quality by leveraging cutting-edge AI models, including top-tier alternatives to well-known OpenAI models. We employ proprietary strategies for document analysis, information retrieval, and answer generation. Our advanced algorithms excel at contextual understanding, allowing for hyper-accurate responses."
    },
    {
      question: "Is my data secure with NexUp AI?",
      answer: "Absolutely. We prioritize your data's security and privacy. All your data is stored and processed within the EU on our secure AWS Frankfurt servers. We are fully GDPR, CCPA, and PIPEDA compliant, and your data is never used to train AI models."
    },
    {
      question: "Is NexUp AI GDPR compliant?",
      answer: "Yes, NexUp AI is fully compliant with both the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), Personal Information Protection and Electronic Documents Act (PIPEDA). Being headquartered in the European Union, we are naturally subject to some of the most stringent data protection laws in the world. Our servers are located in Frankfurt, Germany to ensure your data remains within the EU jurisdiction."
    },
    {
      question: "What benefits can NexUp AI bring to my business?",
      answer: "NexUp AI enhances your business by providing efficient information retrieval, reducing time spent on data lookup or answering redundant questions. It serves as a 24/7 customer service tool, delivering precise answers to customer inquiries, and aids in internal knowledge management, supporting employees in their tasks. With NexUp AI, you can streamline operations, improve customer experience, and bolster internal support."
    },
    {
      question: "What type of documents can I use to train my chatbot?",
      answer: "NexUp AI supports a wide range of file types including PDF, Word, Excel, PowerPoint, e-book, Notepad, CSV, markdown, and media files. You can also add URLs and YouTube videos as sources of information as well as sync Google Drive folders into your chatbots."
    },
    {
      question: "How long does it take to train a chatbot?",
      answer: "The process is incredibly fast. For documents shorter than 100 pages, it typically takes just a few seconds to create a chatbot. If you upload a large number of documents or a single long document, it might take slightly longer, but almost never exceeds a minute."
    },
    {
      question: "What AI models does NexUp AI use? Can I use GPT-5?",
      answer: "Yes! We support GPT-5 and its variants (GPT-5 Mini and GPT-5 Nano) along with other leading AI models including GPT-4o, GPT-4o mini, GPT-4 Turbo, Claude 3.5 Sonnet, Claude 3 Haiku, Mistral Large 2, and Llama 3.1 70b. GPT-5 offers the latest OpenAI technology with superior intelligence and performance. The availability of specific models depends on your subscription plan."
    },
    {
      question: "What languages does NexUp AI support?",
      answer: "NexUp AI supports more than 80 different languages. This means that you can upload documents and ask questions in any of these supported languages, and your chatbots will respond in the language of the question."
    },
    {
      question: "Is my data used for training AI models?",
      answer: "No, we or other AI model providers do not use any of your documents, questions, or answers for training any AI models."
    },
    {
      question: "Can I track chatbot analytics?",
      answer: "Yes, NexUp AI integrates seamlessly with Google Tag Manager (GTM) to track user interactions, questions asked, answers received, and other key metrics to help you understand and optimize chatbot performance."
    },
    {
      question: "Is there a free plan or trial?",
      answer: "While NexUp AI doesn't offer a permanently free plan, we do provide a 14-day free trial. During this trial period, you can access all the features available in our Pro plan."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We have answers. You can also reach out to us at hi@nexupai.com.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
