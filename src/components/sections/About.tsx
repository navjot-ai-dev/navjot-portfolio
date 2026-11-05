"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Paintbrush,
  Flame,
  GraduationCap,
  Sparkles,
  Calendar,
  Trophy,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_IMAGES } from "@/lib/images";

const highlightCards = [
  {
    icon: CheckCircle2,
    title: "Clean Code",
  },
  {
    icon: Paintbrush,
    title: "Creative Design",
  },
  {
    icon: Flame,
    title: "Fast Performance",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
  },
];

const stats = [
  {
    icon: Sparkles,
    value: "1+",
    label: "Years Experience",
  },
  {
    icon: Calendar,
    value: "10+",
    label: "Projects Completed",
  },
  {
    icon: Trophy,
    value: "100%",
    label: "Dedication",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const sphereWrapperRef = useRef<HTMLDivElement>(null);
  const sphereImgRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // 1. Sphere smooth scale into view
      if (sphereWrapperRef.current) {
        gsap.fromTo(
          sphereWrapperRef.current,
          {
            scale: 0.75,
            opacity: 0,
            y: 50,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "top 35%",
              scrub: 0.6,
            },
          }
        );
      }

      // Continuous sphere rotation scrub
      if (sphereImgRef.current) {
        gsap.to(sphereImgRef.current, {
          rotateZ: 18,
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // 2. Text elements reveal line by line
      const textLines = gsap.utils.toArray<HTMLElement>(".about-text-reveal");
      gsap.fromTo(
        textLines,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: "top 80%",
          },
        }
      );

      // 3. Stats row entrance
      gsap.fromTo(
        ".about-stat-item",
        {
          opacity: 0,
          y: 20,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: "top 70%",
          },
        }
      );

      // 4. Feature cards appear sequentially
      gsap.fromTo(
        ".about-feature-card",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-feature-container",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#020408] py-28 px-6 lg:px-16"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[520px] w-[520px] rounded-full bg-[#008CFF]/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-36 bottom-10 h-[480px] w-[480px] rounded-full bg-[#FF6B00]/12 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12">

          {/* LEFT: Metallic Futuristic Sphere Visual (takes 5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div
              ref={sphereWrapperRef}
              className="relative aspect-square w-full max-w-[440px] select-none will-change-transform"
            >
              {/* Outer glowing orbital rings */}
              <div className="absolute inset-0 rounded-full border border-[#008CFF]/35 shadow-[0_0_50px_rgba(0,140,255,0.3)] animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-[#FF6B00]/30 shadow-[0_0_40px_rgba(255,107,0,0.25)]" />

              {/* Sphere image container */}
              <div
                ref={sphereImgRef}
                className="relative h-full w-full overflow-hidden rounded-full p-2 will-change-transform"
              >
                <Image
                  src={PORTFOLIO_IMAGES.aboutSphere}
                  alt="Metallic Futuristic Holographic Sphere"
                  fill
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-contain filter drop-shadow-[0_0_35px_rgba(0,140,255,0.5)] transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Holographic light accent */}
              <div className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#008CFF]/45 to-transparent blur-md" />
            </div>
          </div>

          {/* CENTER: About Details & 3 Stats (takes 4 cols) */}
          <div ref={textContainerRef} className="lg:col-span-4 space-y-6">

            {/* Header info */}
            <div>
              <div className="about-text-reveal inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A3A3A3] uppercase">
                <span>About Me</span>
                <span className="h-px w-8 bg-[#FF6B00]" />
              </div>

              <h2 className="about-text-reveal mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-snug">
                Passionate <span className="text-[#FF6B00]">Developer</span> &amp; Problem{" "}
                <span className="text-[#FF6B00]">Solver</span>
              </h2>

              <p className="about-text-reveal mt-4 text-sm leading-relaxed text-[#A3A3A3]">
                I&apos;m a Full Stack Developer who loves turning ideas into reality.
                I enjoy building scalable web applications, exploring new technologies,
                and learning every day.
              </p>
            </div>

            {/* Three small info cards below (exactly as in screenshot) */}
            <div className="grid grid-cols-3 gap-2.5 pt-3">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="about-stat-item flex flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-[#05080D]/90 p-3 text-center shadow-lg"
                  >
                    <Icon size={16} className="text-[#FF6B00] mb-1" />
                    <span className="text-lg font-black text-white">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-[#A3A3A3] font-medium leading-tight mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT: Four Feature Cards stacked vertically (takes 3 cols, exactly as in screenshot) */}
          <div className="lg:col-span-3">
            <div className="about-feature-container rounded-3xl border border-white/[0.08] bg-[#080F19]/80 p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.6)] space-y-3.5">
              {highlightCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="about-feature-card group flex items-center gap-3.5 rounded-xl border border-white/[0.05] bg-[#05080D]/70 p-3.5 transition-all duration-300 hover:border-[#FF6B00]/60 hover:bg-[#0B1420] hover:shadow-[0_0_15px_rgba(255,107,0,0.2)]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#FF6B00]/40 text-[#FF6B00] transition-colors group-hover:bg-[#FF6B00] group-hover:text-black">
                      <Icon size={16} />
                    </div>
                    <span className="text-sm font-bold text-white transition-colors group-hover:text-[#FF6B00]">
                      {card.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Rocky sci-fi ground divider between About and Skills */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#020408] to-transparent z-20" />
    </section>
  );
}
