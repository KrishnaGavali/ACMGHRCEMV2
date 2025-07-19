"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="h-[50vh] flex flex-col justify-center items-center text-white relative overflow-hidden bg-blue-400/10 backdrop-blur-lg rounded-t-2xl border-slate-700">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/3 -left-1/3 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/3 -right-1/3 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Links */}
      <motion.nav
        className="flex space-x-8 text-lg font-medium z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#teams" className="hover:underline">
          Teams
        </a>
        <a href="#events" className="hover:underline">
          Events
        </a>
      </motion.nav>

      {/* Social Media Links */}
      <motion.div
        className="flex space-x-6 mt-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-300"
        >
          <Instagram size={28} />
        </a>
      </motion.div>

      {/* Footer Text */}
      <motion.div
        className="text-center mt-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} All rights reserved to ACM GHRCE.
        </p>
        <p className="text-sm md:text-base">
          Built with love <span className="text-blue-300">💙</span> by Tech
          Warriors of ACM GHRCEM.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
