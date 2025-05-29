'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/checkout/payment');
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">Review Your Cart</h2>

      <div className="bg-card rounded-lg border border-border/30 mb-8">
        {/* Cart item */}
        <div className="p-6 border-b border-border/30">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 flex-shrink-0">
              <Image
                src="https://ext.same-assets.com/2818034469/3885802765.jpeg"
                alt="Preserving Memories"
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
            </div>

            <div className="flex-grow">
              <h3 className="font-semibold text-lg">Preserving Memories</h3>
              <p className="text-sm text-muted-foreground mb-2">1-Year Story Prompt Program</p>

              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Recipient:</span>
                  <span className="ml-1">John Doe</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Gift Date:</span>
                  <span className="ml-1">Dec 25, 2025</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Copies:</span>
                  <span className="ml-1">1</span>
                </div>
              </div>
            </div>

            <div className="font-medium text-lg">
              $79.00
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="p-6 border-b border-border/30">
          <h4 className="font-medium mb-4">Add-ons</h4>

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Audiobook Narration</span>
            </div>
            <span>$39.00</span>
          </div>
        </div>

        {/* Order total */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-muted-foreground">Subtotal</span>
            <span>$79.00</span>
          </div>

          <div className="flex justify-between items-center mb-2">
            <span className="text-muted-foreground">Add-ons</span>
            <span>$39.00</span>
          </div>

          <div className="flex justify-between items-center mb-2">
            <span className="text-muted-foreground">Shipping</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="border-t border-border/30 my-4 pt-4 flex justify-between items-center">
            <span className="font-semibold text-lg">Total</span>
            <span className="font-semibold text-xl">$118.00</span>
          </div>
        </div>
      </div>

      {/* Promo code */}
      <div className="mb-8">
        <h4 className="font-medium mb-2">Have a promo code?</h4>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter code"
            className="flex-grow px-4 py-2 border border-border/50 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-r-md">
            Apply
          </button>
        </div>
      </div>

      {/* Continue button */}
      <div className="mt-10">
        <Button
          size="lg"
          className="w-full sm:w-auto bg-[#111] hover:bg-[#333] text-white rounded-full uppercase"
          onClick={handleContinue}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
