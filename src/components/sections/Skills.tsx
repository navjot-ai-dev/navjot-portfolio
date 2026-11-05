"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_IMAGES } from "@/lib/images";
import {
  NextjsIcon,
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  BetterAuthIcon,
} from "@/components/ui/Icons";

const skills = [
  {
    name: "Next.js",
    icon: NextjsIcon,
    accentColor: "text-white",
    cardBorder: "border-white/20",
    glowColor: "rgba(255, 255, 255, 0.4)",
  },
  {
    name: "React",
    icon: ReactIcon,
    accentColor: "text-[#00D8FF]",
    cardBorder: "border-[#00D8FF]/30",
    glowColor: "rgba(0, 216, 255, 0.4)",
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
    accentColor: "text-[#3178C6]",
    cardBorder: "border-[#3178C6]/30",
    glowColor: "rgba(49, 120, 198, 0.4)",
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    accentColor: "text-[#38BDF8]",
    cardBorder: "border-[#38BDF8]/30",
    glowColor: "rgba(56, 189, 248, 0.4)",
  },
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
    accentColor: "text-[#F7DF1E]",
    cardBorder: "border-[#F7DF1E]/30",
    glowColor: "rgba(247, 223, 30, 0.4)",
  },
  {
    name: "Auth",
    icon: BetterAuthIcon,
    accentColor: "text-[#A855F7]",
    cardBorder: "border-[#A855F7]/30",
    glowColor: "rgba(168, 85, 247, 0.4)",
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const holoWrapperRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // 1. Background holographic image clip-path reveal
      if (holoWrapperRef.current) {
        gsap.fromTo(
          holoWrapperRef.current,
          {
            clipPath: "inset(12% 6% 12% 6% round 24px)",
            opacity: 0,
            scale: 0.92,
          },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 30%",
              scrub: 0.8,
            },
          }
        );
      }

      // 2. Left column entrance
      if (leftColRef.current) {
        gsap.from(leftColRef.current.children, {
          opacity: 0,
          x: -30,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 80%",
          },
        });
      }

      // 3. Staggered card entrance on the right
      if (cardsGridRef.current) {
        gsap.fromTo(
          ".skill-card-screenshot",
          {
            opacity: 0,
            y: 45,
            scale: 0.88,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 0.75,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: cardsGridRef.current,
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
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#020408] py-28 px-6 lg:px-16"
    >
      {/* HOLOGRAPHIC PROGRAMMING BACKGROUND IMAGE */}
      <div
        ref={holoWrapperRef}
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden will-change-transform"
      >
        <Image
          src={PORTFOLIO_IMAGES.skillsHolo}
          alt="Holographic Programming Environment"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35 filter blur-[0.5px] brightness-95 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-[#020408]/75 to-[#020408]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-transparent to-[#020408]" />
      </div>

      {/* Ambient glow lights */}
      <div className="pointer-events-none absolute top-10 left-1/3 h-[420px] w-[420px] rounded-full bg-[#008CFF]/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-[380px] w-[380px] rounded-full bg-[#FF6B00]/15 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12">

          {/* LEFT SIDE: Heading & Explore All Skills button (takes 4 cols, exactly as in screenshot) */}
          <div ref={leftColRef} className="lg:col-span-4 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A3A3A3] uppercase">
              <span>My Skills —</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
              Technologies <br />
              <span className="text-[#FF6B00]">I Work With</span>
            </h2>

            <p className="text-sm leading-relaxed text-[#A3A3A3] max-w-sm">
              A modern stack for modern solutions.
            </p>

            <div className="pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full border border-[#FF6B00] bg-transparent px-6 py-2.5 text-xs font-bold text-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.2)] transition-all duration-300 hover:bg-[#FF6B00] hover:text-black hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]"
              >
                <span>Explore All Skills</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Six Technology Cards on Glowing Pedestal (takes 8 cols, exactly as in screenshot) */}
          <div className="lg:col-span-8 relative">

            {/* Glowing pedestal base floor reflection beneath the cards */}
            <div className="absolute -bottom-6 left-0 right-0 h-16 bg-gradient-to-r from-transparent via-[#008CFF]/20 to-transparent blur-xl" />
            <div className="absolute -bottom-2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent shadow-[0_0_10px_#FF6B00]" />

            <div
              ref={cardsGridRef}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5"
            >
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="skill-card-screenshot group relative flex flex-col items-center justify-between rounded-2xl border border-white/[0.1] bg-[#05080D]/85 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#FF6B00] hover:shadow-[0_0_30px_rgba(255,107,0,0.35)] will-change-transform aspect-[4/5]"
                  >
                    {/* Top Icon inside dark square */}
                    <div className="my-auto flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.08] bg-[#020408]/90 transition-transform duration-300 group-hover:scale-110">
                      <Icon className={`h-8 w-8 ${skill.accentColor} transition-transform duration-300`} />
                    </div>

                    {/* Skill Label below */}
                    <span className="text-xs font-bold text-white transition-colors group-hover:text-[#FF6B00]">
                      {skill.name}
                    </span>

                    {/* Pedestal disc glow effect below each card */}
                    <div className="absolute -bottom-3 left-1/2 h-2 w-12 -translate-x-1/2 rounded-full bg-[#008CFF]/50 blur-sm opacity-60 transition-opacity group-hover:opacity-100 group-hover:bg-[#FF6B00]" />
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* Sci-fi floor divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#020408] to-transparent z-20" />
    </section>
  );
}
