import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | What Next Studio",
  description:
    "Get in touch with What Next Studio today! Reach out for expert SEO, PPC Ads, Social Media Marketing (SMM), Content Creation, Email Marketing, Advertising, and Tracking services. Let's collaborate to grow your brand and achieve your marketing goals. Contact us now! ",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
