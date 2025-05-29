'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function PersonalizePage() {
  const router = useRouter();
  const [bookFor, setBookFor] = useState<'loved-one' | 'myself'>('loved-one');

  const handleContinue = () => {
    router.push('/checkout/order-details');
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-8">Who Is This Book For?</h1>

      {/* Book options */}
      <div className="space-y-4">
        {/* For a loved one */}
        <div
          className={`
            border rounded-lg p-6 cursor-pointer transition-colors
            ${bookFor === 'loved-one'
              ? 'border-primary bg-card'
              : 'border-border/50 bg-background hover:border-border'}
          `}
          onClick={() => setBookFor('loved-one')}
        >
          <div className="flex items-center gap-4">
            <div>
              <input
                type="radio"
                id="loved-one"
                name="book-for"
                checked={bookFor === 'loved-one'}
                onChange={() => setBookFor('loved-one')}
                className="mr-2"
              />
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="https://ext.same-assets.com/643812948/4206920387.svg"
                alt="Gift Icon"
                width={60}
                height={60}
              />
              <div>
                <label htmlFor="loved-one" className="font-semibold text-xl cursor-pointer block mb-1">
                  For A Loved One
                </label>
                <p className="text-muted-foreground">
                  Give your loved ones the opportunity to author their story.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* For myself */}
        <div
          className={`
            border rounded-lg p-6 cursor-pointer transition-colors
            ${bookFor === 'myself'
              ? 'border-primary bg-card'
              : 'border-border/50 bg-background hover:border-border'}
          `}
          onClick={() => setBookFor('myself')}
        >
          <div className="flex items-center gap-4">
            <div>
              <input
                type="radio"
                id="myself"
                name="book-for"
                checked={bookFor === 'myself'}
                onChange={() => setBookFor('myself')}
                className="mr-2"
              />
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="https://ext.same-assets.com/643812948/1275428767.svg"
                alt="Book Icon"
                width={60}
                height={60}
              />
              <div>
                <label htmlFor="myself" className="font-semibold text-xl cursor-pointer block mb-1">
                  For Myself
                </label>
                <p className="text-muted-foreground">
                  Write your own story to share with your loved ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue button */}
      <div className="mt-10">
        <Button
          size="lg"
          className="w-full sm:w-auto bg-[#111] hover:bg-[#333] text-white rounded-full uppercase"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
