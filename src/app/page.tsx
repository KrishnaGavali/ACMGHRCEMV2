import HeroSection from "@/Components/HeroSection";
import Moto_Vision from "@/Components/Moto_Vision";
import President from "@/Components/Teams/President";
import TeamsTitle from "@/Components/Teams/TeamsTitle";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Moto_Vision />
      <TeamsTitle />
      <div className="" id="teams">
        <President />
      </div>
    </>
  );
};

export default HomePage;
