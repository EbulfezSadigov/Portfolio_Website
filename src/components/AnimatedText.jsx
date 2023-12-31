"use client";
import React from "react";
import { motion } from "framer-motion";
const AnimatedText = ({ text, className = "" }) => {
  const quote = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const singleWord = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`inline-block w-full text-black font-bold capitalize text-8xl ${className}`}
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              variants={singleWord}
              key={index}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
