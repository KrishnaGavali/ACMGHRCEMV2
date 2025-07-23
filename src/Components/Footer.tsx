"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="text-white py-12 relative overflow-hidden bg-white/5 border-t-2 border-slate-700 rounded-t-4xl backdrop-blur-xs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Footer Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {/* Left: Logo & Tagline */}
          <div>
            <h2 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                A
              </span>
              ACM GHRCEM
            </h2>
            <p className="text-sm mt-2 text-gray-300">
              Empowering the next generation of tech innovators through
              collaboration, learning, and cutting-edge projects.
            </p>
          </div>

          {/* Center: Contact Info */}
          <div className="text-sm text-gray-300 flex flex-col items-center md:items-start gap-y-2">
            <h3 className="font-semibold mb-2">Get In Touch</h3>
            <p className="flex items-center gap-2 text-center md:text-left">
              <MapPin className="text-blue-400 inline w-5 h-5" />
              <span>GH Raisoni College of Engineering & Management, Pune</span>
            </p>
            <p className="flex items-center gap-2 text-center md:text-left">
              <Mail className="text-blue-400 inline w-5 h-5" />
              <span>acm@ghrcem.ac.in</span>
            </p>
            <p className="flex items-center gap-2 text-center md:text-left">
              <Phone className="text-blue-400 inline w-5 h-5" />
              <span>+91 XXX XXX XXXX</span>
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="text-sm text-gray-300 flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-2">Connect With Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mb-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:acm@ghrcem.ac.in"
                className="hover:text-teal-400 transition"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-xs text-center md:text-left">
              Join us in building the future of technology at GHRCEM!
            </p>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          className="text-center md:text-left text-sm text-gray-400 border-t border-slate-600 pt-4 flex flex-col md:flex-row items-center justify-between gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} ACM GHRCEM. All rights reserved.</p>
          <p>Built with 💙 by Tech Warriors of ACM GHRCEM.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
