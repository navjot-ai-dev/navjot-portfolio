"use client";

import { ArrowUp, Heart, Mail } from "lucide-react";
import { navigationLinks, SOCIAL_LINKS } from "@/lib/constants";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#05080D] px-6 py-12 lg:px-16 text-white">
      {/* Top subtle orange/blue light line */}
      <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          
          {/* Brand info */}
          <div className="flex items-center gap-4">
            <div className="relative flex h-12 w-14 items-center justify-center rounded-2xl border border-[#FF6B00]/40 bg-gradient-to-br from-[#0B1420] to-[#05080D] shadow-[0_0_20px_rgba(255,107,0,0.3)]">
              <span className="font-extrabold tracking-wider text-[#FF6B00] text-lg font-mono">
                NS
              </span>
            </div>

            <div>
              <div className="text-lg font-bold text-white tracking-tight">
                Navjot Singh<span className="text-[#FF6B00]">.</span>
              </div>
              <div className="text-xs text-[#A3A3A3]">
                Full Stack Developer
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm text-[#A3A3A3] transition-colors hover:text-[#FF6B00]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials & Contact */}
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0B1420] text-[#A3A3A3] transition-all hover:border-[#FF6B00]/60 hover:text-[#FF6B00]"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0B1420] text-[#A3A3A3] transition-all hover:border-[#008CFF]/60 hover:text-[#008CFF]"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0B1420] text-[#A3A3A3] transition-all hover:border-[#FF6B00]/60 hover:text-[#FF6B00]"
              aria-label="Email Navjot"
            >
              <Mail size={15} />
            </a>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[#A3A3A3]">
          <div>
            © 2026 Navjot Singh. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            Designed &amp; Built with{" "}
            <Heart size={13} className="fill-[#FF6B00] text-[#FF6B00]" /> by Navjot
          </div>

          {/* Back to top circular button */}
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0B1420] text-[#A3A3A3] transition-all hover:border-[#FF6B00] hover:text-[#FF6B00] hover:shadow-[0_0_15px_rgba(255,107,0,0.3)]"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
