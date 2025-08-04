import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LaunchBanner from "../components/LaunchBanner";
import AllServicesHeroSection from "../components/AllServicesHeroSection";
import WhatWeDeliver from "../components/WhatWeDeliver";
import TimelineSnap from "../components/TimelineSnap";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonial";
import ServiceFaqs from "../components/ServiceFaqs";

export const designWhyChooseUs = [
  {
    title: "Experienced Designers :",
    description: "Award-winning creative team.",
  },
  {
    title: "Strategic Approach :",
    description: "Design that supports your business goals.",
  },
  {
    title: "Full-Service :",
    description: "From concept to launch, we've got you covered.",
  },
];

const BrandingAndDesign = () => {
  return (
    <>
      {/* Full Page with Dark Background */}
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-[#00080A]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />
        <AllServicesHeroSection
          titleLine1="Branding and Designing"
          description="Your brand is your story. We help you tell it with clarity, creativity, and consistency—through stunning visuals, compelling messaging, and cohesive design assets. Whether you’re launching or rebranding, we’ll make sure you leave a lasting mark."
        />

        {/* */}
        <WhatWeDeliver
          deliverItems={[
            "Brand Strategy: Mission, vision, values, and positioning.",
            "Logo Design: Unique, versatile, and memorable.",
            "Visual Identity: Color palettes, typography, iconography, imagery.",
            "Brand Guidelines: Rules for consistent application everywhere.",
            "Marketing Collateral: Business cards, presentations, social templates.",
          ]}
          techItems={[
            "Design: Adobe Creative Suite (Photoshop, Illustrator, XD), Figma, Canva",
            "Prototyping: Figma, InVision",
            "Collaboration: Miro, Slack, Notion",
          ]}
        />

        <div className="bg-transparent hidden md:block px-[50px] py-[40px]">
          {/* Heading */}
          <span className="text-[30px] md:text-[50px] lg:text-[80px] italic font-black text-white">
            Our Process
          </span>

          {/* Line + Asterisk */}
          <div className="flex items-center justify-center mt-2 mb-10">
            <div className="bg-white h-[1px] w-[220px] sm:w-[300px] md:w-[400px] lg:w-[500px]" />
            <span className="material-symbols-outlined animate-[spin_3s_linear_infinite] ml-2">
              asterisk
            </span>
          </div>

          {/* Glow */}
          <div className="relative w-[169px] h-[190px] rounded-full bg-[#27DCFF] blur-[200px] opacity-100 top-[270px] left-[-28px] z-0 -mt-40" />

          {/* Grid Timeline */}
          <div className="grid grid-cols-6 gap-y-10 relative z-10 ">
            <div className="col-start-1 row-start-1">
              <TimelineSnap text="Brand Audit" underlineWidth={120} />
            </div>
            <div className="col-start-2 row-start-2">
              <TimelineSnap text="Strategy Development" underlineWidth={160} />
            </div>
            <div className="col-start-3 row-start-3">
              <TimelineSnap text="Creative Exploration" underlineWidth={160} />
            </div>
            <div className="col-start-4 row-start-4">
              <TimelineSnap text="Finalization" underlineWidth={120} />
            </div>
          </div>
        </div>
        {/* Mobile View */}
        <div className="block md:hidden px-4 py-10 max-w-md mx-auto">
          <h2 className="text-[24px] font-bold italic text-white mb-6">
            Our Process
          </h2>

          {/* Line + Asterisk */}
          <div className="flex items-center justify-center mt-2 mb-10">
            <div className="bg-white h-[1px] w-[180px]" />
            <span className="material-symbols-outlined animate-[spin_3s_linear_infinite] ml-2">
              asterisk
            </span>
          </div>

          {/* Vertical Timeline Stack */}
          <div className="">
            <TimelineSnap text="Brand Audit" underlineWidth={120} />
            <TimelineSnap text="Strategy Development" underlineWidth={160} />
            <TimelineSnap text="Creative Exploration" underlineWidth={160} />
            <TimelineSnap text="Finalization" underlineWidth={120} />
          </div>
        </div>

        <WhyChooseUs features={designWhyChooseUs} />
        <Testimonials />
        <ServiceFaqs/>
        <LaunchBanner headingText="We don’t just design logos — we shape legacies. " />
      </div>
      <Footer />
    </>
  );
};

export default BrandingAndDesign;
