import React from "react";
import Header from "../components/Header";
import Empowering from "../components/Empowering";
import Services from "../components/Services";
import Process from "../components/Process";
import LaunchBanner from "../components/LaunchBanner";
import Footer from "../components/Footer";
import FAQs from "../components/FAQ";
import Testimonials from "../components/Testimonial";
import { useNavigate } from "react-router-dom";
import ParticleCursor from "../components/ParticleCursor";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.svg";
import Landingtext from "../assets/Landingtext.png";

const LandingPage = () => {
  return (
    <div style={{ background: "#00080A" }} className="overflow-x-hidden">
      <Hero />

      {/* Other Sections */}
      <Empowering />
      <div className="-ml-10">
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

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative text-white font-creato overflow-hidden bg-no-repeat bg-cover min-h-screen"
      style={{ backgroundImage: `url(${vector1})` }}
    >
      {/* Top Layer Content */}
      <Header />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto pt-20 pb-16 flex flex-col justify-center items-center">
        <p className="text-[50px] font-bethany">
          your brand deserves more than a template
        </p>
        <div className="flex flex-col items-center">
          <p
            className="text-[80px] text-transparent font-bethany font-normal text-center"
            style={{
              background: `linear-gradient(to bottom, #0A6A97 35%, #34BDFE 53%, #17E48A 70%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Build it together
          </p>
          <img
            src={vector3}
            alt="vector3"
            className=" h-[29px] ml-[470px] -mt-4"
          />
        </div>
        <p className="text-[18px] font-creato font-normal text-center max-w-[665px] mt-9">
          Affordable high-quality web and app development branding and
          consulting for startups and small businesses in Ireland and beyond.
        </p>
        <div className="mt-10 mb-4 pr-8">
          <button
            className="relative flex items-center justify-between w-[246px] h-[62px] pl-6 pr-0 rounded-full overflow-hidden group ml-auto border border-cyan-400"
            style={{
              background: `linear-gradient(to bottom, #0A6A97 35%, #34BDFE 53%, #17E48A 100%)`,
            }}
          >
            <span className="text-[25px]  z-10 font-creato font-normal text-black ">
              Get Started
            </span>

            {/*  white circular arrow button */}
            <span
              className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white text-cyan-500 text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF]"
              onClick={() => navigate("/contact")}
            >
              <span className="material-symbols-outlined leading-none text-[28px]">
                arrow_outward
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Bottom-right Vector  */}
      <img
        src={vector2}
        alt="Bottom Right Vector"
        className="absolute bottom-[-750px] right-[-250px] w-[1076px] h-[1718px] pointer-events-none z-0"
      />
    </div>
  );
};
