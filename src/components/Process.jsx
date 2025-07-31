import React from "react";
import DoubleDiamond from "../assets/DoubleDaimond.svg";
import homeMobileDoubleDaimond from "../assets/homeMobileDoubleDaimond.svg";

function Process() {
  return (
    <div className="w-full bg-[#00080A] text-white  font-creato overflow-hidden">
      <div className="w-full">

        {/* === Full Width Image === */}
        <div className="w-full hidden md:block ">
          <img
            src={DoubleDiamond}
            alt="Double Diamond Process"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className=" w-full block xs:hidden">
          <img src={homeMobileDoubleDaimond} 
          alt="mobile double daimond" 
          className="w-full h-auto object-contain"/>
          
        </div>
      </div>
    </div>
  );
}

export default Process;
