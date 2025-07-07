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
import ParticleCursor from '../components/ParticleCursor'

const LandingPage = () => {

  return (
    <div style={{ background: "#00080A" }} className="overflow-x-hidden">
      <Header />
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
    <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-transparent">
      <ParticleCursor/>
      {/* Background Glows */}
      <div className="absolute w-[283px] h-[244px] rounded-full bg-cyan-600 blur-[100px] opacity-100 top-[359px] right-[100px] z-0" />
      <div className="absolute w-[183px] h-[200px] rounded-full bg-cyan-400 blur-[130px] opacity-100 bottom-[260px] left-[-8px] z-0" />

      {/* Main Content without horizontal padding */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto pt-20 pb-16">
        {/* Headline */}
        <h1 className="text-[42px] sm:text-[52px] lg:text-[80px] font-black italic uppercase leading-tight text-center lg:text-left lg:ml-16 lg:px-0 lg:mt-12">
          <div>Launch Your</div>
          <div>Vision.</div>
          <div>Grow Your Impact.</div>
        </h1>

        {/* Button + Satisfaction */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-10 lg:ml-16  gap-6 px-2 lg:px-0">
          {/* CTA Button */}
          <button
            className="relative flex items-center justify-between w-[220px] h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group"
            
          >
            <span className="text-base font-medium z-10">Get Started</span>
            <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-cyan-500 text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF]">
              <span className="material-symbols-outlined leading-none text-[28px]" onClick={() => navigate("/contact")}>
                arrow_outward
              </span>
            </span>
          </button>

          {/* Satisfaction Stat */}
          {/* <div className="flex flex-col sm:flex-row items-center sm:space-x-4 text-center sm:text-left">
            <div className="flex flex-row items-center mb-2 sm:mb-0">
              <span className="material-symbols-outlined animate-spin-slow text-2xl mr-2">
                asterisk
              </span>
              <div className="bg-white h-[2px] w-[120px] sm:w-[176px]"></div>
            </div>
            <div>
              <span className="text-lg font-bold">95%</span>
              <br className="sm:hidden" />
              <span className="text-sm text-gray-300">Client Satisfaction</span>
            </div>
          </div> */}
        </div>

        {/* Description + Stats */}
        <div className="flex flex-col lg:flex-row gap-8 mt-10 font-sans items-start lg:items-center px-2 lg:px-0">
          {/* Description */}
          {/* <div className="flex items-start lg:w-[645px]">
            <span className="text-2xl mr-3">+</span>
            <p className="text-sm text-gray-400">
              Affordable, high-quality web and app development, branding, and
              consulting for startups and small businesses in Ireland and beyond.
            </p>
          </div> */}

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm mt-6 sm:mt-0 text-center sm:text-left">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};
