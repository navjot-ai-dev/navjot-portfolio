"use client";

import {
ArrowDown,
ArrowUpRight,
Terminal,
Code2,
Sparkles,
} from "lucide-react";

export default function Hero() {
return ( <section
   id="home"
   className="relative flex min-h-screen items-center overflow-hidden bg-[#0B0B0B] px-6 pb-20 pt-32"
 >
{/* Background Grid */}

```
  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

  {/* Orange Glow */}

  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-600/10 blur-[120px]" />

  <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

  {/* Main Container */}

  <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

    {/* LEFT CONTENT */}

    <div className="animate-[fadeInUp_0.8s_ease-out]">

      {/* Availability */}

      <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">

        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

        <span className="text-xs tracking-wide text-gray-300">
          AVAILABLE FOR OPPORTUNITIES
        </span>

      </div>

      {/* Introduction */}

      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#FF6B2C]">
        Hello, I'm Navjot Singh
      </p>

      {/* Heading */}

      <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">

        Building

        <br />

        <span className="text-gray-500">
          Digital
        </span>

        <br />

        <span className="text-[#FF6B2C]">
          Experiences.
        </span>

      </h1>

      {/* Description */}

      <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
        I'm a Full Stack Developer passionate about creating
        modern, scalable and meaningful digital products
        through clean code and thoughtful design.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap items-center gap-4">

        <a
          href="#projects"
          className="group flex items-center gap-3 rounded-full bg-[#FF6B2C] px-7 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400"
        >
          Explore My Work

          <ArrowUpRight
            size={19}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />

        </a>

        <a
          href="#contact"
          className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-[#FF6B2C] hover:text-[#FF6B2C]"
        >
          Let's Connect
        </a>

      </div>

      {/* Social Links */}

      <div className="mt-12 flex items-center gap-7">

        <a
          href="https://github.com/navjot-ai-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-500 transition-colors hover:text-[#FF6B2C]"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-500 transition-colors hover:text-[#FF6B2C]"
        >
          LinkedIn ↗
        </a>

      </div>

    </div>

    {/* RIGHT SIDE - DEVELOPER TERMINAL */}

    <div className="relative animate-[fadeInUp_1s_ease-out]">

      {/* Glow */}

      <div className="absolute -inset-5 rounded-3xl bg-[#FF6B2C]/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121212] shadow-2xl transition-transform duration-500 hover:-translate-y-2">

        {/* Terminal Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

          <div className="flex gap-2">

            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />

          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">

            <Terminal size={14} />

            developer.ts

          </div>

        </div>

        {/* Terminal Body */}

        <div className="space-y-6 p-7 font-mono text-xs sm:p-10 sm:text-sm">

          <p className="text-gray-500">
            // A little about me
          </p>

          <p>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-300">developer</span>{" "}
            = {"{"}
          </p>

          <div className="space-y-5 pl-6">

            <p>
              <span className="text-gray-400">name:</span>{" "}
              <span className="text-green-400">
                "Navjot Singh"
              </span>,
            </p>

            <p>
              <span className="text-gray-400">role:</span>{" "}
              <span className="text-green-400">
                "Full Stack Developer"
              </span>,
            </p>

            <p>
              <span className="text-gray-400">passion:</span>{" "}
              <span className="text-green-400">
                "Building Products"
              </span>,
            </p>

            <p>
              <span className="text-gray-400">skills:</span>{" "}
              [
              <span className="text-orange-400">
                "React", "Next.js", "TypeScript"
              </span>
              ],
            </p>

            <p>
              <span className="text-gray-400">mindset:</span>{" "}
              <span className="text-green-400">
                "Always Learning"
              </span>
            </p>

          </div>

          <p>{"}"}</p>

          {/* Developer Status */}

          <div className="border-t border-white/10 pt-6">

            <p className="text-gray-500">
              // Current status
            </p>

            <p className="mt-4 flex items-center gap-3 text-green-400">

              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              Building something awesome...

            </p>

          </div>

        </div>

      </div>

      {/* Floating Badge */}

      <div className="absolute -bottom-7 -left-5 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] p-4 shadow-xl sm:flex">

        <div className="rounded-lg bg-orange-500/10 p-2 text-[#FF6B2C]">
          <Code2 size={22} />
        </div>

        <div>
          <p className="text-xs text-gray-500">
            Developer Mindset
          </p>

          <p className="text-sm font-semibold text-white">
            Build. Learn. Repeat.
          </p>
        </div>

      </div>

    </div>

  </div>

  {/* Scroll Indicator */}

  <a
    href="#about"
    className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition-colors hover:text-[#FF6B2C] md:flex"
  >

    <span className="text-[10px] uppercase tracking-[0.3em]">
      Scroll to explore
    </span>

    <ArrowDown size={18} className="animate-bounce" />

  </a>

</section>

);
}
