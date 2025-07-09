import React from "react";

function AllServicesHeroSection({ title, description }) {
  return (
    <section className="py-16 px-6 sm:px-10 max-w-screen-xl mx-auto mt-10 lg:mt-28">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Content */}
        <div className="max-w-2xl space-y-6">
          {/* Heading */}
          <h2 className="text-[50px] sm:text-5xl font-extrabold text-green-400">
            {title}
          </h2>

          {/* Description */}
          <p className="text-white text-[20px]  leading-relaxed w-[590px]">
            {description}
          </p>

          {/* CTA Section */}
          <div className="flex items-center gap-4 -mt-[20px] ">
            <p className="font-extrabold text-[20px] italic text-white ">
              Start Now
            </p>
            <span className="h-px w-[124px] mr-8 bg-white"></span>
            <button className="relative flex  items-center justify-between w-[200px] h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group">
              {/* Button Text */}
              <span className="text-base font-medium z-10">Get Started</span>

              {/* Glowing Circle with arrow_outward icon */}
              <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-cyan-500 text-[32px] flex items-center justify-center  shadow-[0_0_10px_#00FFFF]">
                <span className="material-symbols-outlined leading-none text-[28px]">
                  arrow_outward
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/3 scroll-ml-32 flex flex-col justify-center mt-5 -ml-10 pt-10 md:pt-0">
          {/* Asterisk + Line */}
          <div className="flex flex-row ">
            <div className="bg-white h-[2px] w-[176px] mt-3"></div>
            <span className="material-symbols-outlined animate-[spin_3s_linear_infinite]">
              asterisk
            </span>{" "}
          </div>

          {/* 50+ Happy Clients (centered) */}
          <div className="flex flex-col   mt-8">
            <div className="text-[80px] font-bold text-white">50+</div>
            <div className="text-2xl font-bold font-sans">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllServicesHeroSection;
