import React from "react";
import Header from "../components/Header";
// import ImageSlider from "../components/ImageSlider";



function PayWhatYouCanPage() {
  return (
    <div className="bg-[#00080A]">
      <Header />
      <Hero />
      {/* <ImageSlider/> */}
    </div>
  );
}

export default PayWhatYouCanPage;

const Hero = () => {
  return (
    <div className="lg:ml-24 md:mr-14 sm:mr-6 pt-16">
      {/* Hero */}
      <div className="absolute w-[296px] h-[231px] rounded-full bg-[#009252] blur-[150px] opacity-100 top-[259px] right-[100px] z-0" />
        <div className="absolute w-[283px] h-[244px] rounded-full bg-cyan-400 blur-[150px] opacity-100 bottom-[300px] left-[20px] z-0" />

      <div className="text-white   font-sans  lg:mx-24 mx-auto relative overflow-hidden">
        {/* Left Content with Glow at START of "NO STARTUP LEFT" */}
        <div className="relative">

          <div className="z-10 relative font-extrabold leading-tight">
            <div className="italic text-[50px]">NO STARTUP LEFT BEHIND</div>
            <div className=" italic text-[80px]">INTRODUCING</div>
            <div className="italic text-[80px]">PAY WHAT YOU CAN</div>
            
          </div>
          <div className="flex gap-4 lg:w-[600px] md:w-[450px] sma:w-[250px] lg:text-[18px] sm:[16px] mt-16">
              <div className="text-3xl">+</div>
              <div>Every month, we select a deserving startup to receive a professional landing page—regardless of their budget.</div>
            </div>
        </div>


      </div>
    </div>
  );
};

