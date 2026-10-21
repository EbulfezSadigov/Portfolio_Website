"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const filters = [
  { id: "all", label: "All" },
  { id: "production", label: "Production" },
  { id: "development", label: "In development" },
];

const statusLabel = {
  production: "Production",
  development: "In development",
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.05, duration: 0.45, ease: "easeOut" },
  }),
};

function StatusBadge({ status }) {
  const isDev = status === "development";
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
        isDev
          ? "bg-amber-500/15 text-amber-700 dark:text-amber-300"
          : "bg-[#0077B6]/15 text-[#0077B6]"
      }`}
    >
      {statusLabel[status]}
    </span>
  );
}

function FeaturedProjectCard({ project, index, reverse }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={`group grid grid-cols-2 gap-8 overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5 lg:grid-cols-1 lg:gap-6 md:p-4 ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative overflow-hidden rounded-2xl ${
          reverse ? "order-2 lg:order-none" : ""
        }`}
      >
        <div className="absolute inset-0 z-10 bg-[#0077B6]/0 transition group-hover:bg-[#0077B6]/10" />
        <Image
          src={project.img}
          width={900}
          height={600}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-col justify-center py-2">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-[#0077B6]">
            {project.type}
          </span>
          <StatusBadge status={project.status} />
          {index === 0 && (
            <span className="rounded-full bg-black px-2.5 py-0.5 text-xs font-bold text-white dark:bg-white dark:text-black">
              Highlight
            </span>
          )}
        </div>
        <h3 className="text-3xl font-bold tracking-tight md:text-2xl">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077B6] transition"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 text-base leading-relaxed text-black/70 dark:text-white/70 md:text-sm">
          {project.summary}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-black/10 bg-white/90 px-3 py-1 text-xs font-medium dark:border-white/15 dark:bg-black/30"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0077B6] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#006299]"
          >
            Visit site
            <FaArrowUpRightFromSquare className="text-xs" />
          </Link>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-black/15 px-5 py-2.5 text-sm font-semibold transition hover:border-[#0077B6] hover:text-[#0077B6] dark:border-white/20"
            aria-label={`${project.title} on GitHub`}
          >
            <FaGithub className="text-lg" />
            Code
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
    >
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={project.img}
          width={800}
          height={500}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <StatusBadge status={project.status} />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#0077B6]">
          {project.type}
        </p>
        <h3 className="mt-2 text-xl font-bold">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077B6] transition"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-black/65 dark:text-white/65">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-md bg-black/[0.04] px-2 py-0.5 text-xs font-medium dark:bg-white/10"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4 dark:border-white/10">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#0077B6] hover:underline"
          >
            Live demo →
          </Link>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 transition hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.status === activeFilter);
  }, [activeFilter]);

  const featured = filtered.filter((p) => p.featured);
  const standard = filtered.filter((p) => !p.featured);

  const productionCount = projects.filter((p) => p.status === "production").length;

  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 hero-grid opacity-50 dark:opacity-35"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#0077B6]/15 blur-3xl"
          aria-hidden
        />

        <div className="mx-auto max-w-[1400px] px-8 md:px-6">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0077B6]">
              Portfolio
            </p>
            <h1 className="mt-2 text-5xl font-bold tracking-tight md:text-4xl sm:text-3xl">
              Imagination meets{" "}
              <span className="bg-gradient-to-r from-[#0077B6] to-violet-500 bg-clip-text text-transparent">
                shipped work
              </span>
            </h1>
            <p className="mt-4 text-lg text-black/65 dark:text-white/65 md:text-base">
              A selection of production and in-progress front-end projects—product
              platforms, corporate sites, e-commerce, and education.
            </p>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="mt-10 flex flex-wrap gap-4"
          >
            <div className="rounded-2xl border border-[#0077B6]/25 bg-[#0077B6]/10 px-5 py-3">
              <p className="text-2xl font-bold text-[#0077B6]">{projects.length}</p>
              <p className="text-xs font-medium text-black/60 dark:text-white/60">
                Total showcases
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/60 px-5 py-3 dark:border-white/10 dark:bg-white/5">
              <p className="text-2xl font-bold">{productionCount}</p>
              <p className="text-xs font-medium text-black/60 dark:text-white/60">
                Live in production
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/60 px-5 py-3 dark:border-white/10 dark:bg-white/5">
              <p className="text-2xl font-bold">React · Vue · Next</p>
              <p className="text-xs font-medium text-black/60 dark:text-white/60">
                Core stacks
              </p>
            </div>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeFilter === f.id
                    ? "bg-[#0077B6] text-white shadow-md shadow-[#0077B6]/30"
                    : "border border-black/15 bg-white/80 hover:border-[#0077B6]/40 dark:border-white/20 dark:bg-white/5"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-[1400px] space-y-16 px-8 md:px-6">
          {featured.length > 0 && (
            <div className="space-y-12">
              <SectionHeading
                align="left"
                eyebrow="Featured"
                title="Flagship projects"
                description="Larger builds with end-to-end front-end involvement."
              />
              {featured.map((project, i) => (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  reverse={i % 2 === 1}
                />
              ))}
            </div>
          )}

          {standard.length > 0 && (
            <div>
              <SectionHeading
                align="left"
                eyebrow="More work"
                title="Client & product sites"
                description="Corporate, education, and industry-specific experiences."
              />
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
                {standard.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-black/60 dark:text-white/60 py-16">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      <section className="border-t border-black/5 bg-black/[0.02] py-20 dark:border-white/10 dark:bg-white/[0.02] lg:py-14">
        <div className="mx-auto max-w-[1400px] px-8 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-black/10 bg-white p-10 dark:border-white/10 dark:bg-white/5 md:p-6 lg:flex-col"
          >
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold md:text-xl">
                Interested in working together?
              </h2>
              <p className="mt-2 text-black/65 dark:text-white/65">
                I&apos;m open to front-end roles, freelance product work, and
                technical mentoring. Say hello or grab my CV.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:sadigovabulfaz2001@gmail.com"
                className="rounded-xl bg-[#0077B6] px-6 py-3 font-semibold text-white transition hover:bg-[#006299]"
              >
                Get in touch
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-black/15 px-6 py-3 font-semibold transition hover:border-[#0077B6] dark:border-white/20"
              >
                About me
              </Link>
              <Link
                href="/Abulfaz_Sadigov_CV.pdf"
                download
                className="rounded-xl border border-black/15 px-6 py-3 font-semibold transition hover:border-[#0077B6] dark:border-white/20"
              >
                Download CV
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectsShowcase;
