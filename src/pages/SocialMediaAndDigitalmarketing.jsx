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

export const marketingWhyChooseUs = [
  { title: "Transparent Reporting :", description: "Know exactly where your budget goes." },
  { title: "Multi-Channel Expertise :", description: "Reach your audience wherever they are." },
  { title: "Growth Focused :", description: "Every campaign designed to deliver ROI." },
];

const SocialmediaAndmarketing = () => {
  return (
    <>
      {/* Full Page with Dark Background */}
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-[#00080A]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />
        <AllServicesHeroSection
          titleLine1="Social Media And Digital "
          titleLine2=" Media Marketing"
          description="Your online presence is your most valuable asset. Our digital marketing team crafts data-driven campaigns that boost visibility, generate leads, and turn followers into loyal customers. From strategy to execution, we help you stand out in a crowded digital world."
        />

        {/* */}
        <WhatWeDeliver
          deliverItems={[
            "Social Media Management: Content calendars, posting, and community engagement.",
            "Paid Advertising: Google Ads, Facebook/Instagram Ads, LinkedIn Campaigns.",
            "SEO & Content Marketing: Blog writing, keyword research, on-page optimization.",
            "Email Marketing: Campaign design, automation, and list management.",
            "Influencer & Affiliate Marketing: Partnerships that expand your reach.",
          ]}
          techItems={[
            "SEO: SEMrush, Ahrefs, Moz, Google Search Console",
            "Social Media: Hootsuite, Buffer, Sprout Social",
            "Email: Mailchimp, SendGrid, HubSpot",
            "Analytics: Google Analytics, Facebook Insights, Data Studio",
            "Ads: Google Ads, Meta Ads Manager, LinkedIn Campaign Manager",
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
      <TimelineSnap text="Audit & Strategy" underlineWidth={200} />
    </div>
    <div className="col-start-2 row-start-2">
      <TimelineSnap text="Content Planning" underlineWidth={200} />
    </div>
    <div className="col-start-3 row-start-3">
      <TimelineSnap text="Campaign Launch" underlineWidth={200} />
    </div>
    <div className="col-start-4 row-start-4">
      <TimelineSnap text="Optimization" underlineWidth={200} />
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
          <TimelineSnap text="Audit & Strategy" underlineWidth={200} />
    <TimelineSnap text="Content Planning" underlineWidth={200} />
    <TimelineSnap text="Campaign Launch" underlineWidth={200} />
    <TimelineSnap text="Optimization" underlineWidth={200} />
          </div>
        </div>

      <WhyChooseUs features={marketingWhyChooseUs} />
        <Testimonials/>
        <ServiceFaqs/>
        <LaunchBanner headingText="Let’s stop the scroll — and start conversations. " />
      </div>
      <Footer />
    </>
  );
};

export default SocialmediaAndmarketing;
