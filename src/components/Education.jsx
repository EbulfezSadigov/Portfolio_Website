import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import Licon from "./Licon";

const Details = ({ position, time, work }) => {
  const ref = useRef();

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <Licon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl xs:text-lg">
          {position}&nbsp;
        </h3>
        <span className="capitalize font-medium text-black/75 dark:text-white xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full dark:text-white md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-white md:w-[2px] md:left-[30px] xs:left-5"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Doctor Of Philosophy, Computer Science
in Ecology field"
            time="2024 - Present"
            work=""
          />
          <Details
            position="Master of science in Cyber security"
            time="2022 - 2024"
            work="Learning fundamentals of Cyber security"
          />
          <Details
            position="Bachelor of science in Computer Science"
            time="2018 - 2022"
            work="Learning fundamentals of Computer science"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
