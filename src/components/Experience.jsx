"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const experiences = [
  {
    position: "Senior Frontend Developer",
    company: "FROMFOLIO Co.",
    companyLink: "https://fromfolio.com",
    time: "December 2024 — Present",
    type: "Full-time",
    work: [
      "Architected and developed a large-scale global web application from the ground up with full front-end ownership.",
      "Delivered complex features from business requirements into scalable, high-performance UI.",
      "Owned the lifecycle: implementation, optimization, debugging, and continuous improvements.",
    ],
  },
  {
    position: "Middle Frontend Developer",
    company: "Markup Agency",
    companyLink: null,
    time: "May 2025 — December 2025",
    type: "Agency",
    work: [
      "Built modern web apps with front-end tech and AI-assisted tools for faster, quality delivery.",
      "Contributed to 10+ projects — new builds, features, maintenance, and optimization.",
      "Collaborated with cross-functional teams on responsive, scalable solutions.",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Maestro Studio",
    companyLink: "https://maestro.st",
    time: "January 2023 — July 2025",
    type: "Product & client work",
    work: [
      "Led Vue.js and Tailwind CSS apps; improved client satisfaction by 30%.",
      "Achieved ~20% performance gains across delivered solutions.",
      "Shipped e-commerce, advertising, and brand platforms for multiple clients.",
    ],
  },
  {
    position: "Software Development Instructor",
    company: "Code Academy",
    companyLink: "https://code.edu.az",
    time: "February 2023 — July 2025",
    type: "Education",
    work: [
      "Taught Web Essentials and modern stacks (React, Next.js, TypeScript).",
      "Redesigned curriculum; improved student outcomes and practical skills.",
      "Mentored advanced learners; partnered with BDU and ATU on CS courses.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-24 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-8 md:px-6">
        <SectionHeading
          eyebrow="Career"
          title="Work experience"
          description="Product engineering, agency delivery, and teaching — in one timeline."
        />
        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#0077B6] via-[#0077B6]/40 to-transparent md:left-[5px]"
            aria-hidden
          />
          <ul className="space-y-10">
            {experiences.map((item, index) => (
              <motion.li
                key={`${item.company}-${item.time}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="relative pl-10 md:pl-8"
              >
                <span
                  className="absolute left-0 top-6 h-4 w-4 rounded-full border-4 border-white bg-[#0077B6] shadow dark:border-black"
                  aria-hidden
                />
                <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-white/5 md:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold md:text-lg">
                        {item.position}
                      </h3>
                      <p className="mt-1 font-medium text-[#0077B6]">
                        {item.companyLink ? (
                          <a
                            href={item.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {item.company}
                          </a>
                        ) : (
                          item.company
                        )}
                      </p>
                    </div>
                    <span className="rounded-full bg-[#0077B6]/10 px-3 py-1 text-xs font-semibold text-[#0077B6]">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-black/55 dark:text-white/55 mb-4">
                    {item.time}
                  </p>
                  <ul className="space-y-2">
                    {item.work.map((line) => (
                      <li
                        key={line}
                        className="flex gap-2 text-sm leading-relaxed text-black/75 dark:text-white/75"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0077B6]" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
