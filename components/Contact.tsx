"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-6 py-32 text-[#181516] sm:px-10 lg:px-16 lg:py-44"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C6283D]/[0.08] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 flex items-center gap-4">
          <span className="h-px w-10 bg-[#741426]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#741426]">
            05 / Contact
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#686163]">
              Have an idea?
            </p>

            <h2 className="max-w-5xl text-6xl font-semibold leading-[0.88] tracking-[-0.07em] sm:text-7xl lg:text-9xl">
              Let's create
              <br />
              <span className="text-[#741426]">something great.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="max-w-md text-base leading-7 text-[#686163]">
              I'm always open to interesting projects, collaborations, and
              opportunities where I can create meaningful digital experiences.
            </p>

            <a
              href="mailto:aadeshdange1008v@gmail.com"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#741426] px-7 py-4 text-sm font-medium text-white shadow-[0_15px_40px_rgba(116,20,38,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5F101F]"
            >
              <Mail size={17} />
              Get in touch
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        <div className="mt-24 grid border-y border-[#741426]/10 sm:grid-cols-3">
          <a
            href="https://github.com/adesh-dange"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-[#741426]/10 px-1 py-7 sm:border-b-0 sm:border-r sm:px-8"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-[#741426]">GH</span>
              <span className="text-sm">GitHub</span>
            </div>

            <ArrowUpRight
              size={16}
              className="text-[#8D8587] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#741426]"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/adesh-dange01?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-[#741426]/10 px-1 py-7 sm:border-b-0 sm:border-r sm:px-8"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-[#741426]">in</span>
              <span className="text-sm">LinkedIn</span>
            </div>

            <ArrowUpRight
              size={16}
              className="text-[#8D8587] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#741426]"
            />
          </a>

          <a
            href="mailto:aadeshdange1008v@gmail.com"
            className="group flex items-center justify-between px-1 py-7 sm:px-8"
          >
            <div className="flex items-center gap-4">
              <Mail size={19} className="text-[#741426]" />
              <span className="text-sm">Email</span>
            </div>

            <ArrowUpRight
              size={16}
              className="text-[#8D8587] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#741426]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}