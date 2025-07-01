import { FaArrowRight } from "react-icons/fa";
import AnimateOnView from "./AnimateOnView";
import logo from "../assets/brandloomiLogo.png";

export default function LaunchBanner() {
  return (
    <section className="bg-[#00080A] flex justify-center  h-[600px] px-4 py-12">
      {/* Card Container */}
      <div className="relative rounded-3xl p-8 sm:p-12 text-center bg-transparent h-[427px] w-full max-w-[1300px] overflow-hidden">
        {/* Glowing Ellipses INSIDE the card */}
        <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />
        <div className="absolute -top-[100px] -right-[80px] w-[300px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />

        {/* Content Layer */}
        <div className="relative z-10">
          {/* Subheading */}
          <div className="flex justify-center mb-6">
            <img className="h-[48px]" src={logo} alt="logo" />
          </div>

          {/* Main Heading */}
          <AnimateOnView animation="zoomIn" delay={0.8}>
            <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 font-[Poppins] tracking-tight">
              Ready to{" "}
              <span className="text-blue-400 font-black italic animate-pulse">
                Launch
              </span>{" "}
              Your
              <br />
              Business Online?
            </h1>
          </AnimateOnView>

          {/* Email Input Field */}
          <div className="flex justify-center">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md h-[57px] w-full max-w-[472px] ">
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
  );
}
