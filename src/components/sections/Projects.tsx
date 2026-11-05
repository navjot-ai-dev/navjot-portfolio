"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Clock, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_IMAGES } from "@/lib/images";
import { SOCIAL_LINKS } from "@/lib/constants";
import { GithubIcon } from "@/components/ui/Icons";

type Project = {
  id: string;
  title: string;
  description: string;
  status: "In Development" | "Planned";
  tech: string[];
  imageSrc?: string;
  isDashboardImage?: boolean;
  githubUrl: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    id: "nexus",
    title: "Nexus",
    description: "A modern full-stack web application focused on scalable architecture, secure authentication, and high-performance APIs.",
    status: "In Development",
    tech: ["Next.js", "TypeScript", "Hono", "Better Auth", "PostgreSQL"],
    imageSrc: PORTFOLIO_IMAGES.projectsMonitor,
    isDashboardImage: true,
    githubUrl: SOCIAL_LINKS.github,
  },
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "A simple yet powerful developer utility for formatting, validating, and beautifying complex JSON data structures.",
    status: "In Development",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: SOCIAL_LINKS.github,
  },
  {
    id: "ai-tools-platform",
    title: "AI Tools Platform",
    description: "Exploring the possibilities of AI-powered web applications and machine intelligence tool suites with modern UI.",
    status: "Planned",
    tech: ["Next.js", "TypeScript", "AI APIs"],
    githubUrl: SOCIAL_LINKS.github,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
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
          y: 30,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        });
      }

      // 2. Project cards reveal one by one with subtle horizontal drift
      const projectCards = gsap.utils.toArray<HTMLElement>(".project-card");
      projectCards.forEach((card, i) => {
        const xOffset = i === 0 ? -35 : i === 2 ? 35 : 0;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            x: xOffset,
            scale: 0.94,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });

      // 3. Smooth image parallax inside project cards
      const parallaxImgs = gsap.utils.toArray<HTMLElement>(".project-parallax-inner");
      parallaxImgs.forEach((img) => {
        gsap.fromTo(
          img,
          {
            yPercent: -12,
            scale: 1.15,
          },
          {
            yPercent: 12,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".project-card"),
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080F19] py-28 px-6 lg:px-16"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#008CFF]/12 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[450px] w-[450px] rounded-full bg-[#FF6B00]/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#FF6B00] uppercase">
              My Projects —
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Some Of My <span className="text-[#FF6B00]">Recent Work</span>
            </h2>

            <p className="mt-3 text-base text-[#A3A3A3] max-w-xl">
              A showcase of my skills, architecture decisions, and creative engineering.
            </p>
          </div>

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0B1420] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:border-[#FF6B00]/60 hover:text-[#FF6B00]"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3 Premium Project Cards */}
        <div ref={cardsRef} className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => {
            const isNexus = project.id === "nexus";
            const isJson = project.id === "json-formatter";

            return (
              <article
                key={project.id}
                className="project-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0B1420]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FF6B00]/60 hover:shadow-[0_0_35px_rgba(255,107,0,0.22)] will-change-transform"
              >
                {/* Visual Image Preview Area with smooth zoom and internal parallax */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#05080D] border-b border-white/[0.06]">
                  {isNexus && project.imageSrc ? (
                    <div className="project-parallax-inner relative h-[120%] w-full -top-[10%] will-change-transform">
                      <Image
                        src={project.imageSrc}
                        alt="Nexus Dashboard Monitor Visual"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center filter brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1420] via-transparent to-transparent opacity-85" />
                    </div>
                  ) : isJson ? (
                    // Futuristic code/JSON formatter visual with parallax inner
                    <div className="project-parallax-inner relative flex h-[120%] w-full -top-[10%] flex-col justify-between p-6 bg-gradient-to-br from-[#080F19] to-[#05080D] will-change-transform">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-[11px] font-mono text-[#008CFF]">formatter.json</span>
                      </div>

                      <div className="my-auto flex items-center justify-center">
                        <div className="relative flex h-20 w-24 items-center justify-center rounded-2xl border border-[#008CFF]/30 bg-[#008CFF]/10 text-3xl font-mono font-bold text-[#008CFF] shadow-[0_0_25px_rgba(0,140,255,0.25)] transition-transform duration-500 group-hover:scale-110">
                          {"{ }"}
                          <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-[#FF6B00]" />
                        </div>
                      </div>

                      <div className="font-mono text-[10px] text-neutral-400">
                        <code>{`{ "status": 200, "valid": true }`}</code>
                      </div>
                    </div>
                  ) : (
                    // AI Tools Platform neural visual with parallax inner
                    <div className="project-parallax-inner relative flex h-[120%] w-full -top-[10%] items-center justify-center overflow-hidden bg-gradient-to-br from-[#080F19] via-[#0B1420] to-[#05080D] will-change-transform">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#008CFF_1px,transparent_1px)] [background-size:16px_16px]" />
                      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 shadow-[0_0_35px_rgba(168,85,247,0.3)] transition-transform duration-500 group-hover:scale-110">
                        <Sparkles className="h-10 w-10 text-purple-400" />
                        <div className="absolute inset-0 animate-ping rounded-full border border-purple-500/20 opacity-30" />
                      </div>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${
                        project.status === "In Development"
                          ? "border border-[#FF6B00]/40 bg-[#05080D]/85 text-[#FF6B00] shadow-[0_0_12px_rgba(255,107,0,0.25)]"
                          : "border border-purple-500/40 bg-[#05080D]/85 text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.25)]"
                      }`}
                    >
                      <Clock size={12} />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-[#FF6B00]">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#A3A3A3]">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-white/[0.08] bg-[#05080D]/60 px-2.5 py-1 text-xs font-mono text-neutral-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                    {/* GitHub Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#080F19] py-2.5 text-xs font-semibold text-white transition-all hover:border-[#FF6B00]/60 hover:text-[#FF6B00] hover:shadow-[0_0_15px_rgba(255,107,0,0.2)]"
                    >
                      <GithubIcon className="h-4 w-4" />
                      <span>GitHub</span>
                      <ArrowUpRight size={13} />
                    </a>

                    {/* Live Demo or Status Indicator */}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#FF6B00] py-2.5 text-xs font-bold text-black transition-all hover:bg-[#FF7A1A]"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/[0.06] bg-[#05080D]/50 py-2.5 text-xs font-medium text-neutral-400 select-none">
                        <span>{project.status === "In Development" ? "Build In Progress" : "Planned Roadmap"}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Subtle hover orange light border reflection */}
                <div className="absolute -bottom-10 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-[#FF6B00]/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
