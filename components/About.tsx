"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-32 text-[#181516] sm:px-10 lg:px-16 lg:py-44"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#C6283D]/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 flex items-center gap-4">
          <span className="h-px w-10 bg-[#741426]" />

          <span className="text-xs uppercase tracking-[0.3em] text-[#741426]">
            01 / About
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              I build interfaces
              <br />
              <span className="text-[#741426]">people remember.</span>
            </h2>
          </motion.div>

          <div className="lg:pt-3">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-lg leading-8 text-[#686163]"
            >
              I'm Adesh, a frontend developer who enjoys turning ideas into
              polished digital experiences. I focus on modern interfaces,
              responsive design, meaningful interactions, and clean frontend
              architecture.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 text-lg leading-8 text-[#686163]"
            >
              My toolkit revolves around React, Next.js, JavaScript, Tailwind
              CSS, and modern web technologies. I'm constantly experimenting
              with better ways to make the web feel faster, smoother, and more
              engaging.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 border-b border-[#741426]/30 pb-2 text-sm uppercase tracking-[0.15em] text-[#741426] transition-colors hover:border-[#741426]"
            >
              Let's work together

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </div>

        <div className="mt-24 grid border-y border-[#741426]/10 sm:grid-cols-3">
          {[
            ["01", "Frontend", "React & Next.js"],
            ["02", "Interface", "UI & Interaction"],
            ["03", "Approach", "Clean & Responsive"],
          ].map(([number, title, description], index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-[#741426]/10 px-1 py-8 transition-colors duration-300 hover:bg-[#F5F5F5] sm:border-b-0 sm:px-8 sm:py-10 sm:not-last:border-r"
            >
              <span className="text-xs text-[#C6283D]">{number}</span>

              <h3 className="mt-8 text-xl font-semibold tracking-tight">
                {title}
              </h3>

              <p className="mt-2 text-sm text-[#686163]">{description}</p>

              <div className="mt-8 h-px w-0 bg-[#C6283D] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}