"use client";

import {
  ArrowUpRight,
  Code2,
  Database,
  ShoppingBag,
  Sparkles,
  Terminal,
  Layers3,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Nexus",
    category: "Full Stack Application",
    description:
      "A modern full-stack application focused on authentication, scalable architecture, and a smooth user experience.",
    tech: ["Next.js", "TypeScript", "Hono", "Better Auth", "PostgreSQL"],
    status: "In Development",
    featured: true,
    icon: Layers3,
    gradient: "from-orange-500/20 via-orange-500/5 to-transparent",
  },
  {
    number: "02",
    title: "JSON Formatter",
    category: "Developer Utility",
    description:
      "A clean and powerful tool to format, validate, and organize JSON data with a simple developer-friendly interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Development",
    featured: false,
    icon: Code2,
    gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
  },
  {
    number: "03",
    title: "AI Tools Platform",
    category: "AI Powered Platform",
    description:
      "An upcoming platform bringing useful AI-powered tools together in one simple and accessible experience.",
    tech: ["Next.js", "TypeScript", "AI APIs"],
    status: "Planned",
    featured: false,
    icon: Sparkles,
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
  },
  {
    number: "04",
    title: "E-Commerce Platform",
    category: "Full Stack Web App",
    description:
      "A modern online shopping experience with product discovery, shopping cart, and a scalable application structure.",
    tech: ["Next.js", "TypeScript", "Database"],
    status: "Planned",
    featured: false,
    icon: ShoppingBag,
    gradient: "from-green-500/20 via-green-500/5 to-transparent",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0B0B0B] px-6 py-28 text-white md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FF6B2C]">
              What I'm Building
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Selected <span className="text-[#FF6B2C]">Projects.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-neutral-400 md:text-base">
            A collection of ideas, experiments, and applications I'm building
            to improve my skills and solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B2C]/50 md:p-8 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {/* Background Gradient */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  {/* Top Row */}
                  <div className="mb-10 flex items-center justify-between">
                    <span className="font-mono text-sm text-neutral-500">
                      / {project.number}
                    </span>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        project.status === "In Development"
                          ? "border-orange-500/30 bg-orange-500/10 text-orange-400"
                          : "border-white/10 bg-white/5 text-neutral-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-[#FF6B2C] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={27} strokeWidth={1.6} />
                  </div>

                  {/* Project Information */}
                  <div className="mb-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6B2C]">
                      {project.category}
                    </p>

                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-bold md:text-3xl">
                        {project.title}
                      </h3>

                      <ArrowUpRight
                        size={24}
                        className="shrink-0 text-neutral-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF6B2C]"
                      />
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-400 md:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 border-t border-white/10 pt-6">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs text-neutral-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-[#141414] p-6 md:flex-row md:items-center md:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B2C]/10 text-[#FF6B2C]">
              <Terminal size={24} />
            </div>

            <div>
              <h3 className="font-semibold">More projects are on the way.</h3>
              <p className="mt-1 text-sm text-neutral-500">
                Always building. Always learning.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/navjot-ai-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B2C] transition-colors hover:text-white"
          >
            Explore GitHub <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}