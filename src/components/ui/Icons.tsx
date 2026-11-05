import type { SVGProps } from "react";

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function NextjsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.66 17.58l-5.6-7.8v7.8H9.8V6.42h2.26l5.6 7.8V6.42h2.26v11.16h-2.26z" />
    </svg>
  );
}

export function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export function TypeScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect width="22" height="22" x="1" y="1" rx="4" fill="#3178C6" />
      <path
        d="M12.5 13.5v-1.2h4.5v1.2h-1.6V18h-1.3v-4.5h-1.6zm-5.7 3.3c.4.3.9.5 1.5.5.9 0 1.4-.4 1.4-1.1 0-.6-.3-.9-1.2-1.3l-.5-.2c-1.1-.5-1.7-1.1-1.7-2.1 0-1.3 1-2.2 2.6-2.2.7 0 1.3.2 1.7.5l-.4 1.1c-.4-.3-.8-.4-1.3-.4-.8 0-1.3.4-1.3 1 0 .6.4.9 1.2 1.2l.5.2c1.2.5 1.8 1.1 1.8 2.2 0 1.4-1.1 2.3-2.8 2.3-.8 0-1.5-.2-2-.6l.4-1.1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function JavaScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect width="22" height="22" x="1" y="1" rx="4" fill="#F7DF1E" />
      <path
        d="M7.5 17.5c.5.3 1 .5 1.6.5.9 0 1.4-.4 1.4-1.4V10.5h1.3v6.1c0 1.8-1 2.6-2.7 2.6-.8 0-1.4-.2-1.8-.5l.2-1.2zm6.2-.2c.5.4 1.1.7 1.8.7 1 0 1.6-.5 1.6-1.2 0-.7-.4-1.1-1.4-1.5l-.5-.2c-1.3-.5-2-1.2-2-2.3 0-1.4 1.1-2.4 2.8-2.4.8 0 1.5.2 2 .5l-.4 1.2c-.4-.3-.9-.5-1.6-.5-.9 0-1.4.5-1.4 1.1 0 .6.4 1 1.3 1.3l.5.2c1.5.6 2.2 1.3 2.2 2.5 0 1.5-1.2 2.5-3 2.5-.9 0-1.7-.2-2.3-.7l.4-1.2z"
        fill="#000000"
      />
    </svg>
  );
}

export function TailwindIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

export function HonoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C8.5 7 5 10 5 14.5a7 7 0 0 0 14 0C19 10 15.5 7 12 2zm0 17a4.5 4.5 0 0 1-4.5-4.5c0-2.4 1.8-4.7 4.5-8.2 2.7 3.5 4.5 5.8 4.5 8.2A4.5 4.5 0 0 1 12 19z" />
    </svg>
  );
}

export function BetterAuthIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v5" />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

export function DrizzleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5c-.3 0-.6.1-.8.4L4.5 12.8c-.8 1.1-1 2.4-.6 3.7.4 1.3 1.4 2.3 2.7 2.8 1.3.4 2.7.2 3.8-.6L12 17.5l1.6 1.2c1.1.8 2.5 1 3.8.6 1.3-.4 2.3-1.4 2.7-2.8.4-1.3.2-2.6-.6-3.7L12.8 2.9c-.2-.3-.5-.4-.8-.4z" />
    </svg>
  );
}

export function PostgresIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

export function GitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

