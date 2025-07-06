import React from "react";
import Header from "../components/Header";
import LaunchBanner from "../components/LaunchBanner";
import Footer from "../components/Footer";

function HowWeWork() {
  return (
    <div className="bg-[#00080A] text-white w-full">
      <div className="absolute w-[200px] h-[200px] rounded-full bg-cyan-400 blur-[150px] opacity-100 bottom-[400px] left-[20px] z-0" />
      <Header />
      <div className="sm:text-[30px] md:text-[40px] lg:text-[50px] italic ml-20 leading-tight mt-20">
        <div>How We Work , Process :</div>
        <div className="font-extrabold text-green-400">
          Transparent, Collaborative, Proven
        </div>
        <div className="flex items-center justify-center space-x-2 text-sm mt-4">
<div className="h-px bg-white w-[150px] sm:w-[200px] md:w-[300px] lg:w-[483px] 2xl:w-[583px] "></div>
          <div className="text-2xl">
            <span className="material-symbols-outlined animate-[spin_5s_linear_infinite]">
              asterisk
            </span>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <LaunchBanner headingText="Curious about how we can help you?"/>
      <Footer/>
    </div>
  );
}

export default HowWeWork;

const WhyChooseUs = () => {
  const features = [
    {
      title: "Interactive Infographic",
      description: "Visual: Timeline or flowchart of the process below",
    },
    {
      title: "Discovery & Planning",
      description:
        "Visual: Timeline\nWe start by understanding your vision, goals, and challenges.",
    },
    {
      title: "Brainstorming & Design",
      description:
        "Our creative team crafts intuitive, beautiful designs that reflect your brand and delight your users.",
    },
    {
      title: "Development",
      description:
        "Our developers bring your project to life using agile methodologies, ensuring flexibility and high quality.",
    },
    {
      title: "Testing",
      description:
        "Every project undergoes rigorous testing—functionality, usability, security—so your launch is seamless.",
    },
    {
      title: "Post-Launch Support",
      description:
        "We're here for updates, improvements, and troubleshooting long after your project goes live.",
    },
    {
      title: "Marketing",
      description:
        "Our digital marketing experts help you reach your audience, generate leads, and grow your business.",
    },
  ];

  return (
    <section className="bg-transparent text-white py-16 px-4 md:px-12 relative overflow-visible mt-20">
      <div className="flex flex-wrap justify-center gap-[60px] max-w-screen-xl mx-auto">
        {features.map((item, index) => {
          const cardNumber = (index + 1).toString().padStart(2, "0");

          return (
            <div
              key={index}
              className="relative w-[332px] h-[176px] text-center"
            >
              {/* Floating Number Circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-green-400 w-12 h-12 flex items-center justify-center rounded-full">
                  <span className="text-black font-bold text-[18px] italic font-sans">
                    {cardNumber}
                  </span>
                </div>
              </div>

              {/* Glowing Background Circle */}
              <div
                className="absolute top-1/2 left-1/2 w-[100px] h-[100px] opacity-100 blur-[80px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ background: "#00829B" }}
              />

              {/* Card Content */}
              <div className="bg-transparent rounded-[40px] pt-10 pb-6 px-6 w-full h-full border border-white/10 shadow-md relative z-10">
                <h3 className="text-lg font-semibold mb-2 mt-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
