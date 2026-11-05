"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_IMAGES } from "@/lib/images";
import { SOCIAL_LINKS } from "@/lib/constants";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      // 1. Smooth entrance animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-intro", {
        opacity: 0,
        x: -25,
        duration: 0.8,
      })
      .from(".hero-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
      }, "-=0.5")
      .from(".hero-subtitle", {
        opacity: 0,
        y: 25,
        duration: 0.8,
      }, "-=0.6")
      .from(".hero-description", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      }, "-=0.6")
      .from(".hero-btn", {
        opacity: 0,
        scale: 0.92,
        y: 20,
        stagger: 0.12,
        duration: 0.7,
        ease: "back.out(1.5)",
      }, "-=0.5")
      .from(".hero-social-link", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.08,
        duration: 0.6,
      }, "-=0.4")
      .from(scrollIndicatorRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
      }, "-=0.6");

      // 2. Subtle background parallax (moves slower than foreground)
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 20,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }

      // 3. Smooth hero exit transition when scrolling down
      if (leftContentRef.current) {
        gsap.to(leftContentRef.current, {
          y: -90,
          opacity: 0,
          scale: 0.96,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "75% top",
            scrub: 0.3,
          },
        });
      }

      if (scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          opacity: 0,
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "30% top",
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#020408] pt-24 pb-16"
    >
      {/* 1. ATTACHED FUTURISTIC PLANET & CITY BACKGROUND IMAGE */}
      <div
        ref={bgImageRef}
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden will-change-transform"
      >
        <Image
          src={PORTFOLIO_IMAGES.heroPlanetCity}
          alt="Futuristic Ringed Planet and Neon City Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] lg:object-[82%_center] filter brightness-95 contrast-110"
        />

        {/* Subtle dark gradient overlay on the left for maximum text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-[#020408]/85 md:via-[#020408]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-[#020408]/40" />

        {/* Subtle blue and orange atmospheric lighting */}
        <div className="absolute top-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-[#008CFF]/20 blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-[#FF6B00]/12 blur-[120px]" />
      </div>

      {/* VERTICAL SCROLL DOWN INDICATOR ON THE LEFT */}
      <div
        ref={scrollIndicatorRef}
        className="hidden lg:flex fixed left-8 bottom-12 z-30 flex-col items-center gap-3 select-none will-change-transform"
      >
        <div className="flex h-11 w-6 items-start justify-center rounded-full border border-white/20 bg-[#020408]/80 p-1 backdrop-blur-md shadow-[0_0_15px_rgba(0,140,255,0.25)]">
          <span className="h-2.5 w-1 animate-bounce rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]" />
        </div>
        <span
          className="text-[10px] tracking-[0.3em] font-semibold text-neutral-400 uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll Down
        </span>
      </div>

      {/* 3. HERO CONTENT: ALL TEXT ALIGNED ON THE LEFT */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* Left Column Content */}
          <div
            ref={leftContentRef}
            className="lg:col-span-8 xl:col-span-7 space-y-6 will-change-transform"
          >
            {/* Small introduction */}
            <div className="hero-intro inline-flex items-center gap-3">
              <span className="text-sm font-semibold tracking-wide text-white">
                Hello, I&apos;m
              </span>
              <span className="h-2 w-2 rounded-full bg-[#FF6B00] shadow-[0_0_10px_#FF6B00]" />
              <span className="h-0.5 w-10 bg-gradient-to-r from-[#FF6B00] to-transparent" />
            </div>

            {/* Main heading: Navjot (white) Singh (orange) */}
            <h1 className="hero-heading text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[1.05]">
              Navjot <span className="text-[#FF6B00] text-glow-orange">Singh</span>
            </h1>

            {/* Subtitle: Full Stack Developer */}
            <div className="hero-subtitle text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Full Stack <span className="text-[#FF6B00]">Developer</span>
            </div>

            {/* Description */}
            <p className="hero-description max-w-xl text-base leading-relaxed text-[#A3A3A3] sm:text-lg">
              Building modern digital experiences with creativity and technology.
            </p>

            {/* Buttons: View My Projects → and About Me → */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="hero-btn group relative inline-flex items-center gap-3 rounded-full bg-[#FF6B00] px-8 py-3.5 text-base font-bold text-black shadow-[0_0_30px_rgba(255,107,0,0.45)] transition-all duration-300 hover:scale-105 hover:bg-[#FF7A1A] hover:shadow-[0_0_45px_rgba(255,107,0,0.8)]"
              >
                <span>View My Projects</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#about"
                className="hero-btn group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-[#080F19]/90 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#FF6B00]/60 hover:text-[#FF6B00] hover:shadow-[0_0_20px_rgba(255,107,0,0.25)]"
              >
                <span>About Me</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Below buttons: Social Icons (GitHub, LinkedIn, Email) */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#05080D]/80 text-white backdrop-blur-md transition-all duration-300 hover:border-[#FF6B00] hover:bg-[#080F19] hover:text-[#FF6B00] hover:shadow-[0_0_15px_rgba(255,107,0,0.4)]"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#05080D]/80 text-white backdrop-blur-md transition-all duration-300 hover:border-[#008CFF] hover:bg-[#080F19] hover:text-[#008CFF] hover:shadow-[0_0_15px_rgba(0,140,255,0.4)]"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="hero-social-link group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#05080D]/80 text-white backdrop-blur-md transition-all duration-300 hover:border-[#FF6B00] hover:bg-[#080F19] hover:text-[#FF6B00] hover:shadow-[0_0_15px_rgba(255,107,0,0.4)]"
                aria-label="Send an email"
              >
                <Mail size={18} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>

          </div>

          {/* Right Column: Displays the planet, city, and reflection unobscured */}
          <div className="lg:col-span-4 xl:col-span-5 hidden lg:block" />
        </div>
      </div>

      {/* Seamless bottom transition divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#020408] to-transparent z-20" />
    </section>
  );
}
