import HeroSection from "@/Components/HeroSection";
import Moto_Vision from "@/Components/Moto_Vision";
import EventManagement from "@/Components/Teams/EventManagement";
import EventTeamtitle from "@/Components/Teams/EventTeamTitle";
import President from "@/Components/Teams/President";
import EventMembers from "@/Components/Teams/TeamMembers/EventMembers";
import TechMembers from "@/Components/Teams/TeamMembers/TechMembers";
import TeamsTitle from "@/Components/Teams/TeamsTitle";
import TechLead from "@/Components/Teams/TechLead";
import TechTeamTitle from "@/Components/Teams/TechTeamTitle";
import VicePresident from "@/Components/Teams/VicePresident";

const HomePage = () => {
  return (
    <>
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
      </div>
    </>
  );
};

export default HomePage;
