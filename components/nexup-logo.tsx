'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

interface NexUpLogoProps {
  className?: string
  variant?: 'default' | 'dark' | 'light'
}

export function NexUpLogo({ className, variant = 'default' }: NexUpLogoProps) {
  const getTextColor = () => {
    switch (variant) {
      case 'dark':
        return 'text-white'
      case 'light':
        return 'text-black'
      default:
        return 'text-[#418087]'
    }
  }

  return (
    <Link href="/" className={cn('flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200', className)}>
      {/* Simple Logo Icon */}
      <div className="w-8 h-8 bg-[#418087] rounded-lg flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-sm"></div>
      </div>
      
      {/* Text */}
      <span className={cn('text-xl font-bold tracking-wide', getTextColor())}>
        NexUp AI
      </span>
    </Link>
  )
}
