import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LaunchBanner from "../components/LaunchBanner";
import AllServicesHeroSection from "../components/AllServicesHeroSection";
import WhatWeDeliver from "../components/WhatWeDeliver";
import TimelineSnap from "../components/TimelineSnap";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonial";

const SocialmediaAndmarketing = () => {
  return (
    <>
      {/* Full Page with Dark Background */}
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-[#00080A]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />
        <AllServicesHeroSection
          title="Social Media And Digital Media Marketing"
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
                text="Audit & Strategy. "
                underlineWidth={200}
              />
            </div>
            <div className="col-start-2 row-start-2">
              <TimelineSnap
                text="Content planning."
                underlineWidth={200}
              />
            </div>
            <div className="col-start-3 row-start-3" underlineWidth={200}>
              <TimelineSnap text="Campaign Launch." />
            </div>
            <div className="col-start-4 row-start-4" underlineWidth={200}>
              <TimelineSnap text="optimization." />
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

export default SocialmediaAndmarketing;
