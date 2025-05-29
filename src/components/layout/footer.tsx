'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Footer() {
  return (
    <footer>
      <div className="py-12 bg-background">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl mb-2">Preserving memories, one story at a time, with beautifully crafted keepsakes.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Shop Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/preserving-memories" className="hover:text-primary transition">
                    Preserving Memories
                  </Link>
                </li>
                <li>
                  <Link href="/products/book-im-writing-a-book-about-you" className="hover:text-primary transition">
                    A Book About You
                  </Link>
                </li>
                <li>
                  <Link href="/products/book-the-story-of-us" className="hover:text-primary transition">
                    The Story of Us
                  </Link>
                </li>
                <li>
                  <Link href="/products/book-babys-first-moments" className="hover:text-primary transition">
                    Baby&apos;s First Moments
                  </Link>
                </li>
                <li>
                  <Link href="/collections/all" className="hover:text-primary transition">
                    Shop All
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/how-it-works" className="hover:text-primary transition">
                    How it Works
                  </Link>
                </li>
                <li>
                  <a href="https://www.trustpilot.com/review/mylifeinabook.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-primary transition">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact-us" className="hover:text-primary transition">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/policies/shipping-policy" className="hover:text-primary transition">
                    Shipping & Returns
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Social</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.facebook.com/MylifeinabookCom"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-primary transition">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/mylifeinabook.com_official/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-primary transition">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="py-6 bg-background border-t border-border/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 w-full md:w-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
              {/* Region/Language selectors */}
              <div>
                <h4 className="text-sm font-medium mb-2">Country/Region</h4>
                <Select defaultValue="us">
                  <SelectTrigger className="w-[240px]">
                    <SelectValue placeholder="United States | USD $" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States | USD $</SelectItem>
                    <SelectItem value="ca">Canada | CAD $</SelectItem>
                    <SelectItem value="uk">United Kingdom | GBP £</SelectItem>
                    <SelectItem value="eu">Europe | EUR €</SelectItem>
                    <SelectItem value="au">Australia | AUD $</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Language</h4>
                <Select defaultValue="en">
                  <SelectTrigger className="w-[240px]">
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Payment methods */}
            <div className="flex justify-center md:justify-end space-x-2">
              <div className="flex items-center space-x-1">
                <Image src="https://ext.same-assets.com/3883118250/1650734686.png" alt="American Express" width={36} height={24} />
                <Image src="https://ext.same-assets.com/3883118250/2591593466.png" alt="Apple Pay" width={36} height={24} />
                <Image src="https://ext.same-assets.com/3883118250/3139839548.png" alt="Google Pay" width={36} height={24} />
                <Image src="https://ext.same-assets.com/3883118250/2187366991.png" alt="Mastercard" width={36} height={24} />
                <Image src="https://ext.same-assets.com/3883118250/3778553858.png" alt="PayPal" width={36} height={24} />
                <Image src="https://ext.same-assets.com/3883118250/1773058650.png" alt="Shop Pay" width={36} height={24} />
                <Image src="https://ext.same-assets.com/3883118250/4007868640.png" alt="Visa" width={36} height={24} />
              </div>
            </div>
          </div>

          {/* Copyright and links */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-sm">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Link href="/policies/terms-of-service" className="hover:text-primary transition">
                Terms of service
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/policies/privacy-policy" className="hover:text-primary transition">
                Privacy policy
              </Link>
            </div>
            <div className="text-muted-foreground">
              Copyright © 2025, All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
