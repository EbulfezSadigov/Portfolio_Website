"use client";

import TransitionEffect from "@/components/TransitionEffect";
import AboutIntro from "@/components/AboutIntro";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AboutCta from "@/components/AboutCta";

const About = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full dark:text-white">
        <AboutIntro />
        <Skills />
        <Experience />
        <Education />
        <AboutCta />
      </main>
    </>
  );
};

export default About;
