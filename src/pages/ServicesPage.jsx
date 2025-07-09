import React from "react";
import { FaArrowRight } from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import logo from "../assets/brandloomiLogo.png";
import { useNavigate } from "react-router-dom";
import LaunchBanner from "../components/LaunchBanner";

const ServicePage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Full Page with Dark Background */}
      <div className="relative min-h-screen text-white  overflow-hidden bg-[#00080A] font-creato">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />

        {/* Hero Section */}
        <div className="relative z-10 md:px-10 pt-24 pb-32   lg:px-20  ">
          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-black italic uppercase leading-tight font-creato mt-16">
            <div>OUR</div>
            <div>SERVICES</div>
            <div>LAUNCHPAD</div>
            <div>TO SUCCESS</div>
          </h1>

          {/* Button + Line */}
          <div className="flex items-center justify-end mt-[-65px] ">
            <div className="text-2xl">
              <span className="material-symbols-outlined animate-[spin_5s_linear_infinite]">
                asterisk
              </span>
            </div>

            <div className="bg-white h-[2px] w-[380px]"></div>

            <button className="relative flex items-center justify-between w-[200px] h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-transparent text-white overflow-hidden group">
              {/* Button Text */}
              <span className="text-base font-medium z-10">Let's Discuss</span>

              {/* Glowing Circle with arrow_outward icon */}
              <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-cyan-500 text-[32px] flex items-center justify-center  shadow-[0_0_10px_#00FFFF]">
                <span className="material-symbols-outlined leading-none text-[28px]" onClick={() => navigate("/contact")}>
                  arrow_outward
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Services Label Section */}
        <div className="flex items-center  relative z-10  md:px-10 mt-[-40px] pb-10">
          <div className="text-2xl px-8 italic font-semibold text-white whitespace-nowrap">
            SERVICES
          </div>
          <div className="h-px w-[300px] bg-white"></div>
        </div>

        {/*service card */}
        <div className="max-w-full ml-4 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10">
            <ServiceCard
              title="Software Development"
              description="Custom software that solves your business problems and scales with your growth."
              link="/services/Softwaredevelopment"
            />
            <ServiceCard
              title="Web App Development"
              description="Responsive, high-performance web applications for any device."
              link="/services/websitedevelopment"
            />
            <ServiceCard
              title="Mobile App Development"
              description="iOS, Android, and cross-platform experiences that engage users."
              link="/services/MobileAppDevelopment"
            />
            <ServiceCard
              title="Digital Media Marketing"
              description="Grow your brand and reach your target audience with proven strategies."
              link="/services/SocialmediaAndmarketing"
            />
            <ServiceCard
              title="Branding & Design"
              description="Stand out with a memorable brand, crafted by our creative experts."
              link="/services/BrandingAndDesign"
            />
            <ServiceCard
              title="Startup Consulting"
              description="From business plans to funding, we guide you every step of the way."
              link="/services/StartupConsulting"
            />
          </div>
        </div>

        <div className="flex items-center  relative z-10 px-4 md:px-10  pb-10">
          <div className="text-2xl px-8 italic font-semibold text-white whitespace-nowrap">
            Why Choose Us
          </div>
          <div className="h-px w-[300px] bg-white"></div>
        </div>

        {/*bellow   --  */}
        <div className="flex flex-col md:flex-row justify-center md:px-20 items-center  h-[350px]">
          {/* Left text */}
          <div className="w-full md:w-1/2 font-sans italic">
            <p className="text-white text-2xl md:text-4xl font-bold leading-snug ">
              From business plans to
              <br />
              funding , we guide you <br /> every step of the way.
            </p>
          </div>

          {/* Right checklist  */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 pt-6 md:pt-0">
            {[
              "Affordable, transparent pricing",
              "Fast turnaround times",
              "Ongoing support",
              "Proven track record",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-start gap-4 text-white text-lg"
              >
                <span className="flex items-center justify-center w-10 h-10 gap-4 rounded-full bg-[#1de982]">
                  <span className="material-icons-outlined text-black text-[28px] leading-none">
                    check_circle
                  </span>
                </span>

                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

       <LaunchBanner headingText="Ready to get Started ?"/>

        {/* */}
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
