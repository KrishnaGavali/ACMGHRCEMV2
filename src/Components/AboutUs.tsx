"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

const AboutUs = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const statY = useTransform(scrollYProgress, [0.3, 0.6], [30, 0]);
  const statOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <div ref={divRef} className=" h-[400vh] relative z-10 bg-transparent ">
      <motion.div
        className="sticky top-0 h-screen flex justify-center items-center px-4"
        style={{ opacity }}
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
          {/* Glow Blobs */}
          <div className="fixed -top-32 -left-20 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full pointer-events-none z-[-1]"></div>
          <div className="fixed -bottom-32 -right-24 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none z-[-1]"></div>

          {/* ACM Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-full border-4 border-blue-400 p-2 sm:p-4 shadow-lg shadow-blue-500/30 bg-white/5 backdrop-blur-md flex-shrink-0"
          >
            <Image
              src="/ACMLogo.png"
              alt="ACM Logo"
              width={300}
              height={300}
              className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] object-contain"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="max-w-2xl text-center lg:text-left"
            style={{ y: translateY, opacity }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                ACM GHRCEM
              </span>
            </h2>

            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed tracking-wide">
              We are the premier technical club at GH Raisoni College of
              Engineering & Management, dedicated to fostering innovation,
              learning, and collaboration in the field of computer science and
              technology.
            </p>

            {/* Stats */}
            <motion.div
              className="flex flex-row gap-6 mt-8 sm:mt-10 items-center justify-center sm:justify-start"
              style={{ y: statY, opacity: statOpacity }}
            >
              <div className="text-center">
                <h3 className="text-4xl font-bold text-cyan-300 drop-shadow-md">
                  50+
                </h3>
                <p className="text-white text-sm mt-2">Events Organized</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-300 drop-shadow-md">
                  7+
                </h3>
                <p className="text-white text-sm mt-2">Workshops Taken</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
