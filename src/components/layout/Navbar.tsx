"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#0B0B0B]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link href="#home" className="text-xl font-bold tracking-tight">
          Navjot<span className="text-[#FF6B2C]">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-[#FF6B2C] px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-orange-400 md:flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#111111] p-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block border-b border-white/5 py-4 text-gray-300 hover:text-[#FF6B2C]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}