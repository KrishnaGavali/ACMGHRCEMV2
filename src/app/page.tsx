"use client";
import HeroSection from "@/Components/HeroSection";
import Moto_Vision from "@/Components/Moto_Vision";
import EventManagement from "@/Components/Teams/EventManagement";
import EventTeamtitle from "@/Components/Teams/EventTeamTitle";
import President from "@/Components/Teams/President";
import PRLead from "@/Components/Teams/PRLead";
import PRTeamtitle from "@/Components/Teams/PRTeamTitle";
import EventMembers from "@/Components/Teams/TeamMembers/EventMembers";
import PRMembers from "@/Components/Teams/TeamMembers/PRMembers";
import TechMembers from "@/Components/Teams/TeamMembers/TechMembers";
import TeamsTitle from "@/Components/Teams/TeamsTitle";
import TechLead from "@/Components/Teams/TechLead";
import TechTeamTitle from "@/Components/Teams/TechTeamTitle";
import VicePresident from "@/Components/Teams/VicePresident";
import { motion } from "motion/react";

const HomePage = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div className="h-full w-full "></div>
      <HeroSection />
      <Moto_Vision />
      <TeamsTitle />
      <div className="" id="teams">
        <President />
        <VicePresident />
        <TechTeamTitle />
        <TechLead />
        <TechMembers />
        <EventTeamtitle />
        <EventManagement />
        <EventMembers />
        <PRTeamtitle />
        <PRLead />
        <PRMembers />
      </div>
    </>
  );
};

export default HomePage;
