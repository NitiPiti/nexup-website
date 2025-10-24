'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

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
    <Link href="/" className={cn('flex items-center hover:opacity-80 transition-opacity duration-200', className)}>
      {/* Logo Image */}
      <Image
        src="/images/logo.png"
        alt="NexUp AI Logo"
        width={200}
        height={60}
        className="h-12 w-auto"
        priority
      />
    </Link>
  )
}
