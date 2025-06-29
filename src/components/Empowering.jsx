import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

function Empowering() {
  return (
    <div className="bg-white text-black px-6 lg:px-20 py-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Heading */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-black italic leading-tight">
            <p className="mb-3">EMPOWERING</p>
            <p className="mb-3">THE NEXT</p>
            <p className="mb-3">GENERATION OF</p>
            <p className="text-gray-500">ENTREPRENEURS</p>
          </h1>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center p-6 rounded-xl">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-4 text-black">
            Making Digital Success Accessible<br />
            for Every Entrepreneur
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            At Brandloomi, we believe that digital success should be accessible to every entrepreneur and small business, not just those with big budgets. Founded in Dublin, our agency was born from the desire to break down barriers and empower startups with affordable, high-quality digital branding and marketing solutions.
          </p>

          <div className="flex items-center space-x-3 group cursor-pointer">
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            <span className="text-cyan-600 group-hover:underline font-medium">Let's Connect</span>
            <span className="bg-cyan-500 text-white rounded-full p-2 group-hover:bg-cyan-600 transition">
              <FaArrowRight />
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Empowering;
