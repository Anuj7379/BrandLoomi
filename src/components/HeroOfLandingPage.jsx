import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.svg";
import LandingPageHeading from "../assets/LandingPageHeading.svg";

const HeroOfLandingPage = () => {
  const navigate = useNavigate();
  const words = ["Build", "Grow", "Scale", "Amplify"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting
              ? currentWord.substring(0, prev.length - 1)
              : currentWord.substring(0, prev.length + 1)
          );
        },
        isDeleting ? 80 : 160
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <div
      className="relative text-white font-creato overflow-hidden bg-no-repeat bg-cover w-full"
      style={{ backgroundImage: `url(${vector1})` }}
    >
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto pt-12 md:pt-24 lg:pt-28 xl:pt-32 pb-16 flex flex-col justify-center items-center leading-none md:mb-14 lg:mb-14 px-4 sm:px-6 md:px-10 ">
        {/* Heading Image */}
        <div
          className="w-full max-w-[1000px] h-[150px] md:h-[220px] lg:h-[260px] bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${LandingPageHeading})`,
          }}
        ></div>

        {/* Typing Text Animation */}
        <div className="relative z-10 -mt-20 min-h-[100px] sm:min-h-[120px] md:min-h-[140px] xl:min-h-[160px] flex items-center justify-center">
          <div className="flex flex-wrap gap-2 justify-center items-center text-center font-bethany font-normal text-transparent">
            <span
              style={{
                background:
                  "linear-gradient(to bottom, #ff0000 25%, #34BDFE 53%, #17E48A 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-[20px] sm:text-[55px] md:text-[65px] xl:text-[80px] leading-tight"
            >
              {displayText}
            </span>
            <span
              style={{
                background:
                  "linear-gradient(to bottom, #0A6A97 35%, #34BDFE 53%, #17E48A 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-[20px] sm:text-[45px] md:text-[55px] xl:text-[70px] leading-tight"
            >
              it together
            </span>
          </div>
        </div>

        {/* Vector3 Accent */}
        <img
          src={vector3}
          alt="vector3"
          className="h-[16px] sm:h-[13px] md:h-[29px] md:-mt-2 lg:-mt-4 lg:ml-[200px] mt-2 hidden md:block"
        />

        {/* Subtext */}
        <p className="text-white/80 text-[14px] sm:text-[16px] md:text-[18px]  text-center font-creato font-normal px-4 max-w-[780px] mx-auto -mt-4 md:mt-0 ">
          Affordable high-quality web and app development, branding, and
          consulting for startups and small businesses in Ireland and beyond.
        </p>

        {/* Call to Action Button */}
        <div className="mt-10 w-full flex justify-center">
          <button
            className="relative flex items-center justify-between w-[130px] sm:w-[140px] md:w-[200px] lg:w-[210px] h-[44px] sm:h-[48px] md:h-[56px] lg:h-[58px] pl-4 pr-2 rounded-full overflow-hidden border border-cyan-400"
            style={{
              background:
                "linear-gradient(to bottom, #0A6A97 35%, #34BDFE 53%, #17E48A 100%)",
            }}
          >
            <span className="text-[12px] sm:text-[14px] md:text-[20px] lg:text-[25px] font-creato font-normal text-black z-10">
              Get Started
            </span>
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

      {/* Background Vector */}
      <img
        src={vector2}
        alt="Bottom Right Vector"
        className="absolute bottom-[-750px] right-[-250px] w-[1076px] h-[1718px] pointer-events-none z-0"
      />
    </div>
  );
};

export default HeroOfLandingPage;
