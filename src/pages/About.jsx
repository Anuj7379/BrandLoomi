import React from "react";
import Header from "../components/Header";
import { GoNorthStar } from "react-icons/go";
import "material-symbols";
import ExpertsImage from "../assets/experts.png";
import Image2 from "../assets/img2.png";
import TimelineSnap from "../components/TimelineSnap";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="relative min-h-screen text-white  overflow-hidden bg-[#00080A]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />

        {/* Hero Section */}
        <div className="relative z-10 px-4 md:px-10 pt-24 pb-32 max-w-7xl mx-auto">
          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-black italic uppercase">
            <div>YOUR</div>
            <div>DIGITAL</div>
            <div>INFORMATION</div>
          </h1>

          {/* Button + Line */}
          <div className="flex items-center justify-end mt-[-65px] gap-3">
            <div className="text-2xl text-white">
              <GoNorthStar />
            </div>

            <div className="bg-white h-[2px] w-[380px]" />

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

        <section className="w-full bg-cover bg-center text-white font-['General_Sans',sans-serif]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between px-6 md:px-20 py-20 relative">
            {/* Vertical Text with Line */}
            <div className="absolute  -left-20 top-1/2 -translate-y-1/2 flex  items-center space-y-2 rotate-[-90deg] gap-4">
              <div className=" text-white text-[30px] font-semibold tracking-wide">
                Digital Solution
              </div>
              <div className="w-24 h-px bg-white "></div>
            </div>

            {/* Left Main Content */}
            <div className="w-full max-w-[595px] space-y-6 md:pl-20 pt-10 ml-[80px]">
              <h2 className="text-3xl md:text-4xl font-bold text-green-400">
                WHO WE ARE
              </h2>

              <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-[595px]">
                At Brandloomi, we believe that digital success should be
                accessible to every entrepreneur and small business, not just
                those with big budgets. Founded in Dublin, our agency was born
                from the desire to break down barriers and empower startups with
                affordable, high-quality digital branding and marketing
                solutions.
              </p>
              <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-[595px]">
                Our unique approach allows us to deliver stunning websites,
                mobile apps, and marketing campaigns at prices startups can
                afford, without compromising on quality or speed.
              </p>
            </div>

            {/* Right Side Stats */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center pt-10 md:pt-0">
              {/* Asterisk + Line */}
              <div className="flex flex-row items-center space-x-4 mb-10">
                <div className="bg-white h-[2px] w-[176px]"></div>
                <span class="material-symbols-outlined">asterisk</span>{" "}
              </div>

              {/* 50+ Happy Clients (centered) */}
              <div className="flex flex-col items-center justify-center gap-2 mt-8">
                <div className="text-5xl font-bold text-white">50+</div>
                <div className="text-white text-2xl">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="flex items-center ml-[200px] gap-4 -mt-[20px] ">
            <p className="font-bold text-[30px] italic text-white whitespace-nowrap">
              Startup Consultancy
            </p>
            <span className="h-px w-[124px] bg-white"></span>
            <button className="relative flex  items-center justify-between w-[200px] h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group">
              {/* Button Text */}
              <span className="text-base font-medium z-10">Get Started</span>

              {/* Glowing Circle with arrow_outward icon */}
              <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-cyan-500 text-[32px] flex items-center justify-center  shadow-[0_0_10px_#00FFFF]">
                <span className="material-symbols-outlined leading-none text-[28px]">
                  arrow_outward
                </span>
              </span>
            </button>
          </div>
        </section>

        <div className="text-[80px] text-white italic space-x-8 space-y-14 ml-24    font-bold mt-20 mb-8">
          Empowering Growth <br />
          Through Affordable <br />
          Digital innovation
        </div>
        <div className="flex gap-8 m-6">
          <Card
            title="OUR MISSION "
            description="We empower startups and small businesses with affordable, innovative digital branding solutions that drive growth and amplify impact.
"
          />
          <Card
            title="OUR VISSION "
            description="We aim to be the trusted launchpad for digital innovation, where every small business in Ireland and beyond has the tools and support to succeed.

"
          />
          <Card
            title="OUR Values "
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
          <div className="flex flex-col max-w-xl text-white space-y-6  font-sans">
            <p className="italic text-3xl text-center text-[#17E48A] font-semibold">
              OUR STORY
            </p>
            <p className="text-sm md:text-[20px] w-[585px] text-white leading-relaxed">
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
            <div className="h-px bg-white w-[300px] ml-52"></div>
          </div>
        </div>

        <section className="w-full bg-[#00080A] text-white py-16 px-6 md:px-20 font-['General_Sans',sans-serif]">
          {/* Heading */}
          <h2 className="text-center text-[59px] md:text-4xl font-bold text-green-400 italic mb-28">
            MEET OUR TEAM
          </h2>

          {/* Team Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 flex-wrap">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="Team Member 1"
                className="w-[360px] h-[447px] object-cover rounded-xl"
              />
              <div className="w-[319px] m-4 text-left">
                <h3 className="font-bold text-[33px] italic">ANUJ AGGARWAL</h3>
                <p className="text-[30px] font-bold flex items-start gap-1">
                  CEO <span className="text-blue-400 text-[25px] p-2">•</span>{" "}
                  <span className="font-normal text-[25px]">
                    Visionary leader <br /> and startup mentor.
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center mt-4">
              <div className="w-[319px] m-4 text-left">
                <h3 className="font-bold text-[33px] italic">ANUJ AGGARWAL</h3>
                <p className="text-[30px] font-bold flex items-start gap-1">
                  CEO <span className="text-blue-400 text-2xl p-2">•</span>{" "}
                  <span className="font-normal text-[25px]">
                    Visionary leader <br /> and startup mentor.
                  </span>
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="Team Member 1"
                className="w-[360px] h-[447px] object-cover rounded-xl"
              />
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="Team Member 1"
                className="w-[360px] h-[447px] object-cover rounded-xl"
              />
              <div className="w-[319px] m-4 text-left">
                <h3 className="font-bold text-[33px] italic">ANUJ AGGARWAL</h3>
                <p className="text-[30px] font-bold flex items-start gap-1">
                  CEO <span className="text-blue-400 text-2xl p-2">•</span>{" "}
                  <span className="font-normal text-[25px]">
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

        <section className="bg-[#00080A] flex justify-center text-center h-[600px] px-4 py-12">
          {/* Card Container */}
          <div className="relative rounded-3xl p-8 sm:p-12 text-center bg-transparent h-[427px] w-full max-w-[1300px] overflow-hidden">
            {/* Glowing Ellipses */}
            <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />
            <div className="absolute -top-[100px] -right-[80px] w-[300px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />

            {/* Content */}
            <div className="relative z-10 ">
              {/* Subheading */}
              <p className="text-white font-bold font-cursive text-md mb-4 italic tracking-wider">
                Brand Loomi
              </p>

              {/* Main Heading - No animation */}
              <h1 className="text-white text-center text-3xl sm:text-4xl md:text-4xl lg:text-7xl  font-black  mb-8 font-sans italic">
                Lest's Build Your Success <br /> Story Together
              </h1>

              {/* Email Input Field */}
              <div className="flex justify-center">
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md h-[57px] w-full max-w-[472px]">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="flex-grow text-sm sm:text-base px-2 py-2 outline-none bg-transparent text-black placeholder-gray-500"
                  />
                  <button className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-all duration-200">
                    <FaArrowRight className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

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
