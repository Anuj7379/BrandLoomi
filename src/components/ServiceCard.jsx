import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, link }) => {
  return (
    <div className="w-[90vw] max-w-[310px] md:max-w-[380px] h-[260px] md:h-[320px] lg:h-[340px] bg-transparent rounded-[20px] border border-white/30 px-6 py-8 text-white relative overflow-hidden group hover:shadow-[0_0_40px_#00ffff33] transition-shadow duration-300 font-creato  mx-auto">

      
      {/* Glowing Background */}
      <div
        className="absolute top-1/2 left-1/2 w-[200px] h-[240px] opacity-50 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"
        style={{ background: "#00829B" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full mt-4">
        {/* Title & Description */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[23px] md:text-[26px] font-bold italic md:mb-2">
            {title}
          </h3>
          <p className="text-gray-400 text-[14px]  sm:text-[16px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom Left Circular Button */}
        <div className="pt-4 mt-auto">
          <Link to={link}>
            <div className="w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] bg-white text-black flex items-center justify-center rounded-full rotate-[30deg] hover:scale-110 transition duration-300 shadow-[0_0_10px_#00FFFF] group-hover:shadow-[0_0_20px_#00ffff]">
              <FaArrowRight size={18} className="-rotate-45 text-cyan-500 hover:-rotate-90" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
