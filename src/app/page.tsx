import HeroSection from '@/components/home/hero-section';
import HowItWorks from '@/components/home/how-it-works';
import StoryPrompts from '@/components/home/story-prompts';
import ProductShowcase from '@/components/home/product-showcase';
import Testimonials from '@/components/home/testimonials';
import FaqSection from '@/components/home/faq-section';
import CtaSection from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <StoryPrompts />
      <ProductShowcase />
      <Testimonials />
      <FaqSection />
      <CtaSection />
    </>
  );
}
