'use client'

const ChatEmbedWidget = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 w-[min(384px,calc(100vw-2rem))] h-[min(560px,calc(100vh-6rem))] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(15,23,42,0.45)] border border-slate-200/80 dark:border-slate-800/60 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white dark:bg-slate-900">
      <iframe
        title="NexUp AI Chatbot"
        src="https://chat.nexupai.com/embed?hideHeader=true"
        className="w-full h-full"
        allow="clipboard-read; clipboard-write; microphone; camera"
        loading="lazy"
      />
    </div>
  )
}

export default ChatEmbedWidget
