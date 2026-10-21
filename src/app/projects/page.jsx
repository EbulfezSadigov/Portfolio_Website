"use client";

import TransitionEffect from "@/components/TransitionEffect";
import ProjectsShowcase from "@/components/ProjectsShowcase";

const Projects = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full dark:text-white">
        <ProjectsShowcase />
      </main>
    </>
  );
};

export default Projects;
