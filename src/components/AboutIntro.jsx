"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProfilePic from "../../public/1698878744649.jpg";
import AnimatedNumbers from "@/components/AnimatedNumbers";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineLanguage,
} from "react-icons/hi2";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.07, duration: 0.5, ease: "easeOut" },
  }),
};

const stats = [
  { value: 4, suffix: "+", label: "Years in development" },
  { value: 10, suffix: "+", label: "Projects delivered" },
  { value: 3, suffix: "+", label: "Years teaching" },
];

const quickFacts = [
  {
    icon: HiOutlineMapPin,
    label: "Baku, Azerbaijan",
  },
  {
    icon: HiOutlineEnvelope,
    label: "sadigovabulfaz2001@gmail.com",
    href: "mailto:sadigovabulfaz2001@gmail.com",
  },
  {
    icon: HiOutlinePhone,
    label: "+994 51 333 96 95",
    href: "tel:+994513339695",
  },
  {
    icon: HiOutlineLanguage,
    label: "AZ (native) · EN (B1)",
  },
];

const AboutIntro = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pb-14">
      <div
        className="pointer-events-none absolute inset-0 -z-10 hero-grid opacity-50 dark:opacity-35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-[#0077B6]/12 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-[1400px] px-8 md:px-6">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="mb-12 md:mb-8"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0077B6]">
            About
          </p>
          <h1 className="mt-2 text-5xl font-bold tracking-tight md:text-4xl sm:text-3xl">
            Passion fuels{" "}
            <span className="bg-gradient-to-r from-[#0077B6] to-violet-500 bg-clip-text text-transparent">
              purpose
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-black/65 dark:text-white/65 md:text-base">
            Developer, instructor, and lifelong learner — building products and
            helping others learn to code.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-10 items-start lg:grid-cols-1">
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="col-span-5 lg:col-span-1 relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#0077B6]/20 to-violet-500/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/70 p-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
              <Image
                priority
                src={ProfilePic}
                alt="Abulfaz Sadigov"
                className="w-full h-auto rounded-2xl object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-black/75 px-4 py-3 text-white backdrop-blur-md">
                <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                  Currently
                </p>
                <p className="font-semibold">Senior Frontend @ FROMFOLIO</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="col-span-7 lg:col-span-1 flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-black/10 bg-white/60 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 md:p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#0077B6] mb-4">
                Biography
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-black/80 dark:text-white/80 md:text-sm">
                <p>
                  Hi, I&apos;m <strong className="text-black dark:text-white">Abulfaz Sadigov</strong>, a
                  Front-End Developer and programming instructor focused on modern,
                  responsive, and user-friendly web applications. I have 4+ years of
                  hands-on development experience across product teams and agencies.
                </p>
                <p>
                  I use AI-assisted tools such as Cursor to move faster while keeping
                  code quality high, and I enjoy turning business requirements into
                  scalable, maintainable front-end solutions. For the past 3 years I
                  have also taught at Code Academy and partnered with universities on
                  computer science education.
                </p>
                <p>
                  I&apos;m especially interested in AI-driven development, performance
                  optimization, and mentoring—the same areas I bring to every project
                  and classroom.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/50 px-4 py-3 dark:border-white/10 dark:bg-white/5"
                >
                  <fact.icon className="shrink-0 text-xl text-[#0077B6]" />
                  {fact.href ? (
                    <Link
                      href={fact.href}
                      className="text-sm font-medium hover:text-[#0077B6] transition"
                    >
                      {fact.label}
                    </Link>
                  ) : (
                    <span className="text-sm font-medium">{fact.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#0077B6]/20 bg-gradient-to-br from-[#0077B6]/10 to-transparent p-5 text-center"
                >
                  <p className="text-4xl font-bold text-[#0077B6] md:text-3xl">
                    <AnimatedNumbers value={stat.value} />
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-xs font-medium text-black/65 dark:text-white/65 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
