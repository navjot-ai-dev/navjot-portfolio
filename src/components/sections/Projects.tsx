"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_IMAGES } from "@/lib/images";
import { SOCIAL_LINKS } from "@/lib/constants";

type Project = {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  isDashboard?: boolean;
  githubUrl: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    id: "nexus",
    title: "Nexus",
    description: "A modern web platform with amazing features.",
    imageSrc: PORTFOLIO_IMAGES.projectsMonitor,
    isDashboard: true,
    githubUrl: SOCIAL_LINKS.github,
    demoUrl: "#",
  },
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "A simple yet powerful tool for JSON.",
    githubUrl: SOCIAL_LINKS.github,
    demoUrl: "#",
  },
  {
    id: "ai-platform",
    title: "AI Platform",
    description: "Explore the power of AI with modern UI.",
    githubUrl: SOCIAL_LINKS.github,
    demoUrl: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // 1. Left column entrance
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

      // 2. Project cards reveal one by one
      if (cardsGridRef.current) {
        gsap.fromTo(
          ".project-card-screenshot",
          {
            opacity: 0,
            y: 50,
            scale: 0.94,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.14,
            duration: 0.85,
            ease: "power3.out",
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
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#020408] py-28 px-6 lg:px-16"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#008CFF]/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[450px] w-[450px] rounded-full bg-[#FF6B00]/12 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12">

          {/* LEFT SIDE: Heading & View All Projects Button (takes 3.5 cols, exactly as in screenshot) */}
          <div ref={leftColRef} className="lg:col-span-4 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A3A3A3] uppercase">
              <span>My Projects —</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
              Some Of My <br />
              <span className="text-[#FF6B00]">Recent Work</span>
            </h2>

            <p className="text-sm leading-relaxed text-[#A3A3A3] max-w-sm">
              A showcase of my skills and creativity.
            </p>

            <div className="pt-2">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[#FF6B00] bg-transparent px-6 py-2.5 text-xs font-bold text-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.2)] transition-all duration-300 hover:bg-[#FF6B00] hover:text-black hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]"
              >
                <span>View All Projects</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: 3 Large Project Cards in a row (takes 8.5 cols, exactly as in screenshot) */}
          <div ref={cardsGridRef} className="lg:col-span-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const isNexus = project.id === "nexus";
                const isJson = project.id === "json-formatter";

                return (
                  <article
                    key={project.id}
                    className="project-card-screenshot group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.1] bg-[#05080D]/85 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FF6B00] hover:shadow-[0_0_35px_rgba(255,107,0,0.25)] will-change-transform"
                  >
                    {/* Visual Image Preview Area */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#020408] border-b border-white/[0.08]">
                      {isNexus && project.imageSrc ? (
                        <div className="relative h-full w-full">
                          <Image
                            src={project.imageSrc}
                            alt="Nexus Dashboard Monitor Visual"
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className="object-cover object-center filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#05080D] via-transparent to-transparent opacity-80" />
                        </div>
                      ) : isJson ? (
                        // Futuristic code/JSON formatter visual
                        <div className="relative flex h-full w-full flex-col justify-between p-4 bg-gradient-to-br from-[#080F19] to-[#020408]">
                          <div className="flex items-center justify-between">
                            <div className="flex gap-1">
                              <span className="h-2 w-2 rounded-full bg-red-500/80" />
                              <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                              <span className="h-2 w-2 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-[10px] font-mono text-[#008CFF]">formatter.json</span>
                          </div>

                          <div className="my-auto flex items-center justify-center">
                            <div className="relative flex h-14 w-16 items-center justify-center rounded-xl border border-[#008CFF]/40 bg-[#008CFF]/10 text-2xl font-mono font-bold text-[#008CFF] shadow-[0_0_20px_rgba(0,140,255,0.3)] transition-transform duration-300 group-hover:scale-110">
                              {"{ }"}
                            </div>
                          </div>

                          <div className="font-mono text-[9px] text-neutral-400">
                            <code>{`{ "status": "active" }`}</code>
                          </div>
                        </div>
                      ) : (
                        // AI Platform holographic visual
                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#080F19] via-[#05080D] to-[#020408]">
                          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#008CFF_1px,transparent_1px)] [background-size:12px_12px]" />
                          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 shadow-[0_0_30px_rgba(168,85,247,0.35)] transition-transform duration-300 group-hover:scale-110">
                            <Sparkles className="h-8 w-8 text-purple-400" />
                            <div className="absolute inset-0 animate-ping rounded-full border border-purple-500/20 opacity-30" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Content (Title, Description, and Live Demo / GitHub buttons) */}
                    <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#FF6B00]">
                          {project.title}
                        </h3>

                        <p className="mt-1 text-xs leading-relaxed text-[#A3A3A3]">
                          {project.description}
                        </p>
                      </div>

                      {/* Action Buttons: Live Demo and GitHub (as seen in screenshot) */}
                      <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
                        <a
                          href={project.demoUrl || "#"}
                          className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg border border-white/10 bg-[#080F19] py-2 text-[11px] font-semibold text-white transition-all hover:border-[#FF6B00] hover:text-[#FF6B00]"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={12} />
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg border border-white/10 bg-[#080F19] py-2 text-[11px] font-semibold text-white transition-all hover:border-[#FF6B00] hover:text-[#FF6B00]"
                        >
                          <span>GitHub</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>

                    {/* Subtle hover orange reflection */}
                    <div className="absolute -bottom-8 left-1/2 h-12 w-3/4 -translate-x-1/2 rounded-full bg-[#FF6B00]/15 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </article>
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
