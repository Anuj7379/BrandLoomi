import React from "react";

function WhatWeDeliver({
  deliverTitle = "What We Deliver",
  deliverItems = [],
  techTitle = "Our Tech Stack",
  techItems = [],
}) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-20 px-4 sm:px-6 md:px-20 py-10 w-full font-creato">
      {/* Left Column */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        {/* Heading + Line */}
        <div className="flex flex-row items-center gap-4 mb-2">
          <h3 className="text-[20px] sm:text-[25px] italic font-semibold text-white whitespace-nowrap">
            {deliverTitle}
          </h3>
          <div className="h-px w-full  bg-white/80" />
        </div>

        {deliverItems.map((text, index) => (
          <div
            key={`deliver-${index}`}
            className="flex items-start gap-4 text-white text-base sm:text-lg"
          >
            <span className="flex items-center justify-center min-w-10 min-h-10 w-10 h-10 rounded-full bg-[#1de982]">
              <span className="material-icons-outlined text-black text-[24px] sm:text-[28px] leading-none">
                check_circle
              </span>
            </span>
            <span className="text-[16px] sm:text-[18px]">{text}</span>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div className="flex md:flex-row-reverse items-center gap-4 mb-2">
          <h3 className="text-[20px] sm:text-[25px] italic font-semibold text-white whitespace-nowrap">
            {techTitle}
          </h3>
          <div className="h-px w-full  bg-white" />
          
        </div>

        {techItems.map((text, index) => (
          <div
            key={`tech-${index}`}
            className="flex items-start gap-4 text-white text-base sm:text-lg"
          >
            <span className="flex items-center justify-center min-w-10 min-h-10 w-10 h-10 rounded-full bg-[#1de982]">
              <span className="material-icons-outlined text-black text-[24px] sm:text-[28px] leading-none">
                check_circle
              </span>
            </span>
            <span className="text-[16px] sm:text-[18px]">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeDeliver;
