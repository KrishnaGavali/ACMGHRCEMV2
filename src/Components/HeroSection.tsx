"use client";
import Image from "next/image";
import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

const HeroSection = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end end"],
  });

  const [showHeroSection, setShowHeroSection] = React.useState<boolean>(true);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.95) {
      setShowHeroSection(false);
    } else {
      setShowHeroSection(true);
    }
  });

  const opacityTransform = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const blueGradientOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const acmScale = useTransform(scrollYProgress, [0, 0.6], [44, 1]);
  const ghrcemOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const scrollOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const scrollY = useTransform(scrollYProgress, [0.8, 0.95], [0, 100]);

  return (
    <>
      <motion.div className="relative h-[500vh] lg:h-[1000vh]" ref={divRef}>
        {showHeroSection && (
          <motion.div
            hidden={!showHeroSection}
            style={{ opacity: opacityTransform }}
          >
            <Image
              src={"/ClubGroupPhoto.jpg"}
              width={1440}
              height={1080}
              alt=""
              className="w-screen h-screen fixed top-0"
            />
            <div
              className=" inset-0 w-full h-screen fixed top-0 to-black from-transparent bg-radial-[at_50%_50%]"
              id="gradientOverlay"
              style={{
                backgroundImage:
                  "radial-gradient(at 50% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
              }}
            />
            <motion.div
              className=" inset-0 w-full h-screen fixed top-0 bg-blue-400"
              id="blueGradientOverlay"
              style={{ opacity: blueGradientOpacity }}
            />
            <motion.div
              className=" w-full h-screen items-center justify-center fixed top-0 flex font-extrabold mix-blend-multiply bg-black text-white flex-col"
              style={{
                backgroundImage:
                  "radial-gradient(at 50% 50%, rgba(81, 162, 255, 0.8) -40%, rgba(0,0,0) 100%)",
              }}
            >
              <motion.h1 className="text-[22vw] lg:text-[20vw] flex flex-col">
                <motion.span
                  className="leading-none"
                  style={{ scale: acmScale }}
                >
                  ACM
                </motion.span>
                <motion.span
                  className="leading-none"
                  style={{ opacity: ghrcemOpacity }}
                >
                  GHRCEM
                </motion.span>
              </motion.h1>
            </motion.div>
            <motion.div
              className="fixed bottom-0 left-1/2 transform -translate-x-1/2 text-blue-400"
              style={{
                opacity: scrollOpacity,
                y: scrollY,
              }}
            >
              <motion.div
                className="flex flex-col items-center space-y-2"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-sm tracking-widest uppercase">
                  Scroll
                </span>
                <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default HeroSection;
