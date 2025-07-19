import React from "react";
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

const page = () => {
  return (
    <div>
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
    </div>
  );
};

export default page;
