import { NexUpLogo } from "./nexup-logo"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <NexUpLogo variant="dark" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            <a href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="https://chat.nexupai.com/app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Demo</a>
            <a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 w-full pt-6 sm:pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025 NexUp AI Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}