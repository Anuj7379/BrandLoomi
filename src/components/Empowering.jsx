import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Empowering() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-black px-6 lg:px-20 py-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Heading */}
        <div className="ml-4 sm:ml-6">
          <div className="lg:text-[55px] sm:text-5xl font-creato font-black italic leading-tight">
            <p className="mb-3 text-black">EMPOWERING</p>
            <p className="mb-3 text-black/85">THE NEXT</p>
            <p className="mb-3 text-black/75">GENERATION OF</p>
            <p className="text-black/60">ENTREPRENEURS</p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center p-6 rounded-xl font-creato">
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-bold leading-snug mb-4 text-black">
            Making Digital Success Accessible
            <br />
            for Every Entrepreneur
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6 font-regular">
            At Brandloomi, we believe that digital success should be accessible
            to every entrepreneur and small business, not just those with big
            budgets. Founded in Dublin, our agency was born from the desire to
            break down barriers and empower startups with affordable,
            high-quality digital branding and marketing solutions.
          </p>

          <div className="flex items-center space-x-3 group cursor-pointer">
            <span className="w-[7px] h-[7px] bg-cyan-500 rounded-full"></span>
            <span
              onClick={() => navigate("/contact")}
              className=" text-black font-regular teaxt-[22px]"
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
