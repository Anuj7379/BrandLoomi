import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/brandloomiLogo.png";
import { useNavigate } from "react-router-dom";

export default function LaunchBanner({ headingText }) {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#00080A] h-[600px] py-14">
      <div className="relative rounded-3xl p-6 sm:p-10 text-center bg-transparent max-h-full sm:w-full md:w-[90%] lg:w-[95%] max-w-[1700px] mx-[10px] sm:mx-auto overflow-hidden">
        {/* Background Glows */}
        <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />
        <div className="absolute -top-[100px] -right-[80px] w-[400px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />

        {/* Content */}
        <div className="relative z-10 font-creato">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img className="h-[58px]" src={logo} alt="logo" />
          </div>

          {/* Heading */}
          {headingText && (
            <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-black italic mb-8  lg:w-[1000px] max-w-[910px] mx-auto">
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
              <button className="bg-[#00BBDC] text-white p-2 rounded-full transition-all duration-200" onClick={() => navigate("/contact")}>
                <FaArrowRight className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
