"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function VicePresident() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll progress tracker
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [showContent, setShowContent] = useState<
    "Position" | "Tagline" | "Details"
  >("Position");

  // Animations for separator lines and opacity
  const SeparatorLineHeightLG = useTransform(scrollYProgress, [0, 1], [0, 450]);
  const SeparatorLineHeightMD = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const SeparatorLineWidthSM = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const sectionOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const positionOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.55, 0.6],
    [0, 1, 1, 0]
  );
  const positionY = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.55, 0.6],
    [50, 0, 0, -50]
  );

  const taglineOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.65, 0.85, 0.9],
    [0, 1, 1, 0]
  );
  const taglineY = useTransform(
    scrollYProgress,
    [0.6, 0.65, 0.85, 0.9],
    [50, 0, 0, -50]
  );

  // Content swapping based on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.6) {
      setShowContent("Position");
    } else if (latest > 0.6 && latest < 0.9) {
      setShowContent("Tagline");
    } else {
      setShowContent("Details");
    }
  });

  return (
    <>
      {/* Section container with large scroll area */}
      <div ref={sectionRef} className="relative h-[600vh] w-full text-white">
        {/* Sticky motion wrapper with scroll animation */}
        <motion.div
          className="px-4 sticky z-10 h-screen top-0 flex justify-center items-center will-change-transform"
          style={{ opacity: sectionOpacity }}
        >
          <div className="flex flex-col md:flex-row items-center justify-start w-full gap-6">
            {/* Image and animated separator lines */}
            <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 justify-center items-center w-[90%] md:w-[40%]">
              <Image
                src="/VicePresident.png"
                alt="Vice President"
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-cover relative z-10 border-2 border-blue-400 rounded-xl"
                height={500}
                width={500}
              />
              <motion.div
                className="w-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent hidden lg:block"
                style={{ height: SeparatorLineHeightLG }}
              />
              <motion.div
                className="w-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent hidden md:block lg:hidden"
                style={{ height: SeparatorLineHeightMD }}
              />
              <motion.div
                className="h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent block md:hidden"
                style={{ width: SeparatorLineWidthSM }}
              />
            </div>

            {/* Scroll-driven content sections */}
            {showContent === "Position" ? (
              <motion.p
                className="text-left text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4vw] md:w-[60%]"
                style={{
                  opacity: positionOpacity,
                  y: positionY,
                }}
              >
                Vice President
              </motion.p>
            ) : showContent === "Tagline" ? (
              <motion.p
                className="text-center sm:text-left w-[90%] sm:w-3/4 md:w-[60%] text-sm sm:text-base md:text-[1.5vw] font-light leading-relaxed tracking-wide"
                style={{
                  opacity: taglineOpacity,
                  y: taglineY,
                }}
              >
                Meet{" "}
                <span className="text-blue-400 underline">Shubham Shahu</span>,
                our{" "}
                <span className="text-blue-400 underline">Vice President</span>{" "}
                — the bridge between chaos and clarity. He doesn’t just lead; he
                organizes the organizers, plans the plans, and still manages to
                crack a joke during serious meetings.
              </motion.p>
            ) : showContent === "Details" ? (
              <div className="flex flex-col items-center sm:items-start md:w-[60%]">
                <h1 className="text-[8vw] sm:text-[6vw] md:text-[4vw]">
                  Shubham Shahu
                </h1>
                <h2 className="text-blue-400 text-[6vw] sm:text-[4vw] md:text-[3vw]">
                  Vice President
                </h2>

                <div className="flex gap-4 mt-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </motion.div>
      </div>
    </>
  );
}
