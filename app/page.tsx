"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import PageReveal from "@/components/PageReveal";

export default function Home() {
  return (
    <PageReveal>
    <main className="relative overflow-hidden bg-[#F5F5F5] text-[#181516]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#C6283D]/10 blur-[120px]" />

        <div className="absolute -left-40 top-[35%] h-[450px] w-[450px] rounded-full bg-[#741426]/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#741426 1px, transparent 1px), linear-gradient(90deg, #741426 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <motion.a
          href="/"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg font-bold tracking-[-0.05em] text-[#741426]"
        >
          AD.
        </motion.a>
        

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden items-center gap-8 text-sm text-[#686163] md:flex"
        >
          <a href="#about" className="transition-colors hover:text-[#741426]">
            About
          </a>

          <a href="#skills" className="transition-colors hover:text-[#741426]">
            Stack
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-[#741426]"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-[#741426]"
          >
            Contact
          </a>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-[#741426] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(116,20,38,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5F101F]"
        >
          Let's Talk
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.a>
        <MobileMenu />
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-88px)] items-center px-6 pb-20 pt-10 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-2 w-2 rounded-full bg-[#C6283D]" />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#686163]">
                  Frontend Developer
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]"
              >
                Designing
                <br />
                <span className="text-[#741426]">digital</span>
                <br />
                experiences.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end"
              >
                <p className="max-w-md text-base leading-7 text-[#686163]">
                  Hi, I'm Adesh — a frontend developer creating modern,
                  responsive, and interactive experiences with React and
                  Next.js.
                </p>

                <a
                  href="#projects"
                  className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#741426] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5F101F] hover:shadow-[0_15px_30px_rgba(116,20,38,0.2)]"
                >
                  Explore my work

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative mx-auto hidden h-[420px] w-[420px] lg:block"
            >
              <div className="absolute inset-0 rounded-full border border-[#741426]/15" />

              <div className="absolute inset-8 rounded-full border border-[#741426]/10" />

              <motion.div
                animate={{
                  rotate: [0, 8, 0, -8, 0],
                  scale: [1, 1.03, 1, 1.03, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-20 rounded-[35%_65%_60%_40%] bg-[#741426] shadow-[0_30px_80px_rgba(116,20,38,0.25)]"
              />

              <motion.div
                animate={{
                  rotate: [0, -12, 0, 12, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-[125px] rounded-[60%_40%_35%_65%] border border-white/30 bg-[#C6283D]"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative z-10 text-6xl font-semibold tracking-[-0.08em] text-white">
                  AD
                </span>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 top-16 rounded-full border border-[#741426]/10 bg-white px-4 py-2 text-xs font-medium text-[#741426] shadow-lg"
              >
                Creative Developer
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 left-0 rounded-full border border-[#741426]/10 bg-white px-4 py-2 text-xs font-medium text-[#686163] shadow-lg"
              >
                React · Next.js
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-20 flex items-center justify-between border-t border-[#741426]/10 pt-5"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#8D8587]">
              Pune, India
            </span>

            <a
              href="#about"
              className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#686163] transition-colors hover:text-[#741426]"
            >
              Scroll to explore

              <ArrowDown
                size={14}
                className="animate-bounce transition-colors group-hover:text-[#741426]"
              />
            </a>

            <span className="hidden text-xs uppercase tracking-[0.2em] text-[#8D8587] sm:block">
              Available for opportunities
            </span>
          </motion.div>
        </div>
      </section>

      <About />

      <TechStack />

      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
     </PageReveal>
  );
}