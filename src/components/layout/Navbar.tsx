"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { navigationLinks } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05080D]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* LEFT: NS Logo with orange glow */}
        <Link
          href="#home"
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
          aria-label="Navjot Singh - Back to Home"
        >
          <div className="relative flex h-11 w-14 items-center justify-center rounded-2xl border border-[#FF6B00]/40 bg-gradient-to-br from-[#0B1420] to-[#05080D] shadow-[0_0_20px_rgba(255,107,0,0.3)] transition-all duration-300 group-hover:border-[#FF6B00] group-hover:shadow-[0_0_30px_rgba(255,107,0,0.6)]">
            <span className="font-extrabold tracking-wider text-[#FF6B00] text-lg font-mono">
              NS
            </span>
            <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-[#008CFF] shadow-[0_0_10px_#008CFF]" />
          </div>
        </Link>

        {/* CENTER: Navigation Links */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.06] bg-[#080F19]/60 px-4 py-1.5 backdrop-blur-md">
          {navigationLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive
                    ? "text-white"
                    : "text-[#A3A3A3] hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]" />
                )}
              </a>
            );
          })}
        </div>

        {/* RIGHT: Let's Talk Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#FF6B00]/70 bg-gradient-to-r from-[#FF6B00]/10 via-[#FF6B00]/20 to-[#FF6B00]/10 px-6 py-2.5 text-sm font-semibold text-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.25)] transition-all duration-300 hover:border-[#FF6B00] hover:bg-[#FF6B00] hover:text-black hover:shadow-[0_0_30px_rgba(255,107,0,0.6)]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0B1420] text-gray-300 transition-colors hover:text-white"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-b border-white/10 bg-[#080F19]/95 px-6 py-6 backdrop-blur-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navigationLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all ${
                    isActive
                      ? "border border-[#FF6B00]/40 bg-[#0B1420] text-[#FF6B00]"
                      : "text-gray-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] shadow-[0_0_6px_#FF6B00]" />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-5 py-3 font-semibold text-black shadow-[0_0_20px_rgba(255,107,0,0.4)]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
