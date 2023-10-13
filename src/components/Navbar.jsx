"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillGitlab } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { motion } from "framer-motion";
const CustomLink = ({ href, title, className = "" }) => {
  const router = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] flex bg-black dark:bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} relative group text-white dark:text-black`}
    >
      {title}
      <span
        className={`h-[1px] flex bg-black text-white dark:bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setmode] = useThemeSwitcher();
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <header className="w-full relative font-medium dark:text-white px-32 md:px-8 py-2 flex justify-between items-center">
      <button
        onClick={handleClick}
        className="hidden lg:flex flex-col justify-center items-center mt-2"
      >
        <span
          className={`bg-black transition duration-300 dark:bg-white block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black transition duration-300 dark:bg-white block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black transition duration-300 dark:bg-white block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex gap-6">
          <CustomLink title="Home" href="/" />
          <CustomLink title="About" href="/about" />
          <CustomLink title="Projects" href="/projects" />
        </nav>
        <h2>
          <Logo />
        </h2>
        <nav className="flex gap-6">
          <Link
            href="https://www.linkedin.com/in/abulfaz-sadigov1/"
            target="_blank"
          >
            <AiFillLinkedin className="inline mb-1 mr-1" />
            Linkedin
          </Link>
          <Link href="https://github.com/EbulfezSadigov" target="_blank">
            <AiFillGithub className="inline mb-1 mr-1" />
            Github
          </Link>
          <Link href="https://gitlab.com/abulfazs" target="_blank">
            <AiFillGitlab className="inline mb-1 mr-1" />
            Gitlab
          </Link>

          <button
            className="ml-3 flex items-center justify-center rounded-full"
            onClick={() => setmode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>
      <h2 className="hidden lg:flex">
        <Logo />
      </h2>
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] gap-10 flex z-30 bg-black/90 dark:bg-white/75 rounded-lg backdrop-blur-md py-32 dark:text-white flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <nav className="flex gap-6 items-center flex-col justify-center">
            <CustomMobileLink title="Home" href="/" toggle={handleClick} />
            <CustomMobileLink
              title="About"
              href="/about"
              toggle={handleClick}
            />
            <CustomMobileLink
              title="Projects"
              href="/projects"
              toggle={handleClick}
            />
          </nav>
          <nav className="text-white dark:text-black">
            <div className="flex gap-6">
              <Link
                href="https://www.linkedin.com/in/abulfaz-sadigov1/"
                target="_blank"
              >
                <AiFillLinkedin className="inline mb-1 mr-1" />
                <span className="xs:hidden">Linkedin</span>
              </Link>
              <Link href="https://github.com/EbulfezSadigov" target="_blank">
                <AiFillGithub className="inline mb-1 mr-1" />
                <span className="xs:hidden">Github</span>
              </Link>
              <Link href="https://gitlab.com/abulfazs" target="_blank">
                <AiFillGitlab className="inline mb-1 mr-1" />
                <span className="xs:hidden">Gitlab</span>
              </Link>
            </div>

            <div className="flex justify-center mt-6">
              <button
                className="ml-3 rounded-full"
                onClick={() => setmode(mode === "light" ? "dark" : "light")}
              >
                {mode === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
