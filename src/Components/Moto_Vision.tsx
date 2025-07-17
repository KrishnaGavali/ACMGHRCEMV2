"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Moto_Vision = () => {
  const divRef = useRef<HTMLDivElement>(null);

  // Scroll progress tracking for animations
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end end"],
  });

  // Opacity animations for MOTO and VISION sections
  const motoOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.45],
    [0, 1, 1, 0]
  );
  const visionOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.9, 1],
    [0, 1, 1, 0]
  );

  // Title animations for MOTO and VISION sections
  const titleYMoto = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.4, 0.5],
    [40, 0, 0, -40]
  );
  const titleYVision = useTransform(scrollYProgress, [0.7, 0.8], [40, 0]);
  const titleOpacityMoto = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const titleOpacityVision = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

  // Decorative line animations
  const lineWidthMoto = useTransform(scrollYProgress, [0.15, 0.35], [0, 300]);
  const lineWidthVision = useTransform(scrollYProgress, [0.65, 0.85], [0, 300]);

  return (
    <div ref={divRef} className="w-full h-[1000vh] flex flex-col relative">
      {/* === MOTO Section === */}
      <motion.div
        id="moto"
        className="top-0 h-screen w-full flex items-center justify-center sticky overflow-hidden"
        style={{
          opacity: motoOpacity,
        }}
      >
        <div className="w-[90%] mx-auto relative z-10 flex items-center justify-around">
          {/* MOTO Title */}
          <div className="text-center w-[29%]">
            <h1 className="text-[5vw] font-black text-white/90 relative z-10 tracking-tight leading-none">
              OUR MOTO
            </h1>
          </div>
          {/* Decorative Line */}
          <motion.div
            className="w-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{ height: lineWidthMoto }}
          />
          {/* MOTO Description */}
          <div className="text-center w-[60%]">
            <motion.p
              className="text-[5vw] md:text-[3.5vw] lg:text-[2.5vw] text-blue-400 font-light leading-relaxed tracking-wide"
              style={{
                y: titleYMoto,
                opacity: titleOpacityMoto,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              {`"Empowering innovation and creativity through technology and teamwork."`}
            </motion.p>
          </div>
        </div>
      </motion.div>
      {/* === VISION Section === */}
      <motion.div
        id="vision"
        className="top-0 h-screen w-full flex items-center justify-center sticky overflow-hidden"
        style={{
          opacity: visionOpacity,
        }}
      >
        <div className="w-[90%] mx-auto relative z-10 flex items-center justify-around">
          {/* VISION Title */}
          <div className="text-center w-[29%]">
            <h1 className="text-[5vw] font-black text-white/90 relative z-10 tracking-tight leading-none">
              OUR VISION
            </h1>
          </div>
          {/* Decorative Line */}
          <motion.div
            className="w-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{ height: lineWidthVision }}
          />
          {/* VISION Description */}
          <div className="text-center w-[60%]">
            <motion.p
              className="text-[5vw] md:text-[3.5vw] lg:text-[2.5vw] text-blue-400 font-light leading-relaxed tracking-wide"
              style={{
                y: titleYVision,
                opacity: titleOpacityVision,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              {`"To become a catalyst of change, shaping a future driven by curiosity, inclusivity, and impact."`}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Moto_Vision;
