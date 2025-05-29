import { NextFont } from 'next/dist/compiled/@next/font';
import { Playfair_Display, Nunito_Sans, Dancing_Script } from 'next/font/google';

// Playfair Display font (for headings) - similar to Exposure
export const exposureFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-exposure',
  display: 'swap',
});

// Nunito Sans (for body text) - similar to Rethink Sans
export const rethinkSansFont = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-rethink-sans',
  display: 'swap',
});

// Dancing Script (for script accents) - similar to Verveine
export const verveineFont = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-verveine',
  display: 'swap',
});
