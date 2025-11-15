'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

interface NexUpLogoProps {
  className?: string
  variant?: 'default' | 'dark' | 'light' | 'white'
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

  // If white variant, always show white logo
  if (variant === 'white') {
    return (
      <Link href="/" className={cn('flex items-center hover:opacity-80 transition-opacity duration-200', className)}>
        <Image
          src="/images/logo-white.png"
          alt="NexUp AI Logo White"
          width={200}
          height={60}
          className="h-12 w-auto"
          priority
        />
      </Link>
    )
  }

  // If dark variant, always show dark mode logo
  if (variant === 'dark') {
    return (
      <Link href="/" className={cn('flex items-center hover:opacity-80 transition-opacity duration-200', className)}>
        <Image
          src="/images/logo-dark.png"
          alt="NexUp AI Logo Dark"
          width={200}
          height={60}
          className="h-12 w-auto"
          priority
        />
      </Link>
    )
  }

  return (
    <Link href="/" className={cn('flex items-center hover:opacity-80 transition-opacity duration-200', className)}>
      {/* Light Mode Logo */}
      <Image
        src="/images/logo.png"
        alt="NexUp AI Logo"
        width={200}
        height={60}
        className="h-12 w-auto dark:hidden"
        priority
      />
      
      {/* Dark Mode Logo */}
      <Image
        src="/images/logo-dark.png"
        alt="NexUp AI Logo Dark"
        width={200}
        height={60}
        className="h-12 w-auto hidden dark:block"
        priority
      />
    </Link>
  )
}
