'use client'

import { Button } from "@/components/ui/button"
import { StarButton } from "@/components/ui/star-button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { NexUpLogo } from "./nexup-logo"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [solutionsTimeout, setSolutionsTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeout) {
      clearTimeout(solutionsTimeout)
      setSolutionsTimeout(null)
    }
    setIsSolutionsOpen(true)
  }

  const handleSolutionsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsSolutionsOpen(false)
    }, 150) // 150ms delay
    setSolutionsTimeout(timeout)
  }

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NexUpLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Features</a>
            <a href="https://chat.nexupai.com/app" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Demo</a>
            <a href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a>
            
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isSolutionsOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                  onMouseEnter={handleSolutionsMouseEnter}
                  onMouseLeave={handleSolutionsMouseLeave}
                >
                  <a href="/solutions/banking" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Banking and Finance</a>
                  <a href="/solutions/healthcare" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Health Care</a>
                  <a href="/solutions/insurance" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Insurance</a>
                  <a href="/solutions/public-sector" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Public Sector</a>
                  <a href="/solutions/education" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Higher Education</a>
                </div>
              )}
            </div>
            
            <ThemeToggle />
            <StarButton text="Upgrade to NexUp AI" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <a href="/#features" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="https://chat.nexupai.com/app" target="_blank" rel="noopener noreferrer" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Demo</a>
              <a href="/pricing" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              
              {/* Solutions Section */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSolutionsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="/solutions/banking" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-1.5" onClick={() => setIsMenuOpen(false)}>Banking and Finance</a>
                    <a href="/solutions/healthcare" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-1.5" onClick={() => setIsMenuOpen(false)}>Health Care</a>
                    <a href="/solutions/insurance" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-1.5" onClick={() => setIsMenuOpen(false)}>Insurance</a>
                    <a href="/solutions/public-sector" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-1.5" onClick={() => setIsMenuOpen(false)}>Public Sector</a>
                    <a href="/solutions/education" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-1.5" onClick={() => setIsMenuOpen(false)}>Higher Education</a>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between py-2">
                <span className="text-base text-gray-600 dark:text-gray-300">Theme</span>
                <ThemeToggle />
              </div>
              <div className="pt-2" onClick={() => setIsMenuOpen(false)}>
                <StarButton text="Upgrade to NexUp AI" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
