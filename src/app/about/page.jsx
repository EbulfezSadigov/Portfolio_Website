"use client";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProfilePic from "../../../public/1698878744649.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | About page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center py-10 dark:text-white">
        <div className="mx-auto pt-0 sm:px-6 lg:px-8 px-4 max-w-[1400px]">
          <AnimatedText
            text="Passion fuels purpose"
            className="mb-10 dark:text-white lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-black/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Sadigov Ebulfez, a web developer with a passion for
                creating beautiful, functional, and user-centered digital
                experiences. With 3+ years of experience in the field. I am
                always looking for new and innovative ways to bring my clients'
                visions to life.
              </p>
              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.{" "}
              </p>
              <p className="font-medium">
                Whether I'm working on a website,I bring my commitment to design
                excellence and user-centered thinking to every project I work
                on. I look forward to the opportunity to bring my skills and
                passion to your next project.
              </p>
            </div>
            <div className="col-span-3 md:col-span-8 md:order-1 xl:col-span-4 relative dark:bg-black dark:border-white h-max rounded-2xl border-2 border-solid border-black bg-white p-8">
              <div className="absolute top-0 -right-3 -z-10 dark:bg-white w-[102%] h-[103%] rounded-2xl bg-black" />
              <Image
                priority
                src={ProfilePic}
                alt="CodeBucks"
                className="w-full h-auto rounded-2xl "
              />
            </div>

            <div className="col-span-2 md:order-3 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={500} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years experienced
                </h2>
              </div>
            </div>
          </div>
          <Experience />
          <Education />
        </div>
      </main>
    </>
  );
};

export default About;
