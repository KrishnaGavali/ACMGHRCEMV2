"use client";
import React from "react";
import { motion } from "motion/react";

const SideBar = ({
  setShowSidebar,
}: {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      className="h-full w-full backdrop-blur-lg fixed z-40 flex justify-between"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div
        className=" w-[65%] h-full"
        id=""
        onClick={() => setShowSidebar(false)}
      ></div>
      <motion.div
        initial={{
          x: "100%",
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: "100%",
          transition: {
            delay: 0,
            duration: 0.5,
          },
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className=" w-full sm:w-[40%] md:w-[35%] h-full bg-black rounded-l-4xl border-l-2 shadow-[0px_0px_20px_#51A2FF]"
        id="SideBarNavigation"
      ></motion.div>
    </motion.div>
  );
};

export default SideBar;
