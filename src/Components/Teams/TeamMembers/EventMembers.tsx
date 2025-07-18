"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

const EventMembers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const membersData = [
    {
      Name: "John Doe",
      Position: "Frontend Developer",
      Instagram: "https://instagram.com",
      Linkedin: "https://linkedin.com",
      Github: "https://github.com",
      Image: "/ADACM.jpg",
    },
    {
      Name: "Jane Smith",
      Position: "Backend Developer",
      Instagram: "https://instagram.com",
      Linkedin: "https://linkedin.com",
      Github: "https://github.com",
      Image: "/ADACM.jpg",
    },
    {
      Name: "Alice Johnson",
      Position: "UI/UX Designer",
      Instagram: "https://instagram.com",
      Linkedin: "https://linkedin.com",
      Github: "https://github.com",
      Image: "/ADACM.jpg",
    },
    {
      Name: "Bob Brown",
      Position: "DevOps Engineer",
      Instagram: "https://instagram.com",
      Linkedin: "https://linkedin.com",
      Github: "https://github.com",
      Image: "/ADACM.jpg",
    },
  ];

  return (
    <div ref={sectionRef} className="relative h-[150vh] w-full text-white">
      <motion.div className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-[5vw] font-bold mb-10 text-center">
          Event Members
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {membersData.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={member.Image}
                alt={member.Name}
                className="rounded-xl border-2 border-blue-400"
                height={150}
                width={150}
              />
              <h2 className="text-lg md:text-xl lg:text-2xl mt-4">
                {member.Name}
              </h2>
              <h3 className="text-blue-400 text-sm md:text-base lg:text-lg">
                {member.Position}
              </h3>
              <div className="flex gap-4 mt-4">
                <a
                  href={member.Instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <Instagram />
                </a>
                <a
                  href={member.Linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <Linkedin />
                </a>
                <a
                  href={member.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <Github />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EventMembers;
