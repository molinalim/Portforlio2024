"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  floating,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          variants={slideInFromTop}
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            ServiceNow Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a ServiceNow DevOps Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [-20, 20, -20], opacity: [1, 0.5, 1] }}
      transition={{
        y: {
          loop: Infinity, // Loop the animation infinitely
          duration: 2,
          ease: 'easeInOut',
        },
        opacity: {
          loop: Infinity, // Loop the animation infinitely
          duration: 2,
          ease: 'easeInOut',
        },
      }}
      style={{ display: 'inline-block' }} // Ensures the div takes only as much width as necessary
    
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/astronaut.png"
          alt="Floating Astronaut"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
