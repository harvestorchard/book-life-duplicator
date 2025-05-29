// Instructions: Create the Story Prompts section with tabbed interface

import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Button } from './ui/button'

const StoryPrompts = () => {
  const promptCategories = {
    childhood: {
      title: "Childhood Memories",
      icon: "👶",
      prompts: [
        "What was your favorite childhood game or toy?",
        "Describe your childhood home and neighborhood.",
        "Tell me about your best friend growing up.",
        "What was your favorite family tradition?",
        "What did you want to be when you grew up?"
      ]
    },
    family: {
      title: "Family Stories", 
      icon: "👨‍👩‍👧‍👦",
      prompts: [
        "How did your parents meet?",
        "What family recipes or traditions have been passed down?",
        "Tell me about a memorable family vacation.",
        "What advice did your grandparents give you?",
        "Describe a typical Sunday in your family."
      ]
    },
    career: {
      title: "Career Journey",
      icon: "💼",
      prompts: [
        "What was your first job and what did you learn?",
        "Tell me about a mentor who influenced your career.",
        "What was your proudest professional achievement?",
        "How did you choose your career path?",
        "What would you tell someone starting in your field?"
      ]
    },
    adventures: {
      title: "Life Adventures",
      icon: "✈️",
      prompts: [
        "What's the most adventurous thing you've ever done?",
        "Tell me about a place you'll never forget visiting.",
        "What's a risk you took that paid off?",
        "Describe a moment that changed your perspective.",
        "What's something you're proud you overcame?"
      ]
    }
  }

  return (
    <section id="story-prompts" className="py-20 px-4 bg-warm-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-pt-serif">
            Story Prompt Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Not sure where to start? Our guided prompts help you unlock your most 
            meaningful memories and create compelling stories.
          </p>
        </div>

        <Tabs defaultValue="childhood" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white shadow-lg rounded-xl p-2">
            {Object.entries(promptCategories).map(([key, category]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className="flex items-center space-x-2 text-sm font-medium py-3 px-4 rounded-lg"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(promptCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-rethink">
                    {category.title}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {category.prompts.map((prompt, index) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-800 font-inter leading-relaxed">
                          {prompt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 py-3"
                  >
                    Start with {category.title}
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-pt-serif">
              Ready to Start Your Story?
            </h3>
            <p className="text-gray-600 mb-6 font-inter">
              Choose from over 200+ carefully crafted prompts, or create your own questions. 
              Our system adapts to your storytelling style.
            </p>
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-brand-blue/90 text-white text-lg px-8 py-3"
            >
              Browse All Prompts
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoryPrompts