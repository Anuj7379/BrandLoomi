import React from "react";
import Header from "../components/Header";
import LaunchBanner from "../components/LaunchBanner";
import Footer from "../components/Footer";
import DoubleDaimond from "../assets/howWeWorkDoubleDaimod.svg";
import Discover from "../assets/Discover.png";
import Develop from "../assets/Develop.png";
import Evolve from "../assets/Evolve.png";
import Define from "../assets/Define.png";
import Deliver from "../assets/Deliver.png";
import greenTick from "../assets/greenTick.png";
import vector4 from "../assets/Vector4.svg";
import vector5 from '../assets/vector5.png'

function HowWeWork() {
  return (
    <div className="relative bg-[#00080A] text-white w-full  overflow-hidden">
      {/* Glowing Background Blur */}
      <div className="absolute w-[200px] h-[200px] rounded-full bg-cyan-400 blur-[150px] opacity-100 bottom-[400px] left-[20px] z-0" />

      {/* Main Page Content Layered Above Glow */}
      <div className="relative z-10">
        <Header />

        {/* Title Section */}
        <div className="sm:text-[30px] md:text-[40px] lg:text-[50px] italic ml-20 leading-tight md:mt-28 xl:mt-36 pt-10">
          <div>How We Work , Process :</div>
          <div className="font-extrabold text-green-400">
            Transparent, Collaborative, Proven
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm mt-4">
            <div className="h-px bg-white w-[150px] sm:w-[200px] md:w-[300px] lg:w-[483px] 2xl:w-[583px]" />
            <div className="text-2xl">
              <span className="material-symbols-outlined animate-[spin_5s_linear_infinite]">
                asterisk
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-24">
          <img src={DoubleDaimond} alt="DoubleDaimondImage" />
        </div>

        {/* Process Cards */}
        <WhyChooseUs />

        {/* CTA Section */}
        <LaunchBanner headingText="Curious about how we can help you?" />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default HowWeWork;

const WhyChooseUs = () => {
  const features = [
    {
      cardLogo: Discover,
      title: "Discover",
      cardHeading: "We ask, listen, and learn.",
      description:
        "Before jumping into development, we start by understanding your world. We want to know your goals, your customers, and what’s standing in your way. This helps us see the big picture and spot hidden opportunities.",
      cardRow1: "Get aligned on your vision and challenges",
      cardRow2: "Talk to your team, your users, and maybe even your customers",
      cardRow3: "Study what others in your space are doing ",
      cardRow4: "Gather insights about your market",
      cardFooterLine:
        "A clear understanding of the problem we’re solving together.",
    },
    {
    cardLogo: Define,
    title: "Define",
    cardHeading: "We make sense of what we’ve learned.",
    description:
      "Now that we’ve collected all the pieces, we sort through them to find the real problems to solve. We focus on what matters most — to your users and your business.",
    cardRow1: "Identify key pain points",
    cardRow2: "Focus on the people we’re designing for",
    cardRow3: "Map out the path forward",
    cardRow4: "Set clear goals and priorities",
    cardFooterLine: "A shared game plan that guides everything that follows.",
  },
  {
    cardLogo: Develop,
    title: "Develop",
    cardHeading: "We design, build, and test ideas.",
    description:
      "This is where the magic starts to happen. We explore different ways to solve the problem, create early versions, and get real feedback — fast.",
    cardRow1: "Brainstorm ideas together",
    cardRow2: "Create simple mockups and prototypes",
    cardRow3: "Design interfaces that reflect your brand",
    cardRow4: "Build and test working versions with your input",
    cardFooterLine:
      "A thoughtful, user-friendly product that’s built around real needs.",
  },
  {
    cardLogo: Deliver,
    title: "Deliver",
    cardHeading: "We launch with care and confidence.",
    description:
      "Once everything’s working just right, we help you get ready to launch. We make sure it looks great, works smoothly, and is ready for the real world.",
    cardRow1: "Run tests to make sure everything works perfectly",
    cardRow2: "Tweak the details until it feels just right",
    cardRow3: "Launch or hand off with zero confusion",
    cardRow4: "Provide support materials and documentation",
    cardFooterLine:
      "A polished, high-quality product ready to go live.",
  },
  {
    cardLogo: Evolve,
    title: "Evolve",
    cardHeading: "We don’t stop at launch.",
    description:
      "The best products grow over time. We stay with you after launch to track how things are going, make improvements, and help you keep getting better.",
    cardRow1: "Monitor how people are using your product",
    cardRow2: "Keep refining and improving",
    cardRow3: "Make small changes that add up to big results",
    cardRow4: "Offer ongoing support and updates",
    cardFooterLine:
      "A product that gets better every day — and a partner who grows with you.",
  },
    
  ];

  return (
    <section className="bg-transparent text-white  px-4 md:px-12 relative overflow-visible mt-20">
      <div className="flex flex-wrap justify-center gap-[60px] max-w-screen-xl mx-auto">
        {features.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex items-start  flex-col w-full h-full max-w-[1200px] max-h-[576px]  mx-8 border border-gray-400 rounded-3xl p-2 mt-6 "
            >
              {/* Glowing Circle Behind */}
              <div
                className="absolute top-1/2 left-1/2 max-w-[800px] w-full h-[130px] opacity-100 blur-[120px] rounded-[80px] transform -translate-x-1/2 -translate-y-1/2 z-10 font-creato"
                style={{ background: "#00829B" }}
              />
              {/* above title and logo */}
              <div className="flex items-center justify-start font-black italic gap-1 ml-3 mt-2">
                <img
                  src={item.cardLogo}
                  alt="cardlogo"
                  className="w-[83px] h-[83px]"
                />
                <p
                  className="text-[50px]"
                  style={{
                    background: `linear-gradient(to bottom, #0A6A97 35%, #34BDFE 53%, #17E48A 70%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.title}
                </p>
              </div>
              {/*  content of card */}
              <div className="flex flex-col  justify-start mx-24">
                <div className="text-[30px] font-black italic">
                  {item.cardHeading}
                </div>
                <div className="text-[20px] max-w-[1100px] font-normal flex items-center">
                  <div>{item.description}</div>
                  <img src={vector5} alt="vector5" className="w-[58px] -mt-20 -ml-16"  />
                </div>
                <div className="flex gap-16 mt-12 font-creato font-normal text-white/80 ">
                  <div className="flex flex-col gap-6 text-[20px] w-1/2">
                    <div className="flex flex-row gap-4 ">
                      <img
                        src={greenTick}
                        alt="greentick logo"
                        className="w-[40px] h-[40px]"
                      />
                      <div>{item.cardRow1}</div>
                    </div>
                    <div className="flex flex-row gap-4 ">
                      <img
                        src={greenTick}
                        alt="greentick logo"
                        className="w-[40px] h-[40px]"
                      />
                      <div>{item.cardRow2}</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-4 ">
                      <img
                        src={greenTick}
                        alt="greentick logo"
                        className="w-[40px] h-[40px]"
                      />
                      <div>{item.cardRow3}</div>
                    </div>
                    <div className="flex flex-row gap-4 ">
                      <img
                        src={greenTick}
                        alt="greentick logo"
                        className="w-[40px] h-[40px]"
                      />
                      <div>{item.cardRow4}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 mb-8">
                  <div className="font-black italic text-[30px]">
                    {" "}
                    What you get ?
                  </div>
                  <div className="flex flex-col ">
                    <div className="text-[20px]   font-normal">
                      {item.cardFooterLine}
                    </div>

                    <img
                      src={vector4}
                      alt="vector3"
                      className=" h-[29px] ml-[40px] "
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
