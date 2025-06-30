import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ProcessStep = ({ number, title, description, className }) => (
  <div className={`relative max-w-xs ${className}`}>
    {/* Glow behind each step */}
    <div
      className="absolute w-[300px] h-[200px] opacity-40 blur-[100px] rounded-full -z-10 left-[-60px] top-[-50px]"
      style={{
        background: "#00829B",
      }}
    ></div>

    <h3 className="text-white italic font-semibold text-base mb-1">
      <span className="text-cyan-400">{number}.</span> {title}
    </h3>
    <p className="text-white/70 text-xs leading-relaxed">{description}</p>
  </div>
);

function Process() {
  return (
    <div className="relative bg-[#00080A] text-white min-h-screen px-6 lg:px-20 py-20 font-sans overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="flex gap-8 font-bold text-3xl items-center mb-6">
          <p className="text-md italic text-white">Process</p>
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-[483px] h-px bg-white"></div>
            <span className="text-cyan-400 text-xl">✶</span>
          </div>
        </div>
        <h2 className="text-5xl mb-10 font-black italic tracking-wide">
          STREAMLINED
        </h2>

        {/* GRID - Desktop Only */}
        <div className="grid grid-cols-12 gap-y-20 relative z-10">
          <ProcessStep
            number="01"
            title="Interactive Infographic"
            description="Visual Timeline or flowchart of the process below"
            className="col-start-1 col-span-3 row-start-1"
          />
          <ProcessStep
            number="02"
            title="Discovery & Planning"
            description="We start by understanding your vision, goals, and challenges. Together, we define the project scope and set clear expectations."
            className="col-start-4 col-span-4 row-start-2"
          />
          <ProcessStep
            number="03"
            title="Brainstorming & Design"
            description="Our creative team crafts intuitive, beautiful designs that reflect your brand and delight your users."
            className="col-start-7 col-span-3 row-start-3"
          />
          <ProcessStep
            number="04"
            title="Development"
            description="Our developers bring your project to life using agile methodologies, ensuring flexibility and high quality."
            className="col-start-10 col-span-3 row-start-4"
          />
          <ProcessStep
            number="05"
            title="Testing"
            description="Every project undergoes rigorous testing—functionality, usability, security—so your launch is seamless."
            className="col-start-7 col-span-3 row-start-5"
          />
          <ProcessStep
            number="06"
            title="Post-Launch Support"
            description="We’re here for updates, improvements, and troubleshooting long after your project goes live."
            className="col-start-4 col-span-4 row-start-6"
          />
        </div>

        {/* Step 07 + CTA */}
        <div className="flex mt-20 relative z-10 items-start justify-between gap-6">
          <ProcessStep
            number="07"
            title="Marketing"
            description="Our digital marketing experts help you reach your audience, generate leads, and grow your business."
            className="max-w-md"
          />
          <div className="flex items-center space-x-6 mt-8">
            <span className=" text-xl">✶</span>
            <div className="flex-1 h-px w-[300px] bg-white "></div>
            <button className="relative flex items-center justify-between w-[200px] h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-transparent text-white overflow-hidden group">
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
      </div>
    </div>
  );
}

export default Process;
