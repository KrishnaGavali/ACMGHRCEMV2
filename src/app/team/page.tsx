import React from "react";
import Image from "next/image";
import TeamsTitle from "@/Components/Teams/TeamsTitle";
import President from "@/Components/Teams/President";
import VicePresident from "@/Components/Teams/VicePresident";
// import TechTeamTitle from "@/Components/Teams/TechTeamTitle";
import TechLead from "@/Components/Teams/TechLead";
import TechMembers from "@/Components/Teams/TeamMembers/TechMembers";
// import EventTeamTitle from "@/Components/Teams/EventTeamTitle";
import EventManagement from "@/Components/Teams/EventManagement";
import EventMembers from "@/Components/Teams/TeamMembers/EventMembers";
// import PRTeamTitle from "@/Components/Teams/PRTeamTitle";
import PRLead from "@/Components/Teams/PRLead";
import PRMembers from "@/Components/Teams/TeamMembers/PRMembers";
import Footer from "@/Components/Footer";

const Page = () => {
  return (
    <>
      {/* Background Image */}
      <Image
        src="/ClubGroupPhoto.jpg"
        alt="Club Group Photo"
        height={1440}
        width={1080}
        className="fixed h-screen w-full top-0 -z-10 object-cover"
      />

      {/* Gradient Overlay */}
      <div
        id="gradientOverlay"
        className="inset-0 w-full h-screen fixed top-0 bg-radial-[at_50%_50%] from-transparent to-black z-0"
      />

      {/* Content */}
      <div>
        <div className="bg-transparent h-screen w-full z-10"></div>
        <div id="teams">
          {/* Background Gradient */}
          <div className="bg-[radial-gradient(circle_at_50%_50%,#0E398D_-40%,#000_100%)] h-screen w-full -z-10 sticky top-0"></div>

          {/* Team Section */}
          <div className="relative top-[-100vh]">
            <TeamsTitle />
            <President />
            <VicePresident />
            {/* <TechTeamTitle /> */}
            <TechLead />
            <TechMembers />
            {/* <EventTeamTitle /> */}
            <EventManagement />
            <EventMembers />
            {/* <PRTeamTitle /> */}
            <PRLead />
            <PRMembers />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
