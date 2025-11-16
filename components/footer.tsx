import { Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NexUpLogo } from "./nexup-logo"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <NexUpLogo variant="dark" />
            </div>
            <p className="text-gray-400 max-w-sm">
              Empower your business with reliable AI chatbots. Reduce support costs and delight customers with accurate, GDPR-compliant solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Support Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Changelog</a></li>
                </ul>
              </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025 NexUp AI Limited. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Trust Center</a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800 w-full sm:w-auto text-xs sm:text-sm">
                <Twitter className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                <span className="hidden sm:inline">Go to Twitter Profile</span>
                <span className="sm:hidden">Twitter</span>
              </Button>
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800 w-full sm:w-auto text-xs sm:text-sm">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                <span className="hidden sm:inline">Send Email to Developer</span>
                <span className="sm:hidden">Email</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}