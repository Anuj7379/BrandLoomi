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
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth;
    if (direction === "left") {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-transparent text-white py-12 px-4 sm:px-6 lg:px-20 font-creato">
      {/* Heading */}
      <h2 className="text-[22px] sm:text-[25px] md:text-5xl lg:text-[60px] font-black italic mb-8 text-center lg:text-left">
        HOW TO ESTABLISH YOUR BRAND
      </h2>

      {/* Mobile: Scrollable Cards */}
      <div className="lg:hidden relative w-full">
        {/* Left Button */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 rounded-full w-[25px] h-[25px] -ml-4"
          onClick={() => scroll("left")}
        >
          <img
            src={leftArrow}
            alt="Scroll Left"
            className="w-full h-full object-contain"
          />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex items-center w-full"
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 snap-center w-full px-6" // full screen width, with some side padding
            >
              <div className="w-full max-w-sm mx-auto">
                <ServiceCard {...service} />
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 rounded-full w-[25px] h-[25px] -mr-4"
          onClick={() => scroll("right")}
        >
          <img
            src={rightArrow}
            alt="Scroll Right"
            className="w-full h-full object-contain"
          />
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
