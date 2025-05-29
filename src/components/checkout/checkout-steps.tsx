'use client';

import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface CheckoutStepsProps {
  currentStep: number;
}

const steps = [
  { id: 1, name: 'Personalize', href: '/checkout/personalize' },
  { id: 2, name: 'Order Details', href: '/checkout/order-details' },
  { id: 3, name: 'Gift Message', href: '/checkout/gift-message' },
  { id: 4, name: 'Cart', href: '/checkout/cart' },
  { id: 5, name: 'Checkout', href: '/checkout/payment' },
];

export default function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  return (
    <nav aria-label="Progress" className="my-6">
      <ol className="flex justify-between w-full">
        {steps.map((step) => {
          const isComplete = step.id < currentStep;
          const isCurrent = step.id === currentStep;

          return (
            <li key={step.id} className="relative flex items-center">
              {/* Step indicator */}
              <div className="relative flex items-center justify-center">
                <span
                  className={`
                    flex h-8 w-8 items-center justify-center rounded-full
                    text-xs font-medium ring-1 ring-inset
                    ${isComplete
                      ? 'bg-primary text-white ring-primary'
                      : isCurrent
                        ? 'bg-primary/10 text-primary ring-primary'
                        : 'bg-white text-gray-500 ring-gray-300'
                    }
                  `}
                >
                  {isComplete ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </span>
              </div>

              {/* Step name */}
              <span
                className={`
                  ml-2 text-sm font-medium
                  ${isComplete || isCurrent ? 'text-primary' : 'text-gray-500'}
                `}
              >
                {step.name}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
