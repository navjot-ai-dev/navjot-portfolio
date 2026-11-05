"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Play, Mail, Mouse } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_IMAGES } from "@/lib/images";
import { SOCIAL_LINKS } from "@/lib/constants";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const floatingCubesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // Background slow parallax scrub
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 20,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Left content parallax shift
      if (leftContentRef.current) {
        gsap.to(leftContentRef.current, {
          yPercent: 12,
          opacity: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Floating cubes independent parallax
      if (floatingCubesRef.current) {
        const cubes = floatingCubesRef.current.querySelectorAll(".parallax-cube");
        cubes.forEach((cube, i) => {
          gsap.to(cube, {
            yPercent: (i + 1) * -15,
            rotateZ: (i % 2 === 0 ? 1 : -1) * 20,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1 + i * 0.4,
            },
          });
        });
      }

      // Initial entrance reveal
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#05080D] pt-24 pb-16"
    >
      {/* BACKGROUND IMAGE WITH CINEMATIC MASKS & GRADIENTS */}
      <div
        ref={bgImageRef}
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <Image
          src={PORTFOLIO_IMAGES.heroTunnel}
          alt="Digital Tunnel Futuristic Environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-top opacity-55 lg:opacity-75 filter brightness-95 contrast-110"
        />
        {/* Layered dark gradients for seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080D] via-[#05080D]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080D] via-[#05080D]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080D]/80 via-transparent to-[#05080D]" />
        
        {/* Ambient colored lighting glows */}
        <div className="absolute top-1/4 right-1/4 h-[420px] w-[420px] rounded-full bg-[#008CFF]/20 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/3 h-[380px] w-[380px] rounded-full bg-[#FF6B00]/15 blur-[120px]" />
      </div>

      {/* FLOATING GLOWING CUBES LAYER */}
      <div
        ref={floatingCubesRef}
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      >
        {/* Cube 1: Orange glow cube top right */}
        <div className="parallax-cube animate-float-slow absolute top-[18%] right-[18%] h-16 w-16 rounded-xl border border-[#FF6B00]/60 bg-[#FF6B00]/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,107,0,0.5)]" />
        
        {/* Cube 2: Cyan electric cube middle right */}
        <div className="parallax-cube animate-float-delayed absolute top-[45%] right-[8%] h-24 w-24 rounded-2xl border border-[#008CFF]/60 bg-[#008CFF]/10 backdrop-blur-md shadow-[0_0_35px_rgba(0,140,255,0.4)]" />

        {/* Cube 3: Small orange cube bottom right */}
        <div className="parallax-cube animate-float-slow absolute bottom-[22%] right-[26%] h-12 w-12 rounded-lg border border-[#FF6B00]/50 bg-[#FF6B00]/10 backdrop-blur-sm shadow-[0_0_20px_rgba(255,107,0,0.4)]" />

        {/* Cube 4: Electric blue cube center right */}
        <div className="parallax-cube animate-float-delayed absolute top-[28%] right-[38%] h-10 w-10 rounded-lg border border-[#008CFF]/50 bg-[#008CFF]/15 backdrop-blur-sm shadow-[0_0_20px_rgba(0,140,255,0.4)]" />

        {/* Subtle glowing particles / dust */}
        <div className="absolute top-[35%] right-[22%] h-2 w-2 rounded-full bg-white shadow-[0_0_12px_#fff]" />
        <div className="absolute top-[52%] right-[30%] h-1.5 w-1.5 rounded-full bg-[#FF6B00] shadow-[0_0_10px_#FF6B00]" />
        <div className="absolute bottom-[35%] right-[15%] h-2 w-2 rounded-full bg-[#008CFF] shadow-[0_0_10px_#008CFF]" />
      </div>

      {/* VERTICAL SCROLL DOWN INDICATOR (as seen in reference design screenshot) */}
      <div className="hidden lg:flex fixed left-8 bottom-16 z-30 flex-col items-center gap-3 select-none">
        <div className="flex h-11 w-6 items-start justify-center rounded-full border border-white/20 bg-[#080F19]/60 p-1 backdrop-blur-md shadow-[0_0_15px_rgba(0,140,255,0.2)]">
          <span className="h-2 w-1 animate-bounce rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]" />
        </div>
        <span
          className="text-[10px] tracking-[0.3em] font-semibold text-neutral-400 uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll Down
        </span>
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* LEFT CONTENT */}
          <div ref={leftContentRef} className="lg:col-span-7 xl:col-span-7 space-y-6">
            
            {/* Small greeting */}
            <div className="hero-reveal inline-flex items-center gap-2.5 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]" />
              <span className="text-xs font-semibold tracking-wider text-neutral-300 uppercase">
                Hello, I&apos;m
              </span>
            </div>

            {/* Main heading */}
            <h1 className="hero-reveal text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[1.05]">
              Navjot <span className="text-[#FF6B00] text-glow-orange">Singh</span>
            </h1>

            {/* Role */}
            <div className="hero-reveal text-2xl font-bold tracking-tight text-neutral-200 sm:text-3xl md:text-4xl">
              Full Stack{" "}
              <span className="text-[#FF6B00]">Developer</span>
            </div>

            {/* Description */}
            <p className="hero-reveal max-w-xl text-base leading-relaxed text-[#A3A3A3] sm:text-lg">
              Building modern digital experiences with creativity and technology.
            </p>

            {/* CTA Buttons */}
            <div className="hero-reveal flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#FF6B00] px-8 py-3.5 text-base font-bold text-black shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#FF7A1A] hover:shadow-[0_0_45px_rgba(255,107,0,0.7)]"
              >
                <span>View My Projects</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#about"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-[#0B1420]/80 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#FF6B00]/60 hover:bg-[#0B1420] hover:text-[#FF6B00] hover:shadow-[0_0_20px_rgba(255,107,0,0.2)]"
              >
                <span>About Me</span>
                <Play
                  size={14}
                  className="fill-current text-[#FF6B00] transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>

            {/* Social links row */}
            <div className="hero-reveal flex items-center gap-4 pt-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#080F19]/80 text-[#A3A3A3] backdrop-blur-md transition-all duration-300 hover:border-[#FF6B00]/60 hover:bg-[#0B1420] hover:text-[#FF6B00] hover:shadow-[0_0_15px_rgba(255,107,0,0.3)]"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#080F19]/80 text-[#A3A3A3] backdrop-blur-md transition-all duration-300 hover:border-[#008CFF]/60 hover:bg-[#0B1420] hover:text-[#008CFF] hover:shadow-[0_0_15px_rgba(0,140,255,0.3)]"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#080F19]/80 text-[#A3A3A3] backdrop-blur-md transition-all duration-300 hover:border-[#FF6B00]/60 hover:bg-[#0B1420] hover:text-[#FF6B00] hover:shadow-[0_0_15px_rgba(255,107,0,0.3)]"
                aria-label="Send an email"
              >
                <Mail size={18} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE: Viewport area showcasing the 3D perspective depth */}
          <div className="lg:col-span-5 hidden lg:block" />
        </div>
      </div>

      {/* Bottom transition border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
