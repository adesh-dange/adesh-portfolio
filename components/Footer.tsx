"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#181516] px-6 py-10 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-3xl font-semibold tracking-[-0.06em]">
              Adesh Dange<span className="text-[#C6283D]">.</span>
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
              Frontend developer creating modern, responsive, and interactive
              digital experiences.
            </p>
          </div>

          <a
            href="#"
            className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Adesh Dange. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}