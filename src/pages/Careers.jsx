// ✅ Full Responsive Code for Careers Page

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/brandloomiLogo.png";

function Careers() {
  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden bg-[#00080A]">
      <Header title="CAREERS" />

      {/* Input and Discover Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:ml-24 lg:mt-20 px-4 sm:px-0">
        <input
          name="name"
          type="text"
          placeholder="Seek and you shall find"
          className="w-full sm:w-[614px] h-[59px] bg-transparent border border-white rounded-lg px-6 text-white placeholder-white"
        />
        <button
          type="submit"
          className="bg-white text-black font-semibold rounded-xl h-16 w-full sm:w-32 hover:bg-gray-200 flex items-center justify-center gap-2"
        >
          <span>Discover</span>
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </div>

      {/* Job Cards */}
      <div className="flex flex-col lg:flex-row mt-14 items-center justify-center gap-10 mb-10 px-4">
        <Card title="Web Developer" description={descriptionText} />
        <Card title="Web Developer" description={descriptionText} />
        <Card title="Web Developer" description={descriptionText} />
      </div>

      {/* Care & Form Section */}
      <div className="lg:mx-14">
        <div className="flex items-center font-sans font-bold italic gap-4 px-4">
          <div className="text-[25px] whitespace-nowrap">ONE STEP AWAY</div>
          <div className="h-px flex-1 bg-white/90"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-12 px-4 sm:px-10">
          {/* Care Section */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-10">
            <div className="text-xl italic font-bold mb-6">WHAT WE CARE ABOUT</div>
            <ul className="space-y-6 text-white/90 text-[16px] list-disc pl-5">
              {Array(5).fill(
                <li>
                  <span className="font-bold">Kindness Over Everything:</span> We're all about good vibes, mutual respect, and lifting each other up.
                </li>
              )}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-white/60" />

          {/* Form Section */}
          <div className="w-full lg:w-1/2 pl-0 lg:pl-10">
            <form className="space-y-4">
              {["Enter Your Full Name", "Email Address", "Mobile Number", "linkedInProfile link", "Resume URL", "Portfolio URL", "Cover letter URL"].map((placeholder, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={placeholder}
                  className="w-full px-4 py-3 bg-transparent border border-white/50 rounded-xl text-white placeholder-white focus:outline-none"
                />
              ))}

              {[
                { label: "Skills Experience", options: ["Fresher", "1-2 years", "2-5 years", "5+ years"] },
                { label: "Referral Source", options: ["LinkedIn", "Employee Referral", "Website", "Social Media", "Other"] },
                { label: "Eligible to Work in Ireland", options: ["Yes", "No", "Require Visa Sponsorship"] },
              ].map((dropdown, idx) => (
                <select key={idx} className="w-full px-4 py-3 bg-black text-white border border-white/50 rounded-xl focus:outline-none">
                  <option disabled selected className="bg-black text-white">{dropdown.label}</option>
                  {dropdown.options.map((opt, i) => (
                    <option key={i} className="bg-black text-white">{opt}</option>
                  ))}
                </select>
              ))}

              {/* Checkboxes */}
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <p className="text-sm text-white/70">
                  I consent to the processing of my personal data for recruitment purposes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <p className="text-sm text-white/70">
                  *I have read and agree to the <a href="#" className="underline text-white">Privacy Policy</a>.
                </p>
              </div>

              <button
                type="submit"
                className="bg-white text-black font-semibold rounded-xl h-12 w-full sm:w-40 hover:bg-gray-200 flex items-center justify-center gap-2 mt-4"
              >
                <span>APPLY NOW</span>
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <LaunchBanner headingText="Work alongside industry leaders and innovators." />
      <Footer />
    </div>
  );
}

export default Careers;

const descriptionText =
  "The web developer is responsible for planning and developing software solutions and web applications, supporting and maintaining a company’s websites and digital products. The day-to-day work of the web developer highly depends on constantly evolving internet innovations.";

const Card = ({ title, description }) => (
  <div className="w-full max-w-[412px] h-auto bg-transparent rounded-2xl border border-white/10 p-6 text-white relative overflow-hidden group hover:shadow-[0_0_40px_#00ffff33] transition-shadow duration-300 box-border">
    <div
      className="absolute top-1/2 left-1/2 w-[337px] h-[295px] opacity-40 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"
      style={{ background: "#00829B" }}
    />
    <div className="italic text-2xl text-white/90 font-extrabold">PRODUCT</div>
    <div className="relative z-10 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-3xl font-bold mt-6 mb-4">{title}</h3>
        <p className="text-[14px] font-normal font-sans leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center justify-around my-6 text-[18px] italic font-extrabold">
        <h4>FULL TIME</h4>
        <div className="w-[1px] h-10 bg-white/60"></div>
        <h4>IRELAND</h4>
      </div>
    </div>
  </div>
);

const LaunchBanner = ({ headingText }) => (
  <section className="bg-[#00080A] flex justify-center h-auto sm:h-[600px] px-4 py-12">
    <div className="relative rounded-3xl p-8 sm:p-12 text-center bg-transparent w-full max-w-[1300px] overflow-hidden">
      {/* Glows */}
      <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />
      <div className="absolute -top-[100px] -right-[80px] w-[300px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />

      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <img className="h-[48px]" src={logo} alt="logo" />
        </div>

        {headingText && (
          <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black italic mb-8 font-sans max-w-[910px] mx-auto leading-tight">
            {headingText}
          </h1>
        )}

        {/* Input */}
        <div className="flex justify-center px-4 sm:px-0">
          <div className="relative flex items-center justify-between w-full sm:w-[280px] h-[52px] sm:h-[56px] pl-5 sm:pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group">
            <input
              type="email"
              placeholder="Fill out this form"
              className="bg-transparent outline-none text-white placeholder-white text-sm sm:text-base w-full pr-16"
            />
            <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-cyan-500 text-[28px] sm:text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF] cursor-pointer">
              <span className="material-symbols-outlined leading-none text-[24px] sm:text-[28px]">arrow_outward</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
