import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-warm-beige to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-pt-serif">
              Turn Your Life Stories Into a 
              <span className="text-brand-blue"> Beautiful Book</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 font-inter leading-relaxed">
              Our guided storytelling process makes it easy to create a personalized book 
              that captures your most treasured memories and life experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 py-3"
              >
                Create My Book Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white text-lg px-8 py-3"
              >
                See How It Works
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">★★★★★</span>
                <span>4.9/5 from 10,000+ customers</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📚</span>
                <span>100,000+ books created</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🎁</span>
                <span>Perfect as gifts</span>
              </div>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-8 mx-auto max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop" 
                alt="Sample personalized book" 
                className="w-full rounded-lg shadow-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-800 font-pt-serif">Sarah's Life Story</h3>
                <p className="text-gray-600 text-sm">A beautiful journey through memories</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-brand-green text-white px-3 py-1 rounded-full text-sm font-medium">
              Personal
            </div>
            <div className="absolute -bottom-4 -right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium">
              Meaningful
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection