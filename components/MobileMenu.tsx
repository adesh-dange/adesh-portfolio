"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#741426]/15 bg-white text-[#741426] md:hidden"
      >
        <Menu size={19} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-[#741426] text-white md:hidden">
          <div className="flex items-center justify-between px-6 py-6">
            <span className="text-lg font-bold tracking-[-0.05em]">
              AD<span className="text-[#F1D9DD]">.</span>
            </span>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20"
            >
              <X size={19} />
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-16">
            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-white/10 py-6 text-4xl font-semibold tracking-[-0.05em]"
              >
                <span>{link.name}</span>
                <ArrowUpRight
                  size={24}
                  className="text-white/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            ))}
          </nav>

          <p className="absolute bottom-8 left-6 text-xs uppercase tracking-[0.25em] text-white/40">
            Adesh Dange · Frontend Developer
          </p>
        </div>
      )}
    </>
  );
}