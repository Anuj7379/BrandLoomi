import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/brandloomiLogo.png";

const cardData = [
  {
    id: 1,
    title: "Web Developer",
    description:
      "The web developer is responsible for planning and developing software solutions and web applications, supporting and maintaining a company’s websites and digital products. The day-to-day work of the web developer highly depends on constantly evolving internet innovations. Providing a targeted web developer job description and salary range information can help you attract top talent.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    description:
      "Designs intuitive and visually engaging user interfaces. Collaborates with teams to conduct research, create wireframes, and build responsive prototypes. Focuses on user experience, accessibility, and design consistency to ensure digital products are user-friendly, efficient, and aligned with brand goals.",
  },
  {
    id: 3,
    title: "Backend Developer",
    description:
      "Builds and maintains scalable server-side systems and APIs. Works with databases, handles authentication, and ensures app performance and security. Collaborates with frontend teams to support data flow, business logic, and integration with external services using modern backend technologies.",
  },
];

function Careers() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [searchInput, setSearchInput] = useState(""); // live typing
  const [search, setSearch] = useState("");
  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden bg-[#00080A]">
      <Header title="CAREERS" />

      {/* Input and Discover Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:ml-10 lg:mt-20  sm:px-0">
        <input
          name="name"
          type="text"
          placeholder="Seek and you shall find"
          className="w-full sm:w-[614px] h-[59px] bg-transparent border border-white rounded-lg px-6 text-white placeholder-white"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white text-black font-semibold rounded-xl h-16 w-full sm:w-32 hover:bg-gray-200 flex items-center justify-center gap-2"
          onClick={() => setSearch(searchInput)}
        >
          <span>Discover</span>
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </div>

      {/* Job Cards */}
      <div className="flex flex-col md:flex-row lg:flex-row mt-14 items-center justify-evenly mb-10 flex-wrap gap-6">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))
        ) : (
          <p className="text-white text-lg italic mt-6">
            No matching jobs found.
          </p>
        )}
      </div>

      {/* Care & Form Section */}
      <div className="lg:mx-14" ref={formRef}>
        {" "}
        {/*  ref here */}
        <div className="flex items-center font-sans font-bold italic gap-4 px-4">
          <div className="text-[25px] whitespace-nowrap">ONE STEP AWAY</div>
          <div className="h-px flex-1 bg-white/90"></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-12 px-4 sm:px-10">
          {/* Care Section */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-10">
            <div className="text-xl italic font-bold mb-6">
              WHAT WE CARE ABOUT
            </div>
            <ul className="space-y-6 text-white/90 text-[16px] list-disc pl-5">
              {Array(5).fill(
                <li>
                  <span className="font-bold">Kindness Over Everything:</span>{" "}
                  We're all about good vibes, mutual respect, and lifting each
                  other up.
                </li>
              )}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-white/60" />

          {/* Form Section */}
          <div className="w-full lg:w-1/2 pl-0 lg:pl-10">
            <form className="space-y-4">
              {[
                "Enter Your Full Name",
                "Email Address",
                "Mobile Number",
                "linkedInProfile link",
                "Resume URL",
                "Portfolio URL",
                "Cover letter URL",
              ].map((placeholder, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={placeholder}
                  className="w-full px-4 py-3 bg-transparent border border-white/50 rounded-xl text-white placeholder-white focus:outline-none"
                />
              ))}

              {[
                {
                  label: "Skills Experience",
                  options: ["Fresher", "1-2 years", "2-5 years", "5+ years"],
                },
                {
                  label: "Referral Source",
                  options: [
                    "LinkedIn",
                    "Employee Referral",
                    "Website",
                    "Social Media",
                    "Other",
                  ],
                },
                {
                  label: "Eligible to Work in Ireland",
                  options: ["Yes", "No", "Require Visa Sponsorship"],
                },
              ].map((dropdown, idx) => (
                <select
                  key={idx}
                  className="w-full px-4 py-3 bg-black text-white border border-white/50 rounded-xl focus:outline-none"
                >
                  <option disabled selected className="bg-black text-white">
                    {dropdown.label}
                  </option>
                  {dropdown.options.map((opt, i) => (
                    <option key={i} className="bg-black text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              ))}

              {/* Checkboxes */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="appearance-none mt-1 w-4 h-4 border border-white rounded-full checked:bg-blue-500 transition duration-200"
                />
                <p className="text-sm text-white/70">
                  I consent to the processing of my personal data for
                  recruitment purposes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="appearance-none mt-1 w-4 h-4 border border-white rounded-full checked:bg-blue-500 transition duration-200"
                />
                <p className="text-sm text-white/70">
                  *I have read and agree to the{" "}
                  <a href="#" className="underline text-white">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <button
                type="submit"
                className="bg-white text-black font-semibold rounded-xl h-12 w-full sm:w-40 hover:bg-gray-200 flex items-center justify-center gap-2 mt-4"
              >
                <span>APPLY NOW</span>
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <LaunchBanner
        headingText="Work alongside industry leaders and innovators."
        onClickScroll={scrollToForm}
      />

      <Footer />
    </div>
  );
}

export default Careers;

const Card = ({ title, description }) => (
  <div className="w-full  max-w-[412px] lg:h-[503px] h-auto bg-transparent rounded-2xl border border-white/10 p-6 text-white relative overflow-hidden group hover:shadow-[0_0_40px_#00ffff33] transition-shadow duration-300 box-border">
    <div
      className="absolute top-1/2 left-1/2 w-[337px] h-[295px] opacity-40 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"
      style={{ background: "#00829B" }}
    />
    <div className="italic text-2xl text-white font-extrabold pt-3 ">
      PRODUCT
    </div>
    <div className="relative z-10 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-3xl font-bold pt-14 mb-4">{title}</h3>
        <p className="text-[14px] font-normal font-sans leading-relaxed pt-4">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-around my-8 text-[22px] italic font-extrabold">
        <h4>FULL TIME</h4>
        <div className="w-[1px] h-10 bg-white/60"></div>
        <h4>IRELAND</h4>
      </div>
    </div>
  </div>
);

const LaunchBanner = ({ headingText, onClickScroll }) => (
  <section className="w-full bg-[#00080A] h-[600px] py-14">
    <div className="relative rounded-3xl p-6 sm:p-10 text-center bg-transparent h-[467px] sm:w-full md:w-[90%] lg:w-[95%] max-w-[1700px] mx-[10px] sm:mx-auto overflow-hidden">
      {/* Background Glows */}
      <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />
      <div className="absolute -top-[100px] -right-[80px] w-[400px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <img className="h-[58px]" src={logo} alt="logo" />
        </div>

        {headingText && (
          <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-black italic mb-8 font-sans lg:w-[1000px] max-w-[1000px] mx-auto">
            {headingText}
          </h1>
        )}

        {/* Glowing Button (click to scroll) */}
        <div className="flex justify-center px-4 sm:px-0">
          <div
            onClick={onClickScroll} // ✅ scroll trigger
            className="relative flex items-center justify-between w-[290px] h-[52px] sm:h-[56px] pl-5 sm:pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group cursor-pointer"
          >
            <input
              type="email"
              disabled
              placeholder="Fill Out This Form"
              className="bg-transparent outline-none text-white placeholder-white text-sm sm:text-base w-full pr-16 cursor-pointer"
            />
            <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-cyan-500 text-[28px] sm:text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF]">
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
