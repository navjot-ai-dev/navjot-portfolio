import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navjot Singh | Full Stack Developer",
  description: "Futuristic & cinematic developer portfolio of Navjot Singh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#05080D] text-white selection:bg-[#FF6B00]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
