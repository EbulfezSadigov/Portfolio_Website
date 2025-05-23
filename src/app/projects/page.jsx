"use client";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  production,
  development,
}) => {
  return (
    <article className="w-full flex lg:flex-col lg:px-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 items-center justify-between rounded-3xl rounded-br-2xl border border-black dark:border-white bg-white dark:bg-black dark:text-white shadow-2xl p-12 relative">
      <div className="absolute top-0 xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] -right-3 rounded-br-3xl dark:bg-white -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black" />
      {production && (
        <p className="absolute font-extrabold right-10 top-10 text-[12px] px-4 py-1 rounded-full text-white bg-[#0077B6]">
          Production
        </p>
      )}
      {development && (
        <p className="absolute font-extrabold right-10 top-10 text-[12px] px-4 py-1 rounded-full text-white bg-[#0077B6]">
          Development
        </p>
      )}
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={link}
        target="_blank"
      >
        <Image
          width={800}
          height={800}
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition duration-300"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-blue-500 font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-black dark:text-white sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank">
            <AiFillGithub className="text-4xl" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg sm:px-4 sm:text-base bg-black dark:bg-white dark:text-black text-white p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({
  type,
  title,
  img,
  link,
  github,
  summary,
  production,
  development,
}) => {
  return (
    <article className="w-full h-[500px] flex flex-col items-center justify-center rounded-2xl border border-solid border-black dark:border-white bg-white dark:bg-black p-6 relative xs:p-4">
      <div className="absolute md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] top-0 -right-3 rounded-br-3xl dark:bg-white -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <Image
          src={img}
          width={800}
          height={800}
          alt={title}
          className="w-full h-auto hover:scale-105 transition duration-300"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 relative">
        <span className="text-blue-500 font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-white lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-black dark:text-white">{summary}</p>
        {production && (
          <p className="absolute font-extrabold right-0 top-4 text-[10px] px-4 py-1 rounded-full text-white bg-[#0077B6]">
            Production
          </p>
        )}
        {development && (
          <p className="absolute font-extrabold right-0 top-4 text-[10px] px-4 py-1 rounded-full text-white bg-[#0077B6]">
            Development
          </p>
        )}
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-black md:text-base dark:bg-white dark:text-black text-white p-2 px-6 text-lg font-semibold"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <AiFillGithub className="text-4xl dark:fill-white" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Projects page</title>
        <meta name="description" content="Projects page" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <div className="mx-auto sm:px-6 lg:px-8 px-4 max-w-[1400px] pt-16 md:pt-4">
          <AnimatedText
            className="mb-10 dark:text-white lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text="Imagination trumps Knowledge"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Fromfolio"
                summary="A feature-rich Fromfolio website using NextJS, Tailwind CSS, Firebase, React Query. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://fromfolio.com"
                github="https://gitlab.com/users/abulfazs/contributed"
                img="/fromfolio.png"
              // production={true}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="MNV Agro"
                summary="A feature-rich MNV Agro using NuxtJS 3, Tailwind CSS, Firebase, Vuex. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://mnvagro.az/"
                github="https://gitlab.com/users/abulfazs/contributed"
                img="/mnv.png"
              // production={true}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Karvan-L Group of Companies"
                summary="A feature-rich Karvan-L using Nuxt3, Tailwind CSS, Firebase,Vuex. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://karvanl.az/"
                github="https://gitlab.com/users/abulfazs/contributed"
                img="/karvan.png"
              // production={true}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Bendis"
                summary="A feature-rich Bendis e-commerce website using NextJS, Tailwind CSS, NodeJS, React Query. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://bendis-ui-j86z.vercel.app/en"
                github="https://github.com/EbulfezSadigov"
                img="/bendis.png"
              // development={true}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Maestro School"
                summary="A feature-rich Maestro School using NuxtJS, Tailwind CSS, Firebase,Pinia. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://www.maestroschool.az/"
                github="https://gitlab.com/users/abulfazs/contributed"
                img="/maestro.png"
              // production={true}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Mirror Advertising"
                summary="A feature-rich Mirror Advertising using React JS, Tailwind CSS, Python,Rtk Query. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://mirror.az/"
                github="https://gitlab.com/users/abulfazs/contributed"
                img="/mirror.png"
              // production={true}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Aral Group"
                summary="A feature-rich Aral Group website using VueJS, Tailwind CSS, Firebase, Vuex. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://aralgroupbaku.com/az"
                github="https://gitlab.com/users/abulfazs/contributed"
                img="/aral-group.png"
              // production={true}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
