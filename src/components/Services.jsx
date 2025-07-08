import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

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

  return (
    <div className="bg-transparent text-white lg:-mr-4 sm:px-4 md:px-6  py-12 font-creato w-full mx-auto  mt-8 ">
      
      {/* Section Header */}
      <div className="flex flex-wrap justify-between items-center mb-14 gap-4">
        <h1 className="text-4xl lg:text-[80px] md:text-5xl font-black italic lg:px-16">SERVICES</h1>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-cyan-400 text-2xl">•</span>
          <span
            className="cursor-pointer text-[22px]"
            onClick={() => navigate("/services")}
          >
            All Services
          </span>
          <span className="bg-cyan-400 text-black rounded-full w-8 h-8 flex items-center justify-center">
            <FaArrowRight size={15} />
          </span>
        </div>
      </div>

      {/* Services Grid */}
      <div className="flex flex-wrap justify-center gap-y-6 gap-6">
        
        {services.map((service, idx) => (
          <div
            key={idx}
            className="w-full sm:w-full md:w-[48%] lg:w-[412px] max-w-[412px]"
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              link={service.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
