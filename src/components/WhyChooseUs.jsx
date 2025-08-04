import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const WhyChooseUs = ({ heading, features }) => {
  return (
    <section className="bg-transparent text-white py-16 px-4 md:px-12 relative overflow-visible font-[creato]">
      {/* === Heading + Left Glow === */}
      <div className="relative mb-6">
        {/* Glow on left side */}
        <div className="absolute w-[200px] h-[180px] bg-[#1de982] blur-[130px] opacity-40 top-0 left-[-80px] z-0" />

        {/* Heading */}
        <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold italic text-left relative z-10 leading-tight">
          {heading}
        </h2>

        {/* Underline line and asterisk */}
        <div className="flex items-center mt-2 mb-20 sm:mb-28 pl-12 sm:pl-20 md:pl-48 ">
          <div className="h-[2px] w-[260px] sm:w-[300px] md:w-[400px] lg:w-[500px] bg-white" />
          <span className="material-symbols-outlined text-white text-3xl ml-3 animate-[spin_3s_linear_infinite]">
            asterisk
          </span>
        </div>
      </div>

      {/* === Card Section === */}
      <div className="relative flex flex-col md:flex-row gap-10 justify-center items-center max-w-screen-xl mx-auto z-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative w-full max-w-[332px] h-[176px] text-center"
          >
            {/* Floating Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-green-400 p-2 rounded-full">
                <CheckCircleOutlineIcon className="text-black text-[32px]" />
              </div>
            </div>

            {/* Background Glow */}
            <div
              className="absolute top-1/2 left-1/2 w-[100px] h-[100px] opacity-100 blur-[70px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ background: "#00829B" }}
            />

            {/* Card Content */}
            <div className="bg-transparent rounded-2xl text-white/90 pt-10 pb-6 px-6 w-full h-full border border-white/20 shadow-md relative z-10 font-creato">
              <h3 className="text-[18px] font-black mb-2 mt-2">{item.title}</h3>
              <p className="text-[18px]  font-normal">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
