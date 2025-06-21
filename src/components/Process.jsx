import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const ProcessStep = ({ number, title, description, className }) => (
  <div className={`max-w-xs ${className}`}>
    <h3 className="text-white italic font-semibold text-base mb-1">
      <span className="text-cyan-400">{number}.</span> {title}
    </h3>
    <p className="text-white/70 text-xs leading-relaxed">{description}</p>
  </div>
);

function Process() {
  return (
    <div className="relative bg-[#00080A] text-white min-h-screen px-6 lg:px-20 py-20 font-playfair overflow-hidden">
      
      
      <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-[#0f3f3e]/40 to-transparent rounded-full blur-3xl opacity-70 -top-40 -left-40 z-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-gradient-radial from-[#0f3f3e]/30 to-transparent rounded-full blur-2xl opacity-60 bottom-0 right-0 z-0"></div>

      <div className="relative  z-10">
        
        <div className="flex gap-8 font-bold text-3xl items-center mb-6">
          <div>
            <p className="text-md italic text-white">Process</p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-44 h-px bg-white"></div>
            <span className="text-cyan-400 text-xl">✶</span>
          </div>
        </div>
        <h2 className="text-5xl mb-10 font-black italic tracking-wide">STREAMLINED</h2>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-y-16 relative z-10">
          <ProcessStep number="01" title="Interactive Infographic" description="Visual Timeline or flowchart of the process below" className="col-start-1 col-span-3 row-start-1" />
          <ProcessStep number="02" title="Discovery & Planning" description="We start by understanding your vision, goals, and challenges. Together, we define the project scope and set clear expectations." className="col-start-4 col-span-4 row-start-2" />
          <ProcessStep number="03" title="Brainstorming & Design" description="Our creative team crafts intuitive, beautiful designs that reflect your brand and delight your users." className="col-start-7 col-span-3 row-start-3" />
          <ProcessStep number="04" title="Development" description="Our developers bring your project to life using agile methodologies, ensuring flexibility and high quality." className="col-start-10 col-span-4 row-start-4" />
          <ProcessStep number="05" title="Testing" description="Every project undergoes rigorous testing—functionality, usability, security—so your launch is seamless." className="col-start-7 col-span-3 row-start-5" />
          <ProcessStep number="06" title="Post-Launch Support" description="We’re here for updates, improvements, and troubleshooting long after your project goes live." className="col-start-4 col-span-4 row-start-6" />
        </div>

        {/* process -7 */}
        <div className="hidden lg:flex mt-20 relative z-10 items-start justify-between gap-6">
          <ProcessStep
            number="07"
            title="Marketing"
            description="Our digital marketing experts help you reach your audience, generate leads, and grow your business."
            className="max-w-md"
          />
          <div className="flex items-center space-x-6 mt-8 lg:mt-0">
            <span className="text-cyan-400 text-xl">✶</span>
            <div className="flex-1 h-px bg-white/30 w-24 lg:w-40"></div>
            <button className="flex items-center bg-red-500  hover:bg-red-600 text-black px-5 py-2 rounded-full font-medium  transition">
              Get Started <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-10 mt-10">
          <ProcessStep number="01" title="Interactive Infographic" description="Visual Timeline or flowchart of the process below" />
          <ProcessStep number="02" title="Discovery & Planning" description="We start by understanding your vision, goals, and challenges. Together, we define the project scope and set clear expectations." />
          <ProcessStep number="03" title="Brainstorming & Design" description="Our creative team crafts intuitive, beautiful designs that reflect your brand and delight your users." />
          <ProcessStep number="04" title="Development" description="Our developers bring your project to life using agile methodologies, ensuring flexibility and high quality." />
          <ProcessStep number="05" title="Testing" description="Every project undergoes rigorous testing—functionality, usability, security—so your launch is seamless." />
          <ProcessStep number="06" title="Post-Launch Support" description="We’re here for updates, improvements, and troubleshooting long after your project goes live." />

          {/* process 07 , Button - MOBILE  */}
          <div className="flex flex-col gap-6">
            <ProcessStep
              number="07"
              title="Marketing"
              description="Our digital marketing experts help you reach your audience, generate leads, and grow your business."
              className="w-72"
            />
            <div className="flex items-center space-x-3">
              <span className="text-cyan-400 text-xl">✶</span>
              <div className="flex-1 h-px  bg-white/30"></div>
              <button className="flex items-center bg-red-400 text-black px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                Get Started <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Process;
