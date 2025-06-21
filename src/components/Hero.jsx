import React from "react";
import { GoNorthStar } from "react-icons/go";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const [text] = useTypewriter({
    words: ['LAUNCH YOUR'],
    loop: false,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="flex flex-col mt-8 justify-center">
      {/* Heading with typewriter and VISION in red */}
      <h1 className="text-3xl md:text-6xl sm:text-4xl font-black italic leading-tight">
        <span className="text-cyan-400">{text}</span>{" "}
        <span className="text-red-600">VISION</span>
        <Cursor cursorColor="#ffffff" />
        <br />
        <span className="text-white">GROW YOUR IMPACT.</span>
      </h1>

      {/* Buttons and Stats */}
      <div className="flex justify-between items-center mt-8 pt-10 w-full max-w-4xl">
        <button className="w-[180px] px-6 py-3 border rounded-full flex items-center space-x-3 bg-gradient-to-br from-cyan-500/30 to-cyan-400/10 hover:from-cyan-500/60">
          <span className="text-white font-semibold">Get Started</span>
          <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center">
            →
          </span>
        </button>

        <div className="flex flex-row items-center space-x-3">
          <div className="flex flex-row space-x-3 items-center">
            <div className="text-cyan-400 text-2xl">
              <GoNorthStar />
            </div>
            <div className="bg-white h-[2px] w-[60px]"></div>
          </div>
          <div>
            <span className="text-lg font-bold">95%</span>
            <br />
            Client Satisfaction
          </div>
        </div>
      </div>

      {/* Description and Stats */}
      <div className="flex flex-row   gap-10 mt-6">
        <div className="flex items-center mt-8">
          <span className="text-cyan-400 text-4xl mr-3">+</span>
          <div className="text-lg text-gray-400  max-w-xl">
            Affordable, high-quality web and app development, branding, and
            digital marketing for startups and small businesses in Ireland and
            beyond.
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-sm mt-10">
          <div>
            <span className="text-sm font-bold">10+</span>
            <br />
            Startups Launched
          </div>
          <div>
            <span className="text-sm font-bold">€1,000</span>
            <br />
            Average Project Cost
          </div>
          <div>
            <span className="text-sm font-bold">3 Weeks</span>
            <br />
            Average Delivery Time
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
