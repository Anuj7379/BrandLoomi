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

const softwareDevFeature = [
  {
    title: "Future-Proof",
    description: "Scalable, modular, and ready for tomorrow’s growth.",
  },
  {
    title: "Secure",
    description: "Built with best-in-class security practices.",
  },
  {
    title: "Affordable",
    description: "World-class quality, startup-friendly pricing.",
  },
];

const SoftwareDevelopment = () => {
  return (
    <>
      {/* Full Page with Dark Background */}
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-[#00080A]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />
        <AllServicesHeroSection
          titleLine1="Software Development"
          description="At Brandloomi, we believe every business challenge deserves a unique solution. Our custom software development service is designed for startups and SMEs who want to streamline operations, automate workflows, and unlock new growth opportunities. We don't just write code-we architect the systems that power your future."
        />

        {/* */}
        <WhatWeDeliver
          deliverItems={[
            "Bespoke Platforms",
            "Process Automation",
            "API Integrations",
            "Legacy System Modernization",
          ]}
          techItems={[
            "Languages: Python, JavaScript (Node.js), Java, C#, PHP",
            "Frameworks: Django, .NET, Express.js, Laravel, Spring Boot",
            "Frameworks: Django, .NET, Express.js, Laravel, Spring Boot",
            "Cloud & DevOps: AWS, Azure, Google Cloud, Docker, Kubernetes, GitHub Actions",
          ]}
        />

        {/* Desktop View */}
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
              <TimelineSnap
                text="Discovery & Requirements"
                underlineWidth={200}
              />
            </div>
            <div className="col-start-2 row-start-2">
              <TimelineSnap text="Solution Architecture" underlineWidth={200} />
            </div>
            <div className="col-start-3 row-start-3">
              <TimelineSnap text="Agile Development" underlineWidth={200} />
            </div>
            <div className="col-start-4 row-start-4">
              <TimelineSnap text="Testing & QA" underlineWidth={200} />
            </div>
            <div className="col-start-5 row-start-5">
              <TimelineSnap text="Deployment & Support" underlineWidth={200} />
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
            <TimelineSnap
              text="Discovery & Requirements"
              underlineWidth={200}
            />
            <TimelineSnap text="Solution Architecture" underlineWidth={200} />
            <TimelineSnap text="Agile Development" underlineWidth={200} />
            <TimelineSnap text="Testing & QA" underlineWidth={200} />
            <TimelineSnap text="Deployment & Support" underlineWidth={200} />
          </div>
        </div>

        <WhyChooseUs heading="Why Choose Us?" features={softwareDevFeature} />
        <Testimonials />
        <ServiceFaqs/>
        <LaunchBanner headingText="From scratch to scale — we engineer what you imagine. " />
      </div>
      <Footer />
    </>
  );
};

export default SoftwareDevelopment;
