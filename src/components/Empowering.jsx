import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Empowering() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-black px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10  items-center">
        {/* Left Side - Heading */}
        <div className="ml-2 sm:ml-4 md:ml-6 leading-none">
          <div className="text-[22px] sm:text-[25px] md:text-[40px] lg:text-[55px] font-creato font-black italic leading-none">
            {/* Mobile: one-line, larger: two lines */}
            <div className="block sm:hidden">
              <p className="mb-2 text-black">EMPOWERING THE NEXT</p>
            </div>

            <div className="hidden sm:block">
              <p className="mb-2 text-black">EMPOWERING</p>
              <p className="mb-2 text-black/85">THE NEXT</p>
            </div>

            <p className="mb-2 text-black/75">GENERATION OF</p>
            <p className="text-black/60">ENTREPRENEURS</p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center px-2 sm:px-4 lg:px-6 font-creato leading-none">
          <h2 className="hidden sm:block md:text-[20px] lg:text-[30px] font-bold leading-snug mb-4 text-black text-center md:text-left">
            Making Digital Success Accessible <br />
            for Every Entrepreneur
          </h2>

          <p className="text-gray-600 text-sm sm:text-[14px] lg:text-[17px]  mt-2 mb-6">
            At Brandloomi, we believe that digital success should be accessible
            to every entrepreneur and small business, not just those with big
            budgets. Founded in Dublin, our agency was born from the desire to
            break down barriers and empower startups with affordable,
            high-quality digital branding and marketing solutions.
          </p>

          <div className="flex items-center space-x-3 group cursor-pointer">
            <span className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] bg-cyan-500 rounded-full"></span>
            <span
              onClick={() => navigate("/contact")}
              className="text-black font-medium text-sm sm:text-base lg:text-[18px]"
            >
              Let's Connect
            </span>
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
