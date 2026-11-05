"use client";

import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#020408] px-6 py-8 lg:px-16 text-white select-none">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT: Orange circular NS badge + Name & Role (exactly as in screenshot) */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.5)]">
            <span className="font-black text-black text-base font-mono">
              NS
            </span>
          </div>

          <div>
            <div className="text-base font-bold text-white tracking-tight">
              Navjot Singh.
            </div>
            <div className="text-[11px] text-[#A3A3A3]">
              Full Stack Developer
            </div>
          </div>
        </div>

        {/* CENTER: Copyright (exactly as in screenshot) */}
        <div className="text-xs text-[#A3A3A3] text-center">
          © 2026 Navjot Singh. All rights reserved.
        </div>

        {/* RIGHT: Designed & Built with heart + Circular Orange Back to Top Button */}
        <div className="flex items-center gap-4">
          <div className="text-xs text-[#A3A3A3] flex items-center gap-1.5">
            Designed &amp; Built with{" "}
            <Heart size={12} className="fill-[#FF6B00] text-[#FF6B00]" /> by Navjot
          </div>

          <button
            onClick={scrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF6B00] text-black shadow-[0_0_15px_rgba(255,107,0,0.5)] transition-transform hover:scale-110 active:scale-95"
            aria-label="Back to top"
          >
            <ArrowUp size={16} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </footer>
  );
}
