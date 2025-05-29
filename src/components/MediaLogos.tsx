const MediaLogos = () => {
  const mediaPartners = [
    {
      name: "TechCrunch",
      logo: "https://logo.clearbit.com/techcrunch.com",
      alt: "TechCrunch logo"
    },
    {
      name: "Forbes",
      logo: "https://logo.clearbit.com/forbes.com", 
      alt: "Forbes logo"
    },
    {
      name: "CNN",
      logo: "https://logo.clearbit.com/cnn.com",
      alt: "CNN logo"
    },
    {
      name: "The New York Times",
      logo: "https://logo.clearbit.com/nytimes.com",
      alt: "New York Times logo"
    },
    {
      name: "Wall Street Journal",
      logo: "https://logo.clearbit.com/wsj.com",
      alt: "Wall Street Journal logo"
    },
    {
      name: "BBC",
      logo: "https://logo.clearbit.com/bbc.com",
      alt: "BBC logo"
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-pt-serif">
            Featured In
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Trusted by thousands and recognized by leading media outlets
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {mediaPartners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img 
                src={partner.logo}
                alt={partner.alt}
                className="h-8 w-auto max-w-full object-contain"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-gray-600 font-semibold text-sm">${partner.name}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-2">★★★★★</span>
              <span>10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">🏆</span>
              <span>Award-Winning Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaLogos