"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className=" text-white py-12 relative overflow-hidden bg-white/5 border-t-2 border-slate-700 rounded-t-4xl backdrop-blur-xs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Navigation Links */}
        <motion.nav
          className="flex justify-center space-x-8 text-lg font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#teams" className="hover:text-blue-400 transition">
            Teams
          </a>
          <a href="#events" className="hover:text-blue-400 transition">
            Events
          </a>
        </motion.nav>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <Instagram size={28} />
          </a>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} ACM GHRCE. All rights reserved.
          </p>
          <p className="text-sm md:text-base mt-2">
            Built with <span className="text-blue-400">💙</span> by Tech
            Warriors of ACM GHRCEM.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
