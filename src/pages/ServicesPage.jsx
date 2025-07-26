import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
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
        <div className="absolute -top-[60px] -right-[60px] w-[300px] h-[300px] bg-[#009252] opacity-40 blur-[80px] sm:blur-[80px]  z-0 xs:hidden" />

        <Header />

        {/* Hero Section */}
        <div className="relative z-10 px-8 md:px-10 pt-28 pb-32   lg:px-20  ">
          <h1 className="text-[30px]  md:text-[60px] lg:text-[80px] font-black italic uppercase leading-tight">
            <div className="flex flex-row  md:flex-col gap-2 md:gap-0">
              <div>OUR</div>
              <div>SERVICES</div>
            </div>
            <div>LAUNCHPAD</div>
            <div>TO SUCCESS</div>
          </h1>

          {/* Button + Line */}
          {/* Visible only on ≥500px */}
          <div className="hidden xs:flex flex-col xs:flex-row xs:items-center xs:justify-start md:justify-end gap-4 xs:gap-6 mt-10 md:mt-[-40px]">
            <div className="flex items-center justify-end gap-3 flex-grow">
              <span className="material-symbols-outlined animate-[spin_3s_linear_infinite] text-2xl xs:text-3xl text-cyan-400">
                asterisk
              </span>
              <div className="flex-grow bg-white h-[2px] max-w-[200px] xs:max-w-[250px] md:max-w-[300px] lg:max-w-[400px]" />
            </div>

            <button className="relative flex items-center justify-between w-[180px] md:w-[200px] h-[48px] md:h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group">
              <span className="text-base font-medium z-10">Let's Discuss</span>
              <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-cyan-500 text-[28px] md:text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF]">
                <span
                  className="material-symbols-outlined leading-none"
                  onClick={() => navigate("/contact")}
                >
                  arrow_outward
                </span>
              </span>
            </button>
          </div>
          {/* for desktop */}
          <div className="flex xs:hidden flex-col gap-4  leading-none">
            <div className="flex items-center justify-start gap-3">
              <div className="flex-grow bg-white h-[2px] w-full max-w-[200px] ml-auto" />
              <span className="material-symbols-outlined animate-[spin_3s_linear_infinite] text-2xl text-cyan-400">
                asterisk
              </span>
            </div>

            <button className="relative flex items-center justify-between w-[180px] h-[48px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group">
              <span className="text-base font-medium z-10">Let's Discuss</span>
              <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-cyan-500 text-[28px] flex items-center justify-center shadow-[0_0_10px_#00FFFF]">
                <span
                  className="material-symbols-outlined leading-none"
                  onClick={() => navigate("/contact")}
                >
                  arrow_outward
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Services Label Section */}
        <div className="flex flex-col md:flex-row md:items-center  relative z-10  md:px-10 mt-[-40px] pb-10">
          <div className="text-[25px] md:text-[20px] px-8 italic font-semibold text-white whitespace-nowrap">
            SERVICES
          </div>
          <div className="h-px w-[170px] md:w-[250px] lg:w-[483px] ml-20 md:ml-0  md:px-0 bg-white/80"></div>
        </div>

        {/*service card */}
        <div className="max-w-full  pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-y-10">
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

        <div className="flex flex-col md:flex-row  md:items-center  relative z-10 px-4 md:px-10  pb-10">
          <div className="text-2xl px-8 italic font-semibold text-white whitespace-nowrap">
            Why Choose Us
          </div>
          <div className="h-px w-[215px] md:w-[300px] ml-24 md:ml-0 bg-white/80"></div>
        </div>

        {/*bellow   --  */}
        <div className="flex flex-col md:flex-row md:justify-center px-8 md:px-20 md:items-center  h-[350px]">
          {/* Left text */}
          <div className=" w-[270px] md:w-1/2  font-sans italic">
            <p className="text-white text-[16px] md:text-[30px] lg:text-[50px]  font-bold leading-tight ">
              From business plans to funding , we guide you every step of the
              way.
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
                className="flex items-start  gap-4 text-white text-lg"
              >
                <span className="flex items-center justify-center w-10 h-10 gap-4 rounded-full bg-[#1de982]">
                  <span className="material-icons-outlined text-black text-[28px] leading-none">
                    check_circle
                  </span>
                </span>

                <span className="mt-1">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <LaunchBanner headingText="Ready to get Started ?" />

        {/* */}
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
