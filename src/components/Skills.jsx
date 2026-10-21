"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import {
  HiOutlineCpuChip,
  HiOutlineServerStack,
  HiOutlineWrenchScrewdriver,
  HiOutlineChatBubbleBottomCenterText,
} from "react-icons/hi2";

const skillGroups = [
  {
    title: "Front-end",
    icon: HiOutlineCpuChip,
    accent: "from-blue-500/20 to-cyan-500/5",
    items: [
      "HTML5",
      "CSS3 / SCSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "React Query",
      "RTK Query",
    ],
  },
  {
    title: "Back-end & data",
    icon: HiOutlineServerStack,
    accent: "from-violet-500/20 to-purple-500/5",
    items: ["Node.js", "Express.js", "SQL", "MySQL", "NoSQL databases"],
  },
  {
    title: "Practices",
    icon: HiOutlineWrenchScrewdriver,
    accent: "from-[#0077B6]/25 to-emerald-500/5",
    items: [
      "Git & GitHub",
      "AI-assisted development",
      "UI/UX implementation",
      "Performance optimization",
      "SEO",
      "Testing & debugging",
      "Web application architecture",
      "Responsive design",
      "Software mentoring",
    ],
  },
  {
    title: "Languages",
    icon: HiOutlineChatBubbleBottomCenterText,
    accent: "from-amber-500/20 to-orange-500/5",
    items: ["Azerbaijani (native)", "English (B1)"],
  },
];

const Skills = () => {
  return (
    <section className="relative border-y border-black/5 bg-black/[0.02] py-24 dark:border-white/10 dark:bg-white/[0.02] lg:py-16">
      <div className="mx-auto max-w-[1400px] px-8 md:px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & strengths"
          description="Technologies and practices I use daily — from UI engineering to mentoring."
        />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br ${group.accent} p-6 dark:border-white/10`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-[#0077B6] shadow-sm dark:bg-white/10">
                  <group.icon className="text-2xl" />
                </span>
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-sm font-medium transition group-hover:border-[#0077B6]/30 dark:border-white/15 dark:bg-black/40"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
