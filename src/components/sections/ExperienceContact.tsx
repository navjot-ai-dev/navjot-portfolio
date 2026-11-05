"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Mail, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_IMAGES } from "@/lib/images";
import { SOCIAL_LINKS } from "@/lib/constants";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const EMAIL = "navjotsingh542419@gmail.com";

const timelineItems = [
  {
    period: "2024 - Present",
    role: "Full Stack Developer",
    description: "Building innovative web solutions.",
  },
  {
    period: "2023 - 2024",
    role: "Frontend Developer",
    description: "Creating beautiful user experiences.",
  },
  {
    period: "2022 - 2023",
    role: "Learning & Exploring",
    description: "Mastering modern technologies.",
  },
];

export default function ExperienceContact() {
  const [copied, setCopied] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const bgCityRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const contactCardRef = useRef<HTMLDivElement>(null);

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
      // 1. Futuristic City Parallax Background
      if (bgCityRef.current) {
        gsap.to(bgCityRef.current, {
          yPercent: 20,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 2. Timeline line progressive draw
      if (timelineLineRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          {
            scaleY: 0,
          },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-container",
              start: "top 75%",
              end: "bottom 80%",
              scrub: 0.6,
            },
          }
        );
      }

      // 3. Timeline nodes activate sequentially
      const nodes = gsap.utils.toArray<HTMLElement>(".timeline-dot");
      nodes.forEach((node) => {
        gsap.fromTo(
          node,
          {
            scale: 0.7,
            boxShadow: "0 0 0px rgba(255, 107, 0, 0)",
          },
          {
            scale: 1.2,
            boxShadow: "0 0 20px rgba(255, 107, 0, 0.9)",
            duration: 0.4,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: node,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 4. Contact glass container entrance
      if (contactCardRef.current) {
        gsap.fromTo(
          contactCardRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contactCardRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#020408] py-28 px-6 lg:px-16"
    >
      {/* FUTURISTIC BLUE CITY BACKGROUND */}
      <div
        ref={bgCityRef}
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden will-change-transform"
      >
        <Image
          src={PORTFOLIO_IMAGES.experienceCity}
          alt="Futuristic Blue City Environment"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40 filter brightness-95 contrast-120"
        />
        {/* Layered dark gradients for matching screenshot's dark rocky mountains and floor */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/70 to-[#020408]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-transparent to-[#020408]" />
      </div>

      {/* Ambient lighting glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[450px] w-[450px] rounded-full bg-[#008CFF]/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#FF6B00]/15 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 items-start">

          {/* LEFT SIDE: EXPERIENCE SECTION ("My Journey") - takes 5 cols */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A3A3A3] uppercase">
                <span>My Experience —</span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
                My <span className="text-[#FF6B00]">Journey</span>
              </h2>

              <p className="text-sm leading-relaxed text-[#A3A3A3] max-w-sm">
                A timeline of my learning and professional growth.
              </p>

              <div>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#FF6B00] bg-transparent px-6 py-2.5 text-xs font-bold text-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.2)] transition-all duration-300 hover:bg-[#FF6B00] hover:text-black hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]"
                >
                  <span>View Experience</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Vertical glowing timeline */}
            <div className="timeline-container relative pl-8 pt-2">
              {/* Central Background Track Line */}
              <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-white/10" />

              {/* Progressively Drawing Line */}
              <div
                ref={timelineLineRef}
                className="absolute left-2.5 top-3 bottom-3 w-0.5 origin-top bg-gradient-to-b from-[#FF6B00] via-[#FF7A1A] to-[#FF6B00] shadow-[0_0_12px_#FF6B00] will-change-transform"
              />

              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-4">
                    {/* Glowing orange node */}
                    <div className="timeline-dot absolute -left-[27px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#FF6B00] bg-[#020408] shadow-[0_0_12px_#FF6B00]">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                    </div>

                    {/* Timeline item content */}
                    <div>
                      <span className="text-xs font-bold text-[#FF6B00] font-mono">
                        {item.period}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        {item.role}
                      </h3>
                      <p className="text-xs text-[#A3A3A3] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT SECTION CARD ("Let's Build Something Great.") - takes 7 cols */}
          <div id="contact" className="lg:col-span-7">
            <div
              ref={contactCardRef}
              className="relative overflow-hidden rounded-3xl border border-[#FF6B00]/40 bg-[#05080D]/90 p-8 sm:p-10 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,107,0,0.15)] will-change-transform"
            >
              {/* Orange curved accent along the top-left */}
              <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full border-t-2 border-l-2 border-[#FF6B00] opacity-80" />

              <div className="grid gap-8 md:grid-cols-12 items-center">

                {/* Left inside card: Contact Info & Action */}
                <div className="md:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF6B00] uppercase">
                    <span>Contact Me —</span>
                  </div>

                  <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
                    Let&apos;s Build <br />
                    <span className="text-[#FF6B00]">Something Great.</span>
                  </h2>

                  <p className="text-xs leading-relaxed text-[#A3A3A3]">
                    Have a project in mind? Feel free to reach out!
                  </p>

                  {/* Direct Email with copy */}
                  <div className="flex items-center gap-2 pt-1">
                    <Mail size={16} className="text-[#FF6B00]" />
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-xs sm:text-sm font-semibold text-white transition-colors hover:text-[#FF6B00] truncate"
                    >
                      {EMAIL}
                    </a>
                    <button
                      onClick={handleCopy}
                      className="p-1 text-[#A3A3A3] hover:text-[#FF6B00] transition-colors"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    </button>
                  </div>

                  {/* Social Icons row (GitHub, LinkedIn, Email) */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#020408]/80 text-white transition-all hover:border-[#FF6B00] hover:text-[#FF6B00] hover:shadow-[0_0_12px_rgba(255,107,0,0.3)]"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>

                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#020408]/80 text-white transition-all hover:border-[#008CFF] hover:text-[#008CFF] hover:shadow-[0_0_12px_rgba(0,140,255,0.3)]"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>

                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#020408]/80 text-white transition-all hover:border-[#FF6B00] hover:text-[#FF6B00] hover:shadow-[0_0_12px_rgba(255,107,0,0.3)]"
                      aria-label="Send Email"
                    >
                      <Mail size={15} />
                    </a>

                    {/* Toggle form button */}
                    <button
                      onClick={() => setShowForm(!showForm)}
                      className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#080F19] px-3.5 py-1.5 text-[11px] font-semibold text-neutral-300 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors"
                    >
                      <span>{showForm ? "Hide Form" : "Message Form"}</span>
                      <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>

                {/* Right inside card: Large Glowing Futuristic Email Illustration */}
                <div className="md:col-span-5 relative flex items-center justify-center">
                  <div className="relative aspect-square w-full max-w-[280px] flex items-center justify-center">
                    {/* Glowing circular pedestal light rings */}
                    <div className="absolute inset-0 rounded-full border border-[#008CFF]/40 shadow-[0_0_40px_rgba(0,140,255,0.4)] animate-spin-slow" />
                    <div className="absolute inset-4 rounded-full border border-[#FF6B00]/30 shadow-[0_0_30px_rgba(255,107,0,0.3)]" />

                    {/* Email hologram image */}
                    <div className="relative h-full w-full overflow-hidden p-2 flex items-center justify-center">
                      <Image
                        src={PORTFOLIO_IMAGES.contactEmail}
                        alt="Glowing Email Illustration Pedestal"
                        fill
                        sizes="(max-width: 768px) 100vw, 280px"
                        className="object-contain filter drop-shadow-[0_0_30px_rgba(0,140,255,0.6)] transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Subtle floating glow particles */}
                    <div className="pointer-events-none absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-[#008CFF] shadow-[0_0_8px_#008CFF]" />
                    <div className="pointer-events-none absolute bottom-6 left-4 h-1.5 w-1.5 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]" />
                  </div>
                </div>

              </div>

              {/* Collapsible interactive form */}
              {showForm && (
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 pt-6 border-t border-white/10 space-y-4 animate-in fade-in duration-300"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-300 uppercase mb-1">
                        Your Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Alex Smith"
                        className="w-full rounded-xl border border-white/10 bg-[#020408] px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-[#FF6B00] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-300 uppercase mb-1">
                        Your Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="alex@example.com"
                        className="w-full rounded-xl border border-white/10 bg-[#020408] px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-[#FF6B00] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-300 uppercase mb-1">
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      required
                      placeholder="Project Inquiry"
                      className="w-full rounded-xl border border-white/10 bg-[#020408] px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-[#FF6B00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-300 uppercase mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      placeholder="Tell me about your idea..."
                      className="w-full rounded-xl border border-white/10 bg-[#020408] px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-[#FF6B00] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-neutral-400">
                      Opens your default email client
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#FF6B00] px-5 py-2 text-xs font-bold text-black shadow-[0_0_15px_rgba(255,107,0,0.4)] hover:bg-[#FF7A1A] transition-colors"
                    >
                      <span>{isSubmitting ? "Opening..." : "Send Message"}</span>
                      <Send size={13} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Sci-fi ground divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#020408] to-transparent z-20" />
    </section>
  );
}

