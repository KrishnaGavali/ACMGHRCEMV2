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

export default function EventManagement() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* 1️⃣  Scroll progress (0 → 1)  */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [showContent, setShowContent] = useState<
    "Position" | "Tagline" | "Details"
  >("Position");

  /* 2️⃣  Fancy BG transforms  */
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

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
        className="fixed inset-0 -z-10"
        style={{ scale: bgScale, opacity: bgOpacity }}
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,#0E398D_0%,#000_100%)]" />
      </motion.div>
      {/* Floating dots (trimmed to 40 for perf) */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      {/* Content that scrolls under the sticky video */}
      <motion.div
        className=" px-4 sticky z-10 h-screen top-0 flex justify-center items-center"
        style={{ opacity: sectionOpacity }}
      >
        <div className="flex items-center justify-start w-full">
          <div className=" flex gap-x-5 justify-center items-center w-1/2">
            <Image
              src="/EventManagement.jpg"
              alt="President"
              className=" object-cover relative z-10 border-2 border-blue-400 rounded-xl"
              height={500}
              width={500}
            />
            {/* <div className="w-[500px] h-[500px] bg-blue-400  rounded-xl"></div> */}

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
              Event Lead
            </motion.p>
          ) : showContent === "Tagline" ? (
            <motion.p
              className="text-left w-1/2 text-[1.5vw] font-light leading-relaxed tracking-wide"
              style={{
                opacity: taglineOpacity,
                y: taglineY,
              }}
            >
              Meet our <span className="text-blue-400">Tech Lead</span>– the
              brain behind the bytes and the strategist powered by caffeine.
              When he&quot;s not debugging life, he’s leading the club (or the
              group chat 😎). Half visionary, half developer, and fully ready to
              turn ideas into action. Say hello to{" "}
              <span className="text-blue-400">Krishna Gavali</span> – Tech Lead
              of ACM! 🚀👨‍💻 Warning: may randomly talk about projects,
              GitHub, or memes.
            </motion.p>
          ) : showContent === "Details" ? (
            <div className=" flex-col">
              <h1 className="text-[3vw]">Anurag Jadhav</h1>
              <h2 className=" text-blue-400 text-[2vw]">
                Event Management Lead
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
