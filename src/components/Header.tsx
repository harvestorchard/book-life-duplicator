import { useState, useEffect } from 'react'
import { Button } from './ui/button'

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set countdown for 24 hours from now
    const targetDate = new Date()
    targetDate.setHours(targetDate.getHours() + 24)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top banner */}
      <div className="bg-brand-blue text-white py-2 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-sm font-medium">
            🎁 Limited Time: Get your personalized book for just $29.95! 
            <span className="ml-2 font-bold">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-brand-blue font-pt-serif">
              My Life in a Book
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-brand-blue transition-colors">
              How It Works
            </a>
            <a href="#story-prompts" className="text-gray-700 hover:text-brand-blue transition-colors">
              Story Prompts
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-brand-blue transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-gray-700 hover:text-brand-blue transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              Login
            </Button>
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              Start Your Book
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header