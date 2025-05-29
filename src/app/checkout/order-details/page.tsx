'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from 'lucide-react';

export default function OrderDetailsPage() {
  const router = useRouter();
  const [hasSecondRecipient, setHasSecondRecipient] = useState(false);

  const handleContinue = () => {
    router.push('/checkout/gift-message');
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">Gift Date</h2>

      {/* Gift date */}
      <div className="mb-10">
        <p className="mb-4">When should we send the gift email?</p>
        <div className="relative">
          <Input
            type="date"
            className="w-full rounded-md border border-border/50 pl-4 pr-10 py-3"
            placeholder="mm/dd/yyyy"
          />
          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      {/* Recipient details */}
      <h2 className="text-3xl font-semibold mb-4">Recipient Details</h2>
      <p className="mb-6 text-muted-foreground">Provide some details of the recipient of your gift!</p>

      <div className="space-y-6">
        {/* First recipient */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="recipient1FirstName">Your Gift Recipient's First Name</Label>
            <Input
              id="recipient1FirstName"
              placeholder="First name *"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="recipient1LastName">Your Gift Recipient's Last Name</Label>
            <Input
              id="recipient1LastName"
              placeholder="Last name *"
              className="mt-2"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="recipient1Email">Your Gift Recipient's Email Address</Label>
          <Input
            id="recipient1Email"
            type="email"
            placeholder="Email *"
            className="mt-2"
          />
        </div>

        {/* Second recipient (optional) */}
        {hasSecondRecipient && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="recipient2FirstName">Second Gift Recipient's First Name</Label>
                <Input
                  id="recipient2FirstName"
                  placeholder="First name *"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="recipient2LastName">Second Gift Recipient's Last Name</Label>
                <Input
                  id="recipient2LastName"
                  placeholder="Last name *"
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="recipient2Email">Second Gift Recipient's Email Address</Label>
              <Input
                id="recipient2Email"
                type="email"
                placeholder="Email *"
                className="mt-2"
              />
            </div>
          </>
        )}

        {/* Add another author button */}
        {!hasSecondRecipient && (
          <Button
            variant="outline"
            className="w-full md:w-auto bg-primary text-white hover:bg-primary/90 rounded-full"
            onClick={() => setHasSecondRecipient(true)}
          >
            ADD ANOTHER AUTHOR (+$49)
          </Button>
        )}
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
