'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-card">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Preserving Memories</h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-medium">Excellent</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Image
                    key={star}
                    src="https://ext.same-assets.com/3883118250/3016672186.png"
                    alt="Star rating"
                    width={20}
                    height={20}
                    className="mr-1"
                  />
                ))}
              </div>
              <span className="text-sm">
                <strong>4.6</strong> | <a href="https://www.trustpilot.com/review/mylifeinabook.com" className="underline font-medium" target="_blank" rel="noopener noreferrer">2394 reviews</a> on
              </span>
              <Image
                src="https://ext.same-assets.com/3883118250/2262370143.svg"
                alt="Trustpilot"
                width={80}
                height={20}
              />
            </div>

            <h3 className="text-xl md:text-2xl mb-4">
              Give Your Parents the Joy of Sharing Their Life Story with Future Generations.
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-1 rounded-full bg-primary flex-shrink-0"></div>
                <p>Weekly guided questions that make it easy for your parent to share memories</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-1 rounded-full bg-primary flex-shrink-0"></div>
                <p>Voice-to-text feature - perfect for parents who prefer speaking to writing</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-1 rounded-full bg-primary flex-shrink-0"></div>
                <p>1 premium, full-color family keepsake book in A5 format (5.83" × 8.27")</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-1 rounded-full bg-primary flex-shrink-0"></div>
                <p>Up to 500 pages of high-quality, easy-to-read print</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-1 rounded-full bg-primary flex-shrink-0"></div>
                <p>40 beautiful cover designs to match your parent's style</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link href="/checkout/personalize" prefetch={false}>
                <Button size="lg" className="text-md uppercase">
                  GET STARTED WITH THIS BOOK
                </Button>
              </Link>
            </div>

            <div className="text-sm font-medium text-muted-foreground">
              free delivery • money-back guarantee
            </div>
          </div>

          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {[1, 2, 3, 4, 5].map((index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="overflow-hidden rounded-lg shadow-lg h-[500px] relative">
                      <Image
                        src={`https://picsum.photos/seed/book${index}/800/1000`}
                        alt={`Book preview ${index}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white py-2 px-6 rounded-full text-sm font-medium z-10">
              Regular price $79.00
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-2xl font-semibold mb-4">Description</h3>
          <h4 className="text-xl font-medium mb-3">A Gift That Begins the Moment You Give It.</h4>

          <div className="space-y-4">
            <p className="text-lg">
              1. <strong>Your parent or grandparent receives a thoughtful announcement on your chosen date</strong> (perfect for birthdays, holidays, or special occasions!) that their life story will be preserved in a beautiful way.
            </p>
            <p className="text-lg">
              2. <strong>Each week, they receive a gentle question that helps them share their memories, wisdom, and family stories.</strong> From cherished traditions to life lessons, every question is designed to bring out meaningful memories.
            </p>
            <p className="text-lg">
              3. <strong>The magic happens weekly - their stories are shared with you and other family members through email, creating precious moments of connection and discovery.</strong> Many families tell us these weekly stories become treasured moments of learning about their parent's life.
            </p>
            <p className="text-lg">
              4. <strong>When all stories are collected, we'll transform their memories into a beautiful printed book</strong> - a priceless family keepsake to be passed down through generations.
            </p>
          </div>

          <p className="text-lg mt-6">
            Give them the joy of sharing their life story while giving your family the gift of preserved memories.
          </p>

          <div className="mt-10 py-8 bg-accent/20 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Image
                    key={star}
                    src="https://ext.same-assets.com/3883118250/3016672186.png"
                    alt="Star rating"
                    width={24}
                    height={24}
                    className="mr-1"
                  />
                ))}
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-4">An experience not to be missed.</h4>
            <p className="text-lg italic mb-4">
              "This was truly one of the <strong>best gifts</strong> I have ever received, and I am grateful for the opportunity to leave this to my children and grandchildren."
            </p>
            <p className="font-medium">Dienna Boley, May 2nd</p>
          </div>

          <div className="mt-10 text-center">
            <Link href="/checkout/personalize" prefetch={false}>
              <Button size="lg" className="text-md uppercase">
                GET STARTED WITH THIS BOOK
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
