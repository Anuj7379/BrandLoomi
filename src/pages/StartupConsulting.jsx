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

export const startupWhyChooseUs = [
  {
    title: "Startup Specialists",
    description: "We’ve launched and scaled businesses ourselves.",
  },
  { title: "Practical Advice", description: "No fluff—just what works." },
  {
    title: "Long-Term Partnership",
    description: "We’re invested in your journey.",
  },
];

const StartupAndConsulting = () => {
  return (
    <>
      {/* Full Page with Dark Background */}
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-[#00080A]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />
        <Header />
        <AllServicesHeroSection
          titleLine1="Startup Consulting"
          description="Starting a business is hard. We make it easier. Our startup consulting service guides you from idea to launch and beyond, helping you avoid common pitfalls, secure funding, and build a foundation for sustainable growth."
        />
        {/* What We Deliver */}
        <WhatWeDeliver
          deliverItems={[
            "Business Model Validation: Test your idea, refine your value proposition.",
            "Go-to-Market Strategy: Positioning, pricing, and launch planning.",
            "Grant & Funding Support: Application guidance and pitch deck creation.",
            "Mentorship: Ongoing advice from experienced founders and operators.",
            "Resource Library: Templates, checklists, and best practices.",
          ]}
          techItems={[
            "Workshops: Interactive sessions to clarify vision and strategy.",
            "Market Research: Data-driven insights into your industry and competitors.",
            "Financial Planning: Budgeting, forecasting, and investor readiness.",
            "Network Access: Connect with investors, partners, and talent.",
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
              <TimelineSnap text="Workshops." underlineWidth={200} />
            </div>
            <div className="col-start-2 row-start-2">
              <TimelineSnap text="Market Research." underlineWidth={200} />
            </div>
            <div className="col-start-3 row-start-3">
              <TimelineSnap text="Financial Planning." underlineWidth={200} />
            </div>
            <div className="col-start-4 row-start-4">
              <TimelineSnap text="Network Access." underlineWidth={200} />
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
            <TimelineSnap text="Workshops." underlineWidth={200} />
            <TimelineSnap text="Market Research." underlineWidth={200} />
            <TimelineSnap text="Financial Planning." underlineWidth={200} />
            <TimelineSnap text="Network Access." underlineWidth={200} />
          </div>
        </div>
        <WhyChooseUs heading="Why Choose Us?" features={startupWhyChooseUs} />
        <Testimonials />
        <ServiceFaqs/>
        <LaunchBanner headingText="Ideas are fragile — we help yours survive the chaos. " />
      </div>

      <Footer />
    </>
  );
};

export default StartupAndConsulting;
