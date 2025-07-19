import HeroSection from "@/Components/HeroSection";
import AboutUs from "@/Components/AboutUs";
import Footer from "@/Components/Footer";
import EventSection from "@/Components/EventSection";

const HomePage = () => {
  return (
    <>
      {/* <div className="h-full w-full "></div> */}
      <HeroSection />
      <AboutUs />
      <EventSection />
      <Footer />
    </>
  );
};

export default HomePage;
