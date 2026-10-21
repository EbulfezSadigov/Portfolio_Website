"use client";

import TransitionEffect from "@/components/TransitionEffect";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full dark:text-white">
        <HeroSection />
      </main>
    </>
  );
};

export default Home;
