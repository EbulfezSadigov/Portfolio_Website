"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const education = [
  {
    position: "Doctor of Philosophy — Ecology field",
    institution: "National AeroCosmic Agency",
    time: "2024 — Present",
    work: "Ongoing doctoral research in the ecology field.",
    highlight: "In progress",
  },
  {
    position: "Master of Science, Computer Science",
    institution: "Azerbaijan Technical University",
    time: "2022 — 2024",
    work: "Graduation grade: 91",
    highlight: "91 / 100",
  },
  {
    position: "Bachelor of Science, Computer Science",
    institution: "Baku State University",
    time: "2018 — 2022",
    work: "Graduation grade: 84",
    highlight: "84 / 100",
  },
];

const Education = () => {
  return (
    <section className="relative border-t border-black/5 bg-black/[0.02] py-24 dark:border-white/10 dark:bg-white/[0.02] lg:py-16">
      <div className="mx-auto max-w-[1400px] px-8 md:px-6">
        <SectionHeading
          eyebrow="Learning"
          title="Education"
          description="Academic path in computer science — and ongoing PhD research."
        />
        <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
          {education.map((item, index) => (
            <motion.article
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="relative flex flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0077B6]/10 text-[#0077B6]">
                  <HiOutlineAcademicCap className="text-xl" />
                </span>
                <span className="rounded-full border border-[#0077B6]/30 px-3 py-1 text-xs font-bold text-[#0077B6]">
                  {item.highlight}
                </span>
              </div>
              <h3 className="text-lg font-bold leading-snug">{item.position}</h3>
              <p className="mt-2 font-medium text-[#0077B6]">{item.institution}</p>
              <p className="mt-3 text-sm text-black/55 dark:text-white/55">
                {item.time}
              </p>
              {item.work && (
                <p className="mt-4 text-sm text-black/70 dark:text-white/70 border-t border-black/5 pt-4 dark:border-white/10">
                  {item.work}
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
