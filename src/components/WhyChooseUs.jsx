import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Future-Proof",
      description: "Scalable, modular, and ready for tomorrow’s growth.",
    },
    {
      title: "Secure",
      description: "Built with best-in-class security practices.",
    },
    {
      title: "Affordable",
      description: "World-class quality, startup-friendly pricing.",
    },
  ];

  return (
    <section className="bg-transparent text-white py-16 px-4 md:px-12 relative overflow-visible">
      {/* === Heading + Left Glow === */}
      <div className="relative mb-6">
        {/* Glow on left side */}
        <div className="absolute w-[200px] h-[180px] bg-[#1de982] blur-[130px] opacity-40 top-0 left-[-80px] z-0" />
        
        {/* Heading */}
        <h2 className="text-[80px] font-bold italic text-left relative z-10">
          Why Choose Us?
        </h2>

        {/* Underline line and asterisk */}
        <div className="flex items-center mt-2 mb-28 pl-48">
          <div className="h-[2px] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] bg-white" />
          <span className="material-symbols-outlined text-white text-3xl ml-3">
            asterisk
          </span>
        </div>
      </div>

      {/* === Card Section === */}
      <div className="relative flex flex-col md:flex-row gap-6 justify-center items-center max-w-7xl mx-auto z-10">
        

        {/* Cards */}
        {features.map((item, index) => (
          <div key={index} className="relative w-full max-w-[332px] h-[196px] text-center">
            {/* Floating Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-green-400 p-2 rounded-full">
                <CheckCircleOutlineIcon className="text-black text-[32px]" />
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 w-[150px] h-[150px] opacity-100 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ background: "#00829B" }}
        />

            {/* Card Content */}
            <div className="bg-[#121518] rounded-xl pt-10 pb-6 px-6 w-full h-full border border-white/10 shadow-md relative z-10">
              <h3 className="text-lg font-semibold mb-2 mt-2">{item.title}</h3>
              <p className="text-sm text-white/80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
