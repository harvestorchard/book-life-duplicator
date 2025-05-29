'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HowItWorks() {
  return (
    <section className="py-16 bg-card">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">How it works</h2>
          <h3 className="text-2xl mb-8">Capturing Memories Made Easy</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-primary font-bold mb-2">Step 1</div>
            <h4 className="text-xl font-semibold mb-3">Choose Your Book Type</h4>
            <p className="text-muted-foreground">
              Choose the perfect book type from our diverse collection that best tells your loved ones story.
            </p>
            <div className="mt-4">
              <Image
                src="https://ext.same-assets.com/3883118250/2066563581.svg"
                alt="Choose Book Type"
                width={60}
                height={60}
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-primary font-bold mb-2">Step 2</div>
            <h4 className="text-xl font-semibold mb-3">Receive Weekly Story Prompts</h4>
            <p className="text-muted-foreground">
              We'll send inspiring weekly questions for you or your loved one to answer and share photos.
            </p>
            <div className="mt-4">
              <Image
                src="https://ext.same-assets.com/3883118250/3308047742.svg"
                alt="Story Prompts"
                width={60}
                height={60}
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-primary font-bold mb-2">Step 3</div>
            <h4 className="text-xl font-semibold mb-3">Choose a bookcover you love</h4>
            <p className="text-muted-foreground">
              Choose a cover from our beautifully designed covers to create a keepsake that's truly yours.
            </p>
            <div className="mt-4">
              <Image
                src="https://ext.same-assets.com/3883118250/2660598074.svg"
                alt="Book Cover"
                width={60}
                height={60}
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-primary font-bold mb-2">Step 4</div>
            <h4 className="text-xl font-semibold mb-3">Share in the gift of every Story</h4>
            <p className="text-muted-foreground">
              We print their stories in a high-quality book, perfect for passing down to future generations.
            </p>
            <div className="mt-4">
              <Image
                src="https://ext.same-assets.com/3883118250/3179043918.svg"
                alt="Share Stories"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>

        {/* Voice-to-text feature */}
        <div className="mt-16 bg-background rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Effortless Storytelling with Voice-to-Text</h3>
          <p className="text-muted-foreground mb-6">
            For those who prefer speaking over typing, simply speak, and we'll do the rest—keeping every story authentic and true to voice.
          </p>
          <Link href="/how-it-works">
            <Button variant="outline" size="lg" className="uppercase">
              LEARN HOW IT WORKS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
