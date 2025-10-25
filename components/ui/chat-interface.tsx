'use client'
import { useState, useRef, useEffect } from 'react'
import { Monitor, Users, Headphones, FileText, Send, Bot, User, Paperclip } from 'lucide-react'
import { motion } from 'framer-motion'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function ChatInterface() {
  const [activeCategory, setActiveCategory] = useState('IT Support')
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const categories = [
    { id: 'IT Support', label: 'IT Support', icon: Monitor },
    { id: 'HR Support', label: 'HR Support', icon: Users },
    { id: 'Customer Support', label: 'Customer Support', icon: Headphones },
    { id: 'Docs Bot', label: 'Docs Bot', icon: FileText }
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText, activeCategory),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userInput: string, category: string): string => {
    const responses = {
      'IT Support': [
        "I can help you with technical issues. What specific problem are you experiencing?",
        "Let me assist you with your IT needs. Are you having trouble with software, hardware, or network connectivity?",
        "I'm here to help with technical support. Please describe the issue you're facing."
      ],
      'HR Support': [
        "I can help with HR-related questions. What would you like to know about policies, benefits, or procedures?",
        "I'm here to assist with human resources matters. How can I help you today?",
        "I can provide information about HR policies and procedures. What specific question do you have?"
      ],
      'Customer Support': [
        "I'm here to help with your customer service needs. What can I assist you with today?",
        "I can help resolve your customer service issues. Please describe what you need help with.",
        "I'm ready to help with any customer support questions you may have."
      ],
      'Docs Bot': [
        "I can help you find information in your documents. What are you looking for?",
        "I have access to your uploaded documents. What specific information do you need?",
        "I can search through your documents to find the information you need."
      ]
    }
    
    const categoryResponses = responses[category as keyof typeof responses] || responses['IT Support']
    return categoryResponses[Math.floor(Math.random() * categoryResponses.length)]
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <motion.div 
      className="w-full h-full flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header */}
      <motion.div 
        className="text-center p-4 border-b border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-xl font-bold text-gray-900 mb-1">Try It Live</h2>
        <p className="text-sm text-gray-600">Chat with our demo assistant across different support categories</p>
      </motion.div>

      {/* Category Navigation */}
      <motion.div 
        className="p-4 border-b border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  isActive
                    ? 'bg-[#418087]/10 border-[#418087] text-[#418087]'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs font-medium">{category.label}</span>
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Chat Area */}
      <motion.div 
        className="p-4 bg-gray-50 flex-1 flex flex-col overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-6">
          {messages.length === 0 ? (
            <motion.div 
              className="flex flex-col items-center justify-center text-center h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="w-16 h-16 bg-[#418087]/10 rounded-full flex items-center justify-center mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
              >
                <Bot className="w-8 h-8 text-[#418087]" />
              </motion.div>
              <motion.h3 
                className="text-lg font-semibold text-gray-900 mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                Start a conversation
              </motion.h3>
              <motion.p 
                className="text-sm text-gray-600 max-w-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                I'm ready to chat! Upload documents for document-specific questions, or ask me anything else.
              </motion.p>
            </motion.div>
          ) : (
            <>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {message.sender === 'bot' && (
                    <motion.div 
                      className="w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Bot className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                  <motion.div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-[#418087] text-white'
                        : 'bg-white text-gray-900 border border-gray-200'
                    }`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xs">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-[#418087]/80' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </motion.div>
                  {message.sender === 'user' && (
                    <motion.div 
                      className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <User className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div 
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <motion.div 
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div 
            className="flex items-center gap-2 bg-white rounded-lg border border-gray-300 p-2"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <motion.button 
              className="p-2 text-gray-500 hover:text-[#418087] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Paperclip className="w-5 h-5" />
            </motion.button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything... (Cmd/Ctrl + K to focus)"
              className="flex-1 outline-none text-gray-700 placeholder-gray-500 text-sm"
              disabled={isTyping}
            />
            <motion.button 
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className="p-2 text-gray-500 hover:text-[#418087] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.div>
          <motion.p 
            className="text-orange-500 text-xs mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <span className="font-medium">Tip:</span> Upload documents for document-specific questions, or chat about anything!
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
