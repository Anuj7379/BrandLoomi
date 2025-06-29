import React from "react";
import { GoNorthStar } from "react-icons/go";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

const ServicePage = () => {
  return (
    <>
      {/* Full Page with Dark Background */}
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-[#00080A]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />

        {/* Hero Section */}
        <div className="relative z-10 px-4 md:px-10 pt-24 pb-32 max-w-7xl mx-auto">
          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-black italic uppercase">
            <div>OUR</div>
            <div>SERVICES</div>
            <div>LAUNCHPAD</div>
            <div>TO SUCCESS</div>
          </h1>

          {/* Button + Line */}
          <div className="flex items-center justify-end mt-[-65px] gap-3">
            <div className="text-2xl text-white">
              <GoNorthStar />
            </div>

            <div className="bg-white h-[2px] w-[380px]"></div>

            <button className="relative flex items-center justify-between w-[200px] h-[56px] pl-6 border border-cyan-400 rounded-full bg-transparent text-white group overflow-hidden">
              <span className="text-base font-medium z-10">Let's Discuss</span>
              <span className="absolute right-[-2px] top-1 bottom-1 my-auto w-14 h-14 rounded-full bg-white text-cyan-500 text-2xl flex items-center -rotate-45 justify-center shadow-[0_0_10px_#00FFFF] transition-transform group-hover:scale-105">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Services Label Section */}
        <div className="flex items-center  relative z-10 px-4 md:px-10 mt-[-40px] pb-10">
          <div className="text-2xl px-8 italic font-semibold text-white whitespace-nowrap">
            SERVICES
          </div>
          <div className="h-px w-[300px] bg-white"></div>
        </div>

        {/*service card */}
        <div className="px-6 pb-6">
          <div className="flex gap-8 ">
            <ServiceCard
              title="Software Development"
              description="Custom software that solves your business problems and scales with your growth."
            />
            <ServiceCard
              title="Web App Development"
              description="Responsive, high-performance web applications for any device."
            />
            <ServiceCard
              title="Mobile App Development"
              description="iOS, Android, and cross-platform experiences that engage users."
            />
          </div>
          <div className="flex gap-8 mt-6">
            <ServiceCard
              title="Digital Media Marketing"
              description="Grow your brand and reach your target audience with proven strategies."
            />
            <ServiceCard
              title="Branding & Design"
              description="Stand out with a memorable brand, crafted by our creative experts."
            />
            <ServiceCard
              title="Startup Consulting"
              description="From business plans to funding, we guide you every step of the way."
            />
          </div>
        </div>
        <div className="flex items-center  relative z-10 px-4 md:px-10  pb-10">
          <div className="text-2xl px-8 italic font-semibold text-white whitespace-nowrap">
            Why Choose Us
          </div>
          <div className="h-px w-[300px] bg-white"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
