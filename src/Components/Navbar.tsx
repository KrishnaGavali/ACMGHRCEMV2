"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import SideBar from "./SideBar";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = React.useState<boolean>(false);

  return (
    <>
      <div className="w-full h-16 fixed top-0 items-center px-8 mt-4 z-50 flex justify-between">
        <div className="w-fit h-full flex items-center" id="logoTitle">
          <Image src={"/ACMLogo.png"} width={64} height={64} alt="ACM Logo" />
        </div>
        <motion.div
          className="w-24 flex justify-end"
          id="hamburger"
          whileTap={{ scale: 0.9 }}
        >
          <Menu
            className={` ${
              showSidebar ? "text-blue-800" : "text-blue-400"
            } w-12 h-12 transition-all duration-500 delay-200`}
            onClick={() =>
              setShowSidebar((prev) => {
                return !prev;
              })
            }
          />
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        {showSidebar && <SideBar setShowSidebar={setShowSidebar} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
