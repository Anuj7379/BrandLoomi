import React from "react";
import Header from "../components/Header";
import Empowering from "../components/Empowering";
import Services from "../components/Services";
import Process from "../components/Process";
import TestimonialsAndFAQs from "../components/TestimonialsAndFAQs";
import LaunchBanner from "../components/LaunchBanner";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: "#00080A" }}
        />

        {/* Glows */}
        <div className="absolute w-[183px] h-[244px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[419px] right-[100px] z-0" />
        <div className="absolute w-[283px] h-[244px] rounded-full bg-cyan-400 blur-[200px] opacity-100 bottom-[100px] left-[-28px] z-0" />

        {/* Use Header component */}
        <Header />

        {/* Hero Section stays here */}
        <div className="relative z-10 px-6 md:px-20 pt-24 pb-32 max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-4xl lg:text-6xl font-black italic uppercase space-y-2">
            <div>Launch Your</div>
            <div>Vision</div>
            <div>Grow Your Impact</div>
          </h1>

          {/* Buttons & Stats */}
          <div className="flex justify-between items-center mt-8 pt-10">
            <button className="relative flex  items-center justify-between w-[200px] h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group">
              {/* Button Text */}
              <span className="text-base font-medium z-10">Get Started</span>

              {/* Glowing Circle with arrow_outward icon */}
              <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-cyan-500 text-[32px] flex items-center justify-center  shadow-[0_0_10px_#00FFFF]">
                <span className="material-symbols-outlined leading-none text-[28px]">
                  arrow_outward
                </span>
              </span>
            </button>

            <div className="flex flex-row items-center space-x-3">
              <div className="flex flex-row space-x-3 items-center">
                <div className="text-2xl">
                  <span class="material-symbols-outlined ">asterisk</span>
                </div>
                <div className="bg-white h-[2px] w-[176px]"></div>
              </div>
              <div>
                <span className="text-lg font-bold">95%</span>
                <br />
                Client Satisfaction
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-10 mt-6 font-sans">
            <div className="flex items-center w-[645px] mt-8">
              <span className="text-2xl mr-3">+</span>
              <div className="text-sm text-gray-400">
                Affordable, high-quality web and app development, branding, and
                digital marketing for startups and small businesses in Ireland
                and beyond.
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-sm mt-10">
              <div>
                <span className="text-sm font-bold">10+</span>
                <br />
                Startups Launched
              </div>
              <div>
                <span className="text-sm font-bold">€1,000</span>
                <br />
                Average Project Cost
              </div>
              <div>
                <span className="text-sm font-bold">3 Weeks</span>
                <br />
                Average Delivery Time
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Empowering />
      <Services />
      <Process />
      <TestimonialsAndFAQs />
      <LaunchBanner />
      <Footer />
    </>
  );
};

export default LandingPage;
