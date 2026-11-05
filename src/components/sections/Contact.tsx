"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Mail,
  Send,
  Copy,
  Check,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_IMAGES } from "@/lib/images";
import { SOCIAL_LINKS } from "@/lib/constants";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const EMAIL = "navjotsingh542419@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const holoEmailRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const subject = formData.get("subject") || "Portfolio Inquiry";
    const message = formData.get("message") || "";

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
      String(subject)
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
    }, 300);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // 1. Section Header entrance
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0,
          y: 35,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        });
      }

      // 2. Email illustration smoothly reveals with scale and orbital glow
      if (holoEmailRef.current) {
        gsap.fromTo(
          holoEmailRef.current,
          {
            scale: 0.78,
            opacity: 0,
            y: 50,
            rotate: -4,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: holoEmailRef.current,
              start: "top 80%",
            },
          }
        );

        // Orbital trails scrub rotation on scroll
        gsap.to(holoEmailRef.current, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 3. Contact info cards entrance
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          opacity: 0,
          y: 30,
          stagger: 0.12,
          duration: 0.8,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        });
      }

      // 4. Contact form elements appear sequentially
      if (formRef.current) {
        const formElements = formRef.current.querySelectorAll(".form-step");
        gsap.from(formElements, {
          opacity: 0,
          y: 25,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080F19] py-28 px-6 lg:px-16"
    >
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute -left-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#FF6B00]/12 blur-[140px]" />
      <div className="pointer-events-none absolute -right-48 top-10 h-[500px] w-[500px] rounded-full bg-[#008CFF]/15 blur-[140px]" />

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div ref={headerRef} className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#FF6B00] uppercase">
            Contact Me —
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            Let&apos;s Build <span className="text-[#FF6B00]">Something Great.</span>
          </h2>

          <p className="mt-3 text-base text-[#A3A3A3]">
            Have a project in mind? Feel free to reach out! I&apos;m always excited to discuss new ideas and opportunities.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-center">

          {/* LEFT SIDE: Contact Form & Info */}
          <div className="lg:col-span-7 space-y-8">

            {/* Quick Contact & Social Cards */}
            <div ref={cardsRef} className="grid gap-4 sm:grid-cols-2">

              {/* Email pill card */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0B1420]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#FF6B00]/50 hover:shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6B00]/10 text-[#FF6B00]">
                    <Mail size={18} />
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1 text-xs text-neutral-300 transition-colors hover:border-[#FF6B00]/50 hover:text-[#FF6B00]"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="mt-4">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-0.5 block truncate text-sm font-semibold text-white transition-colors hover:text-[#FF6B00]"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* Social Channels card */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0B1420]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#008CFF]/50 hover:shadow-[0_0_20px_rgba(0,140,255,0.2)]">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  Social Channels
                </span>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#080F19] text-[#A3A3A3] transition-all hover:border-[#FF6B00]/60 hover:text-[#FF6B00]"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#080F19] text-[#A3A3A3] transition-all hover:border-[#008CFF]/60 hover:text-[#008CFF]"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#080F19] text-[#A3A3A3] transition-all hover:border-[#FF6B00]/60 hover:text-[#FF6B00]"
                    aria-label="Send Email"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>

            </div>

            {/* Contact Form with sequential element animations */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/[0.08] bg-[#0B1420]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="form-step">
                  <label htmlFor="name" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    className="w-full rounded-xl border border-white/10 bg-[#080F19] px-4 py-3 text-sm text-white placeholder-neutral-500 transition-colors focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                  />
                </div>

                <div className="form-step">
                  <label htmlFor="email" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#080F19] px-4 py-3 text-sm text-white placeholder-neutral-500 transition-colors focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                  />
                </div>
              </div>

              <div className="form-step">
                <label htmlFor="subject" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project inquiry / collaboration"
                  className="w-full rounded-xl border border-white/10 bg-[#080F19] px-4 py-3 text-sm text-white placeholder-neutral-500 transition-colors focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00]"
                />
              </div>

              <div className="form-step">
                <label htmlFor="message" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your idea or project..."
                  className="w-full rounded-xl border border-white/10 bg-[#080F19] px-4 py-3 text-sm text-white placeholder-neutral-500 transition-colors focus:border-[#FF6B00] focus:outline-none focus:ring-1 focus:ring-[#FF6B00] resize-none"
                />
              </div>

              <div className="form-step flex items-center justify-between pt-2">
                <span className="text-[11px] text-neutral-400">
                  Launches your email client to send message
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-3 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,107,0,0.35)] transition-all duration-300 hover:scale-105 hover:bg-[#FF7A1A] hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Opening..." : "Send Message"}</span>
                  <Send size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>

          </div>

          {/* RIGHT SIDE: Glowing Email Illustration with Sci-Fi Hologram & Trails */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div
              ref={holoEmailRef}
              className="relative aspect-square w-full max-w-[480px] select-none flex items-center justify-center will-change-transform"
            >
              {/* Circular light trails & orbital glow rings */}
              <div className="absolute inset-0 rounded-full border border-[#008CFF]/30 shadow-[0_0_50px_rgba(0,140,255,0.3)] animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-[#FF6B00]/25 shadow-[0_0_40px_rgba(255,107,0,0.2)]" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#008CFF]/10 via-[#FF6B00]/10 to-transparent blur-2xl" />

              {/* Glowing Email Image */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl p-3 flex items-center justify-center">
                <Image
                  src={PORTFOLIO_IMAGES.contactEmail}
                  alt="Futuristic Holographic Email Pedestal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-contain filter drop-shadow-[0_0_35px_rgba(0,140,255,0.5)] transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating particles */}
              <div className="pointer-events-none absolute top-12 right-12 h-2 w-2 rounded-full bg-[#008CFF] shadow-[0_0_12px_#008CFF] animate-pulse" />
              <div className="pointer-events-none absolute bottom-16 left-10 h-2 w-2 rounded-full bg-[#FF6B00] shadow-[0_0_12px_#FF6B00] animate-pulse" />
              <div className="pointer-events-none absolute top-1/2 left-4 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
