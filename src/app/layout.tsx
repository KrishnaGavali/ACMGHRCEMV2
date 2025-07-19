import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import Navbar from "@/Components/Navbar";
import ParticleEffect from "@/Components/ParticleEffect";

const Font = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["900"],
});

export const metadata: Metadata = {
  title: "ACM GHRCEM (Work In Progress)",
  description:
    "ACM GHRCEM is the official website of the Association for Computing Machinery at GHRCEM, Pune.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <ReactLenis
        root
        options={{
          lerp: 0,
          infinite: false,
        }}
      />
      <body className={`${Font.className} antialiased bg-black `}>
        <div className="h-screen w-full bg-[radial-gradient(circle_at_50%_50%,#0E398D_-40%,#000_100%)] fixed -z-10"></div>
        <div className=" hidden md:block">
          <ParticleEffect />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
