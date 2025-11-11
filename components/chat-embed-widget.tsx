'use client'
'use client'

import { useState } from 'react'

const ChatEmbedWidget = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-[min(384px,calc(100vw-2rem))] h-[min(560px,calc(100vh-6rem))] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(15,23,42,0.45)] border border-slate-200/80 dark:border-slate-800/60 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white dark:bg-slate-900">
          <iframe
            title="NexUp AI Chatbot"
            src="https://chat.nexupai.com/embed?hideHeader=true"
            id="nexup-chatbot-frame"
            className="w-full h-full"
            allow="clipboard-read; clipboard-write; microphone; camera"
            loading="lazy"
          />
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="nexup-chatbot-frame"
        aria-label={isOpen ? 'Close chat widget' : 'Open NexUp AI chat'}
        className="fixed bottom-4 right-4 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_12px_30px_-10px_rgba(16,185,129,0.6)] transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        {isOpen ? (
          <span className="text-xl font-semibold leading-none">×</span>
        ) : (
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 3.25c.36 0 .68.21.82.54l1.66 3.8 4.11.42a.9.9 0 0 1 .5 1.58l-3.1 2.74.92 4.03a.9.9 0 0 1-1.34.97L12 15.94l-3.57 1.39a.9.9 0 0 1-1.34-.97l.92-4.03-3.1-2.74a.9.9 0 0 1 .5-1.58l4.11-.42 1.66-3.8c.14-.33.46-.54.82-.54Z" />
            <path
              d="M7.75 20.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z"
              opacity="0.5"
            />
          </svg>
        )}
      </button>
    </>
  )
}

export default ChatEmbedWidget
