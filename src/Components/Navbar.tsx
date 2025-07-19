"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-16 fixed top-0 items-center px-8 mt-4 z-50 flex justify-between">
        <Link href={"/"}>
          <div className="w-fit h-full flex items-center" id="logoTitle">
            <Image src={"/ACMLogo.png"} width={64} height={64} alt="ACM Logo" />
          </div>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href={"/team"}>
            <button className="px-4 py-2 bg-[#2182f2] text-white rounded-full hover:bg-blue-800 cursor-pointer transition-all duration-150 text-sm sm:text-base">
              Team
            </button>
          </Link>
          <button
            className="px-4 py-2 bg-[#2182f2] hover:bg-blue-800 text-white rounded-full cursor-pointer transition-all duration-150 text-sm sm:text-base"
            disabled
          >
            Events
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
