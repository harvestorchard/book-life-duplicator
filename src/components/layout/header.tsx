'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown, ShoppingCart, User } from 'lucide-react';

export default function Header() {
  const [isPromoBannerVisible, setIsPromoBannerVisible] = useState(true);

  return (
    <header className="w-full">
      {/* Promo banner */}
      {isPromoBannerVisible && (
        <div className="bg-primary text-white py-2 px-4 text-center">
          <div className="container-custom flex justify-between items-center">
            <div className="flex-1"></div>
            <p className="text-sm md:text-base">
              New Year&apos;s Sale 10% Off | Code: NY10
            </p>
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setIsPromoBannerVisible(false)}
                className="text-white p-1"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main header */}
      <div className="bg-background border-b border-border/30 py-4">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Mobile menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-card">
                  <nav className="flex flex-col gap-4 mt-8">
                    <Link href="/how-it-works" className="text-lg font-medium">
                      How it works
                    </Link>
                    <Link href="/#faq" className="text-lg font-medium">
                      FAQ
                    </Link>
                    <Link href="/contact-us" className="text-lg font-medium">
                      Contact us
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="https://ext.same-assets.com/3883118250/2759908880.svg"
                alt="My Life in a Book"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/how-it-works" className="text-foreground hover:text-primary transition">
                How it works
              </Link>
              <Link href="/#faq" className="text-foreground hover:text-primary transition">
                FAQ
              </Link>
              <Link href="/contact-us" className="text-foreground hover:text-primary transition">
                Contact us
              </Link>
              <div className="relative group">
                <button className="flex items-center text-foreground hover:text-primary transition">
                  Language <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg rounded-md p-2 mt-2 min-w-32">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">English</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Français</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Español</a>
                </div>
              </div>
            </nav>

            {/* Action buttons */}
            <div className="flex items-center space-x-4">
              <Button className="hidden md:flex uppercase" size="sm">
                GET STARTED
              </Button>
              <Link href="/login" className="flex items-center text-foreground hover:text-primary transition">
                <User className="h-5 w-5 mr-1" />
                <span className="hidden lg:inline">LOG IN</span>
              </Link>
              <Link href="/cart" className="text-foreground hover:text-primary transition relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Free delivery banner */}
      <div className="bg-secondary/50 text-xs md:text-sm py-1 text-center font-medium uppercase tracking-wide">
        FREE DELIVERY &nbsp;&nbsp; MONEY-BACK GUARANTEE
      </div>
    </header>
  );
}
