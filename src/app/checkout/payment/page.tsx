'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function PaymentPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'paypal'>('credit-card');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle payment processing
    // For this demo, we'll just redirect to a confirmation page
    router.push('/checkout/confirmation');
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">Checkout</h2>

      {/* Order summary */}
      <div className="bg-card rounded-lg border border-border/30 p-6 mb-8">
        <h3 className="font-medium mb-4">Order Summary</h3>

        <div className="flex justify-between items-center mb-2">
          <span className="text-muted-foreground">Subtotal</span>
          <span>$118.00</span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-green-600">Free</span>
        </div>

        <div className="border-t border-border/30 my-4 pt-4 flex justify-between items-center">
          <span className="font-semibold">Total</span>
          <span className="font-semibold text-xl">$118.00</span>
        </div>
      </div>

      {/* Payment method selection */}
      <div className="mb-8">
        <h3 className="font-medium mb-4">Payment Method</h3>

        <div className="space-y-4">
          {/* Credit Card */}
          <div
            className={`
              border rounded-lg p-4 cursor-pointer transition-colors
              ${paymentMethod === 'credit-card'
                ? 'border-primary bg-card'
                : 'border-border/50 bg-background hover:border-border'}
            `}
            onClick={() => setPaymentMethod('credit-card')}
          >
            <div className="flex items-center">
              <input
                type="radio"
                id="credit-card"
                name="payment-method"
                checked={paymentMethod === 'credit-card'}
                onChange={() => setPaymentMethod('credit-card')}
                className="mr-2"
              />
              <label htmlFor="credit-card" className="flex items-center cursor-pointer">
                <span className="mr-2">Credit Card</span>
                <div className="flex space-x-1">
                  <Image src="https://ext.same-assets.com/2818034469/1650734686.png" alt="Amex" width={32} height={20} />
                  <Image src="https://ext.same-assets.com/2818034469/2187366991.png" alt="Mastercard" width={32} height={20} />
                  <Image src="https://ext.same-assets.com/2818034469/4007868640.png" alt="Visa" width={32} height={20} />
                </div>
              </label>
            </div>
          </div>

          {/* PayPal */}
          <div
            className={`
              border rounded-lg p-4 cursor-pointer transition-colors
              ${paymentMethod === 'paypal'
                ? 'border-primary bg-card'
                : 'border-border/50 bg-background hover:border-border'}
            `}
            onClick={() => setPaymentMethod('paypal')}
          >
            <div className="flex items-center">
              <input
                type="radio"
                id="paypal"
                name="payment-method"
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
                className="mr-2"
              />
              <label htmlFor="paypal" className="flex items-center cursor-pointer">
                <span className="mr-2">PayPal</span>
                <Image src="https://ext.same-assets.com/2818034469/3778553858.png" alt="PayPal" width={60} height={30} />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Payment form */}
      {paymentMethod === 'credit-card' && (
        <form onSubmit={handleSubmit} className="mb-8">
          <h3 className="font-medium mb-4">Card Information</h3>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <Label htmlFor="card-number">Card Number</Label>
              <Input
                id="card-number"
                placeholder="1234 5678 9012 3456"
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiration Date</Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  placeholder="123"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="name">Name on Card</Label>
              <Input
                id="name"
                placeholder="John Doe"
                className="mt-1"
              />
            </div>
          </div>

          <h3 className="font-medium mb-4">Billing Address</h3>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="123 Main St"
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  placeholder="Anytown"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="zip">Zip Code</Label>
                <Input
                  id="zip"
                  placeholder="12345"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="country">Country</Label>
              <Select defaultValue="us">
                <SelectTrigger id="country" className="mt-1">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      )}

      {/* Payment button */}
      <div className="mt-10">
        <Button
          type="submit"
          size="lg"
          className="w-full bg-[#111] hover:bg-[#333] text-white rounded-full uppercase"
          onClick={handleSubmit}
        >
          Complete Purchase
        </Button>

        <p className="text-center text-sm text-muted-foreground mt-4">
          By completing your purchase, you agree to our
          <a href="#" className="text-primary hover:underline mx-1">Terms of Service</a>
          and
          <a href="#" className="text-primary hover:underline mx-1">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
