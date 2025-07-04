import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/brandloomiLogo.png";

export default function LaunchBanner({ headingText }) {
  return (
    <section className="bg-[#00080A] flex justify-center h-[600px] px-4 py-12">
      <div className="relative rounded-3xl p-8 sm:p-12 text-center bg-transparent h-[427px] w-full max-w-[1300px] overflow-hidden">
        {/* Background Glows */}
        <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />
        <div className="absolute -top-[100px] -right-[80px] w-[300px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />

        {/* Content */}
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img className="h-[48px]" src={logo} alt="logo" />
          </div>

          {/* Heading */}
          {headingText && (
            <h1 className="text-white text-center text-4xl italic sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 font-sans max-w-[910px] mx-auto">
              {headingText}
            </h1>
          )}

          {/* Email Input Field */}
          <div className="flex justify-center">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md h-[57px] w-full max-w-[472px]">
              <input
                type="email"
                placeholder="Enter your email"
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
