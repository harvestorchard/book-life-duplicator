'use client';

import { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import CheckoutSteps from '@/components/checkout/checkout-steps';

interface CheckoutLayoutProps {
  children: ReactNode;
}

export default function CheckoutLayout({ children }: CheckoutLayoutProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Wait until component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine current step based on pathname
  const getCurrentStep = (): number => {
    if (!pathname) return 1;
    if (pathname.includes('/personalize')) return 1;
    if (pathname.includes('/order-details')) return 2;
    if (pathname.includes('/gift-message')) return 3;
    if (pathname.includes('/cart')) return 4;
    if (pathname.includes('/payment') || pathname.includes('/confirmation')) return 5;
    return 1; // Default to step 1
  };

  const currentStep = getCurrentStep();

  if (!mounted) {
    // Return a placeholder with similar structure but no dynamic content
    return (
      <div className="min-h-screen bg-background">
        <header className="py-4 border-b border-border/30 bg-background">
          <div className="container-custom">
            <div className="flex items-center justify-between">
              <div className="h-12 w-40" />
              <div className="h-6 w-6" />
            </div>
          </div>
        </header>
        <div className="bg-primary py-4">
          <div className="container-custom">
            <div className="h-8" />
          </div>
        </div>
        <main className="py-10">
          <div className="container-custom">
            {children}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 border-b border-border/30 bg-background">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://ext.same-assets.com/3883118250/2759908880.svg"
                alt="My Life in a Book"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            <Link href="/" className="text-muted-foreground hover:text-foreground">
              <X className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </header>

      {/* Progress steps */}
      <div className="bg-primary py-4">
        <div className="container-custom">
          <CheckoutSteps currentStep={currentStep} />
        </div>
      </div>

      {/* Main content */}
      <main className="py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main content area */}
            <div className="lg:col-span-8">
              {children}
            </div>

            {/* Order summary */}
            <div className="lg:col-span-4">
              <div className="bg-card p-6 rounded-lg border border-border/30">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="https://ext.same-assets.com/2818034469/3885802765.jpeg"
                    alt="Preserving Memories"
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Preserving Memories</h3>
                    <p className="text-lg">$79.00</p>
                    <p className="text-sm text-muted-foreground">1 copy</p>
                  </div>
                </div>

                <div className="border-t border-border/30 my-4 pt-4">
                  <button className="text-sm flex items-center text-primary">
                    <span className="mr-1">▼</span> Includes
                  </button>

                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Weekly guided questions that make it easy for your parent to share memories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Voice-to-text feature - perfect for parents who prefer speaking to writing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>1 premium, full-color family keepsake book in A5 format (5.83" × 8.27")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Up to 500 pages of high-quality, easy-to-read print</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>40 beautiful cover designs to match your parent's style</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-border/30 my-4 pt-4">
                  <div className="flex justify-between text-xl font-semibold mb-4">
                    <span>Subtotal</span>
                    <span>$79.00</span>
                  </div>

                  <div className="text-center text-sm font-medium">
                    FREE DELIVERY • MONEY-BACK GUARANTEE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
