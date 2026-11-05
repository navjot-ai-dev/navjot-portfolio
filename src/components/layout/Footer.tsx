import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Code2,
  Mail,
  Heart,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const EMAIL = "navjotsingh542419@gmail.com";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B0B] px-6 pb-8 pt-16 text-white md:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <Link href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6B2C] text-lg font-black text-black">
                NS
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  Navjot Singh
                  <span className="text-[#FF6B2C]">.</span>
                </h2>

                <p className="text-xs text-neutral-500">
                  Full Stack Developer
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">
              Building modern digital experiences through creativity,
              technology, and continuous learning.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-neutral-500">
              <Code2 size={16} className="text-[#FF6B2C]" />
              Turning ideas into digital experiences.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em]">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-neutral-400 transition-colors hover:text-[#FF6B2C]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em]">
              Let's Connect
            </h3>

            <p className="mb-5 text-sm leading-7 text-neutral-400">
              Have a project idea or want to collaborate? Feel free to reach
              out.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 break-all text-sm font-medium text-[#FF6B2C] transition-colors hover:text-white"
            >
              <Mail size={17} />
              {EMAIL}

              <ArrowUpRight
                size={15}
                className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://github.com/navjot-ai-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-fit items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              GitHub Profile
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-neutral-500">
            © 2026 Navjot Singh. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-neutral-500">
            Designed & Built with
            <Heart
              size={13}
              className="fill-[#FF6B2C] text-[#FF6B2C]"
            />
            by Navjot
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#141414] text-neutral-400 transition-all hover:border-[#FF6B2C] hover:text-[#FF6B2C]"
          >
            <ArrowUp size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}