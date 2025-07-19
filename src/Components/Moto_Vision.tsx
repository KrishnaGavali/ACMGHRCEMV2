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
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.45],
    [0, 1, 1, 0]
  );

  // Title animations
  const titleY = useTransform(
    scrollYProgress,
    [0, 0.4, 0.95, 1],
    [40, 0, 0, -40]
  );
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Decorative line animations
  const lineWidth = useTransform(scrollYProgress, [0, 1], [0, 250]);

  return (
    <div ref={divRef} className="w-full h-[500vh] flex flex-col relative">
      {/* === About Us Section === */}
      <motion.div
        id="about-us"
        className="top-0 h-screen w-full flex items-center justify-center sticky overflow-hidden"
        style={{
          opacity: sectionOpacity,
        }}
      >
        <div className="w-[90%] mx-auto relative z-10 flex items-center justify-around">
          {/* Logo */}
          <div className="text-center w-[29%]">
            <Image
              src={"/ACMLogo.png"}
              alt="ACM Logo"
              className="w-[250px] h-[250px]  mx-auto"
              width={500}
              height={500}
            />
          </div>
          {/* Decorative Line */}
          <motion.div
            className="w-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{ height: lineWidth }}
          />
          {/* About Us Description */}
          <div className="text-center w-[60%]">
            <motion.p
              className="text-[5vw] md:text-[3.5vw] lg:text-[2.5vw] text-blue-400 font-light leading-relaxed tracking-wide"
              style={{
                y: titleY,
                opacity: titleOpacity,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              {`"We are a passionate tech club at GHRCEM, fostering innovation, collaboration, and growth among students. Join us to explore, learn, and create impactful solutions together."`}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
