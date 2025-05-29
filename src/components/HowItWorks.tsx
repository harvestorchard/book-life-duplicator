import { Button } from './ui/button'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Story",
      description: "Select from our guided prompts or create your own narrative structure.",
      icon: "📝",
      color: "bg-blue-100 text-blue-600"
    },
    {
      number: "02", 
      title: "Share Your Memories",
      description: "Use our voice-to-text feature or type your stories at your own pace.",
      icon: "🎤",
      color: "bg-green-100 text-green-600"
    },
    {
      number: "03",
      title: "Add Photos & Design",
      description: "Upload photos and choose from professional layouts and designs.",
      icon: "🖼️",
      color: "bg-purple-100 text-purple-600"
    },
    {
      number: "04",
      title: "Receive Your Book",
      description: "Get your beautifully bound hardcover book delivered to your door.",
      icon: "📚",
      color: "bg-orange-100 text-orange-600"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-pt-serif">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Creating your personalized book is simple. Follow our guided process 
            and we'll help you every step of the way.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-2xl font-bold text-gray-400 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200" />
                )}
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${step.color}`}>
                <span className="text-2xl">{step.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-rethink">
                {step.title}
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Voice-to-text highlight */}
        <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🎤</span>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-pt-serif">
              Voice-to-Text Made Easy
            </h3>
            <p className="text-xl mb-8 opacity-90 font-inter">
              Don't like typing? No problem! Use our advanced voice recording feature 
              to tell your stories naturally, and we'll convert them to text automatically.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 text-lg px-8 py-3"
            >
              Try Voice Recording
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks