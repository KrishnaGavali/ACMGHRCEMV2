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

export default function President() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* 1️⃣  Scroll progress (0 → 1)  */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [showContent, setShowContent] = useState<
    "Position" | "Tagline" | "Details"
  >("Position");

  const lineWidthMoto = useTransform(scrollYProgress, [0, 1], [0, 500]);
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
        className=" px-4 sticky z-10 h-screen top-0 flex justify-center items-center"
        style={{ opacity: sectionOpacity }}
      >
        <div className="flex items-center justify-start w-full">
          <div className=" flex gap-x-5 justify-center items-center w-1/2">
            <Image
              src="/President.jpg"
              alt="President"
              className=" object-cover relative z-10 border-2 border-blue-400 rounded-xl"
              height={500}
              width={500}
            />

            <motion.div
              className="w-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              style={{ height: lineWidthMoto }}
            />
          </div>

          {showContent === "Position" ? (
            <motion.p
              className=" text-center text-[5vw]"
              style={{
                opacity: positionOpacity,
                y: positionY,
              }}
            >
              President
            </motion.p>
          ) : showContent === "Tagline" ? (
            <motion.p
              className="text-left w-1/2 text-[1.5vw] font-light leading-relaxed tracking-wide"
              style={{
                opacity: taglineOpacity,
                y: taglineY,
              }}
            >
              Meet{" "}
              <span className="text-blue-400 underline">Aditya Khurade</span>,
              our <span className="text-blue-400 underline">President</span> –
              the brain behind the vision, the calm behind the chaos, and the
              person whose calendar probably has a calendar. They don’t just
              lead; they inspire, organize, execute, and somehow still have time
              to remind everyone of deadlines. From strategy to execution, from
              ideas to impact – if it’s happening in ACM, chances are it started
              with them. Here’s to the one who sets the bar and raises it every
              time
            </motion.p>
          ) : showContent === "Details" ? (
            <div className=" flex-col">
              <h1 className="text-[3vw]"> Aditya Khurade</h1>
              <h2 className=" text-blue-400 text-[2vw]">President</h2>

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
