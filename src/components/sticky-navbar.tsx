"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"; // Import Lucide icons

export function StickyNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      {/* Hamburger Menu Icon (Visible on Mobile) */}
      <div className="md:hidden absolute top-0 right-0 p-4">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Regular Menu (Visible on Desktop) */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <HoveredLink href="/">Home</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/#services">
                Search Engine Optimization
              </HoveredLink>
              <HoveredLink href="/#services">PPC Advertising</HoveredLink>
              <HoveredLink href="/#services">Social Media Marketing</HoveredLink>
              <HoveredLink href="/#services">Content Creation</HoveredLink>
              <HoveredLink href="/#services">Email Marketing</HoveredLink>
              <HoveredLink href="/#services">Analytics and Tracking</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Blogs">
            <HoveredLink href="/blogs">Blogs</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Success Stories">
            <HoveredLink href="/success-stories">Success Stories</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <HoveredLink href="/contact-us">Contact Us</HoveredLink>
          </MenuItem>
        </Menu>
      </div>

      {/* Mobile Menu (Visible on Mobile) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white rounded-full shadow-lg mt-14 p-2">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <HoveredLink href="/">Home</HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/#services">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/#services">PPC Advertising</HoveredLink>
                <HoveredLink href="/#services">Social Media Marketing</HoveredLink>
                <HoveredLink href="/#services">Content Creation</HoveredLink>
                <HoveredLink href="/#services">Email Marketing</HoveredLink>
                <HoveredLink href="/#services">Analytics and Tracking</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Blogs">
              <HoveredLink href="/blogs">Blogs</HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Success Stories">
              <HoveredLink href="/success-stories">Success Stories</HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact">
              <HoveredLink href="/contact-us">Contact Us</HoveredLink>
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
}