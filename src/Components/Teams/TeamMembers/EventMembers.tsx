"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

const EventMembers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const sectionOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

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
    <div ref={sectionRef} className="relative h-[600vh] w-full text-white">
      <motion.div
        className="fixed inset-0 -z-10"
        style={{ scale: bgScale, opacity: bgOpacity }}
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,#0E398D_0%,#000_100%)]" />
      </motion.div>

      <motion.div
        className="sticky top-0 h-screen flex flex-col items-center justify-center"
        style={{ opacity: sectionOpacity }}
      >
        <h1 className="text-[5vw] font-bold mb-10">Event Members</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
                height={200}
                width={200}
              />
              <h2 className="text-[2vw] mt-4">{member.Name}</h2>
              <h3 className="text-blue-400 text-[1.5vw]">{member.Position}</h3>
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
