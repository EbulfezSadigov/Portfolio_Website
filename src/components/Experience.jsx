import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import Licon from "./Licon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef();

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <Licon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl xs:text-lg">
          {position}&nbsp;{" "}
          <a className="text-[#0077B6]" href={companyLink}>
            @company
          </a>
        </h3>
        <span className="capitalize font-medium text-black/75 dark:text-white xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm md:text-justify">{work}</p>
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
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-white md:w-[2px] md:left-[30px] xs:left-5"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Middle Front-end Developer"
            company="FromFolio Co."
            companyLink="https://fromfolio.com"
            time="2024 December-Present"
            work="Working alongside a talented team, I ensure the platform offers seamless navigation,
innovative features, and exceptional performance. By leveraging modern front-end
technologies and best practices, I help shape the future of digital collaboration in
automotive design."
          />
          <Details
            position="Software Programming Instructor"
            company="Code Academy"
            companyLink="https://code.edu.az"
            time="2023 Februrary-Present"
            work="Teaching programming in one of the largest secondary education centers of country. Education syllabus of the course contains React,NextJs, HTML/CSS/JS, MongoDB etc. Have collabrated with Baku State University and Azerbaijan Technical University practicing CS 101+ to senior year computer science students."
          />
          <Details
            position="Middle Front-end Developer"
            company="Maestro Studio"
            companyLink="https://maestro.st"
            time="2024 June-Present"
            work="Developed and maintained robust, scalable code for various high-traffic web
applications, leading to a 40% increase in site performance and user satisfaction
Implemented a responsive design strategy that improved website accessibility on mobile
devices by 80%, resulting in a significant increase in mobile user engagement.
Provided technical support to customers by troubleshooting and resolving software
issues.
Front-end of My Brands and Bantik Websites - E-commerce websites.
Management and Front end of Mirror - Outdoor Advertising website."
          />
          <Details
            position="Junior Front-end Developer"
            company="Maestro Studio"
            companyLink="https://maestro.st"
            time="2023 January-2024 June4"
            work="Designed and developed efficient and maintainable
                        software according to business objectives and needs of
                        various clients.Maintained complex technology infrastructure and
                        collaborated with product team to implement new features
                        and strategically plan for future products.Used Javascript frameworks (VueJS,Nuxt), Tailwind CSS and other tools to
                        develop app-solutions. "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
