"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  Send,
  MessageCircle,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

const EMAIL = "navjotsingh542419@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
`;

    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
      String(subject)
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B0B0B] px-6 py-28 text-white md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FF6B2C]">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Let's Build Something{" "}
            <span className="text-[#FF6B2C]">Great.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-400 md:text-base">
            Have an idea, a project, or just want to connect? I'd love to hear
            from you. Let's turn great ideas into reality.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left Side */}
          <div className="space-y-6">

            {/* Email Card */}
            <div className="rounded-2xl border border-white/10 bg-[#141414] p-7">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B2C]/10 text-[#FF6B2C]">
                <Mail size={24} />
              </div>

              <p className="mb-2 text-sm text-neutral-500">
                Drop me an email
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className="break-all text-lg font-semibold transition-colors hover:text-[#FF6B2C] md:text-xl"
              >
                {EMAIL}
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="mt-5 flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-[#FF6B2C]"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied!" : "Copy email address"}
              </button>
            </div>

            {/* Availability Card */}
            <div className="rounded-2xl border border-white/10 bg-[#141414] p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.7)]" />

                <span className="text-sm font-medium text-green-400">
                  Open to Connections
                </span>
              </div>

              <h3 className="text-xl font-bold">
                Let's Connect
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Always interested in connecting with developers, creators,
                and people building interesting things.
              </p>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl border border-white/10 bg-[#141414] p-7">
              <h3 className="mb-5 font-semibold">
                Find Me Online
              </h3>

              <div className="flex flex-wrap gap-3">

                {/* GitHub */}
                <a
                  href="https://github.com/navjot-ai-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-neutral-300 transition-all hover:border-[#FF6B2C]/50 hover:text-[#FF6B2C]"
                >
                  <Code2 size={18} />
                  GitHub
                  <ArrowUpRight size={14} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-neutral-300 transition-all hover:border-[#FF6B2C]/50 hover:text-[#FF6B2C]"
                >
                  <BriefcaseBusiness size={18} />
                  LinkedIn
                  <ArrowUpRight size={14} />
                </a>

              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-[#141414] p-7 md:p-10">

            <div className="mb-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B2C]/10 text-[#FF6B2C]">
                <MessageCircle size={24} />
              </div>

              <h3 className="text-2xl font-bold">
                Send Me a Message
              </h3>

              <p className="mt-2 text-sm text-neutral-500">
                Fill out the form and let's start a conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name and Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-neutral-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0B0B0B] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-[#FF6B2C]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-neutral-300"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0B0B0B] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-[#FF6B2C]"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm text-neutral-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Let's work together..."
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0B0B0B] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-[#FF6B2C]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-neutral-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your idea..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0B0B0B] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-[#FF6B2C]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#FF6B2C] px-6 py-4 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Send Message
                <Send size={17} />
              </button>

              <p className="text-center text-xs text-neutral-600">
                This form opens your default email application with your
                message prepared.
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}