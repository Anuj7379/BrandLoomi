import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="w-[418px] h-[300px] bg-transparent rounded-2xl border border-white/10 p-6 text-white relative overflow-hidden group hover:shadow-[0_0_40px_#00ffff33] transition-shadow duration-300 box-border">

      {/* Glow ellipse */}
      <div className="absolute top-1/2 left-1/2 w-[337px] h-[295px] opacity-40 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"
      style={{
          background: "#00829B"
        }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        
        {/* Title & Description */}
        <div className="px-4 py-4">
          <h3 className="text-2xl font-semibold italic mb-3">{title}</h3>
          <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
        </div>

        {/* Arrow Button with 30° Rotation */}
        <div className="px-2">
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full transform rotate-[30deg] hover:scale-110 transition duration-300">
            {/* Reverse rotation inside to keep arrow upright */}
            <FaArrowRight size={16} className="-rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
