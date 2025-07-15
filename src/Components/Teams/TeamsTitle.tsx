"use client";
import React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const TeamsTitle = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );
  const titleY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.4], [0, 300]);

  return (
    <div ref={divRef} className="h-[400vh]">
      <div className=" h-screen w-full flex justify-center items-center sticky top-0">
        <motion.h1
          className="text-[7vw] font-black text-blue-400 tracking-tight leading-none"
          style={{
            opacity: titleOpacity,
          }}
        >
          Meet the Team
        </motion.h1>
      </div>
    </div>
  );
};

export default TeamsTitle;
