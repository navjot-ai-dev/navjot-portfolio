"use client";

import {
  ArrowUpRight,
  BookOpen,
  Code2,
  GraduationCap,
  Rocket,
  Target,
} from "lucide-react";

const journey = [
  {
    number: "01",
    year: "The Beginning",
    title: "Started Web Development",
    description:
      "Started exploring web development and learned the fundamentals of HTML, CSS, and JavaScript.",
    icon: BookOpen,
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Foundation",
  },
  {
    number: "02",
    year: "Frontend Development",
    title: "Building Interactive Interfaces",
    description:
      "Moved into React and Next.js, focusing on component-based architecture, responsive layouts, and modern UI development.",
    icon: Code2,
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    status: "Skill Development",
  },
  {
    number: "03",
    year: "Full Stack Learning",
    title: "Exploring Backend Development",
    description:
      "Started learning backend concepts, authentication, APIs, databases, and how frontend and backend systems work together.",
    icon: GraduationCap,
    tags: ["Hono", "Better Auth", "Drizzle ORM", "PostgreSQL"],
    status: "In Progress",
  },
  {
    number: "04",
    year: "What's Next",
    title: "Building Real-World Products",
    description:
      "Turning ideas into practical applications, improving architecture, and developing products that solve real problems.",
    icon: Rocket,
    tags: ["Full Stack", "System Design", "Product Building"],
    status: "Ongoing Goal",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0B0B0B] px-6 py-28 text-white md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FF6B2C]">
            My Development Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Learning. Building.{" "}
            <span className="text-[#FF6B2C]">Growing.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-400 md:text-base">
            Every project teaches something new. Here's how I'm growing as a
            developer, one step at a time.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-[#FF6B2C] via-white/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 !== 0;

              return (
                <div
                  key={item.number}
                  className={`relative flex flex-col gap-6 pl-16 md:w-1/2 md:pl-0 ${
                    isRight
                      ? "md:ml-auto md:pl-16"
                      : "md:pr-16 md:text-right"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#FF6B2C]/50 bg-[#171717] text-[#FF6B2C] shadow-[0_0_20px_rgba(255,107,44,0.15)] md:left-auto md:right-[-20px]">
                    {isRight && "md:hidden"}
                    <Icon size={18} />
                  </div>

                  {/* Right Side Node */}
                  {isRight && (
                    <div className="absolute left-[-20px] top-0 z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-[#FF6B2C]/50 bg-[#171717] text-[#FF6B2C] shadow-[0_0_20px_rgba(255,107,44,0.15)] md:flex">
                      <Icon size={18} />
                    </div>
                  )}

                  {/* Content Card */}
                  <div className="group rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:border-[#FF6B2C]/40 hover:bg-[#181818] md:p-8">
                    <div
                      className={`mb-6 flex flex-wrap items-center justify-between gap-3 ${
                        !isRight ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="font-mono text-sm text-[#FF6B2C]">
                        {item.number} / {item.year}
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-400">
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold transition-colors group-hover:text-[#FF6B2C] md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-neutral-400">
                      {item.description}
                    </p>

                    <div
                      className={`mt-6 flex flex-wrap gap-2 ${
                        !isRight ? "md:justify-end" : ""
                      }`}
                    >
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 rounded-2xl border border-[#FF6B2C]/20 bg-gradient-to-r from-[#FF6B2C]/10 via-[#141414] to-[#141414] p-8 md:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-[#FF6B2C]/10 p-3 text-[#FF6B2C]">
                <Target size={25} />
              </div>

              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  The journey is just getting started.
                </h3>

                <p className="mt-2 text-sm text-neutral-400">
                  Focused on learning, experimenting, and building better
                  things every day.
                </p>
              </div>
            </div>

            <a
              href="#projects"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#FF6B2C] transition-colors hover:text-white"
            >
              Explore My Work <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}