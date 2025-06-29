import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="bg-[#00080A] text-white px-4 sm:px-8 md:px-12 lg:px-16 py-20 font-['General_Sans',sans-serif] max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="flex flex-wrap justify-between items-center mb-12 gap-4">
        <h1 className="text-4xl md:text-5xl font-black italic">SERVICES</h1>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-cyan-400 text-xl">•</span>
          <span>All Services</span>
          <span className="bg-cyan-400 text-black rounded-full w-5 h-5 flex items-center justify-center">
            <FaArrowRight size={10} />
          </span>
        </div>
      </div>

      {/* Services Grid */}
      <div className="flex gap-8 ">
        <ServiceCard
          title="Software Development"
          description="Custom software that solves your business problems and scales with your growth."
        />
        <ServiceCard
          title="Web App Development"
          description="Responsive, high-performance web applications for any device."
        />
        <ServiceCard
          title="Mobile App Development"
          description="iOS, Android, and cross-platform experiences that engage users."
        />
        
      </div>
      <div className="flex gap-8 mt-6">
        <ServiceCard
          title="Digital Media Marketing"
          description="Grow your brand and reach your target audience with proven strategies."
        />
        <ServiceCard
          title="Branding & Design"
          description="Stand out with a memorable brand, crafted by our creative experts."
        />
        <ServiceCard
          title="Startup Consulting"
          description="From business plans to funding, we guide you every step of the way."
        />
      </div>
    </div>
  );
};

export default Services;
