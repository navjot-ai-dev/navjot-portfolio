"use client";

import {
  Code2,
  Layers3,
  Rocket,
  Sparkles,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable and efficient code with attention to detail.",
    tag: "CODE QUALITY",
    className: "md:col-span-2",
  },
  {
    icon: Rocket,
    title: "Build & Ship",
    description:
      "Turning ideas into practical digital products.",
    tag: "EXECUTION",
    className: "md:col-span-1",
  },
  {
    icon: Layers3,
    title: "Full Stack Thinking",
    description:
      "Exploring frontend, backend, databases and complete application architecture.",
    tag: "DEVELOPMENT",
    className: "md:col-span-1",
  },
  {
    icon: Sparkles,
    title: "Always Learning",
    description:
      "Exploring new technologies, improving my skills and learning by building real-world projects.",
    tag: "GROWTH MINDSET",
    className: "md:col-span-2",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0B0B] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}

        <div className="mb-16">

          <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FF6B2C]">
            <span className="h-px w-8 bg-[#FF6B2C]" />
            Get To Know Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Beyond The
            <span className="text-[#FF6B2C]"> Code.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            A little introduction about who I am, what I do
            and what drives me to build digital experiences.
          </p>

        </div>

        {/* Main About Grid */}

        <div className="grid gap-6 lg:grid-cols-5">

          {/* Personal Introduction */}

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141414] p-8 transition-all duration-300 hover:border-[#FF6B2C]/40 lg:col-span-3">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/10 blur-[90px] transition-all duration-500 group-hover:bg-orange-500/20" />

            <div className="relative">

              <div className="mb-8 flex items-center gap-3">

                <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-3 text-[#FF6B2C]">
                  <Terminal size={23} />
                </div>

                <span className="text-sm font-medium text-gray-400">
                  ABOUT ME
                </span>

              </div>

              <h3 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                I'm Navjot Singh,
                <span className="text-gray-500">
                  {" "}a developer who loves turning ideas into reality.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-400">
                I'm passionate about web development and creating
                modern digital experiences. My journey started with
                frontend development, and I'm now expanding my
                knowledge towards full-stack engineering.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-gray-400">
                I enjoy experimenting with technologies, solving
                problems and building projects that combine great
                functionality with thoughtful design.
              </p>

              <a
                href="#projects"
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B2C] transition-all hover:gap-4"
              >
                Explore My Projects
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

          {/* Developer Identity Card */}

          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#141414] p-8 lg:col-span-2">

            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange-500/10 blur-[90px]" />

            <div className="relative">

              <div className="mb-8 flex items-center justify-between">

                <span className="text-sm font-medium text-gray-400">
                  DEVELOPER IDENTITY
                </span>

                <Code2 className="text-[#FF6B2C]" size={24} />

              </div>

              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-orange-500/20 bg-orange-500/10">

                <span className="text-4xl font-bold text-[#FF6B2C]">
                  NS
                </span>

              </div>

              <h3 className="text-2xl font-bold text-white">
                Navjot Singh
              </h3>

              <p className="mt-2 text-sm text-[#FF6B2C]">
                Full Stack Developer
              </p>

              <div className="mt-8 h-px bg-white/10" />

              <div className="mt-6 space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">Focus</span>
                  <span className="text-gray-200">Web Development</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Approach</span>
                  <span className="text-gray-200">Learn by Building</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Mindset</span>
                  <span className="text-gray-200">Growth Oriented</span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Philosophy */}

        <div className="mt-6 grid gap-6 md:grid-cols-3">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`${item.className} group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141414] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B2C]/40`}
              >

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/0 blur-3xl transition-all duration-500 group-hover:bg-orange-500/10" />

                <div className="relative">

                  <div className="mb-7 flex items-center justify-between">

                    <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-3 text-[#FF6B2C]">
                      <Icon size={23} />
                    </div>

                    <span className="text-[10px] tracking-[0.2em] text-gray-600">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>

                  <p className="mt-7 text-[10px] font-semibold tracking-[0.2em] text-[#FF6B2C]">
                    {item.tag}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}