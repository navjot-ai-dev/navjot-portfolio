"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { BookOpen, Code2, Layers3, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_IMAGES } from "@/lib/images";

const milestones = [
  {
    phase: "01",
    title: "Started Web Development",
    subtitle: "Foundation & Core Fundamentals",
    description:
      "Explored web fundamentals, mastering semantic HTML, modern CSS styling, and JavaScript logic to understand how web applications function from first principles.",
    icon: BookOpen,
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    phase: "02",
    title: "Frontend Development",
    subtitle: "Component Architecture & Modern UI",
    description:
      "Advanced into React and Next.js, developing responsive interfaces, component hierarchies, state management, and utility-first styling with Tailwind CSS.",
    icon: Code2,
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    phase: "03",
    title: "Full Stack Learning",
    subtitle: "APIs, Authentication & Databases",
    description:
      "Deepened expertise in backend concepts, micro-frameworks like Hono, type-safe database schemas with Drizzle ORM, relational databases with PostgreSQL, and modern auth with Better Auth.",
    icon: Layers3,
    tags: ["Hono", "Better Auth", "Drizzle ORM", "PostgreSQL"],
  },
  {
    phase: "04",
    title: "Building Real-World Products",
    subtitle: "End-to-End Execution & Architecture",
    description:
      "Designing and shipping end-to-end applications, solving real-world challenges, exploring AI tooling integrations, and continuously expanding full-stack engineering skills.",
    icon: Rocket,
    tags: ["Full Stack Architecture", "System Design", "Product Building"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgCityRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // 1. Header entrance
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

      // 2. Futuristic city background parallax scrub
      if (bgCityRef.current) {
        gsap.to(bgCityRef.current, {
          yPercent: 24,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 3. Timeline line progressively draws as user scrolls
      if (lineProgressRef.current && timelineRef.current) {
        gsap.fromTo(
          lineProgressRef.current,
          {
            scaleY: 0,
          },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 65%",
              end: "bottom 75%",
              scrub: 0.6,
            },
          }
        );
      }

      // 4. Timeline indicators activate sequentially
      const nodes = gsap.utils.toArray<HTMLElement>(".timeline-node");
      nodes.forEach((node) => {
        gsap.fromTo(
          node,
          {
            scale: 0.8,
            borderColor: "rgba(255, 255, 255, 0.2)",
            backgroundColor: "#05080D",
          },
          {
            scale: 1.15,
            borderColor: "#FF6B00",
            backgroundColor: "#080F19",
            boxShadow: "0 0 25px rgba(255, 107, 0, 0.8)",
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: node,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 5. Timeline content cards slide smoothly into view
      const timelineCards = gsap.utils.toArray<HTMLElement>(".timeline-card");
      timelineCards.forEach((card, index) => {
        const isRightSide = index % 2 !== 0;
        const xOffset = isRightSide ? 50 : -50;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: xOffset,
            scale: 0.94,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#05080D] py-28 px-6 lg:px-16"
    >
      {/* FUTURISTIC BLUE CITY BACKGROUND WITH PARALLAX */}
      <div
        ref={bgCityRef}
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden will-change-transform"
      >
        <Image
          src={PORTFOLIO_IMAGES.experienceCity}
          alt="Futuristic Blue City Environment"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 lg:opacity-40 filter brightness-90 contrast-115"
        />
        {/* Layered dark gradients for seamless cinematic blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080D] via-[#05080D]/75 to-[#05080D]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080D] via-transparent to-[#05080D]" />
      </div>

      {/* Ambient lighting glows */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-[#008CFF]/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-[#FF6B00]/12 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Section Heading */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#FF6B00] uppercase">
            My Experience —
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            My <span className="text-[#FF6B00]">Journey</span>
          </h2>

          <p className="mt-3 text-base text-[#A3A3A3]">
            A timeline of my learning, technical evolution, and dedication to building modern software.
          </p>
        </div>

        {/* VERTICAL TIMELINE */}
        <div ref={timelineRef} className="relative">

          {/* Background Central Track Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-white/10" />

          {/* Active Glowing Line that progressively draws on scroll */}
          <div
            ref={lineProgressRef}
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 origin-top bg-gradient-to-b from-[#FF6B00] via-[#008CFF] to-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.8)] will-change-transform"
          />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.phase}
                  className={`timeline-item relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="timeline-node absolute left-6 md:left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-[#05080D] z-20 transition-all duration-300 will-change-transform">
                    <div className="h-4 w-4 rounded-full bg-[#FF6B00] shadow-[0_0_10px_#FF6B00]" />
                  </div>

                  {/* Card Content (slides in from left or right) */}
                  <div className="w-full pl-16 md:pl-0 md:w-1/2">
                    <div
                      className={`timeline-card group relative rounded-2xl border border-white/[0.08] bg-[#0B1420]/85 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B00]/60 hover:shadow-[0_0_25px_rgba(255,107,0,0.2)] will-change-transform ${
                        isEven ? "md:mr-10 text-left md:text-right" : "md:ml-10 text-left"
                      }`}
                    >
                      {/* Phase & Subtitle */}
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        <span className="font-mono text-xs font-bold text-[#FF6B00]">
                          PHASE {item.phase}
                        </span>
                        <span className="text-neutral-400">•</span>
                        <span className="text-xs text-[#A3A3A3] font-medium">
                          {item.subtitle}
                        </span>
                      </div>

                      {/* Main Title with Icon */}
                      <div
                        className={`flex items-center gap-2.5 ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF6B00]/10 text-[#FF6B00]">
                          <Icon size={16} />
                        </div>
                        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#FF6B00]">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="mt-2.5 text-sm leading-relaxed text-[#A3A3A3]">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div
                        className={`mt-4 flex flex-wrap gap-2 ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/[0.06] bg-[#05080D]/60 px-2 py-0.5 text-[11px] font-mono text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Glow corner */}
                      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[#FF6B00]/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
