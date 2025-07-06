import React from "react";
import DoubleDiamond from "../assets/DoubleDaimond.png";

function Process() {
  return (
    <div className="w-full bg-[#00080A] text-white min-h-screen   py-20 font-sans overflow-hidden">
      <div className="w-full">
        {/* === Header Section === */}
        {/* === Top Label with Line and Asterisk === */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6 lg:gap-8 w-full mb-6 px-5 sm:px-10 lg:px-20">
          {/* Left Label */}
          <p className="italic text-white text-[30px] font-bold tracking-wide whitespace-nowrap">
            Process
          </p>

          {/* Line + Asterisk */}
          <div className="flex items-center w-full space-x-3">
            <div className="h-px bg-white w-full max-w-[600px]" />
            <span className="material-symbols-outlined animate-[spin_3s_linear_infinite]">
              asterisk
            </span>
          </div>
        </div>

        {/* === Main Title === */}
        <h2 className="text-[40px] sm:text-[60px] lg:text-[72px] mb-10 font-black italic tracking-wide leading-tight w-full px-5 sm:px-10 lg:px-20">
          STREAMLINED
        </h2>

        {/* === Full Width Image === */}
        <div className="w-full">
          <img
            src={DoubleDiamond}
            alt="Double Diamond Process"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Process;
