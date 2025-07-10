import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom"; // 👈 Import Link

const ServiceCard = ({ title, description, link }) => {
  return (
    <div className=" max-w-[412px] h-[363px] bg-transparent rounded-2xl border border-white/10 p-6 text-white relative overflow-hidden group hover:shadow-[0_0_40px_#00ffff33] transition-shadow duration-300 box-border font-creato">
      {/* Glow ellipse */}
      <div
        className="absolute top-1/2 left-1/2 w-[337px] h-[295px] opacity-40 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"
        style={{ background: "#00829B" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Title & Description */}
        <div className="px-4 py-8 mt-3">
          <h3 className="text-[25px] font-black italic mb-3">{title}</h3>
          <p className="text-gray-400 text-[20px] font-normal leading-relaxed">
            {description}
          </p>
        </div>

        {/* Link Button */}
        <div className="absolute bottom-[10px] left-[10px]">
          <Link to={link}>
            <div className="w-[50px] h-[50px] bg-white text-black flex items-center justify-center rounded-full transform rotate-[30deg] hover:scale-110 transition duration-300 shadow-[0_0_10px_#00FFFF] group-hover:shadow-[0_0_20px_#00ffff]">
              <FaArrowRight size={21} className="-rotate-45 text-cyan-500 " />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
