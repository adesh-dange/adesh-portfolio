"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Palette,
  Server,
  Terminal,
} from "lucide-react";

const technologies = [
  { name: "HTML", category: "Structure", icon: Globe },
  { name: "CSS", category: "Styling", icon: Palette },
  { name: "JavaScript", category: "Language", icon: Braces },
  { name: "React", category: "Frontend", icon: Code2 },
  { name: "Next.js", category: "Framework", icon: Layers3 },
  { name: "Tailwind CSS", category: "UI", icon: Palette },
  { name: "Git & GitHub", category: "Version Control", icon: GitBranch },
  { name: "REST APIs", category: "Integration", icon: Server },
  { name: "SQL", category: "Database", icon: Database },
  { name: "Java", category: "Programming", icon: Terminal },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#F5F5F5] px-6 py-32 text-[#181516] sm:px-10 lg:px-16 lg:py-44"
    >
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#C6283D]/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 flex items-center gap-4">
          <span className="h-px w-10 bg-[#741426]" />

          <span className="text-xs uppercase tracking-[0.3em] text-[#741426]">
            02 / Stack
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl"
            >
              Tools
              <br />
              <span className="text-[#741426]">I use.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 max-w-sm text-base leading-7 text-[#686163]"
            >
              Technologies I use to transform ideas into responsive,
              accessible, and engaging digital experiences.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-[#741426]/10 sm:grid-cols-2">
            {technologies.map((technology, index) => {
              const Icon = technology.icon;

              return (
                <motion.div
                  key={technology.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                  className="group relative overflow-hidden border-b border-r border-[#741426]/10 bg-white p-6 transition-all duration-500 hover:bg-[#FAFAFA] sm:p-8"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#C6283D]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#741426]/15 text-[#741426] transition-all duration-500 group-hover:border-[#741426] group-hover:bg-[#741426] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>

                    <span className="text-xs text-[#B5AFB0] transition-colors duration-300 group-hover:text-[#741426]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mt-12">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {technology.name}
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#686163]">
                      {technology.category}
                    </p>
                  </div>

                  <div className="mt-8 h-px w-0 bg-[#C6283D] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-32 overflow-hidden border-y border-[#741426]/10 py-6">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center gap-8 whitespace-nowrap"
        >
          {[...technologies, ...technologies].map((technology, index) => (
            <div
              key={`${technology.name}-${index}`}
              className="flex items-center gap-8"
            >
              <span className="text-2xl font-semibold tracking-tight text-[#D0CDCE] sm:text-4xl">
                {technology.name}
              </span>

              <span className="text-[#C6283D]">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}