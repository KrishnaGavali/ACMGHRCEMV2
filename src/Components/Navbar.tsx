"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`w-[95%] h-16 mt-4 fixed top-0 left-1/2 transform -translate-x-1/2 items-center px-8 z-50 flex justify-between bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl shadow-lg transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-24"
        }  border border-blue-400`}
      >
        <Link href={"/"}>
          <div className="w-fit h-full flex items-center" id="logoTitle">
            <Image src={"/ACMLogo.png"} width={64} height={64} alt="ACM Logo" />
          </div>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href={"/team"}>
            <button className="px-4 py-2 bg-transparent border border-[#2182f2] text-white rounded-full hover:bg-blue-800 cursor-pointer transition-all duration-150 text-sm sm:text-base">
              Team
            </button>
          </Link>
          <Link href={"/#EventSection"}>
            <button className="px-4 py-2 bg-transparent border border-[#2182f2] hover:bg-blue-800 text-white rounded-full cursor-pointer transition-all duration-150 text-sm sm:text-base">
              Events
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
