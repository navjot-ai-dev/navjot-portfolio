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
      const scrollPosition = window.scrollY + 250;

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <nav
          className={`mx-auto flex h-16 sm:h-20 items-center justify-between px-6 lg:px-8 rounded-full border border-[#008CFF]/25 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.7)] ${
            scrolled
              ? "bg-[#020408]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,140,255,0.1)] border-[#008CFF]/35"
              : "bg-[#05080D]/65 backdrop-blur-md"
          }`}
        >
          {/* LEFT: NS Logo with orange glow */}
          <Link
            href="#home"
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
            aria-label="Navjot Singh - Back to Home"
          >
            <div className="relative flex h-10 w-14 items-center justify-center rounded-2xl border-2 border-[#FF6B00] bg-gradient-to-br from-[#0B1420] via-[#05080D] to-[#020408] shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,107,0,0.8)]">
              <span className="font-black tracking-widest text-[#FF6B00] text-base font-mono">
                NS
              </span>
            </div>
          </Link>

          {/* CENTER: Navigation Links with thin blue border styling & orange active indicator */}
          <div className="hidden md:flex items-center gap-7">
            {navigationLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#FF6B00]"
                      : "text-[#A3A3A3] hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-[#FF6B00] shadow-[0_0_12px_#FF6B00]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* RIGHT: Let's Talk Button with orange border and glow */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full border border-[#FF6B00] bg-transparent px-5 py-2 text-sm font-semibold text-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.25)] transition-all duration-300 hover:bg-[#FF6B00] hover:text-black hover:shadow-[0_0_30px_rgba(255,107,0,0.6)]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-xl border border-[#008CFF]/30 bg-[#080F19] text-gray-300 transition-colors hover:text-white"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mx-4 mt-2 max-w-7xl rounded-2xl border border-[#008CFF]/30 bg-[#020408]/95 p-6 backdrop-blur-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200 shadow-[0_8px_32px_rgba(0,0,0,0.9)]">
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
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-5 py-3 font-semibold text-black shadow-[0_0_20px_rgba(255,107,0,0.4)]"
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
