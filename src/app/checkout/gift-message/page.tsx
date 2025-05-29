'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function GiftMessagePage() {
  const router = useRouter();
  const [copiesCount, setCopiesCount] = useState(1);
  const [includeAudiobook, setIncludeAudiobook] = useState(false);

  const handleContinue = () => {
    router.push('/checkout/cart');
  };

  const incrementCopies = () => {
    setCopiesCount(prev => prev + 1);
  };

  const decrementCopies = () => {
    if (copiesCount > 1) {
      setCopiesCount(prev => prev - 1);
    }
  };

  return (
    <div>
      {/* Book copies */}
      <h2 className="text-3xl font-semibold mb-4">How many copies of the book would you like?</h2>
      <p className="mb-6 text-muted-foreground">
        The first copy is included with your purchase. You can order additional copies for $30 each.
        You can always purchase more copies later.
      </p>

      <div className="flex items-center mb-10">
        <button
          onClick={decrementCopies}
          className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center"
        >
          -
        </button>
        <span className="mx-4 text-xl font-medium">{copiesCount}</span>
        <button
          onClick={incrementCopies}
          className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center"
        >
          +
        </button>
      </div>

      {/* Audiobook option */}
      <h2 className="text-3xl font-semibold mb-4">Want A narration of their book in their voice?</h2>

      <div
        className={`
          border rounded-lg p-6 cursor-pointer transition-colors mb-10
          ${includeAudiobook
            ? 'border-primary bg-card'
            : 'border-border/50 bg-background hover:border-border'}
        `}
        onClick={() => setIncludeAudiobook(!includeAudiobook)}
      >
        <div className="flex items-center gap-4">
          <div>
            <input
              type="checkbox"
              id="audiobook"
              checked={includeAudiobook}
              onChange={() => setIncludeAudiobook(!includeAudiobook)}
              className="mr-2"
            />
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="https://ext.same-assets.com/643812948/337193706.png"
              alt="Audiobook Icon"
              width={60}
              height={60}
            />
            <div>
              <label htmlFor="audiobook" className="font-semibold text-xl cursor-pointer block mb-1">
                Make it an audiobook! (+$39)
              </label>
              <p className="text-muted-foreground">
                Using a short audio clip, we create a full narration of their book!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gift message */}
      <h2 className="text-3xl font-semibold mb-4">Add a gift message</h2>

      <div className="mb-10">
        <div className="mb-4">
          <Label htmlFor="from">From</Label>
          <Input id="from" className="mt-2" />
        </div>

        <div>
          <Label htmlFor="message">Add a gift message</Label>
          <Textarea
            id="message"
            className="mt-2 min-h-32"
            placeholder="This message will be editable until the day before the gift's sent."
          />
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
