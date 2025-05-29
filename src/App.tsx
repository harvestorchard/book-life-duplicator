import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ScrollingBanner from './components/ScrollingBanner'
import HowItWorks from './components/HowItWorks'
import StoryPrompts from './components/StoryPrompts'
import ProductShowcase from './components/ProductShowcase'
import MediaLogos from './components/MediaLogos'
import CustomerReviews from './components/CustomerReviews'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ScrollingBanner />
        <HowItWorks />
        <StoryPrompts />
        <ProductShowcase />
        <MediaLogos />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  )
}

export default App