"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "ACM GHRCEM has been a transformative experience for me. The workshops and events are top-notch!",
    role: "Software Engineer",
  },
  {
    name: "Jane Smith",
    feedback:
      "The community here is amazing. I've learned so much and made lifelong connections.",
    role: "Data Scientist",
  },
  {
    name: "Alice Johnson",
    feedback:
      "The hackathons and projects have helped me grow both personally and professionally.",
    role: "Product Manager",
  },
  {
    name: "Ravi Kumar",
    feedback:
      "Loved the AI bootcamp! Super informative and hands-on, ACM GHRCEM rocks!",
    role: "ML Enthusiast",
  },
  {
    name: "Priya Sharma",
    feedback:
      "Met my best friends and mentors here. Amazing platform for growth.",
    role: "UI/UX Designer",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <motion.section
      ref={sectionRef}
      className="relative z-10 h-[200vh] bg-gradient-to-b from-transparent via-black to-blue-900"
      style={{ opacity, y: translateY }}
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 z-10 top-1/4 sticky flex items-center justify-center mb-12">
        {/* 2-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Left Column: Heading */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            style={{ opacity, y: translateY }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text mb-6">
              Testimonials
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Hear what our members have to say about their experience at ACM
              GHRCEM.
            </p>
          </motion.div>

          {/* Right Column: Carousel */}
          <motion.div
            className="lg:w-1/2 relative max-w-xl w-full mx-auto"
            style={{ opacity, y: translateY }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-gradient-to-br from-blue-800 to-cyan-700 border border-blue-500 text-white rounded-3xl shadow-lg shadow-blue-500/30 relative overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl opacity-50 pointer-events-none"></div>

                <div className="relative z-10">
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                  <p className="text-cyan-300 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/40 transition"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/40 transition"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
