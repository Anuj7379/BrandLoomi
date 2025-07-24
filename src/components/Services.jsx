import React, { useRef } from "react";
import ServiceCard from "./ServiceCard";
import leftArrow from "../assets/leftScrollArrow.png";
import rightArrow from "../assets/rightScrollArrow.png";

const services = [
  {
    title: "Software Development",
    description:
      "Custom software that solves your business problems and scales with your growth.",
    link: "/services/Softwaredevelopment",
  },
  {
    title: "Web App Development",
    description:
      "Responsive, high-performance web applications for any device.",
    link: "/services/websitedevelopment",
  },
  {
    title: "Mobile App Development",
    description:
      "iOS, Android, and cross-platform experiences that engage users.",
    link: "/services/MobileAppDevelopment",
  },
  {
    title: "Digital Media Marketing",
    description:
      "Grow your brand and reach your target audience with proven strategies.",
    link: "/services/SocialmediaAndmarketing",
  },
  {
    title: "Branding & Design",
    description:
      "Stand out with a memorable brand, crafted by our creative experts.",
    link: "/services/BrandingAndDesign",
  },
  {
    title: "Startup Consulting",
    description:
      "From business plans to funding, we guide you every step of the way.",
    link: "/services/StartupConsulting",
  },
];

const Services = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-transparent text-white py-12 px-4 sm:px-6 lg:px-20 font-creato">
      {/* Heading */}
      <h2 className="text-[22px] sm:text-[25px] md:text-5xl lg:text-[60px] font-black italic mb-8 text-center lg:text-left">
        HOW TO ESTABLISH YOUR BRAND
      </h2>

      {/* Mobile: Scrollable Cards */}
      <div className="lg:hidden relative">
        {/* Left Button */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 rounded-full w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] p-1"
          onClick={() => scroll("left")}
        >
          <img src={leftArrow} alt="Scroll Left" className="w-full h-full object-contain" />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth custom flex gap-12 px-10 py-4 items-center custom-scroll "
        >
          {services.map((service, idx) => (
            <div key={idx} className="flex-shrink-0 ">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 rounded-full w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] p-1"
          onClick={() => scroll("right")}
        >
          <img src={rightArrow} alt="Scroll Right" className="w-full h-full object-contain" />
        </button>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 grid-cols-3  pt-12 gap-10   ">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
