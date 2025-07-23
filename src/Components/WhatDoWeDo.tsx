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
  const translateY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

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
    <motion.section
      ref={sectionRef}
      className="relative z-10 py-20 h-[500vh]"
      style={{ opacity }}
    >
      <motion.div
        className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12 px-4 h-screen justify-center sticky top-0"
        style={{ y: translateY }}
      >
        <h2 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-center mb-12">
          What Do We Do?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatDoWeDo.map((item, index) => (
            <motion.div
              className="p-8 bg-gradient-to-br from-blue-800 to-cyan-700 shadow-lg shadow-blue-500/30 border border-blue-500 rounded-xl text-center transform hover:scale-105 transition-transform duration-300"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">
                <item.icon className="text-cyan-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WhatDoWeDo;
