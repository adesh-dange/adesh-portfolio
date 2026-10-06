"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "FinFlow",
    subtitle: "Expense Tracker Dashboard",
    description:
      "A modern expense management dashboard designed to make personal finance tracking simple, visual, and intuitive.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    type: "Frontend Development",
    featured: true,
    accent: "#C6283D",
    liveUrl: "https://fin-flow-virid-six.vercel.app/",
    githubUrl: "https://github.com/adesh-dange/FinFlow.git",
  },
  {
    number: "02",
    title: "Loom & Leaf",
    subtitle: "E-commerce Experience",
    description:
      "A premium responsive e-commerce interface focused on immersive product browsing, smooth interactions, and modern visual design.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    type: "Frontend Development",
    featured: false,
    accent: "#A82136",
    liveUrl: "https://loom-and-leaf-pearl.vercel.app/",
    githubUrl: "https://github.com/adesh-dange/Loom-and-Leaf.git",
  },
  {
    number: "03",
    title: "SkillBridge AI",
    subtitle: "AI-Powered Learning Platform",
    description:
      "An AI-powered platform designed to help users identify skill gaps and discover personalized learning directions.",
    technologies: ["Python", "AI", "APIs"],
    type: "AI Project",
    featured: false,
    accent: "#D94A5E",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#741426] px-6 py-32 text-white sm:px-10 lg:px-16 lg:py-44"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C6283D]/30 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-white/50" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
              03 / Selected Work
            </span>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-white/40 sm:block">
            2025 — 2026
          </span>
        </div>

        <div className="mb-24 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl"
          >
            Selected
            <br />
            <span className="text-[#F1D9DD]">work.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-md text-base leading-7 text-white/60"
          >
            A collection of projects where design, technology, and
            problem-solving come together to create meaningful digital
            experiences.
          </motion.p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              className="group overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[320px] overflow-hidden bg-[#5F101F] sm:min-h-[400px]">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "50px 50px",
                    }}
                  />

                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 6 }}
                    transition={{ duration: 0.6 }}
                    style={{ backgroundColor: project.accent }}
                    className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[35%_65%_60%_40%] shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
                  />

                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="relative z-10 text-6xl font-semibold tracking-[-0.07em] text-white">
                      {project.title === "FinFlow"
                        ? "FF"
                        : project.title === "Loom & Leaf"
                          ? "L&L"
                          : "SB"}
                    </span>
                  </div>

                  <span className="absolute left-6 top-6 text-xs tracking-[0.2em] text-white/50">
                    {project.number}
                  </span>

                  <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#741426] opacity-0 shadow-xl transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                        {project.type}
                      </span>

                      <span className="text-xs text-white/30">
                        {project.number}
                      </span>
                    </div>

                    <h3 className="mt-10 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#F1D9DD]">
                      {project.subtitle}
                    </p>

                    <p className="mt-8 max-w-lg text-base leading-7 text-white/60">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-12">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/60 transition-colors hover:border-white/30 hover:text-white"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-6 border-t border-white/10 pt-6">
                      {project.liveUrl !== "#" ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-sm font-medium text-white"
                        >
                          Live Preview
                          <ExternalLink
                            size={15}
                            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 text-sm font-medium text-white/30">
                          Live Preview
                          <ExternalLink size={15} />
                        </span>
                      )}

                      {project.githubUrl !== "#" ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                        >
                          Source Code
                          <GitBranch size={15} />
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 text-sm text-white/30">
                          Source Code
                          <GitBranch size={15} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}