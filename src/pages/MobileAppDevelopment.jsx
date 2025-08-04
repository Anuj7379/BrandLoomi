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

const AppFeature = [
  {
    title: "Affordable",
    description: "Startup-friendly pricing, no compromise on quality.",
  },
  {
    title: "Speed to Market",
    description: "MVPs delivered in as little as 4 weeks.",
  },
  {
    title: "Ongoing Partnership",
    description: "Updates, analytics, and feature enhancements.",
  },
];

const MobileAppDevelopment = () => {
  return (
    <>
      {/* Full Page with Dark Background */}
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-[#00080A]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />
        <AllServicesHeroSection
          titleLine1="Mobile App Development"
          description="In a mobile-first world, your customers expect seamless experiences on the go. We design and develop custom mobile apps for iOS and Android that help you connect, engage, and grow—whether you’re launching a new product or digitizing your services."
        />

        {/* */}
        <WhatWeDeliver
          deliverItems={[
            "Customer Apps: E-commerce, loyalty, booking, and delivery.",
            "Business Tools: Internal apps for workflow, inventory, or reporting.",
            "Community & Social Apps: Forums, chat, and networking.",
            "Event & Utility Apps: Scheduling, reminders, and notifications.",
          ]}
          techItems={[
            "Languages: Swift (iOS), Kotlin (Android), Dart (Flutter), JavaScript (React Native)",
            "Frameworks: Flutter, React Native, Xamarin",
            "Backend: Firebase, AWS Amplify, Node.js, Django REST",
            "APIs: Payment gateways, Google Maps, Push Notifications",
            "Testing: Appium, XCTest, Espresso",
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

        <WhyChooseUs heading="Why Choose Us?" features={AppFeature} />
        <Testimonials />
        <ServiceFaqs/>
        <LaunchBanner headingText="Tap into the market with an app they can’t put down." />
      </div>
      <Footer />
    </>
  );
};

export default MobileAppDevelopment;
