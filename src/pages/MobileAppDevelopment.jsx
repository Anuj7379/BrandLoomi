import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LaunchBanner from "../components/LaunchBanner";
import AllServicesHeroSection from "../components/AllServicesHeroSection";
import WhatWeDeliver from "../components/WhatWeDeliver";
import TimelineSnap from "../components/TimelineSnap";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonial";

const MobileAppDevelopment = () => {
  return (
    <>
      {/* Full Page with Dark Background */}
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-[#00080A]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />
        <AllServicesHeroSection
          title="Mobile App Development"
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

          <div className="grid grid-cols-7 gap-y-6 relative z-10 m-10">
            <div className="col-start-1 row-start-1">
              <TimelineSnap
                text="Discovery & Requirements. "
                underlineWidth={200}
              />
            </div>
            <div className="col-start-2 row-start-2">
              <TimelineSnap
                text="Solution & Architecture."
                underlineWidth={200}
              />
            </div>
            <div className="col-start-3 row-start-3" underlineWidth={200}>
              <TimelineSnap text="Agile Development." />
            </div>
            <div className="col-start-4 row-start-4" underlineWidth={200}>
              <TimelineSnap text="Testing & QA." />
            </div>
            <div className="col-start-5 row-start-5" underlineWidth={200}>
              <TimelineSnap text="Deployment & Support." />
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

export default MobileAppDevelopment;
