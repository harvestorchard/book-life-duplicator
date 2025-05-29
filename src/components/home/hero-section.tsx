'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Our lives are full of stories.</span>
            <span className="italic block font-medium">We help you preserve them.</span>
          </h1>

          <p className="text-xl mb-8">
            Gift your loved one <strong>a personalized keepsake</strong> that celebrates their journey
            beautifully compiled into a hardcover book to be cherished for generations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/checkout/personalize" prefetch={false}>
              <Button size="lg" className="text-md uppercase">
                START THEIR STORYTELLING JOURNEY
              </Button>
            </Link>
          </div>

          <div className="mt-6 text-sm font-medium flex justify-center gap-4 text-muted-foreground">
            <span>Free delivery</span>
            <span className="hidden sm:inline">•</span>
            <span>Money-back guarantee</span>
          </div>
        </div>
      </div>

      {/* Features ticker */}
      <div className="mt-12 overflow-hidden bg-muted py-3">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-marquee">
            <div className="mx-4 flex items-center">
              <span className="text-sm font-medium uppercase">HIGH QUALITY PRINT</span>
            </div>
            <div className="mx-4 flex items-center">
              <span className="text-sm font-medium uppercase">UNIQUE, CUSTOMIZABLE COVERS</span>
            </div>
            <div className="mx-4 flex items-center">
              <span className="text-sm font-medium uppercase">VOICE-TO-TEXT TRANSCRIPTION</span>
            </div>
            <div className="mx-4 flex items-center">
              <span className="text-sm font-medium uppercase">PERSONALIZED STORY PROMPTS</span>
            </div>
            <div className="mx-4 flex items-center">
              <span className="text-sm font-medium uppercase">HIGH QUALITY PRINT</span>
            </div>
            <div className="mx-4 flex items-center">
              <span className="text-sm font-medium uppercase">UNIQUE, CUSTOMIZABLE COVERS</span>
            </div>
            <div className="mx-4 flex items-center">
              <span className="text-sm font-medium uppercase">VOICE-TO-TEXT TRANSCRIPTION</span>
            </div>
            <div className="mx-4 flex items-center">
              <span className="text-sm font-medium uppercase">PERSONALIZED STORY PROMPTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
