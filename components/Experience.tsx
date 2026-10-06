"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experience = [
  {
    year: "2025 — 2026",
    role: "Software Development Intern",
    company: "VS Software Lab",
    description:
      "Worked on frontend development, building responsive interfaces and reusable UI components while contributing to a MERN-based application.",
    tags: ["Frontend", "React", "JavaScript"],
  },
];

const education = [
  {
    year: "2026 — Present",
    degree: "Master of Computer Applications",
    institute: "JSPM's Jaywantrao Sawant College of Engineering",
  },
  {
    year: "2023 — 2026",
    degree: "Bachelor of Business Administration — Computer Applications",
    institute: "Tuljaram Chaturchand College",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#F5F5F5] px-6 py-32 text-[#181516] sm:px-10 lg:px-16 lg:py-44"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#C6283D]/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex items-center gap-4">
          <span className="h-px w-10 bg-[#741426]" />

          <span className="text-xs uppercase tracking-[0.3em] text-[#741426]">
            04 / Journey
          </span>
        </div>

        <div className="grid gap-20 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Heading */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl"
            >
              The journey
              <br />
              <span className="text-[#741426]">so far.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 max-w-sm text-base leading-7 text-[#686163]"
            >
              A quick look at the experiences and education that have shaped
              my development journey.
            </motion.p>
          </div>

          {/* Timeline */}
          <div>
            <div className="mb-8 flex items-center justify-between border-b border-[#741426]/10 pb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#741426]">
                Experience
              </span>

              <span className="text-xs text-[#686163]">
                01
              </span>
            </div>

            {experience.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group border-b border-[#741426]/10 py-8"
              >
                <div className="grid gap-6 sm:grid-cols-[140px_1fr]">
                  <span className="text-xs uppercase tracking-[0.15em] text-[#8D8587]">
                    {item.year}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {item.role}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#741426]">
                      {item.company}
                    </p>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#686163]">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#741426]/15 px-3 py-1 text-xs text-[#741426]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <div className="mb-8 mt-20 flex items-center justify-between border-b border-[#741426]/10 pb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#741426]">
                Education
              </span>

              <span className="text-xs text-[#686163]">
                02
              </span>
            </div>

            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group border-b border-[#741426]/10 py-8"
              >
                <div className="grid gap-6 sm:grid-cols-[140px_1fr]">
                  <span className="text-xs uppercase tracking-[0.15em] text-[#8D8587]">
                    {item.year}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {item.degree}
                    </h3>

                    <p className="mt-2 text-sm text-[#741426]">
                      {item.institute}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Resume CTA */}
            <motion.a
              href="/Adesh-Dange-Resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#741426] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5F101F]"
            >
              View Resume

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}