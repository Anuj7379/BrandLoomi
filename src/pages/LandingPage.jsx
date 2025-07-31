import Empowering from "../components/Empowering";
import Services from "../components/Services";
import Process from "../components/Process";
import LaunchBanner from "../components/LaunchBanner";
import Footer from "../components/Footer";
import FAQs from "../components/FAQ";
import Testimonials from "../components/Testimonial";

import HeroOfLandingPage from "../components/HeroOfLandingPage";
const LandingPage = () => {
  return (
    <div style={{ background: "#00080A" }} >
      <HeroOfLandingPage/>

      {/* Other Sections */}
      <Empowering />
      <div>
        <Services />
      </div>
      <Process />
      <Testimonials />
      <FAQs />
      <LaunchBanner headingText="Ready to Launch your business Online ?" />
      <Footer />
    </div>
  );
};

export default LandingPage;
