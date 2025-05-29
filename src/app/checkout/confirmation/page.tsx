'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ConfirmationPage() {
  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      <div className="mb-6 flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>

      <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>

      <p className="text-lg mb-8">
        Thank you for your purchase. Your order has been confirmed and is being processed.
      </p>

      <div className="bg-card rounded-lg border border-border/30 p-6 mb-8">
        <h3 className="font-medium mb-4 text-left">Order Details</h3>

        <div className="flex items-start gap-4 mb-6 text-left">
          <div className="w-20 h-20 flex-shrink-0">
            <Image
              src="https://ext.same-assets.com/2818034469/3885802765.jpeg"
              alt="Preserving Memories"
              width={80}
              height={80}
              className="rounded-md object-cover"
            />
          </div>

          <div>
            <h4 className="font-medium">Preserving Memories</h4>
            <p className="text-sm text-muted-foreground">1-Year Story Prompt Program</p>
          </div>
        </div>

        <div className="space-y-2 text-left text-sm mb-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Order Number:</span>
            <span className="font-medium">#ML-12345678</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Gift Recipient:</span>
            <span>John Doe</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Gift Date:</span>
            <span>Dec 25, 2025</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total:</span>
            <span className="font-medium">$118.00</span>
          </div>
        </div>
      </div>

      <div className="bg-secondary/20 rounded-lg p-6 mb-8">
        <h3 className="font-medium mb-2">What Happens Next?</h3>

        <p className="mb-4">
          Your gift recipient will receive a thoughtful announcement email on your chosen date.
          They'll then begin receiving weekly story prompts to help capture their memories.
        </p>

        <p>
          You'll also receive a confirmation email with all your order details.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/">
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            Return to Home
          </Button>
        </Link>

        <Link href="/account">
          <Button
            size="lg"
            className="w-full sm:w-auto"
          >
            View My Account
          </Button>
        </Link>
      </div>
    </div>
  );
}
