import React from "react";
import DoubleDiamond from "../assets/DoubleDaimond.svg";

function Process() {
  return (
    <div className="w-full bg-[#00080A] text-white min-h-screen   py-20 font-creato overflow-hidden">
      <div className="w-full">
        {/* === Header Section === */}
        {/* === Top Label with Line and Asterisk === */}

        {/* === Main Title === */}
        <h2 className="text-[20px] sm:text-[40px] lg:text-[60px]  font-black italic tracking-wide leading-tight w-full px-5 sm:px-10 lg:px-20">
          FROM IDEAS TO SOLUTIONS
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-end gap-4 sm:gap-6 lg:gap-8 w-full px-5  sm:px-10 lg:px-20 scroll ">
          {/* Left Label */}
          <p className="text-white text-2xl sm:text-3xl font-extrabold italic tracking-wide whitespace-nowrap">
            Process
          </p>

          {/* Line + Asterisk */}
          <div className="flex items-center w-full max-w-[500px] space-x-3">
            <div className="h-[2px] bg-white w-full" />
            <span className="material-symbols-outlined animate-spin text-white text-2xl">
              asterisk
            </span>
          </div>
        </div>

        {/* === Full Width Image === */}
        <div className="w-full ">
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
