const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Story Prompts", href: "#story-prompts" },
    { name: "Pricing", href: "#pricing" },
    { name: "Samples", href: "#samples" },
    { name: "FAQ", href: "#faq" }
  ]

  const support = [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Shipping Info", href: "#shipping" },
    { name: "Returns", href: "#returns" },
    { name: "Technical Support", href: "#tech-support" }
  ]

  const legal = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Refund Policy", href: "#refunds" }
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-pt-serif">
              My Life in a Book
            </h3>
            <p className="text-gray-300 mb-6 font-inter leading-relaxed">
              Helping people preserve their most precious memories through beautifully 
              crafted personalized books. Your story matters, and we're here to help you tell it.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="mr-3">📧</span>
                <span className="text-gray-300">hello@mylifeinabook.com</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <span className="text-gray-300">1-800-MY-STORY</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📍</span>
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a 
                href="#facebook" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors"
                aria-label="Facebook"
              >
                <span>📘</span>
              </a>
              <a 
                href="#twitter" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors"
                aria-label="Twitter"
              >
                <span>🐦</span>
              </a>
              <a 
                href="#instagram" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors"
                aria-label="Instagram"
              >
                <span>📷</span>
              </a>
              <a 
                href="#youtube" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors"
                aria-label="YouTube"
              >
                <span>📺</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-rethink">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-rethink">Support</h4>
            <ul className="space-y-3">
              {support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-rethink">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4 font-rethink">
              Stay Updated
            </h4>
            <p className="text-gray-300 mb-4 font-inter">
              Get tips for storytelling and special offers delivered to your inbox.
            </p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-brand-blue text-white"
              />
              <button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-inter">
            © {currentYear} My Life in a Book. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center text-sm text-gray-400">
              <span className="mr-2">🔒</span>
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span className="mr-2">✅</span>
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer