import React from "react";
import greenTick from "../assets/greenTick.png";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-6  md:gap-20  px-4 md:px-10 py-8 bg-black text-white font-creato">
      <div className="flex flex-col md:w-1/2">
        <div className="flex flex-col  mb-4">
          <p className="text-[25px] md:text-[50px] text-green-500 font-black italic">
            Who Are We ?
          </p>
          <span className="h-px w-80 ml-24  bg-white/80 font-normal "></span>
        </div>
        <p className="text-[16px] md:text-[20px] mt-4 text-white/80">
          At Brandloomi, we believe that digital success should be accessible to
          every entrepreneur and small business, not just those with big
          budgets. Founded in Dublin, our agency was born from the desire to
          break down barriers and empower startups with affordable, high-quality
          digital branding and marketing solutions. Our unique approach allows
          us to deliver stunning websites, mobile apps, and marketing campaigns
          at prices startups can afford, without compromising on quality or
          speed. 
        </p>
      </div>
      <div>
        {[
          "Affordable, transparent pricing",
          "Fast turnaround times",
          "Ongoing support",
          "AI enhanced development & content",
        ].map((text, idx) => (
          <div key={idx} className="flex items-center gap-4 mt-4 relative">
            {/* Green Check Icon */}
            <img
              src={greenTick}
              alt="check"
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            />

            {/* Text */}
            <p className="text-white/80 text-[15px] md:text-[18px]">{text}</p>

    
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
