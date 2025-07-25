"use client";
import { Laptop, Users, Wrench } from "lucide-react";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WhatDoWeDo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [200, 192, -192, -200]
  );

  const whatDoWeDo = [
    {
      title: "Interactive Workshops",
      description:
        "We conduct workshops on various topics to enhance skills and knowledge.",
      icon: Wrench,
    },
    {
      title: "Innovative Hackathons",
      description:
        "We organize hackathons to encourage innovation and teamwork.",
      icon: Laptop,
    },
    {
      title: "Engaging Community Events",
      description:
        "We host social events to foster collaboration, networking, and vibes.",
      icon: Users,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative z-10 h-[500vh] sm:h-[200vh] md:h-[150vh] lg:h-[500vh] bg-gradient-to-b from-transparent via-black to-blue-900 to-cyan-900 to-transparent"
    >
      {/* Glow Blobs */}
      <div className="fixed -top-32 -left-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full pointer-events-none z-[-1]"></div>
      <div className="fixed -bottom-32 -right-24 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none z-[-1]"></div>

      <motion.div
        className="sticky top-0 h-screen flex flex-col justify-center items-center px-4"
        style={{ opacity }}
      >
        <motion.div
          className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12 relative z-10"
          style={{ y: translateY }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-center mb-12 leading-tight">
            What Do We Do?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatDoWeDo.map((item, index) => (
              <motion.div
                className="p-8 bg-gradient-to-br from-blue-800 to-cyan-700 shadow-lg shadow-blue-500/30 border border-blue-500 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 relative overflow-hidden"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl opacity-50 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="text-5xl mb-4">
                    <item.icon className="text-cyan-300" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhatDoWeDo;
