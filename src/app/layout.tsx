import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import Navbar from "@/Components/Navbar";

const Font = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["900"],
});

export const metadata: Metadata = {
  title: "ACM GHRCEM",
  description:
    "ACM GHRCEM is the official website of the Association for Computing Machinery at GHRCEM, Pune.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <ReactLenis
        root
        options={{
          lerp: 0.25,
          infinite: false,
        }}
      />
      <body className={`${Font.className} antialiased bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
