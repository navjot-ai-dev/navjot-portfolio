"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Code2,
  Palette,
  Zap,
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
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable, scalable, and modern TypeScript & React code.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    desc: "Crafting intuitive, futuristic, and memorable user interfaces.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    desc: "Optimizing web performance, load speed, and snappy interactions.",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    desc: "Constantly exploring full-stack ecosystems, auth, and backend tooling.",
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
  const bgGlowLeftRef = useRef<HTMLDivElement>(null);
  const bgGlowRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // 1. Background & Foreground move at different speeds (Parallax)
      if (bgGlowLeftRef.current) {
        gsap.to(bgGlowLeftRef.current, {
          yPercent: -25,
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (bgGlowRightRef.current) {
        gsap.to(bgGlowRightRef.current, {
          yPercent: 30,
          scale: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 2. Metallic sphere smoothly scales into view with ScrollTrigger
      if (sphereWrapperRef.current) {
        gsap.fromTo(
          sphereWrapperRef.current,
          {
            scale: 0.72,
            opacity: 0,
            y: 60,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.2,
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

      // Sphere image continuous parallax rotation
      if (sphereImgRef.current) {
        gsap.to(sphereImgRef.current, {
          rotateZ: 15,
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // 3. Text reveals line by line
      const textLines = gsap.utils.toArray<HTMLElement>(".about-text-reveal");
      gsap.fromTo(
        textLines,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.14,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: "top 80%",
          },
        }
      );

      // 4. Stats row entrance
      gsap.fromTo(
        ".about-stat-item",
        {
          opacity: 0,
          y: 25,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: "top 70%",
          },
        }
      );

      // 5. About cards appear one after another
      gsap.fromTo(
        ".about-card",
        {
          opacity: 0,
          y: 45,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-cards-container",
            start: "top 85%",
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
      className="relative overflow-hidden bg-[#080F19] py-28 px-6 lg:px-16"
    >
      {/* Background ambient lighting with parallax refs */}
      <div
        ref={bgGlowLeftRef}
        className="pointer-events-none absolute -left-48 top-1/4 h-[520px] w-[520px] rounded-full bg-[#008CFF]/15 blur-[140px] will-change-transform"
      />
      <div
        ref={bgGlowRightRef}
        className="pointer-events-none absolute -right-36 bottom-10 h-[480px] w-[480px] rounded-full bg-[#FF6B00]/12 blur-[130px] will-change-transform"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-12">

          {/* LEFT: Metallic Futuristic Sphere Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div
              ref={sphereWrapperRef}
              className="relative aspect-square w-full max-w-[480px] select-none will-change-transform"
            >
              {/* Outer glowing orbital rings with parallax spin */}
              <div className="absolute inset-0 rounded-full border border-[#008CFF]/30 shadow-[0_0_50px_rgba(0,140,255,0.25)] animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-[#FF6B00]/25 shadow-[0_0_40px_rgba(255,107,0,0.2)]" />

              {/* Sphere image container */}
              <div
                ref={sphereImgRef}
                className="relative h-full w-full overflow-hidden rounded-full p-2 will-change-transform"
              >
                <Image
                  src={PORTFOLIO_IMAGES.aboutSphere}
                  alt="Metallic Futuristic Holographic Sphere"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-contain filter drop-shadow-[0_0_35px_rgba(0,140,255,0.4)] transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Holographic light accent */}
              <div className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#008CFF]/40 to-transparent blur-md" />
            </div>
          </div>

          {/* RIGHT: About Details & Glassmorphism Cards */}
          <div ref={textContainerRef} className="lg:col-span-7 space-y-8">

            {/* Header info (line by line reveal) */}
            <div>
              <div className="about-text-reveal inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#FF6B00] uppercase">
                About Me —
              </div>

              <h2 className="about-text-reveal mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
                Passionate <span className="text-[#FF6B00]">Developer</span> & Problem{" "}
                <span className="text-[#FF6B00]">Solver</span>
              </h2>

              <p className="about-text-reveal mt-5 text-base sm:text-lg leading-relaxed text-[#A3A3A3]">
                I&apos;m a Full Stack Developer who loves turning ideas into reality.
                I enjoy building scalable web applications, exploring new technologies,
                and learning every day.
              </p>
            </div>

            {/* Stats row (from reference) */}
            <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-5">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="about-stat-item flex flex-col items-start gap-1">
                    <div className="flex items-center gap-1.5 text-[#FF6B00]">
                      <Icon size={18} />
                      <span className="text-xl sm:text-2xl font-black text-white">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-xs text-[#A3A3A3] font-medium">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Four Glassmorphism Cards */}
            <div className="about-cards-container grid gap-4 sm:grid-cols-2">
              {highlightCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="about-card group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B1420]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B00]/60 hover:shadow-[0_0_25px_rgba(255,107,0,0.25)] will-change-transform"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 text-[#FF6B00] shadow-[0_0_12px_rgba(255,107,0,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF6B00] group-hover:text-black">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white transition-colors group-hover:text-[#FF6B00]">
                          {card.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-[#A3A3A3]">
                          {card.desc}
                        </p>
                      </div>
                    </div>

                    {/* Subtle corner light line */}
                    <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-[#FF6B00]/10 blur-xl transition-all duration-500 group-hover:bg-[#FF6B00]/25" />
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
