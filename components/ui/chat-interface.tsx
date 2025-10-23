'use client'
import { useState, useRef, useEffect } from 'react'
import { Monitor, Users, Headphones, FileText, Send, Bot, User, Paperclip } from 'lucide-react'

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
    <div className="w-full h-full flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="text-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Try It Live</h2>
        <p className="text-sm text-gray-600">Chat with our demo assistant across different support categories</p>
      </div>

      {/* Category Navigation */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  isActive
                    ? 'bg-[#418087]/10 border-[#418087] text-[#418087]'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs font-medium">{category.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Chat Area */}
      <div className="p-4 bg-gray-50 flex-1 flex flex-col overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-6">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center h-full">
              <div className="w-16 h-16 bg-[#418087]/10 rounded-full flex items-center justify-center mb-4">
                <Bot className="w-8 h-8 text-[#418087]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start a conversation</h3>
              <p className="text-sm text-gray-600 max-w-md">
                I'm ready to chat! Upload documents for document-specific questions, or ask me anything else.
              </p>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 bg-[#418087] rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-[#418087] text-white'
                        : 'bg-white text-gray-900 border border-gray-200'
                    }`}
                  >
                    <p className="text-xs">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-[#418087]/80' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
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
                </div>
              )}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="mt-4">
          <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-300 p-2">
            <button className="p-2 text-gray-500 hover:text-[#418087] transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything... (Cmd/Ctrl + K to focus)"
              className="flex-1 outline-none text-gray-700 placeholder-gray-500 text-sm"
              disabled={isTyping}
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className="p-2 text-gray-500 hover:text-[#418087] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-orange-500 text-xs mt-2">
            <span className="font-medium">Tip:</span> Upload documents for document-specific questions, or chat about anything!
          </p>
        </div>
      </div>
    </div>
  )
}
