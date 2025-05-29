'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './header';
import Footer from './footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render header/footer on checkout pages
  const isCheckoutPage = pathname?.includes('/checkout');

  if (!mounted) {
    return <div className="min-h-screen bg-background">{children}</div>;
  }

  if (isCheckoutPage) {
    return <div className="min-h-screen bg-background">{children}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
