"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="py-20 sm:py-32 md:py-40 bg-black w-full">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Responsive Heading */}
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
          Take your {" "}
          <span className="text-neutral-400">
            {"Brand".split("").map((word, idx) => (
              <motion.span
                key={word + idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          {" "}
          Global
        </p>

        {/* Responsive Subheading */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-2xl mx-auto py-4 sm:py-6">
          Elevate your brand to global heights—craft bold, boundary-pushing campaigns that resonate worldwide, no matter where you create.
        </p>
      </div>

      {/* WorldMap Component */}
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}