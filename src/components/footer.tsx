import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-8 sm:py-12">
        {/* Responsive Heading */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center">
          Follow us on social media:
        </h3>

        {/* Responsive Icons */}
        <div className="flex items-center justify-center space-x-4 sm:space-x-6">
          <Link
            href="https://www.facebook.com/whatnextstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Facebook className="w-6 h-6 sm:w-8 sm:h-8" />
          </Link>
          <Link
            href="https://www.instagram.com/whatnext_studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
          </Link>
          <Link
            href="https://twitter.com/whatnextstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Twitter className="w-6 h-6 sm:w-8 sm:h-8" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/what-next-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
          </Link>
        </div>
      </div>
    </footer>
  );
}