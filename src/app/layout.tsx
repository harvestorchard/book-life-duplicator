import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { exposureFont, rethinkSansFont, verveineFont } from "./fonts";
import MainLayout from "@/components/layout/main-layout";

export const metadata: Metadata = {
  title: "My Life in a Book | Preserve Family Memories",
  description: "Help your parents and grandparents share their stories and memories. Create timeless keepsakes with the most meaningful gift by My Life in a Book.",
  keywords: "memories, family history, life story, keepsake, memoir, biography, family book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${exposureFont.variable} ${rethinkSansFont.variable} ${verveineFont.variable}`}
    >
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <MainLayout>{children}</MainLayout>
        </ClientBody>
      </body>
    </html>
  );
}
