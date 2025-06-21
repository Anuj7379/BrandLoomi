import { FaArrowRight } from "react-icons/fa";
import AnimateOnView from "./AnimateOnView";

export default function LaunchBanner() {
  return (
    <section className="bg-[#00080A] flex justify-center items-center min-h-[60vh] px-4 py-12">
        
      <div className="bg-gradient-to-r from-[#051d23] via-[#020d11] to-[#051d23] rounded-3xl p-8 sm:p-12 text-center max-w-3xl w-full shadow-lg">
        
        {/* Subheading */}
        <p className="text-white font-extrabold font-cursive text-sm mb-4 italic tracking-wider">
          Brand Loomi
        </p>

        {/* Main Heading */}
        <AnimateOnView animation="zoomIn" delay={0.8}>
  <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-8 font-[Poppins] tracking-tight">
    Ready to <span className="text-blue-400 font-black italic animate-pulse">Launch</span> Your<br />
    Business Online?
  </h1>
</AnimateOnView>

        {/* Email Input Field */}
        <div className="flex justify-center">
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md max-w-md w-full">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow text-sm sm:text-base px-2 py-2 outline-none bg-transparent text-black placeholder-gray-500"
            />
            <button className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-all duration-200">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
