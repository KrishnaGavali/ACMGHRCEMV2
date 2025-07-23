"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

const AboutUs = () => {
  const divRef = useRef<HTMLDivElement>(null);

  // Scroll progress tracking for animations
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end end"],
  });

  // Opacity animations for sections
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Title animations
  const titleY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Main title animations
  const mainTitleY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const mainTitleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Decorative line animations
  const lineWidth = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Events section animations
  const eventsY = useTransform(scrollYProgress, [0.3, 0.6], [40, 0]);
  const eventsOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <div ref={divRef} className="w-full h-[250vh] flex flex-col relative">
      {/* === About Us Section === */}
      <motion.div
        id="about-us"
        className="top-0 h-screen w-full flex items-center justify-center sticky overflow-hidden"
        style={{
          opacity: sectionOpacity,
        }}
      >
        <div className="w-[95%] max-w-7xl mx-auto relative z-10">
          {/* Main Title */}
          <motion.div
            className="text-center mb-4"
            style={{
              y: mainTitleY,
              opacity: mainTitleOpacity,
            }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
              About Us
            </h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>

          {/* Content Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20">
            {/* Logo Section */}
            <motion.div
              className="flex-shrink-0 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full scale-110"></div>
                <Image
                  src={"/ACMLogo.png"}
                  alt="ACM Logo"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto relative z-10"
                  width={500}
                  height={500}
                />
              </div>
            </motion.div>

            {/* Decorative Line - Hidden on mobile */}
            <motion.div
              className="hidden md:block w-1 bg-radial from-blue-400/60 to-transparent relative"
              style={{ height: lineWidth }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
            </motion.div>

            {/* Description Section */}
            <motion.div
              className="flex-1 max-w-2xl text-center md:text-left"
              style={{
                y: titleY,
                opacity: titleOpacity,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -top-6 -left-4 text-6xl text-blue-200/40 font-serif"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  &quot;
                </motion.div>

                <p className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-light leading-relaxed tracking-wide relative z-10 px-4">
                  We are a passionate tech club at GHRCEM, fostering innovation,
                  collaboration , and growth among students. Join us to explore,
                  learn, and create impactful solutions together.
                </p>

                <motion.div
                  className="absolute -bottom-4 -right-4 text-6xl text-blue-200/40 font-serif"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  &quot;
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Hosted Events Section */}
          <motion.div
            className="mt-16 text-center"
            style={{
              y: eventsY,
              opacity: eventsOpacity,
            }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              Hosted 20+ Events
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-300 mt-4">
              From workshops to hackathons, we bring students together to learn,
              innovate, and grow.
            </p>
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
