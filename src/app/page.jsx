"use client";
import Image from "next/image";
import React from "react";
import ProfileImage from "../../public/web developer.png"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

const Home = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Portfolio | Home Page" />
        <title>Portfolio | Home Page</title>
      </Head>
      <TransitionEffect />
      <main className="w-full min-h-screen dark:text-white">
        <div className="w-full h-full pt-0 p-32 lg:p-24 md:p-6">
          <div className="flex md:flex-col justify-between items-center w-full h-full pt-20 lg:pt-0">
            <div className="w-[40%] h-full">
              <Image
                priority
                alt="Profile"
                src={ProfileImage}
                className="w-[1000px] h-auto"
              />
            </div>
            <div className="w-[60%] lg:w-full flex flex-col self-center">
              <AnimatedText
                text="Turning vision Into Reality with Code and Design"
                className="text-[64px] md:text-5xl sm:text-3xl !text-left dark:text-white"
              />
              <p className="my-4 text-base font-medium sm:text-[14px] text-justify">
                Full-Stack developer with 1.5 years of hands-on experience
                designing, developing and implementing applications and
                solutions using a range of technologies and programming
                lanugages. Seeking to leverage broad development experience and
                hands-on technical expertise in a challenging role as a
                Full-Stack developer
              </p>
              <div className="flex sm:flex-col items-center mt-2">
                <Link
                  download={true}
                  className="flex sm:w-full text-center sm:justify-center items-center border border-solid dark:bg-white dark:text-black border-transparent transition duration-300 hover:border-black bg-black text-white p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black"
                  href="./Cv_Ebulfez_Sadigov (2).pdf"
                >
                  Resume
                  <FaSquareArrowUpRight className="ml-1" />
                </Link>
                <Link
                  className="ml-4 sm:-ml-4 sm:mt-4 text-lg font-medium capitalize text-black underline dark:text-white"
                  href="mailto:abulfaz.sp@code.edu.az"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
