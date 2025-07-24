import { useState, useEffect } from "react";
import Header from "../components/Header";
import Empowering from "../components/Empowering";
import Services from "../components/Services";
import Process from "../components/Process";
import LaunchBanner from "../components/LaunchBanner";
import Footer from "../components/Footer";
import FAQs from "../components/FAQ";
import Testimonials from "../components/Testimonial";
import { useNavigate } from "react-router-dom";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.svg";
import LandingPageHeading from "../assets/LandingPageHeading.svg";
const LandingPage = () => {
  return (
    <div style={{ background: "#00080A" }} >
      <Hero />

      {/* Other Sections */}
      <Empowering />
      <div>
        <Services />
      </div>
      <Process />
      <Testimonials />
      <FAQs />
      <LaunchBanner headingText="Ready to Launch your business Online ?" />
      <Footer />
    </div>
  );
};

export default LandingPage;

const Hero = () => {
  const navigate = useNavigate();
  const words = ["Build", "Grow", "Scale", "Amplify"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(160); // Typing speed

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const typing = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(typing);
  }, [displayText, isDeleting, words, currentWordIndex, speed]);

  return (
    <div
      className="relative text-white font-creato overflow-hidden bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${vector1})` }}
    >
      {/* Top Layer Content */}
      <Header />

      <div className="relative z-10 w-full max-w-screen-xl mx-auto pt-24 sm:pt-40 md:pt-24 lg:pt-28 xl:pt-32 pb-16 flex flex-col justify-center items-center leading-none md:mb-14 lg:mb-14">
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-10 leading-tight w-full">
          <img
            src={LandingPageHeading}
            alt="heading"
            className="w-full max-w-[1000px]"
          />

          {/* TEXT with fixed height for animation */}
          <div className="flex flex-wrap gap-2 justify-center items-center text-center font-bethany font-normal text-transparent  min-h-[50px] sm:min-h-[70px] md:min-h-[90px]">
            <span
              style={{
                background: `linear-gradient(to bottom, #ff0000 25%, #34BDFE 53%, #17E48A 70%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-[20px] sm:text-[55px] md:text-[65px] xl:text-[80px]"
            >
              {displayText}
            </span>
            <span
              style={{
                background: `linear-gradient(to bottom, #0A6A97 35%, #34BDFE 53%, #17E48A 70%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-[20px] sm:text-[45px] md:text-[55px] xl:text-[70px]"
            >
              it together
            </span>
          </div>

          {/* vector3 */}
          <img
            src={vector3}
            alt="vector3"
            className="h-[16px] sm:h-[13px] md:h-[29px]  md:-mt-2 lg:-mt-4 lg:ml-[200px] mt-2"
          />
        </div>

        {/* paragraph */}
        <p className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] text-center font-creato font-normal px-4 max-w-[780px] mx-auto">
          Affordable high-quality web and app development branding and
          consulting for startups and small businesses in Ireland and beyond.
        </p>

        {/* button */}
        <div className="mt-10 px-4 sm:px-6 md:px-10 w-full flex justify-center">
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

      {/* Bottom-right Vector */}
      <img
        src={vector2}
        alt="Bottom Right Vector"
        className="absolute bottom-[-750px] right-[-250px] w-[1076px] h-[1718px] pointer-events-none z-0"
      />
    </div>
  );
};
