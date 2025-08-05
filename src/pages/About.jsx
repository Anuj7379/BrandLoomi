import React from "react";
import Header from "../components/Header";
import "material-symbols";
import ExpertsImage from "../assets/experts.png";
import Image2 from "../assets/img2.png";
import TimelineSnap from "../components/TimelineSnap";
import Footer from "../components/Footer";
import LaunchBanner from "../components/LaunchBanner";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative min-h-screen text-white  overflow-hidden bg-[#00080A] font-creato">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />

        {/* Hero Section */}
        <div className="relative z-10 px-14  pt-24 pb-10 md:pb-32 mx-auto mt-14 leading-none max-w-screen-2xl">
          {/* Heading */}
          <h1 className="text-[30px]  md:text-[60px] lg:text-[80px] font-black italic uppercase leading-tight">
            <div className="flex flex-row  md:flex-col gap-2 md:gap-0">
              <div>YOUR</div>
              <div>DIGITAL</div>
            </div>
            <div>INFORMATION</div>
          </h1>

          {/* Button + Line */}
          {/* Visible only on ≥500px */}
          <div className="hidden xs:flex flex-col xs:flex-row xs:items-center xs:justify-start md:justify-end gap-4 xs:gap-6 mt-10 md:mt-[-40px]">
            <div className="flex items-center justify-end gap-3 flex-grow">
              <span className="material-symbols-outlined animate-[spin_3s_linear_infinite] text-2xl xs:text-3xl text-cyan-400">
                asterisk
              </span>
              <div className="flex-grow bg-white h-[2px] max-w-[200px] xs:max-w-[250px] md:max-w-[300px] lg:max-w-[400px]" />
            </div>

            <button className="relative flex items-center justify-between w-[180px] md:w-[200px] h-[48px] md:h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group">
              <span className="text-base font-medium z-10">Let's Discuss</span>
              <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-cyan-500 text-[28px] md:text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF]">
                <span
                  className="material-symbols-outlined leading-none"
                  onClick={() => navigate("/contact")}
                >
                  arrow_outward
                </span>
              </span>
            </button>
          </div>
          {/* for desktop */}
          <div className="flex xs:hidden flex-col gap-4  leading-none">
            <div className="flex items-center justify-start gap-3">
              <div className="flex-grow bg-white h-[2px] w-full max-w-[200px] ml-auto" />
              <span className="material-symbols-outlined animate-[spin_3s_linear_infinite] text-2xl text-cyan-400">
                asterisk
              </span>
            </div>

            <button className="relative flex items-center justify-between w-[180px] h-[48px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group">
              <span className="text-base font-medium z-10">Let's Discuss</span>
              <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-cyan-500 text-[28px] flex items-center justify-center shadow-[0_0_10px_#00FFFF]">
                <span
                  className="material-symbols-outlined leading-none"
                  onClick={() => navigate("/contact")}
                >
                  arrow_outward
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="relative w-full">
          <img src={ExpertsImage} alt="" className="w-full h-auto rounded-md" />

          <div className="absolute bottom-0 right-0 flex flex-col justify-center items-center bg-[#248BBC] w-[160px] h-[70px] md:w-[347px] md:h-[138px] rounded-md">
            <p className="italic text-s md:text-3xl text-white">
              Trusted By Experts
            </p>
            <p className="bg-white ml-20 h-px w-[70px] md:w-[167px]"></p>{" "}
          </div>
        </div>

        <WhoWeAre />

        <div className="lg:text-[80px] md:text-[50px] text-[24px] text-white italic font-black space-x-8 space-y-14 ml-10  mt-20 mb-8 leading-tight">
          Empowering Growth Through <br />
          Affordable Digital innovation
        </div>
        <div className="flex flex-col  lg:flex-row items-center justify-center gap-8 md:px-6  my-8">
          <Card
            title="OUR MISSION"
            description="We empower startups and small businesses with affordable, innovative digital branding solutions that drive growth and amplify impact."
          />
          <Card
            title="OUR VISION"
            description="We aim to be the trusted launchpad for digital innovation, where every small business in Ireland and beyond has the tools and support to succeed."
          />
          <Card
            title="OUR VALUES"
            description="We stand for affordability, innovation, partnership, community support, and transparent communication in everything we do."
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-20 py-16 gap-24">
          {/* Image Section */}
          <div className="w-[429px] h-[365px] flex-shrink-0 hidden md:block">
            <img
              src={Image2}
              alt="Our Story"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col w-full max-w-xl text-white space-y-6 font-sans px-4 sm:px-6 md:px-0">
            <p className="italic text-[25px] md:text-[50px] font-black ml-8 text-center text-[#17E48A] ">
              OUR STORY
            </p>

            <p className="text-[14px] md:text-[18px] lg:text-[20px] text-white/90 leading-relaxed font-creato font-normal">
              Brandloomi began with a simple goal: to make digital branding
              accessible for startups and small businesses often overlooked by
              traditional agencies. By offering premium services at a fraction
              of the cost, we help founders build a strong digital presence.{" "}
              <br />
              Driven by social impact, our “Pay What You Can” program supports
              budget-limited startups, while our Student Ambassador Program
              empowers international students. Today, we’re proud to be a
              trusted partner for startups across Ireland—delivering fast,
              affordable, and heartfelt digital solutions.
            </p>

            <div className="h-px bg-white w-[300px] mx-auto md:ml-52" />
          </div>
        </div>

        {/** timeline  */}
        <div className="bg-transparent  ">
          <h2 className="text-[30px] md:text-[50px] lg:text-[80px]  italic font-bold lg:ml-10 md:ml-6 ml-2">
            TIMELINE
          </h2>
          <div className="flex items-center justify-center mb-10 gap-2">
            {/* Line */}
            <div className="bg-white h-[2px] w-[200px] md:w-[500px]"></div>

            {/* Asterisk Icon */}
            <span className="material-symbols-outlined animate-[spin_3s_linear_infinite]">
              asterisk
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-y-4 relative z-10 pr-4 py-6 text-[14px] sm:text-[16px] lg:text-[25px]">
            <div className="col-span-1 md:col-start-1 md:row-start-1">
              <TimelineSnap year="2024" text="Agency founded in Dublin." />
            </div>
            <div className="col-span-1 md:col-start-2 md:row-start-2">
              <TimelineSnap year="2025" text="50 startups launched." />
            </div>
            <div className="col-span-1 md:col-start-3 md:row-start-3">
              <TimelineSnap
                year="2025"
                text="“Pay What You Can” initiative introduced."
              />
            </div>
            <div className="col-span-1 md:col-start-4 md:row-start-4">
              <TimelineSnap
                year="2025"
                text="Expanded to serve clients across Europe."
              />
            </div>
          </div>
        </div>

        <LaunchBanner headingText="Let’s Build YourSuccess Story Together." />

        {/* */}
      </div>
      <Footer />
    </>
  );
}

export default About;

// card

const Card = ({ title, description }) => {
  return (
    <div className="w-[340px] h-[280px] md:w-[418px] md:h-[300px] bg-transparent rounded-2xl border border-white/30 p-6 text-white relative overflow-hidden group hover:shadow-[0_0_40px_#00ffff33] transition-shadow duration-300 box-border font-creato">
      {/* Glow ellipse */}
      <div
        className="absolute top-1/2 left-1/2 w-[250px] h-[200px] md:w-[337px] md:h-[295px] opacity-40 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          background: "#00829B",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Title & Description */}
        <div className="px-4 py-4">
          <h3 className="text-[25px] md:text-2xl font-semibold italic mb-3">
            {title}
          </h3>
          <p className="text-gray-400 text-[16px] md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const WhoWeAre = () => {
  const navigate = useNavigate();
  return (
    <div className="md:flex sm:flex xl:flex-row justify-between font-creato  ">
      <div className="flex flex-wrap justify-between items-start ml-4 md:px-10 py-10 gap-10">
        {/* LEFT SIDE: 60% on large screens */}
        <div className=" md:w-[60%] lg:w-[50%] flex gap-6">
          {/* Mobile only */}
          <div className="flex lg:hidden flex-col items-center justify-center gap-4 mb-2">
            <div className="w-[2px] h-[80px] bg-white " />
            <div
              className="text-white text-[13px] font-bold italic tracking-wide"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Digital Solution
            </div>
          </div>

          {/* Desktop only */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-14 md:gap-16 lg:gap-24 mb-2">
            <div className=" w-[80px] md:w-[120px] lg:w-[165px] h-[2px] bg-white rotate-90" />
            <div
              className="text-white text-[13px] md:text-[25px] font-bold italic tracking-wide"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Digital Solution
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col space-y-10">
            <div className=" mb-8 font-creato mt-12">
              <h2 className="text-[25px] md:text-[50px]  text-green-400 mb-12 font-black italic">
                WHO WE ARE
              </h2>

              <div className="font-normal leading-none">
                <p className="text-white/80 leading-relaxed text-[14px]  md:text-[20px] w-[330px]  md:w-[580px] lg:w-[695px] mt-4 font-normal">
                  At Brandloomi, we believe that digital success should be
                  accessible to every entrepreneur and small business, not just
                  those with big budgets. Founded in Dublin, our agency was born
                  from the desire to break down barriers and empower startups
                  with affordable, high-quality digital branding and marketing
                  solutions.
                </p>
                <p className="text-white/80 leading-relaxed text-[14px]  md:text-[20px] w-[330px]  md:w-[580px] lg:w-[695px] mt-4 font-normal">
                  Our unique approach allows us to deliver stunning websites,
                  mobile apps, and marketing campaigns at prices startups can
                  afford, without compromising on quality or speed.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="flex items-center gap-4  md:ml-[-60px] lg:ml-[-80px]">
              <p className="font-bold text-[13px] md:text-[24px] italic text-white whitespace-nowrap">
                Startup Consultancy
              </p>
              <span className="h-px w-[80px] md:w-[124px] bg-white" />
              <button className="relative md:flex md:items-center md:justify-between w-[200px] h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group hidden md:block">
                <span className="text-base font-medium z-10">Get Started</span>
                <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-cyan-500 text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF]">
                  <span
                    className="material-symbols-outlined leading-none text-[28px]"
                    onClick={() => navigate("/contact")}
                  >
                    arrow_outward
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:pr-[10%] hidden xs:flex flex-col xs:flex-row xs:items-center   mt-10">
        <div className="bg-white h-[2px] lg:w-[200px] md:w-[100px] sm:[70px]" />

        <span className="material-symbols-outlined animate-[spin_3s_linear_infinite]">
          asterisk
        </span>
      </div>
    </div>
  );
};
