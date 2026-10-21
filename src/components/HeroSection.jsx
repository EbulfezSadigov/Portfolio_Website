"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProfileImage from "../../public/web developer.png";
import {
  FaSquareArrowUpRight,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import {
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiOutlineCodeBracketSquare,
} from "react-icons/hi2";
import { TbBrandReact, TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss, SiVuedotjs } from "react-icons/si";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const stats = [
  { value: "4+", label: "Years building products" },
  { value: "10+", label: "Projects delivered" },
  { value: "3+", label: "Years teaching" },
];

const techStack = [
  { name: "React", icon: TbBrandReact },
  { name: "Next.js", icon: TbBrandNextjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Vue / Nuxt", icon: SiVuedotjs },
  { name: "Tailwind", icon: SiTailwindcss },
];

const highlights = [
  {
    title: "Product engineering",
    description:
      "End-to-end front-end ownership — from architecture and UI to performance and iteration.",
    icon: HiOutlineCodeBracketSquare,
  },
  {
    title: "AI-assisted workflow",
    description:
      "Faster delivery with Cursor and modern tooling, without sacrificing code quality.",
    icon: HiOutlineSparkles,
  },
  {
    title: "Mentorship & teaching",
    description:
      "3+ years instructing at Code Academy and universities — React, Next.js, and web fundamentals.",
    icon: HiOutlineAcademicCap,
  },
];

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 hero-grid opacity-60 dark:opacity-40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[#0077B6]/15 blur-3xl dark:bg-[#0077B6]/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-[-10%] h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/20"
          aria-hidden
        />

        <div className="mx-auto w-full max-w-[1400px] px-8 py-16 lg:py-12 md:px-6 md:py-10">
          <div className="flex items-center gap-16 lg:flex-col lg:gap-10">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="relative w-[42%] shrink-0 lg:w-full lg:max-w-md"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#0077B6]/25 via-transparent to-violet-500/20 blur-2xl" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-[1.75rem] border border-black/10 bg-white/60 p-4 shadow-2xl backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
              >
                <Image
                  priority
                  alt="Abulfaz Sadigov — front-end developer"
                  src={ProfileImage}
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -right-2 top-8 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-lg dark:border-white/15 dark:bg-black"
              >
                Senior @ FROMFOLIO
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75 }}
                className="absolute -left-2 bottom-12 rounded-full border border-[#0077B6]/30 bg-[#0077B6] px-4 py-2 text-sm font-semibold text-white shadow-lg"
              >
                Open to collaborate
              </motion.span>
            </motion.div>

            <div className="flex-1 lg:w-full">
              <motion.div
                custom={1}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-sm font-medium backdrop-blur dark:border-white/15 dark:bg-white/5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Baku, Azerbaijan · Frontend developer
              </motion.div>

              <motion.h1
                custom={2}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="text-5xl font-bold tracking-tight md:text-4xl sm:text-3xl"
              >
                Abulfaz Sadigov
              </motion.h1>

              <motion.p
                custom={3}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="mt-3 text-2xl font-semibold text-[#0077B6] md:text-xl sm:text-lg"
              >
                Turning vision into reality with code & design
              </motion.p>

              <motion.p
                custom={4}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="mt-5 max-w-2xl text-base leading-relaxed text-black/75 dark:text-white/75 md:text-sm"
              >
                I build modern, responsive web apps and teach the next generation of
                developers. 4+ years shipping production UI with React, Next.js, and Vue —
                plus AI-assisted workflows that keep teams fast and focused.
              </motion.p>

              <motion.div
                custom={5}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="mt-6 flex flex-wrap gap-2"
              >
                {techStack.map(({ name, icon: Icon }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-sm font-medium dark:border-white/15 dark:bg-white/5"
                  >
                    <Icon className="text-lg text-[#0077B6]" />
                    {name}
                  </span>
                ))}
              </motion.div>

              <motion.div
                custom={6}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-1"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 backdrop-blur dark:border-white/10 dark:bg-white/5"
                  >
                    <p className="text-2xl font-bold text-[#0077B6] sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="text-xs font-medium text-black/65 dark:text-white/65 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                custom={7}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="mt-8 flex flex-wrap items-center gap-3 sm:flex-col sm:items-stretch"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl bg-[#0077B6] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#0077B6]/25 transition hover:bg-[#006299] sm:w-full"
                >
                  View projects
                </Link>
                <Link
                  download
                  href="/Abulfaz_Sadigov_CV.pdf"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-black bg-black px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white sm:w-full"
                >
                  Resume
                  <FaSquareArrowUpRight />
                </Link>
                <Link
                  href="mailto:sadigovabulfaz2001@gmail.com"
                  className="inline-flex items-center justify-center rounded-xl border border-black/15 px-6 py-3 text-base font-semibold transition hover:border-black dark:border-white/25 dark:hover:border-white sm:w-full"
                >
                  Contact
                </Link>
              </motion.div>

              <motion.div
                custom={8}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="mt-6 flex items-center gap-4"
              >
                <span className="text-sm font-medium text-black/50 dark:text-white/50">
                  Connect
                </span>
                <Link
                  href="https://github.com/EbulfezSadigov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/10 p-2.5 transition hover:border-[#0077B6] hover:text-[#0077B6] dark:border-white/15"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/abulfaz-sadigov1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/10 p-2.5 transition hover:border-[#0077B6] hover:text-[#0077B6] dark:border-white/15"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-black/[0.02] py-20 dark:border-white/10 dark:bg-white/[0.02] lg:py-14 md:py-12">
        <div className="mx-auto max-w-[1400px] px-8 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold md:text-2xl">What I focus on</h2>
            <p className="mt-2 text-black/60 dark:text-white/60">
              Product work, teaching, and tooling — the mix behind my day-to-day.
            </p>
          </motion.div>
          <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#0077B6]/10 transition group-hover:scale-150" />
                <item.icon className="relative text-3xl text-[#0077B6]" />
                <h3 className="relative mt-4 text-xl font-bold">{item.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-black/70 dark:text-white/70">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/about"
              className="text-base font-semibold text-[#0077B6] underline-offset-4 hover:underline"
            >
              Read full story on About →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
