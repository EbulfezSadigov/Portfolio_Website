"use client";

import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, description, align = "center" }) => {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`mb-14 md:mb-10 ${isCenter ? "text-center mx-auto max-w-2xl" : ""}`}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-[#0077B6] mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-bold tracking-tight md:text-3xl sm:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-black/60 dark:text-white/60 md:text-sm">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
