"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_IMAGES } from "@/lib/images";
import {
  NextjsIcon,
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  HonoIcon,
  BetterAuthIcon,
  DrizzleIcon,
  PostgresIcon,
  GitIcon,
} from "@/components/ui/Icons";

type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  type: "CORE" | "LEARNING";
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  glowColor: string;
};

const skills: Skill[] = [
  {
    name: "Next.js",
    category: "Frontend",
    type: "CORE",
    icon: NextjsIcon,
    accentColor: "text-white",
    glowColor: "rgba(255, 255, 255, 0.35)",
  },
  {
    name: "React",
    category: "Frontend",
    type: "CORE",
    icon: ReactIcon,
    accentColor: "text-[#00D8FF]",
    glowColor: "rgba(0, 216, 255, 0.35)",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    type: "CORE",
    icon: TypeScriptIcon,
    accentColor: "text-[#3178C6]",
    glowColor: "rgba(49, 120, 198, 0.35)",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    type: "CORE",
    icon: JavaScriptIcon,
    accentColor: "text-[#F7DF1E]",
    glowColor: "rgba(247, 223, 30, 0.35)",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    type: "CORE",
    icon: TailwindIcon,
    accentColor: "text-[#38BDF8]",
    glowColor: "rgba(56, 189, 248, 0.35)",
  },
  {
    name: "Hono",
    category: "Backend",
    type: "LEARNING",
    icon: HonoIcon,
    accentColor: "text-[#FF6B00]",
    glowColor: "rgba(255, 107, 0, 0.35)",
  },
  {
    name: "Better Auth",
    category: "Backend",
    type: "LEARNING",
    icon: BetterAuthIcon,
    accentColor: "text-[#A855F7]",
    glowColor: "rgba(168, 85, 247, 0.35)",
  },
  {
    name: "Drizzle ORM",
    category: "Database",
    type: "LEARNING",
    icon: DrizzleIcon,
    accentColor: "text-[#C5F74F]",
    glowColor: "rgba(197, 247, 79, 0.35)",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    type: "LEARNING",
    icon: PostgresIcon,
    accentColor: "text-[#336791]",
    glowColor: "rgba(51, 103, 145, 0.35)",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    type: "CORE",
    icon: GitIcon,
    accentColor: "text-[#F05032]",
    glowColor: "rgba(240, 80, 50, 0.35)",
  },
];

export default function Skills() {
  const [filter, setFilter] = useState<"ALL" | "CORE" | "LEARNING">("ALL");
  const sectionRef = useRef<HTMLElement>(null);
  const holoWrapperRef = useRef<HTMLDivElement>(null);
  const holoImgRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredSkills = skills.filter((skill) => {
    if (filter === "ALL") return true;
    return skill.type === filter;
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // 1. Programming image reveals with smooth clipping/mask and scale animation
      if (holoWrapperRef.current) {
        gsap.fromTo(
          holoWrapperRef.current,
          {
            clipPath: "inset(14% 8% 14% 8% round 28px)",
            opacity: 0,
            scale: 0.9,
          },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            opacity: 1,
            scale: 1,
            duration: 1.4,
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

      // Parallax scrub on inner image
      if (holoImgRef.current) {
        gsap.to(holoImgRef.current, {
          yPercent: 18,
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

      // 2. Section Header entrance
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

      // 3. Skill cards appear with staggered entrance
      if (gridRef.current) {
        gsap.fromTo(
          ".skill-pod",
          {
            opacity: 0,
            y: 45,
            scale: 0.88,
            rotateX: 15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            stagger: 0.05,
            duration: 0.7,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [filter]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#05080D] py-28 px-6 lg:px-16"
    >
      {/* HOLOGRAPHIC PROGRAMMING BACKGROUND IMAGE WITH CLIPPING MASK */}
      <div
        ref={holoWrapperRef}
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden will-change-transform"
      >
        <div ref={holoImgRef} className="relative h-full w-full will-change-transform">
          <Image
            src={PORTFOLIO_IMAGES.skillsHolo}
            alt="Holographic Programming Environment"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30 filter blur-[0.5px] brightness-95 contrast-125"
          />
        </div>
        {/* Layered masks to blend naturally with page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080D] via-[#05080D]/75 to-[#05080D]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080D] via-transparent to-[#05080D]" />
      </div>

      {/* Ambient ambient glow circles */}
      <div className="pointer-events-none absolute top-10 left-1/3 h-[420px] w-[420px] rounded-full bg-[#008CFF]/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-[380px] w-[380px] rounded-full bg-[#FF6B00]/12 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#FF6B00] uppercase">
              My Skills —
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Technologies <span className="text-[#FF6B00]">I Work With</span>
            </h2>

            <p className="mt-3 text-base text-[#A3A3A3] max-w-lg">
              A modern stack for modern solutions. Focused on speed, developer experience, and scalability.
            </p>
          </div>

          {/* Filter Pills (All / Core / Learning) */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0B1420]/80 p-1.5 backdrop-blur-md">
            {(["ALL", "CORE", "LEARNING"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold tracking-wide transition-all ${
                  filter === tab
                    ? "bg-[#FF6B00] text-black shadow-[0_0_15px_rgba(255,107,0,0.4)]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {tab === "ALL" ? "All Tech" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* SCI-FI HOLOGRAPHIC TECH CARDS GRID */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            const isCore = skill.type === "CORE";

            return (
              <div
                key={skill.name}
                className="skill-pod group relative flex flex-col items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0B1420]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#FF6B00]/60 hover:shadow-[0_0_30px_rgba(255,107,0,0.25)] will-change-transform"
              >
                {/* Status tag */}
                <div className="w-full flex items-center justify-between">
                  <span
                    className={`rounded-md px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider ${
                      isCore
                        ? "border border-[#FF6B00]/40 bg-[#FF6B00]/10 text-[#FF6B00]"
                        : "border border-[#008CFF]/40 bg-[#008CFF]/10 text-[#008CFF]"
                    }`}
                  >
                    {skill.type}
                  </span>
                  <span className="text-[10px] font-medium text-neutral-400">
                    {skill.category}
                  </span>
                </div>

                {/* Tech Icon inside glass capsule with subtle hover interactions */}
                <div className="relative my-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#080F19]/90 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2">
                  <Icon className={`h-8 w-8 ${skill.accentColor} transition-transform duration-300 group-hover:scale-110`} />
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50"
                    style={{ backgroundColor: skill.glowColor }}
                  />
                </div>

                {/* Tech Name */}
                <div className="text-center">
                  <h3 className="text-base font-bold text-white transition-colors group-hover:text-[#FF6B00]">
                    {skill.name}
                  </h3>
                </div>

                {/* Holographic floor reflection beam */}
                <div className="absolute -bottom-1 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#FF6B00]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        {/* Holographic Pedestal Base Platform visual */}
        <div className="mt-14 relative flex items-center justify-center">
          <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-[#008CFF]/40 to-transparent" />
          <div className="absolute h-8 w-3/4 rounded-full bg-gradient-to-r from-transparent via-[#008CFF]/15 to-transparent blur-xl" />
        </div>

      </div>
    </section>
  );
}
