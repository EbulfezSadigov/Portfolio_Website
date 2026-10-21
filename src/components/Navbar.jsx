"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Logo from "./Logo";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { motion, AnimatePresence } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] flex bg-black dark:bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, toggle }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === href;

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`relative text-2xl font-semibold transition sm:text-xl ${
        isActive ? "text-[#48cae4]" : "text-white hover:text-[#48cae4]"
      }`}
    >
      {title}
      {isActive && (
        <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#48cae4]" />
      )}
    </button>
  );
};

const Navbar = () => {
  const [mode, setmode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const mobileMenu =
    isOpen &&
    typeof document !== "undefined" &&
    createPortal(
      <AnimatePresence>
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="nav-mobile-overlay fixed inset-0 z-[200] flex flex-col bg-[#0a0a0a] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 pb-4 pt-[max(1rem,env(safe-area-inset-top))]"
            >
              <Logo />
              <button
                type="button"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-10">
              <CustomMobileLink title="Home" href="/" toggle={closeMenu} />
              <CustomMobileLink title="About" href="/about" toggle={closeMenu} />
              <CustomMobileLink
                title="Projects"
                href="/projects"
                toggle={closeMenu}
              />
            </nav>

            <div className="shrink-0 border-t border-white/10 px-6 py-8 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <div className="flex items-center justify-center gap-8">
                <Link
                  href="https://www.linkedin.com/in/abulfaz-sadigov1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-[#48cae4]"
                  onClick={closeMenu}
                >
                  <AiFillLinkedin className="text-2xl" />
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/EbulfezSadigov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-[#48cae4]"
                  onClick={closeMenu}
                >
                  <AiFillGithub className="text-2xl" />
                  GitHub
                </Link>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  className="rounded-full border border-white/20 p-3"
                  onClick={() => setmode(mode === "light" ? "dark" : "light")}
                  aria-label="Toggle theme"
                >
                  {mode === "dark" ? <SunIcon /> : <MoonIcon />}
                </button>
              </div>
            </div>
          </motion.div>
      </AnimatePresence>,
      document.body
    );

  return (
    <>
      <header className="sticky top-0 z-[100] w-full border-b border-black/5 bg-white/90 font-medium dark:border-white/10 dark:bg-black/90 dark:text-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-3 md:px-6">
          {/* Mobile bar */}
          <div className="nav-mobile-bar hidden w-full items-center justify-between">
            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="flex flex-col justify-center p-2 -ml-2"
            >
              <span
                className={`bg-black transition duration-300 dark:bg-white block h-0.5 w-6 rounded-sm ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              />
              <span
                className={`bg-black transition duration-300 dark:bg-white block h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`bg-black transition duration-300 dark:bg-white block h-0.5 w-6 rounded-sm ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              />
            </button>
            <Logo />
            <span className="w-10" aria-hidden />
          </div>

          {/* Desktop bar */}
          <div className="nav-desktop-bar flex w-full items-center justify-between">
            <nav className="flex gap-6">
              <CustomLink title="Home" href="/" />
              <CustomLink title="About" href="/about" />
              <CustomLink title="Projects" href="/projects" />
            </nav>
            <Logo />
            <nav className="flex items-center gap-6">
              <Link
                href="https://www.linkedin.com/in/abulfaz-sadigov1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="inline mb-1 mr-1" />
                Linkedin
              </Link>
              <Link
                href="https://github.com/EbulfezSadigov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="inline mb-1 mr-1" />
                Github
              </Link>
              <button
                type="button"
                className="ml-1 flex items-center justify-center rounded-full"
                onClick={() => setmode(mode === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
              >
                {mode === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
            </nav>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  );
};

export default Navbar;
