'use client'

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export function AnimatedButton({ 
  children, 
  className, 
  onClick,
  href 
}: AnimatedButtonProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Server-side rendering fallback
  if (!isMounted) {
    return (
      <button
        className={cn("bg-[#418087] hover:bg-[#3a7379] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors", className)}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }

  // Client-side animated button
  const buttonContent = (
    <button
      className={cn("button", className)}
      onClick={onClick}
      style={{
        background: '#418087',
        border: 'none',
        borderRadius: '6px',
        padding: '12px 24px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '40px',
      }}
    >
      <span className="hover-text" data-text={children}>
        {children}
      </span>
    </button>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}
