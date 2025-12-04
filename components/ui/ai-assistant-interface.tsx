"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  ArrowUp,
  Bot,
  User,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const FAQ_DATA = [
  {
    question: "What sets NexUp AI apart from other chatbot builders?",
    answer: "NexUp AI delivers unmatched answer quality and genuine GDPR compliance, without the premium price tag. As an EU-based company, we ensure complete data residency with all storage and AI processing on EU servers, backed by carefully vetted EU-based subprocessors. Our intuitive interface enables anyone to set up and deploy highly accurate chatbots in minutes, offering a unique combination of performance, compliance, and ease of use that sets us apart in the market.",
    keywords: ["apart", "different", "unique", "sets apart", "difference", "compare", "vs", "versus"]
  },
  {
    question: "How does NexUp AI ensure the best answer quality?",
    answer: "NexUp AI ensures superior answer quality by leveraging cutting-edge AI models, including top-tier alternatives to well-known OpenAI models. We employ proprietary strategies for document analysis, information retrieval, and answer generation. Our advanced algorithms excel at contextual understanding, allowing for hyper-accurate responses.",
    keywords: ["quality", "answer quality", "accurate", "accuracy", "best", "ensure"]
  },
  {
    question: "Is my data secure with NexUp AI?",
    answer: "Absolutely. We prioritize your data's security and privacy. All your data is stored and processed within the EU on our secure AWS Frankfurt servers. We are fully GDPR, CCPA, and PIPEDA compliant, and your data is never used to train AI models.",
    keywords: ["secure", "security", "data secure", "privacy", "safe", "protected"]
  },
  {
    question: "Is NexUp AI GDPR compliant?",
    answer: "Yes, NexUp AI is fully compliant with both the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), Personal Information Protection and Electronic Documents Act (PIPEDA). Being headquartered in the European Union, we are naturally subject to some of the most stringent data protection laws in the world. Our servers are located in Frankfurt, Germany to ensure your data remains within the EU jurisdiction.",
    keywords: ["gdpr", "compliant", "compliance", "ccpa", "pipeda", "data protection", "regulation"]
  },
  {
    question: "What benefits can NexUp AI bring to my business?",
    answer: "NexUp AI enhances your business by providing efficient information retrieval, reducing time spent on data lookup or answering redundant questions. It serves as a 24/7 customer service tool, delivering precise answers to customer inquiries, and aids in internal knowledge management, supporting employees in their tasks. With NexUp AI, you can streamline operations, improve customer experience, and bolster internal support.",
    keywords: ["benefits", "business", "advantages", "help", "improve", "enhance", "value"]
  },
  {
    question: "What type of documents can I use to train my chatbot?",
    answer: "NexUp AI supports a wide range of file types including PDF, Word, Excel, PowerPoint, e-book, Notepad, CSV, markdown, and media files. You can also add URLs and YouTube videos as sources of information as well as sync Google Drive folders into your chatbots.",
    keywords: ["documents", "files", "file types", "upload", "train", "training", "pdf", "word", "excel"]
  },
  {
    question: "How long does it take to train a chatbot?",
    answer: "The process is incredibly fast. For documents shorter than 100 pages, it typically takes just a few seconds to create a chatbot. If you upload a large number of documents or a single long document, it might take slightly longer, but almost never exceeds a minute.",
    keywords: ["how long", "time", "train", "training", "create", "setup", "minutes", "seconds", "fast"]
  },
  {
    question: "What AI models does NexUp AI use? Can I use GPT-5?",
    answer: "Yes! We support GPT-5 and its variants (GPT-5 Mini and GPT-5 Nano) along with other leading AI models including GPT-4o, GPT-4o mini, GPT-4 Turbo, Claude 3.5 Sonnet, Claude 3 Haiku, Mistral Large 2, and Llama 3.1 70b. GPT-5 offers the latest OpenAI technology with superior intelligence and performance. The availability of specific models depends on your subscription plan.",
    keywords: ["ai models", "gpt", "gpt-5", "gpt-4", "claude", "mistral", "llama", "models", "which models"]
  },
  {
    question: "What languages does NexUp AI support?",
    answer: "NexUp AI supports more than 80 different languages. This means that you can upload documents and ask questions in any of these supported languages, and your chatbots will respond in the language of the question.",
    keywords: ["languages", "language", "support", "multilingual", "80 languages", "which languages"]
  },
  {
    question: "Is my data used for training AI models?",
    answer: "No, we or other AI model providers do not use any of your documents, questions, or answers for training any AI models.",
    keywords: ["training", "train models", "data training", "used for training", "privacy", "data usage"]
  },
  {
    question: "Can I track chatbot analytics?",
    answer: "Yes, NexUp AI integrates seamlessly with Google Tag Manager (GTM) to track user interactions, questions asked, answers received, and other key metrics to help you understand and optimize chatbot performance.",
    keywords: ["analytics", "track", "tracking", "metrics", "gtm", "google tag manager", "performance"]
  },
  {
    question: "Is there a free plan or trial?",
    answer: "While NexUp AI doesn't offer a permanently free plan, we do provide a 14-day free trial. During this trial period, you can access all the features available in our Pro plan.",
    keywords: ["free", "trial", "plan", "pricing", "cost", "price", "14-day", "free trial"]
  }
];

export function AIAssistantInterface() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      // Use setTimeout to ensure DOM is updated
      setTimeout(() => {
        scrollToBottom();
      }, 50);
    }
  }, [messages, isTyping]);

  const findBestAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    // Find FAQ with matching keywords
    let bestMatch = null;
    let maxMatches = 0;

    for (const faq of FAQ_DATA) {
      let matches = 0;
      for (const keyword of faq.keywords) {
        if (lowerQuestion.includes(keyword.toLowerCase())) {
          matches++;
        }
      }
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = faq;
      }
    }

    // If we found a good match, return the answer
    if (bestMatch && maxMatches > 0) {
      return bestMatch.answer;
    }

    // Check for direct question matches
    for (const faq of FAQ_DATA) {
      if (lowerQuestion.includes(faq.question.toLowerCase().substring(0, 20))) {
        return faq.answer;
      }
    }

    // General responses for common questions
    if (lowerQuestion.includes("hello") || lowerQuestion.includes("hi") || lowerQuestion.includes("hey")) {
      return "Hello! I'm here to help answer your questions about NexUp AI. Feel free to ask me anything about our features, pricing, security, compliance, or how to get started.";
    }

    if (lowerQuestion.includes("contact") || lowerQuestion.includes("email") || lowerQuestion.includes("support")) {
      return "You can reach out to us at hi@nexup.ai for any questions or support. We're here to help!";
    }

    if (lowerQuestion.includes("nexup") || lowerQuestion.includes("what is") || lowerQuestion.includes("about")) {
      return "NexUp AI is an advanced chatbot platform that delivers unmatched answer quality and genuine GDPR compliance. We enable businesses to create highly accurate chatbots trained on their own content, with all data processing happening on EU servers. Our platform supports multiple AI models including GPT-5, GPT-4o, and Claude 3.5 Sonnet, and can be set up in minutes.";
    }

    // Default response
    return "I'm here to help answer questions about NexUp AI. You can ask me about our features, pricing, security, compliance, AI models, document support, or anything else related to our platform. For specific questions, feel free to browse the FAQ section below or contact us at hi@nexup.ai.";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Scroll to bottom after user message is rendered
    setTimeout(() => {
      scrollToBottom();
    }, 100);

    // Simulate AI thinking time
    setTimeout(() => {
      const answer = findBestAnswer(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: answer,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      
      // Scroll to bottom after bot message is rendered
      setTimeout(() => {
        scrollToBottom();
      }, 150);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent py-4">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Welcome message */}
        <div className="mb-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#418087]/10 dark:bg-[#418087]/20 border border-[#418087]/20 dark:border-[#418087]/30 mb-2"
            >
              <span className="text-xs font-medium text-[#418087] dark:text-[#418087]">
                AI Assistant
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#418087] via-[#3a7379] to-[#2d5a5f] dark:from-[#418087] dark:via-[#4a9ba3] dark:to-[#5ab5bd] mb-2 leading-tight"
            >
              Ready to assist you
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed"
            >
              Ask me anything and I'll help you find the answers you need
            </motion.p>
          </motion.div>
        </div>

        {/* Chat Messages Area */}
        <div className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg dark:shadow-xl overflow-hidden mb-4 backdrop-blur-sm">
          {/* Messages Container */}
          <div ref={messagesContainerRef} className="h-[300px] overflow-y-auto p-3 space-y-3 scroll-smooth" id="messages-container">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-[#418087]/10 dark:bg-[#418087]/20 rounded-full flex items-center justify-center mb-3"
                >
                  <Bot className="w-6 h-6 text-[#418087] dark:text-[#418087]" />
                </motion.div>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  Start a conversation by asking a question about NexUp AI
                </p>
              </div>
            ) : (
              <>
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.sender === 'bot' && (
                        <div className="w-6 h-6 bg-[#418087] rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg p-2 ${
                          message.sender === 'user'
                            ? 'bg-[#418087] text-white hover:bg-[#3a7379]'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                        }`}
                      >
                        <p className="text-xs leading-relaxed whitespace-pre-wrap">{message.text}</p>
                      </div>
                      {message.sender === 'user' && (
                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3 justify-start"
                  >
                    <div className="w-6 h-6 bg-[#418087] rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} className="h-1" />
              </>
            )}
          </div>

          {/* Input area */}
          <div className="border-t border-gray-100 dark:border-gray-700 p-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask me anything about NexUp AI..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isTyping}
                className="flex-1 text-gray-700 dark:text-gray-200 text-sm outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                  inputValue.trim() && !isTyping
                    ? "bg-[#418087] text-white hover:bg-[#3a7379]"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                }`}
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


