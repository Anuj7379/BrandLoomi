import React from "react";
import { useNavigate } from "react-router-dom";

function AllServicesHeroSection({ titleLine1 , titleLine2=" ", description }) {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-6 sm:px-10 max-w-screen-xl mx-auto mt-10 lg:mt-28 font-creato">
      <div className="grid grid-cols-2 items-start gap-2 mb-4">
        {/* title */}
        <h2 className="text-[25px] md:text-[35px] lg:text-[50px] font-black text-green-400 leading-tight">
          <span className="block md:inline">{titleLine1}</span>{" "}
          <span className="whitespace-nowrap block md:inline">{titleLine2}</span>{" "}
        </h2>

        {/* Line + Asterisk aligned with first line */}
        <div className="flex items-start gap-2 mt-2 md:mt-6 -ml-6">
          <div className="bg-white/80 h-[1px] w-[100px] md:w-[200px] lg:w-[276px]"></div>
          <span className="material-symbols-outlined animate-[spin_3s_linear_infinite] -mt-3">
            asterisk
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Description */}
        <p className="text-white text-[14px] md:text-[20px] leading-relaxed w-[320px] md:w-[590px]">
          {description}
        </p>

        {/* CTA Section */}
        <div className="flex items-center gap-2 -mt-[20px] ">
          <p className="font-extrabold text-[13px] md:text-[25px] italic text-white whitespace-nowrap
 ">
            Start Now
          </p>
          <span className="h-px w-[124px] mr-8 bg-white"></span>
            <button className="relative flex items-center justify-between w-[240px] md:w-[200px] h-[48px] md:h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group">
              <span className="text-base font-medium z-10">Let's Discuss</span>
              <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-cyan-500 text-[28px] md:text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF]">
                <span
                  className="material-symbols-outlined leading-none"
                  onClick={() => navigate("/contact")}
                >
                  arrow_outward
                </span>
              </span>
            </button>
        </div>
      </div>
    </section>
  );
}

export default AllServicesHeroSection;
