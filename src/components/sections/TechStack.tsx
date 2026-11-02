"use client";

import { useState } from "react";
import { ArrowUpRight, Code2, Layers3 } from "lucide-react";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

const technologies = [
  {
    name: "HTML5",
    symbol: "5",
    category: "Frontend",
    description: "Building structured and semantic web experiences.",
    status: "CORE",
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    symbol: "#",
    category: "Frontend",
    description: "Creating responsive and beautiful interfaces.",
    status: "CORE",
    color: "text-blue-400",
  },
  {
    name: "JavaScript",
    symbol: "JS",
    category: "Frontend",
    description: "Building interactive and dynamic applications.",
    status: "CORE",
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    symbol: "TS",
    category: "Frontend",
    description: "Writing scalable and type-safe applications.",
    status: "LEARNING",
    color: "text-blue-500",
  },
  {
    name: "React",
    symbol: "⚛",
    category: "Frontend",
    description: "Building modern component-based interfaces.",
    status: "CORE",
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    symbol: "N",
    category: "Frontend",
    description: "Creating full-stack React applications.",
    status: "LEARNING",
    color: "text-white",
  },
  {
    name: "Tailwind CSS",
    symbol: "TW",
    category: "Frontend",
    description: "Building modern UI with utility-first styling.",
    status: "CORE",
    color: "text-cyan-400",
  },
  {
    name: "Hono",
    symbol: "H",
    category: "Backend",
    description: "Developing lightweight and fast API services.",
    status: "LEARNING",
    color: "text-orange-400",
  },
  {
    name: "Better Auth",
    symbol: "BA",
    category: "Backend",
    description: "Implementing authentication in applications.",
    status: "LEARNING",
    color: "text-purple-400",
  },
  {
    name: "Drizzle ORM",
    symbol: "D",
    category: "Database",
    description: "Working with type-safe database queries.",
    status: "LEARNING",
    color: "text-green-400",
  },
  {
    name: "PostgreSQL",
    symbol: "PG",
    category: "Database",
    description: "Working with relational database systems.",
    status: "LEARNING",
    color: "text-blue-400",
  },
  {
    name: "Git & GitHub",
    symbol: "GH",
    category: "Tools",
    description: "Managing code and collaborating on projects.",
    status: "CORE",
    color: "text-white",
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter(
          (tech) => tech.category === activeCategory
        );

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0B0B0B] px-6 py-28"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-orange-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}

        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FF6B2C]">
              <span className="h-px w-8 bg-[#FF6B2C]" />
              My Technologies
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Tools of
              <span className="text-[#FF6B2C]"> My Trade.</span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-400">
              Technologies and tools I use to build modern
              web applications and turn ideas into reality.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#141414] p-4">
            <div className="rounded-xl bg-orange-500/10 p-3 text-[#FF6B2C]">
              <Layers3 size={23} />
            </div>

            <div>
              <p className="text-2xl font-bold text-white">
                {technologies.length.toString().padStart(2, "0")}
              </p>
              <p className="text-xs text-gray-500">
                Technologies
              </p>
            </div>
          </div>

        </div>

        {/* Category Filters */}

        <div className="mb-10 flex flex-wrap gap-3">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "border-[#FF6B2C] bg-[#FF6B2C] text-black"
                  : "border-white/10 bg-[#141414] text-gray-400 hover:border-[#FF6B2C]/50 hover:text-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Technology Cards */}

        <div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >

          {filteredTechnologies.map((tech) => (

            <div
              key={tech.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#FF6B2C]/50 hover:bg-[#191919]"
            >

              {/* Hover Glow */}

              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-500/0 blur-3xl transition-all duration-500 group-hover:bg-orange-500/10" />

              <div className="relative">

                {/* Icon and Status */}

                <div className="mb-8 flex items-center justify-between">

                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-xl font-bold ${tech.color}`}>
                    {tech.symbol}
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-[9px] font-bold tracking-wider ${
                      tech.status === "CORE"
                        ? "border-green-500/20 bg-green-500/10 text-green-400"
                        : "border-orange-500/20 bg-orange-500/10 text-orange-400"
                    }`}
                  >
                    {tech.status}
                  </span>

                </div>

                {/* Technology Name */}

                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#FF6B2C]">
                  {tech.name}
                </h3>

                {/* Description */}

                <p className="mt-3 min-h-12 text-sm leading-6 text-gray-500">
                  {tech.description}
                </p>

                {/* Bottom */}

                <div className="mt-7 flex items-center justify-between border-t border-white/5 pt-5">

                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-600">
                    {tech.category}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF6B2C]"
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Message */}

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-[#141414] p-7 sm:flex-row">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-orange-500/10 p-3 text-[#FF6B2C]">
              <Code2 size={23} />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Always Exploring New Technologies
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Learning today. Building better tomorrow.
              </p>
            </div>

          </div>

          <span className="text-sm font-semibold text-[#FF6B2C]">
            BUILD • LEARN • REPEAT
          </span>

        </div>

      </div>
    </section>
  );
}