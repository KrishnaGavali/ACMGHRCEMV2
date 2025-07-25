"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Code, Calendar, Camera, Users } from "lucide-react";
import Footer from "@/Components/Footer";

type TeamMember = {
  id: string;
  name: string;
  position: string;
  description: string;
  skills: string[];
  photo: string;
  teamType: string;
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
];

const TeamsPage = () => {
  const teamData: TeamData = {
    leadership: [
      {
        id: "L001",
        name: "John Doe",
        position: "President",
        description: "Leading ACM GHRCEM with vision and innovation.",
        skills: ["Leadership", "Strategic Planning", "Public Speaking"],
        photo: "/team/john_doe.jpg",
        teamType: "Leadership Team",
      },
      {
        id: "L002",
        name: "Jane Smith",
        position: "Vice President",
        description: "Supporting operations and driving community engagement.",
        skills: ["Management", "Community Building", "Event Planning"],
        photo: "/team/jane_smith.jpg",
        teamType: "Leadership Team",
      },
      {
        id: "L003",
        name: "Sarah Johnson",
        position: "Secretary",
        description: "Managing documentation and communication workflows.",
        skills: ["Documentation", "Communication", "Organization"],
        photo: "/team/sarah_johnson.jpg",
        teamType: "Leadership Team",
      },
      {
        id: "L004",
        name: "Michael Chen",
        position: "Treasurer",
        description: "Overseeing financial operations and budget management.",
        skills: ["Financial Management", "Budget Planning", "Analytics"],
        photo: "/team/michael_chen.jpg",
        teamType: "Leadership Team",
      },
    ],
    technical: [
      {
        id: "T001",
        name: "Alex Rodriguez",
        position: "Technical Lead",
        description:
          "Spearheading technical initiatives and development projects.",
        skills: [
          "Full Stack Development",
          "System Architecture",
          "Team Leadership",
        ],
        photo: "/team/alex_rodriguez.jpg",
        teamType: "Technical Team",
      },
      {
        id: "T002",
        name: "Emily Wang",
        position: "Frontend Developer",
        description: "Creating amazing user experiences and interfaces.",
        skills: ["React", "UI/UX Design", "JavaScript"],
        photo: "/team/emily_wang.jpg",
        teamType: "Technical Team",
      },
      {
        id: "T003",
        name: "David Kim",
        position: "Backend Developer",
        description: "Building robust server-side solutions and APIs.",
        skills: ["Node.js", "Database Design", "Cloud Computing"],
        photo: "/team/david_kim.jpg",
        teamType: "Technical Team",
      },
      {
        id: "T004",
        name: "Lisa Zhang",
        position: "Mobile Developer",
        description: "Developing cross-platform mobile applications.",
        skills: ["React Native", "Flutter", "Mobile UI"],
        photo: "/team/lisa_zhang.jpg",
        teamType: "Technical Team",
      },
    ],
    events: [
      {
        id: "E001",
        name: "Robert Wilson",
        position: "Events Coordinator",
        description: "Orchestrating memorable events and workshops.",
        skills: [
          "Event Management",
          "Vendor Relations",
          "Project Coordination",
        ],
        photo: "/team/robert_wilson.jpg",
        teamType: "Events Team",
      },
      {
        id: "E002",
        name: "Amanda Davis",
        position: "Workshop Organizer",
        description: "Designing and executing educational workshops.",
        skills: ["Workshop Design", "Speaker Coordination", "Content Planning"],
        photo: "/team/amanda_davis.jpg",
        teamType: "Events Team",
      },
      {
        id: "E003",
        name: "Kevin Lee",
        position: "Logistics Manager",
        description: "Handling event logistics and operational support.",
        skills: [
          "Logistics Planning",
          "Resource Management",
          "Problem Solving",
        ],
        photo: "/team/kevin_lee.jpg",
        teamType: "Events Team",
      },
    ],
    media: [
      {
        id: "M001",
        name: "Sophia Martinez",
        position: "Creative Director",
        description: "Leading creative vision and brand identity.",
        skills: ["Graphic Design", "Brand Strategy", "Creative Direction"],
        photo: "/team/sophia_martinez.jpg",
        teamType: "Media & Creative",
      },
      {
        id: "M002",
        name: "James Taylor",
        position: "Content Creator",
        description: "Producing engaging content across all platforms.",
        skills: ["Content Writing", "Video Production", "Social Media"],
        photo: "/team/james_taylor.jpg",
        teamType: "Media & Creative",
      },
      {
        id: "M003",
        name: "Maya Patel",
        position: "Social Media Manager",
        description: "Managing our online presence and community engagement.",
        skills: ["Social Media Strategy", "Community Management", "Analytics"],
        photo: "/team/maya_patel.jpg",
        teamType: "Media & Creative",
      },
    ],
    pr: [
      {
        id: "P001",
        name: "Christopher Brown",
        position: "PR Manager",
        description:
          "Building relationships and managing public communications.",
        skills: [
          "Public Relations",
          "Media Relations",
          "Strategic Communication",
        ],
        photo: "/team/christopher_brown.jpg",
        teamType: "Public Relations",
      },
      {
        id: "P002",
        name: "Rachel Green",
        position: "Outreach Coordinator",
        description: "Expanding our network and community partnerships.",
        skills: ["Partnership Development", "Networking", "Community Outreach"],
        photo: "/team/rachel_green.jpg",
        teamType: "Public Relations",
      },
    ],
  };

  const [selectedTeam, setSelectedTeam] =
    useState<keyof TeamData>("leadership");

  const getCurrentTeamMembers = (): TeamMember[] => {
    return teamData[selectedTeam] || [];
  };

  const getInitials = (name: string): string =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("");

  return (
    <>
      <div className="min-h-screen text-white relative overflow-hidden">
        {/* Background Blur Circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/30 blur-3xl rounded-full animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full animate-pulse" />
        </div>

        {/* Page Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 relative z-10">
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
            {getCurrentTeamMembers().map((member, index) => (
              <motion.div
                key={member.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 overflow-hidden">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-2xl">
                        {getInitials(member.name)}
                      </span>
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
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 rounded-full text-xs bg-white/10 text-cyan-300 border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Events Organized</div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                1000+
              </div>
              <div className="text-gray-300">Students Reached</div>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TeamsPage;
