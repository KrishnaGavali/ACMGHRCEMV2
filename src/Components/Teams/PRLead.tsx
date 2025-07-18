"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function PRLead() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* 1️⃣  Scroll progress (0 → 1)  */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [showContent, setShowContent] = useState<
    "Position" | "Tagline" | "Details"
  >("Position");

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
    <div ref={sectionRef} className="relative h-[600vh] w-full text-white">
      <motion.div
        className="px-4 sticky z-10 h-screen top-0 flex justify-center items-center"
        style={{ opacity: sectionOpacity }}
      >
        <div className="flex flex-col md:flex-row items-center justify-start w-full gap-6">
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 justify-center items-center w-[90%] md:w-[40%]">
            <Image
              src="/PRLead.jpg"
              alt="PRLead"
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

          {showContent === "Position" ? (
            <motion.p
              className="text-left text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4vw] md:w-[60%]"
              style={{
                opacity: positionOpacity,
                y: positionY,
              }}
            >
              PR Lead
            </motion.p>
          ) : showContent === "Tagline" ? (
            <motion.p
              className="text-center sm:text-left w-[90%] sm:w-3/4 md:w-[60%] text-sm sm:text-base md:text-[1.5vw] font-light leading-relaxed tracking-wide"
              style={{
                opacity: taglineOpacity,
                y: taglineY,
              }}
            >
              Meet <span className="text-blue-400 underline">Mansi Patil</span>{" "}
              our <span className="text-blue-400 underline">PR Lead</span> – the
              voice of ACM and the reason our posts don’t just get likes, they
              get noticed. Crafting captions, building connections, and making
              sure the world knows what we’re up to.
            </motion.p>
          ) : showContent === "Details" ? (
            <div className="flex flex-col items-center sm:items-start md:w-[60%]">
              <h1 className="text-[8vw] sm:text-[6vw] md:text-[4vw]">
                Mansi Patil
              </h1>
              <h2 className="text-blue-400 text-[6vw] sm:text-[4vw] md:text-[3vw]">
                PR Lead
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
  );
}
