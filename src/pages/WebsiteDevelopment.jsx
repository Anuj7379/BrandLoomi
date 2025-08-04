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
const WebDevFeautre = [
  {
    title: "Lightning Fast",
    description: "Average delivery in 2–4 weeks.",
  },
  {
    title: "Conversion-Focused",
    description: "Every pixel designed to drive results.",
  },
  {
    title: "Transparent",
    description: "No hidden fees, clear timelines, and ongoing support.",
  },
];

const WebsiteDevelopment = () => {
  return (
    <>
      {/* Full Page with Dark Background */}
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-[#00080A]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />
        <AllServicesHeroSection
          titleLine1="Web App Development"
          description="Your website is your business’s digital headquarters. We specialize in building high-performance web applications that engage users, drive conversions, and scale with your ambitions. From MVPs for startups to robust platforms for growing businesses, we deliver web solutions that work."
        />

        {/* */}

        {/* what we deliver Component  */}

        <WhatWeDeliver
          deliverItems={[
            "Business Websites: Corporate, portfolio, and landing pages.",
            "E-commerce Stores: Secure, scalable, and conversion-focused.",
            "SaaS Platforms: Subscription, membership, and community apps.",
            "Booking & Event Apps: Real-time scheduling, payments, and notifications.",
          ]}
          techItems={[
            "Frontend: React.js, Vue.js, Angular, HTML5, CSS3, SASS",
            "Backend: Node.js, Express, Django, Laravel, Ruby on Rails",
            "CMS: WordPress, Strapi, Contentful",
            "E-commerce: Shopify, WooCommerce, Magento",
            "APIs: REST, GraphQL, Stripe, PayPal, Google Maps",
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

        <WhyChooseUs heading="Why Choose Us?" features={WebDevFeautre} />
        <Testimonials />
        <ServiceFaqs/>
        <LaunchBanner headingText="Your browser is about to meet its favorite build " />
      </div>
      <Footer />
    </>
  );
};

export default WebsiteDevelopment;
