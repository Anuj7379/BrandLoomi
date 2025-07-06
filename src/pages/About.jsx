import React from "react";
import Header from "../components/Header";
import { GoNorthStar } from "react-icons/go";
import "material-symbols";
import ExpertsImage from "../assets/experts.png";
import Image2 from "../assets/img2.png";
import TimelineSnap from "../components/TimelineSnap";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa";
import CEOImage from "../assets/CEOImage.png";
import logo from "../assets/brandloomiLogo.png";
import LaunchBanner from "../components/LaunchBanner";

function About() {
  return (
    <>
      <div className="relative min-h-screen text-white  overflow-hidden bg-[#00080A]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />

        {/* Hero Section */}
        <div className="relative z-10 px-4 md:px-10 pt-24 pb-32 lg:px-14 mx-auto">
          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-black italic uppercase leading-tight">
            <div>YOUR</div>
            <div>DIGITAL</div>
            <div>INFORMATION</div>
          </h1>

          {/* Button + Line */}
          <div className="flex items-center justify-end mt-[-65px] gap-3">
            <span className="material-symbols-outlined animate-[spin_3s_linear_infinite]">
              asterisk
            </span>

            <div className="bg-white h-[2px] lg:w-[360px] md:w-[250px] sm:[150px]" />

            <button className="relative flex items-center justify-between w-[200px] h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group">
              {/* Button Text */}
              <span className="text-base font-medium z-10">Let's Discuss</span>

              {/* Glowing Circle with arrow_outward icon */}
              <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-cyan-500 text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF]">
                <span className="material-symbols-outlined leading-none text-[28px]">
                  arrow_outward
                </span>
              </span>
            </button>
          </div>
        </div>
        <div>
          <div className="absolute flex flex-col justify-center items-center bg-[#248BBC] w-[247px] h-[138px] rounded-md ">
            <p className=" italic text-3xl">20+ Experts</p>
            <p className="bg-white ml-20 h-px w-[167px]"></p>
          </div>
          <img src={ExpertsImage} alt="" className="w-full" />
        </div>

        <WhoWeAre />

        <div className="text-[80px] text-white italic space-x-8 space-y-14 ml-10 font-bold mt-20 mb-8">
          Empowering Growth <br />
          Through Affordable <br />
          Digital innovation
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
          <div className="w-[429px] h-[365px] flex-shrink-0">
            <img
              src={Image2}
              alt="Our Story"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col w-full max-w-xl text-white space-y-6 font-sans px-4 sm:px-6 md:px-0">
            <p className="italic text-2xl sm:text-3xl text-center text-[#17E48A] font-semibold">
              OUR STORY
            </p>

            <p className="text-sm sm:text-base md:text-[20px] text-white leading-relaxed">
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

        <section className="w-full bg-transparent text-white py-16 px-4 md:px-20 font-['General_Sans',sans-serif]">
          {/* Heading */}
          <h2 className="text-center text-[32px] sm:text-[40px] md:text-[59px] font-bold text-green-400 italic mb-16 md:mb-28 leading-tight">
            MEET OUR TEAM
          </h2>

          {/* Team Cards */}
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-12">
            {/* Member 1 */}
            <div className="flex flex-col items-center max-w-[360px] w-full">
              <img
                src={CEOImage}
                alt="Team Member 1"
                className="w-full h-[447px] object-cover rounded-xl"
              />
              <div className="w-full px-4 mt-4 text-center md:text-left">
                <h3 className="font-bold text-[26px] sm:text-[30px] md:text-[33px] italic">
                  ANUJ AGGARWAL
                </h3>
                <p className="text-[22px] sm:text-[25px] font-bold flex justify-center md:justify-start gap-1 flex-wrap">
                  CEO
                  <span className="text-blue-400 text-[20px] sm:text-[25px] px-2">
                    •
                  </span>
                  <span className="font-normal text-[20px] sm:text-[25px]">
                    Visionary leader <br /> and startup mentor.
                  </span>
                </p>
              </div>
            </div>

            {/* Member 2 - Text First on mobile */}
            <div className="flex flex-col items-center max-w-[360px] w-full">
              <div className="w-full px-4 mb-4 text-center md:text-left">
                <h3 className="font-bold text-[26px] sm:text-[30px] md:text-[33px] italic">
                  ANUJ AGGARWAL
                </h3>
                <p className="text-[22px] sm:text-[25px] font-bold flex justify-center md:justify-start gap-1 flex-wrap">
                  CEO
                  <span className="text-blue-400 text-[20px] sm:text-[25px] px-2">
                    •
                  </span>
                  <span className="font-normal text-[20px] sm:text-[25px]">
                    Visionary leader <br /> and startup mentor.
                  </span>
                </p>
              </div>
              <img
                src={CEOImage}
                alt="Team Member 2"
                className="w-full h-[447px] object-cover rounded-xl"
              />
            </div>

            {/* Member 3 */}
            <div className="flex flex-col items-center max-w-[360px] w-full">
              <img
                src={CEOImage}
                alt="Team Member 3"
                className="w-full h-[447px] object-cover rounded-xl"
              />
              <div className="w-full px-4 mt-4 text-center md:text-left">
                <h3 className="font-bold text-[26px] sm:text-[30px] md:text-[33px] italic">
                  ANUJ AGGARWAL
                </h3>
                <p className="text-[22px] sm:text-[25px] font-bold flex justify-center md:justify-start gap-1 flex-wrap">
                  CEO
                  <span className="text-blue-400 text-[20px] sm:text-[25px] px-2">
                    •
                  </span>
                  <span className="font-normal text-[20px] sm:text-[25px]">
                    Visionary leader <br /> and startup mentor.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/** timeline  */}
        <div className="bg-transparent " style={{ padding: "40px 50px" }}>
          <h2 className="text-[80px]  italic font-bold">TIMELINE</h2>
          <div className="flex items-center justify-center mb-10">
            {/* Line */}
            <div className="bg-white h-[2px] w-[300px] sm:w-[400px] md:w-[500px]"></div>

            {/* Asterisk Icon */}
            <span className="material-symbols-outlined text-white text-3xl ml-4">
              asterisk
            </span>
          </div>

          <div className="relative w-[169px] h-[190px] rounded-full bg-[#27DCFF] blur-[200px] opacity-100 top-[270px] left-[-28px] z-0 -mt-40" />

          <div className="grid grid-cols-5 gap-y-4 relative z-10 m-10">
            <div className="col-start-1 row-start-1">
              <TimelineSnap year="2022" text="Agency founded in Dublin." />
            </div>
            <div className="col-start-2 row-start-2">
              <TimelineSnap year="2023" text="50 startups launched." />
            </div>
            <div className="col-start-3 row-start-3">
              <TimelineSnap
                year="2024"
                text="Pay What You Can” initiative introduced."
              />
            </div>
            <div className="col-start-4 row-start-4">
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
    <div className="w-[418px] h-[300px] bg-transparent rounded-2xl border border-white/10 p-6 text-white relative overflow-hidden group hover:shadow-[0_0_40px_#00ffff33] transition-shadow duration-300 box-border">
      {/* Glow ellipse */}
      <div
        className="absolute top-1/2 left-1/2 w-[337px] h-[295px] opacity-40 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          background: "#00829B",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Title & Description */}
        <div className="px-4 py-4">
          <h3 className="text-2xl font-semibold italic mb-3">{title}</h3>
          <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const WhoWeAre = () => {
  return (
    <div className="md:flex lg:flex items-center justify-between ">
      <div className="flex flex-wrap justify-between items-start px-4 md:px-10 py-10 gap-10">
        {/* LEFT SIDE: 60% on large screens */}
        <div className=" md:w-[60%] lg:w-[50%] flex gap-6">
          {/* Rotated Text */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-20 mb-2">
            <div className="w-[125px] h-[2px] bg-white rotate-90" />
            <div
              className="text-white text-[25px] font-bold italic tracking-wide"
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
            <div className="">
              <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-green-400 mb-16">
                WHO WE ARE
              </h2>

              <div>
                <p className="text-white leading-relaxed text-[20px] md:text-base max-w-[595px] mt-4">
                  At Brandloomi, we believe that digital success should be
                  accessible to every entrepreneur and small business, not just
                  those with big budgets. Founded in Dublin, our agency was born
                  from the desire to break down barriers and empower startups
                  with affordable, high-quality digital branding and marketing
                  solutions.
                </p>
                <p className="text-white leading-relaxed text-[20px] md:text-base max-w-[595px] mt-2">
                  Our unique approach allows us to deliver stunning websites,
                  mobile apps, and marketing campaigns at prices startups can
                  afford, without compromising on quality or speed.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="flex items-center gap-4 mt-4">
              <p className="font-bold text-[24px] italic text-white whitespace-nowrap">
                Startup Consultancy
              </p>
              <span className="h-px w-[124px] bg-white" />
              <button className="relative flex items-center justify-between w-[200px] h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group">
                <span className="text-base font-medium z-10">Get Started</span>
                <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-cyan-500 text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF]">
                  <span className="material-symbols-outlined leading-none text-[28px]">
                    arrow_outward
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pr-[30%]">
        <div className="text-[80px] font-bold text-white">50+</div>
        <div className="text-white text-3xl">Happy Clients</div>
      </div>
    </div>
  );
};
