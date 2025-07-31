import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/brandloomiLogo.png";
import { useNavigate } from "react-router-dom";

export default function LaunchBanner({ headingText }) {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#00080A] max-h-[600px] py-14">
      <div className="relative rounded-3xl p-6 sm:p-10 text-center bg-transparent max-h-full sm:w-full md:w-[90%] lg:w-[95%] max-w-[1700px] mx-[10px] sm:mx-auto overflow-hidden leading-none">
        {/* Background Glows */}
        {/* Bottom Left Glow */}
        <div className="absolute bottom-[-40px] left-[-40px] w-[140px] h-[120px] sm:w-[240px] sm:h-[270px] md:w-[320px] md:h-[250px] bg-cyan-400 opacity-40 blur-[40px] sm:blur-[80px] md:blur-[120px] z-0" />

        {/* Top Right Glow */}
        <div className="absolute -top-[60px] -right-[60px] w-[140px] h-[120px] sm:w-[240px] sm:h-[270px] md:w-[320px] md:h-[250px] bg-cyan-400 opacity-40 blur-[40px] sm:blur-[80px] md:blur-[120px] z-0" />

        {/* Content */}
        <div className="relative z-10 font-creato">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img className="h-[35px] md:h-[55px]" src={logo} alt="logo" />
          </div>

          {/* Heading */}
          {headingText && (
            <h1 className="text-white text-center  text-[25px] md:text-[55px] lg:text-[80px] font-black italic mb-8  lg:w-[1000px] max-w-[940px] mx-auto">
              {headingText}
            </h1>
          )}

          {/* Email Input Field */}
          <div className="flex justify-center">
            <button
            className="relative flex items-center justify-between w-[130px] sm:w-[140px] md:w-[200px] lg:w-[210px] h-[44px] sm:h-[48px] md:h-[56px] lg:h-[58px] pl-4 pr-2 rounded-full overflow-hidden border border-cyan-400"
            style={{
              background: `linear-gradient(to bottom, #0A6A97 35%, #34BDFE 53%, #17E48A 100%)`,
            }}
          >
            <span className="text-[12px] sm:text-[14px] md:text-[20px] lg:text-[25px] font-creato font-normal text-black z-10">
              Get Started
            </span>

            {/* White circular arrow button */}
            <span
              onClick={() => navigate("/contact")}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white text-cyan-500 flex items-center justify-center shadow-[0_0_10px_#00FFFF] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px]">
                arrow_outward
              </span>
            </span>
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}
