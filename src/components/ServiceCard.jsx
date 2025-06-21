// src/components/ServiceCard.jsx

import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ title, description, image, imageCaption }) => {
  return (
    <div className="relative bg-gradient-to-br from-[#043E41]/60 to-[#01171A]/60 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out group h-full w-full overflow-hidden border border-white/5 backdrop-blur-md">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0F3F3E]/30 to-[#00080A] z-0 blur-sm opacity-30 scale-105" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500 opacity-10 rounded-full blur-3xl z-0 animate-pulse"></div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top Content */}
        <div className="mb-4">
          {/* Image */}
          {image && (
            <img
              src={image}
              alt={title}
              className="w-12 h-12 object-contain mb-2 rounded-md border border-white/10"
            />
          )}
          {/* Caption */}
          {imageCaption && (
            <p className="text-xs text-cyan-300 font-medium mb-2">{imageCaption}</p>
          )}
          {/* Headings */}
          <h4 className="text-xs text-cyan-400 uppercase tracking-widest mb-1">
            Service
          </h4>
          <h2 className="text-white font-bold text-lg sm:text-xl mb-2">{title}</h2>
          <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
        </div>

        {/* Bottom Arrow CTA */}
        <div className="mt-auto">
          <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full transition-transform group-hover:scale-110 group-hover:rotate-45 duration-300">
            <FaArrowRight size={18} className="translate-x-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
