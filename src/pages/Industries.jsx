import React from "react";
import Header from "../components/Header";
import LaunchBanner from "../components/LaunchBanner";
import Footer from "../components/Footer";

function Industries() {
  return (
    <div className="bg-[#00080A] text-white w-full">
      <div className="absolute w-[200px] h-[200px] rounded-full bg-[#27DCFF] blur-[140px] opacity-100 top-[150px] left-[20px] z-0" />
      <Header />
      <div className="sm:text-[30px] md:text-[40px] lg:text-[50px]  ml-20 leading-tight mt-20 font-sans">
        <div className="font-extrabold text-green-400 italic">
          Digital Solution For Every Sector
        </div>
        <div className="lg:w-[814px] md:w-[550px] sm:[300px] 2xl:w-[900px] text-[30px] ">
          We specialise in transforming businesses across a range of industries,
          tailoring our approach to your unique needs.
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
      <LaunchBanner headingText="Looking for industry-specific expertise?" />
      <Footer />
    </div>
  );
}

export default Industries;

//utility function-

const WhyChooseUs = () => {
  const features = [
    {
      title: "Education",
      description:
        "From e-learning platforms to school websites, we empower educators to connect and inspire.",
    },
    {
      title: "Travel",
      description:
        "Booking engines, travel blogs, and custom apps for agencies and explorers.",
    },
    {
      title: "Healthcare",
      description:
        "Secure, user-friendly solutions for clinics, practitioners, and healthtech startups.",
    },
    {
      title: "Foodtech",
      description:
        "Online ordering, delivery platforms, and restaurant websites that drive growth.",
    },
    {
      title: "E-commerce",
      description:
        "Robust, scalable stores that convert visitors into loyal customers.",
    },
    {
      title: "Fintech",
      description:
        "Secure, compliant, and innovative platforms for modern finance.",
    },
  ];

  return (
    <section className="bg-transparent text-white py-16 px-4 md:px-12 relative overflow-visible mt-14">
      <div className="flex gap-4 items-center text-[25px] font-extrabold italic font-sans mb-12">
        <div>INDUSTRIES</div>
        <div className="bg-white/90 lg:w-[483px] md:[300px] sm:[150px] h-px "></div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center max-w-screen-2xl mx-auto">
        {features.map((item, index) => {
          return (
            <div key={index} className="relative w-[400px] h-[292px] ">
              {/* Glowing Background Circle */}
              <div
                className="absolute top-1/2 left-1/2 w-[290px] h-[150px] opacity-60 blur-[150px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ background: "#00829B" }}
              />

              {/* Card Content */}
              <div className="bg-transparent rounded-[40px] pt-10 pb-6 px-6 w-full h-full border border-white/10 shadow-md relative z-10 pl-10 ">
                <h3 className="text-[25px] text-white font-bold mb-2  uppercase italic mt-8">
                  {item.title}
                </h3>
                <p className="text-[20px] w-[290px] text-white/80 whitespace-pre-line">
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
