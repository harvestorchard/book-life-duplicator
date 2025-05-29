'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section className="py-16 bg-primary/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Peace of Mind Money-Back Guarantee
          </h2>
          <p className="text-lg mb-8">
            If for any reason you're not completely satisfied with your book, we offer a 30-day money-back guarantee.
            Your happiness is our priority—if you're not thrilled with your book, we'll make it right.
          </p>

          <div className="bg-card p-8 rounded-lg shadow-sm mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Start crafting Their story today
            </h3>
            <p className="text-lg mb-6">
              Whether it's a memoir, a family history, or a special tribute, find the style that
              perfectly captures their journey and begin preserving memories that will be cherished for generations.
            </p>
            <Link href="/checkout/personalize" prefetch={false}>
              <Button size="lg" className="text-md uppercase">
                GET STARTED NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
