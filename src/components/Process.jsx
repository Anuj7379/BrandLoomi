import React from "react";
import DoubleDiamond from "../assets/DoubleDaimond.svg";

function Process() {
  return (
    <div className="w-full bg-[#00080A] text-white min-h-screen   py-20 font-creato overflow-hidden">
      <div className="w-full">

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
