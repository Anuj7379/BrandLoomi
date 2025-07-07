import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import logo from "../assets/brandloomiLogo.png";


function PayWhatYouCanPage() {
  return (
    <div className="bg-[#00080A] text-white">
      <Header />
      <Hero />
      {/* <ImageSlider/> */}
      <div className="lg:mt-32 md:mt-24 sm:mt-10">
        <div className="leading-none w-full">
          {/* Title on the left */}
          <div className="lg:text-[80px] md:text-[50px] sm:text-[30px] font-bold italic ml-8">
            MEET OUR CHAMPS
          </div>

          {/* Line and Asterisk aligned right */}
          <div className="flex justify-end items-center mt-4 mr-8 space-x-2 lg:mr-40">
            <div className="h-px bg-white w-[150px] sm:w-[130px] md:w-[200px] lg:w-[372px] 2xl:w-[583px]"></div>
            <div className="text-2xl">
              <span className="material-symbols-outlined animate-[spin_5s_linear_infinite]">
                asterisk
              </span>
            </div>
          </div>
        </div>

        <ImageSlider />

        <div className="mt-10 mb-4 pr-8 ">
          <button className="relative flex items-center justify-between w-[200px] h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group ml-auto">
            <span className="text-base font-medium z-10">Let's Discuss</span>
            <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-cyan-500 text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF]">
              <span className="material-symbols-outlined leading-none text-[28px]">
                arrow_outward
              </span>
            </span>
          </button>
        </div>
      </div>
      <LaunchBanner headingText="So? Pay What You can "/>
      <Footer />
    </div>
  );
}

export default PayWhatYouCanPage;

const Hero = () => {
  return (
    <div className=" pt-16">
      {/* Hero */}
      <div className="absolute w-[296px] h-[231px] rounded-full bg-[#009252] blur-[150px] opacity-100 top-[259px] right-[100px] z-0" />
      <div className="absolute w-[283px] h-[244px] rounded-full bg-cyan-400 blur-[150px] opacity-100 bottom-[300px] left-[20px] z-0" />

      <div className="text-white   font-sans   mx-auto relative overflow-hidden">
        {/* Left Content with Glow at START of "NO STARTUP LEFT" */}
        <div className="relative lg:ml-20 md:ml-8 sm:ml-2">
          <div className="z-10 relative  leading-none ">
            <div className="italic sm:text-[18px] md:text-[30px] lg:text-[50px] lg:pl-5">
              NO STARTUP LEFT BEHIND
            </div>
            <div className="italic sm:text-[30px] md:text-[50px] lg:text-[80px] leading-tight font-extrabold">
              <div>INTRODUCING</div>
              <div>PAY WHAT YOU CAN</div>
            </div>
          </div>
          <div className="flex gap-4 lg:w-[600px] md:w-[450px] sma:w-[250px] lg:text-[18px] sm:[16px] mt-16">
            <div className="text-3xl">+</div>
            <div>
              Every month, we select a deserving startup to receive a
              professional landing page—regardless of their budget.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




const LaunchBanner = ({ headingText }) => (
  <section className="w-full bg-[#00080A] h-[500px] py-14">
    <div className="relative rounded-3xl p-6 sm:p-10 text-center bg-transparent h-[357px] sm:w-full md:w-[90%] lg:w-[95%] max-w-[1700px] mx-[10px] sm:mx-auto overflow-hidden">
      {/* Background Glows */}
      <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />
      <div className="absolute -top-[100px] -right-[80px] w-[400px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img className="h-[58px]" src={logo} alt="logo" />
        </div>

        {/* Heading */}
        {headingText && (
          <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-black italic mb-8 font-sans lg:w-[1000px] max-w-[1000px] mx-auto">
            {headingText}
          </h1>
        )}

        {/* Email Input Field */}

        <div className="flex justify-center px-4 sm:px-0">
          <div className="relative flex items-center justify-between w-[290px] h-[52px] sm:h-[56px] pl-5 sm:pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group">
            <input
              type="email"
              disabled
              placeholder="Fill Out This Form"
              className="bg-transparent outline-none text-white placeholder-white  text-sm sm:text-base w-full pr-16"
            />
            <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-cyan-500 text-[28px] sm:text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF] cursor-pointer">
              <span className="material-symbols-outlined leading-none text-[24px] sm:text-[28px]">
                arrow_outward
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);