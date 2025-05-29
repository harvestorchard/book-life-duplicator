import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Classic Hardcover",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
      price: "$49.95",
      originalPrice: "$79.95",
      features: ["Premium hardcover binding", "200+ pages", "Professional layout", "Photo integration"]
    },
    {
      id: 2,
      name: "Deluxe Edition",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=600&fit=crop",
      price: "$69.95", 
      originalPrice: "$99.95",
      features: ["Leather-bound cover", "300+ pages", "Gold foil embossing", "Premium paper"]
    },
    {
      id: 3,
      name: "Family Collection",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
      price: "$29.95",
      originalPrice: "$49.95",
      features: ["Softcover binding", "150+ pages", "Multiple copies", "Digital version included"]
    }
  ]

  const features = [
    {
      icon: "📖",
      title: "Professional Quality",
      description: "Museum-quality printing with archival inks that last generations"
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description: "Choose from dozens of professionally designed templates"
    },
    {
      icon: "📱",
      title: "Easy Creation",
      description: "Our guided process makes book creation simple and enjoyable"
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Get your finished book in 7-10 business days"
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-pt-serif">
            Choose Your Perfect Book
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            From classic hardcovers to premium leather editions, we have the perfect 
            option to showcase your life stories.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {products.map((product) => (
                  <CarouselItem key={product.id}>
                    <div className="text-center">
                      <div className="bg-gray-100 rounded-2xl p-8 mb-6">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-48 h-64 object-cover rounded-lg mx-auto shadow-lg"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-rethink">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-3 mb-4">
                        <span className="text-3xl font-bold text-brand-orange">
                          {product.price}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                      <ul className="text-left max-w-xs mx-auto space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600 font-inter">
                            <span className="text-brand-green mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 font-pt-serif">
              Why Choose Our Books?
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 font-rethink">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 font-inter">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-pt-serif">
            Limited Time Offer
          </h3>
          <p className="text-xl mb-8 opacity-90 font-inter">
            Get any book for just $29.95 (originally $49.95+). Perfect time to preserve 
            your memories or create the perfect gift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 py-3"
            >
              Start My Book - $29.95
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
            >
              See Samples
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase