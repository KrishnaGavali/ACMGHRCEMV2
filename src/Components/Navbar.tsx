"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Calendar, Users, Phone, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: <Home /> },
  { name: "Events", href: "/events", icon: <Calendar /> },
  { name: "Team", href: "/team", icon: <Users /> },
  { name: "Contact", href: "/contact", icon: <Phone /> },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <div className="fixed top-4 right-4 z-50">
        <motion.button
          onClick={toggleSidebar}
          className="p-2 bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-full shadow-xl hover:scale-105 active:scale-95 transition-transform"
          animate={{ rotate: isSidebarOpen ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isSidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Sidebar Navigation */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.div
            className="bg-white/20 backdrop-blur-sm w-[60px] fixed top-3 right-[6px] z-[49] rounded-full flex flex-col items-center text-white pt-20 overflow-hidden"
            initial={{ height: "0px" }}
            animate={{ height: "350px" }}
            exit={{ height: "0px" }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className={`p-3 flex flex-col items-center justify-center transition-all duration-200 ${
                  pathname === item.href ? "bg-white/40 rounded-full" : ""
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href} onClick={() => setIsSidebarOpen(false)}>
                  <div className="flex flex-col items-center gap-1 text-xs">
                    {item.icon}
                    <span className="text-[10px]">{item.name}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
