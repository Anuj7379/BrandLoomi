import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/brandloomiLogo.png";

const cardData = [
  {
    id: 1,
    title: "Web Developer",
    description:
      "We are seeking a passionate Web Developer to join our team. You'll be responsible for designing, developing, and maintaining scalable web applications. Your work will directly impact the user experience and performance of our digital platforms.",
    overview: [
      "Develop and maintain dynamic and responsive web applications using React.js and Next.js.",
      "Implement modern UI features with Tailwind CSS, ensure accessibility, and deliver pixel-perfect designs.",
      "Integrate RESTful APIs, manage application state with Redux Toolkit or Zustand, and deploy apps using CI/CD pipelines.",
    ],
    requirements: [
      "Minimum 1 year of professional experience required.",
      "Strong understanding of React.js (Hooks, Context API), Next.js (SSR, SSG), and TypeScript.",
      "Experience with modern CSS, Tailwind CSS, accessibility practices, Git, and basic testing frameworks (Jest/React Testing Library).",
      "Must be based in or willing to relocate to Noida.",
    ],
    skills:
      "React.js, Next.js, Tailwind CSS, TypeScript, Redux Toolkit, REST APIs",
    salary: {
      fixed: "₹ 2,00,000 - ₹ 2,20,000 /year",
      variable: "₹ 5,000 /year (performance-based)",
    },
  },
  {
    id: 2,
    title: "UI/UX Designer",
    description:
      "We are looking for a creative UI/UX Designer who can transform ideas into beautifully intuitive user experiences. You'll collaborate closely with developers and product managers to design wireframes, prototypes, and polished interfaces.",
    overview: [
      "Create wireframes, user flows, and interactive prototypes that align with product goals.",
      "Ensure designs are user-centered, accessible, responsive, and brand-consistent.",
      "Work with development teams to implement and maintain scalable design systems.",
    ],
    requirements: [
      "1+ years of professional experience in UI/UX design.",
      "Expertise in Figma or Adobe XD, knowledge of accessibility, responsive design, and UI frameworks.",
      "Familiarity with handoff tools (Zeplin, Figma Inspect) and close collaboration with frontend teams.",
      "Must be located in or ready to work from Noida.",
    ],
    skills:
      "Figma, Adobe XD, UX Research, Wireframing, Prototyping, Design Systems",
    salary: {
      fixed: "₹ 2,00,000 - ₹ 2,40,000 /year",
      variable: "₹ 5,000 /year (performance-based)",
    },
  },
  {
    id: 3,
    title: "Backend Developer",
    description:
      "We're hiring a skilled Backend Developer to architect and manage robust server-side logic and APIs. You’ll ensure high performance and responsiveness to front-end requests, and play a key role in deploying secure and scalable systems.",
    overview: [
      "Develop and maintain scalable APIs and backend systems using Node.js and Express.",
      "Design database schemas, manage queries with MongoDB/PostgreSQL, and optimize performance.",
      "Implement authentication and authorization, integrate third-party services, and ensure system security.",
    ],
    requirements: [
      "Minimum 1 year of backend development experience.",
      "Strong proficiency in Node.js, Express, REST APIs, and MongoDB or PostgreSQL.",
      "Knowledge of Docker, basic DevOps, and CI/CD is a plus.",
      "Experience with authentication systems (JWT, OAuth) and version control (Git).",
      "Location preference: Noida or open to relocation.",
    ],
    skills: "Node.js, Express, MongoDB, PostgreSQL, REST APIs, Docker, Git",
    salary: {
      fixed: "₹ 2,40,000 - ₹ 2,80,000 /year",
      variable: "₹ 7,000 /year (performance-based)",
    },
  },
];

function Careers() {
  const formRef = useRef(null);
  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth" });

  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [modalData, setModalData] = useState(null);

  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleCloseModal = () => setModalData(null);

  // form handle -- api calls //
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedInProfile: "",
    interestReason: "",
    skillsExperience: "",
    referralSource: "",
    eligibleToWorkInIreland: "",
    consent: false,
    agreeToPolicy: false,
    portfolioUrl: "",
  });

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden bg-[#00080A]">
      <Header title="CAREERS" />

      {/* Input and Discover */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:ml-10 lg:mt-36 sm:px-0">
        <input
          name="name"
          type="text"
          placeholder="Seek and you shall find"
          className="w-full lg:w-[424px] h-[50px] bg-transparent border border-white rounded-lg px-6 text-white placeholder-white"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white text-black font-semibold rounded-xl h-12 w-full sm:w-32 hover:bg-gray-200 flex items-center justify-center gap-2"
          onClick={() => setSearch(searchInput)}
        >
          <span>Discover</span>
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row mt-14 items-center justify-evenly mb-10 flex-wrap gap-6">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div
              key={card.id}
              className="w-full max-w-[412px] lg:h-[503px] h-auto bg-transparent rounded-2xl border border-white/10 p-6 text-white relative overflow-hidden group hover:shadow-[0_0_40px_#00ffff33] transition-shadow duration-300 box-border cursor-pointer"
              onClick={() => setModalData(card)}
            >
              <div
                className="absolute top-1/2 left-1/2 w-[337px] h-[295px] opacity-40 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"
                style={{ background: "#00829B" }}
              />
              <div className="italic text-2xl text-white font-extrabold pt-3 ">
                PRODUCT
              </div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-3xl font-bold pt-14 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-relaxed pt-4">
                    {card.description}
                  </p>
                </div>
                <div className="flex items-center justify-around my-8 text-[22px] italic font-extrabold">
                  <h4>FULL TIME</h4>
                  <div className="w-[1px] h-10 bg-white/60"></div>
                  <h4>IRELAND</h4>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-lg italic mt-6">
            No matching jobs found.
          </p>
        )}
      </div>

      {/* Modal */}

      {modalData && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4 font-creato ">
          <div className="bg-[#000000] max-w-3xl w-full  text-white relative overflow-y-auto max-h-[90vh] scrollbar-hide border-white border  p-8 rounded-2xl">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white/50 text-xl font-bold bg-slate-50 w-8 h-8 rounded-full "
            >
              <div className="z-10 text-black">✕</div>
            </button>
            <div className="flex items-center justify-between mt-4">
              <h2 className="text-[40px] font-black">{modalData.title}</h2>
              <img src={logo} alt="logo" className="h-10" />
            </div>
            <div className="flex flex-col px-4 gap-4 text-sm mt-3 text-white font-creato font-normal">
              <span>Not Disclosed</span>
              <span>Fully Remote</span>
              <span>2y</span>
            </div>
            <h3 className="text-2xl mt-4 mb-2 font-semibold">About this job</h3>

            {modalData.overview && (
              <>
                <h4 className="font-black mt-4">Role Overview:</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-sm text-white/80">
                  {modalData.overview.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {modalData.requirements && (
              <>
                <h4 className="font-black mt-6">Requirements:</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-sm text-white/70">
                  {modalData.requirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {modalData.skills && (
              <p className="mt-4 text-sm text-white/70">
                <strong className="text-white text-[16px]">Skills : </strong>{" "}
                {modalData.skills}
              </p>
            )}

            {modalData.salary && (
              <div className="mt-6">
                <h4 className="font-bold">Salary:</h4>
                <ul className="list-decimal pl-6 text-sm mt-2 text-white/70">
                  <li>Fixed Pay: {modalData.salary.fixed}</li>
                  <li>Variable Pay: {modalData.salary.variable}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Form Section */}
      <div className="lg:mx-14" ref={formRef}>
        <div className="flex items-center font-sans font-bold italic gap-4 px-4">
          <div className="text-[25px] whitespace-nowrap">ONE STEP AWAY</div>
          <div className="h-px flex-1 bg-white/90"></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-12 px-4 sm:px-10">
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

          <div className="hidden lg:block w-px bg-white/60" />

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

const LaunchBanner = ({ headingText, onClickScroll }) => (
  <section className="w-full bg-[#00080A] h-[600px] py-14">
    <div className="relative rounded-3xl p-6 sm:p-10 text-center bg-transparent h-[467px] sm:w-full md:w-[90%] lg:w-[95%] max-w-[1700px] mx-[10px] sm:mx-auto overflow-hidden">
      <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />
      <div className="absolute -top-[100px] -right-[80px] w-[400px] h-[300px] bg-cyan-400 opacity-40 blur-[120px] z-0" />
      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <img className="h-[58px]" src={logo} alt="logo" />
        </div>
        {headingText && (
          <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-black italic mb-8 font-sans lg:w-[1000px] max-w-[1000px] mx-auto">
            {headingText}
          </h1>
        )}
        <div className="flex justify-center px-4 sm:px-0">
          <div
            onClick={onClickScroll}
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
