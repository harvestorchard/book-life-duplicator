const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "California, USA",
      rating: 5,
      text: "Creating my life story book was such an emotional and rewarding experience. The voice-to-text feature made it so easy to share my memories naturally. My grandchildren absolutely love reading about my childhood adventures!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "New York, USA",
      rating: 5,
      text: "I made this as a gift for my father's 80th birthday. The guided prompts helped me ask the right questions, and the final book exceeded all expectations. The quality is outstanding and it's now our family's most treasured possession.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Texas, USA", 
      rating: 5,
      text: "The story prompts were incredibly thoughtful and helped me remember details I had forgotten. The professional layout and design made my stories look like they belonged in a real published book. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Florida, USA",
      rating: 5,
      text: "As someone who's not great with technology, I was worried this would be complicated. But the platform is so user-friendly! The customer support team was incredibly helpful throughout the entire process.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Jennifer Williams",
      location: "Illinois, USA",
      rating: 5,
      text: "I've made three books now - one for each of my children with their individual stories. The photo integration feature is amazing, and being able to create multiple copies made gift-giving so special.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Robert Martinez",
      location: "Arizona, USA",
      rating: 5,
      text: "The hardcover quality is impressive - it feels like a book you'd buy in a bookstore. My wife and I both created books, and they've become conversation starters whenever we have guests over.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    }
  ]

  return (
    <section id="reviews" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-pt-serif">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Join thousands of satisfied customers who have preserved their life 
            stories and created meaningful family heirlooms.
          </p>
          
          <div className="flex items-center justify-center mt-8 space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <span className="text-xl font-semibold text-gray-800 ml-3">
              4.9 out of 5
            </span>
            <span className="text-gray-600 ml-2">
              (10,000+ reviews)
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 font-rethink">
                    {review.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-inter">
                    {review.location}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed font-inter">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-pt-serif">
              Ready to Create Your Story?
            </h3>
            <p className="text-xl mb-8 opacity-90 font-inter max-w-2xl mx-auto">
              Join thousands of satisfied customers and start preserving your most 
              precious memories today. Your story deserves to be told.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 py-3 rounded-md font-medium transition-colors">
                Start My Book - $29.95
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-brand-blue text-lg px-8 py-3 rounded-md font-medium transition-colors">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews