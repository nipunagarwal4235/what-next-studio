import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { Cover } from "@/components/ui/cover";

export function Services() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      {/* Responsive Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Services for <Cover>speedy results</Cover>
      </h1>

      {/* Responsive Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your website's visibility on search engines with our expert SEO strategies, driving organic traffic and improving your rankings.",
    link: "/contact-us",
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Maximize your ROI with targeted PPC campaigns that deliver immediate results and connect you to your ideal audience.",
    link: "/contact-us",
  },
  {
    title: "Social Media Marketing (SMM)",
    description:
      "Engage your audience and grow your brand presence with tailored social media strategies across all major platforms.",
    link: "/contact-us",
  },
  {
    title: "Email Marketing",
    description:
      "Build meaningful connections with your customers through personalized email campaigns that drive conversions and loyalty.",
    link: "/contact-us",
  },
  {
    title: "Content Creation",
    description:
      "Captivate your audience with compelling content that aligns with your brand and keeps your customers coming back for more.",
    link: "/contact-us",
  },
  {
    title: "Analytics and Tracking",
    description:
      "Make data-driven decisions with our comprehensive analytics and tracking services, providing insights to refine your marketing strategies.",
    link: "/contact-us",
  },
];