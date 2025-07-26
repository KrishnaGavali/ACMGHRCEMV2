"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Code,
  Calendar,
  Camera,
  Users,
  FileText,
  Linkedin,
  Instagram,
  Github,
  Globe,
} from "lucide-react";
import Footer from "@/Components/Footer";
import Image from "next/image";

type TeamMember = {
  id: string;
  name: string;
  position: string;
  description: string;
  photo: string;
  teamType: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  portfolio?: string;
};

type TeamData = {
  [key: string]: TeamMember[];
};

const teamCategories = [
  {
    id: "leadership",
    name: "Leadership",
    icon: Star,
    color: "from-yellow-400 to-pink-400",
  },
  {
    id: "technical",
    name: "Technical",
    icon: Code,
    color: "from-blue-400 to-purple-400",
  },
  {
    id: "events",
    name: "Events",
    icon: Calendar,
    color: "from-green-400 to-cyan-400",
  },
  {
    id: "media",
    name: "Media & Creative",
    icon: Camera,
    color: "from-pink-500 to-red-400",
  },
  {
    id: "pr",
    name: "Public Relations",
    icon: Users,
    color: "from-indigo-400 to-purple-600",
  },
  {
    id: "treasure",
    name: "Treasure & Documentation",
    icon: FileText,
    color: "from-orange-400 to-yellow-500",
  },
];

const TeamsPage = () => {
  const teamData: TeamData = {
    leadership: [
      {
        id: "L001",
        name: "John Doe",
        position: "President",
        description: "Steering the club with leadership and purpose.",
        photo: "/President.jpg",
        teamType: "Leadership Team",
        linkedin: "https://linkedin.com/in/johndoe",
      },
      {
        id: "L002",
        name: "Jane Smith",
        position: "Vice President",
        description: "Supporting operations and fostering innovation.",
        photo: "/VicePresident.png",
        teamType: "Leadership Team",
        instagram: "https://instagram.com/janesmith",
      },
    ],
    technical: [
      {
        id: "T001",
        name: "Krishna Gavali",
        position: "Lead",
        description: "Orchestrating technical wizardry and development.",
        photo: "/team/krishna_gavali.jpg",
        teamType: "Technical Team",
        linkedin: "https://linkedin.com/in/krishnagavali",
        github: "https://github.com/krishnagavali",
      },
      {
        id: "T002",
        name: "Aarav Patel",
        position: "Member",
        description: "Building user-friendly interfaces and backend logics.",
        photo: "/team/aarav_patel.jpg",
        teamType: "Technical Team",
        github: "https://github.com/aaravp",
      },
    ],
    events: [
      {
        id: "E001",
        name: "Sneha Raj",
        position: "Lead",
        description: "Leading the squad to craft unforgettable events.",
        photo: "/team/sneha_raj.jpg",
        teamType: "Events Team",
        linkedin: "https://linkedin.com/in/sneharaj",
      },
      {
        id: "E002",
        name: "Dev Mehta",
        position: "Member",
        description: "Making sure every detail at events shines bright.",
        photo: "/team/dev_mehta.jpg",
        teamType: "Events Team",
      },
    ],
    pr: [
      {
        id: "PR001",
        name: "Mira Kapoor",
        position: "Lead",
        description: "Connecting people, ideas, and vibes together.",
        photo: "/team/mira_kapoor.jpg",
        teamType: "PR Team",
        instagram: "https://instagram.com/mira_kapoor",
      },
      {
        id: "PR002",
        name: "Rahul Singh",
        position: "Member",
        description: "Spreading the ACM love all over the place.",
        photo: "/team/rahul_singh.jpg",
        teamType: "PR Team",
      },
    ],
    media: [
      {
        id: "M001",
        name: "Tanya Deshmukh",
        position: "Photographer",
        description: "Freezing memories and candid vibes in every click.",
        photo: "/team/tanya_deshmukh.jpg",
        teamType: "Media & Creative Team",
        portfolio: "https://tanyashots.com",
      },
      {
        id: "M002",
        name: "Yash Joshi",
        position: "Editor",
        description: "Crafting magic in post with colors and cuts.",
        photo: "/team/yash_joshi.jpg",
        teamType: "Media & Creative Team",
      },
    ],
    treasure: [
      {
        id: "TR001",
        name: "Simran Kaur",
        position: "Treasurer",
        description: "Keeping our accounts sharper than our code.",
        photo: "/team/simran_kaur.jpg",
        teamType: "Treasury & Docs",
        linkedin: "https://linkedin.com/in/simran-kaur",
      },
      {
        id: "TR002",
        name: "Nikhil Rao",
        position: "Documentation",
        description: "Archiving moments and maintaining club chronicles.",
        photo: "/team/nikhil_rao.jpg",
        teamType: "Treasury & Docs",
      },
    ],
  };

  const [selectedTeam, setSelectedTeam] =
    useState<keyof TeamData>("leadership");

  return (
    <>
      <div className="min-h-screen text-white relative overflow-hidden">
        {/* Background Blur Circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/30 blur-3xl rounded-full animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full animate-pulse" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 relative z-10">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Amazing Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the passionate individuals who make ACM GHRCEM a thriving
              community of innovators.
            </p>
          </motion.div>

          {/* Category Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {teamCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedTeam(category.id as keyof TeamData)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-2xl border transition-all duration-300 font-medium ${
                    selectedTeam === category.id
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                      : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={18} />
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData[selectedTeam]?.map((member, index) => (
              <motion.div
                key={member.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative p-6 h-[500px] rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 overflow-hidden">
                  <div className="relative mb-6">
                    <div className="aspect-square w-44 mx-auto rounded-xl overflow-hidden shadow-xl">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        width={512}
                        height={512}
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
                        {member.position}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 text-sm leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex flex-col justify-center items-center space-x-4 mt-4">
                    {member.linkedin && (
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                      </motion.a>
                    )}
                    {member.github && (
                      <motion.a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-800/20 to-gray-600/20 border border-gray-500/30 text-gray-300 hover:from-gray-800/30 hover:to-gray-600/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        <span>GitHub</span>
                      </motion.a>
                    )}
                    {member.instagram && (
                      <motion.a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300 hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Instagram size={18} />
                        <span>Instagram</span>
                      </motion.a>
                    )}
                    {member.portfolio && (
                      <motion.a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-blue-300 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Globe size={18} />
                        <span>Portfolio</span>
                      </motion.a>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TeamsPage;
