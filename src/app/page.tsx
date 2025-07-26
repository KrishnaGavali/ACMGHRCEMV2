import HeroSection from "@/Components/HeroSection";
import AboutUs from "@/Components/AboutUs";
import Footer from "@/Components/Footer";
import Testimonials from "@/Components/Testimonials";

const HomePage = () => {
  return (
    <>
      {/* <div className="h-full w-full "></div> */}
      <HeroSection />
      <AboutUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
