import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LaunchBanner from "../components/LaunchBanner";
import AllServicesHeroSection from "../components/AllServicesHeroSection";
import WhatWeDeliver from "../components/WhatWeDeliver";
import TimelineSnap from "../components/TimelineSnap";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonial";
import FAQs from "../components/FAQ";

const StartupAndConsulting = () => {
  return (
    <>
      {/* Full Page with Dark Background */}
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-[#00080A]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />
        <AllServicesHeroSection
          title="Startup Consulting"
          description="Starting a business is hard. We make it easier. Our startup consulting service guides you from idea to launch and beyond, helping you avoid common pitfalls, secure funding, and build a foundation for sustainable growth."
        />

        {/* */}
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

        <div className="bg-transparent " style={{ padding: "40px 50px" }}>
          <h2 className="text-[80px]  italic font-bold">TIMELINE</h2>
          <div className="flex items-center justify-center mb-10">
            {/* Line */}
            <div className="bg-white h-[2px] w-[300px] sm:w-[400px] md:w-[500px]"></div>

            {/* Asterisk Icon */}
            <span className="material-symbols-outlined text-white text-3xl ml-4">
              asterisk
            </span>
          </div>

          <div className="relative w-[169px] h-[190px] rounded-full bg-[#27DCFF] blur-[200px] opacity-100 top-[270px] left-[-28px] z-0 -mt-40" />

          <div className="grid grid-cols-6 gap-y-6 relative z-10 m-10">
            <div className="col-start-1 row-start-1">
              <TimelineSnap
                text="Workshops. "
                underlineWidth={200}
              />
            </div>
            <div className="col-start-2 row-start-2">
              <TimelineSnap
                text="Market Research."
                underlineWidth={200}
              />
            </div>
            <div className="col-start-3 row-start-3" underlineWidth={200}>
              <TimelineSnap text="Financial Planning." />
            </div>
            <div className="col-start-4 row-start-4" underlineWidth={200}>
              <TimelineSnap text="Network Access." />
            </div>
            
          </div>
        </div>

        <WhyChooseUs />
        <Testimonials/>
        <LaunchBanner headingText="Ready to Build your Competative Edge ? " />
      </div>
      <Footer />
    </>
  );
};

export default StartupAndConsulting;
