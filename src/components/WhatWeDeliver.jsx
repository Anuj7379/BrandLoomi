import React from "react";

function WhatWeDeliver({ deliverTitle = "What We Deliver", deliverItems = [], techTitle = "Our Tech Stack", techItems = [] }) {
  return (
    <div className="flex flex-col md:flex-row justify-center md:px-20 items-start h-auto gap-10 py-10">
      {/* Left Column */}
      <div className="w-full md:w-1/2 font-sans flex flex-col gap-6">
        {/* Left heading and line */}
        <div className="flex items-center gap-4 mb-2">
          <h3 className="text-[25px] italic font-semibold text-white whitespace-nowrap">
            {deliverTitle}
          </h3>
          <div className="h-px w-[150px] bg-white" />
        </div>

        {deliverItems.map((text, index) => (
          <div key={`deliver-${index}`} className="flex items-start gap-4 text-white text-lg">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1de982]">
              <span className="material-icons-outlined text-black text-[28px] leading-none">
                check_circle
              </span>
            </span>
            <span className="text-[18px]">{text}</span>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 font-sans flex flex-col gap-6">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-px w-[150px] bg-white" />
          <h3 className="text-[25px] italic font-semibold text-white whitespace-nowrap">
            {techTitle}
          </h3>
        </div>

        {techItems.map((text, index) => (
          <div key={`tech-${index}`} className="flex items-start gap-4 text-white text-lg">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1de982]">
              <span className="material-icons-outlined text-black text-[28px] leading-none">
                check_circle
              </span>
            </span>
            <span className="text-[18px]">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeDeliver;
