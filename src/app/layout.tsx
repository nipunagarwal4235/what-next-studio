import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "What Next Studio",
  description:
    "What Next Studio is your one-stop marketing solution! We specialize in SEO, PPC Ads, Social Media Marketing (SMM), Content Creation, Email Marketing, Advertising, and Tracking. Boost your brand's online presence, drive traffic, and maximize ROI with our expert strategies. Let's create what's next for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
