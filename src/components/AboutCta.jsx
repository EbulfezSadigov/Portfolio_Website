"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaSquareArrowUpRight } from "react-icons/fa6";

const AboutCta = () => {
  return (
    <section className="pb-24 lg:pb-16">
      <div className="mx-auto max-w-[1400px] px-8 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0077B6] to-[#005f92] px-10 py-12 text-white shadow-xl md:px-6 md:py-10"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            aria-hidden
          />
          <div className="relative max-w-xl">
            <h2 className="text-3xl font-bold md:text-2xl">
              Let&apos;s build something together
            </h2>
            <p className="mt-3 text-white/85 md:text-sm">
              Explore shipped work or download my CV for roles in front-end
              development and technical education.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-[#0077B6] transition hover:bg-white/90"
              >
                View projects
              </Link>
              <Link
                href="/Abulfaz_Sadigov_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                Download CV
                <FaSquareArrowUpRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCta;
