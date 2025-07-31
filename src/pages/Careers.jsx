import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/brandloomiLogo.png";
import leftArrow from "../assets/leftScrollArrow.png";
import rightArrow from "../assets/rightScrollArrow.png";
import LaunchBanner from "../components/LaunchBanner";

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

  // card scroll
  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 340 + 32; // 350px card + 32px margin (16px on both sides)
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // for modal  and search

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
      <div className="absolute -top-[60px] -right-[60px] w-[250px] h-[250px] bg-[#009252] opacity-40 blur-[80px] sm:blur-[80px]  z-0 xs:hidden" />
      <div className="absolute w-[200px] h-[200px] md:w-[240px] md:h-[200px] rounded-full bg-cyan-400 blur-[120px] opacity-100 top-[50px] md:top-[150px] left-[80px] z-0" />
      <Header title="CAREERS" />

      {/* Input and Discover */}
      <div className="flex flex-row   items-start justify-start gap-4  lg:ml-10 mt-28 md:mt-32 lg:mt-36 mx-4 ">
        <input
          name="name"
          type="text"
          placeholder="Seek and you shall find"
          className="w-[260px] md:w-[300px] lg:w-[424px] h-[35px] md:h-[50px]  bg-transparent border border-white rounded-lg px-6 text-white placeholder-white"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white text-black font-semibold rounded-xl h-9 md:h-12 md:w-32 hover:bg-gray-200 flex items-center justify-center gap-2 px-2"
          onClick={() => setSearch(searchInput)}
        >
          <span className="text-base">Discover</span>
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </div>

      {/* Desktop / Tablet View */}
      <div className="hidden md:flex flex-col md:flex-row mt-14 items-center justify-evenly mb-10 flex-wrap gap-6">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div
              key={card.id}
              className="w-full max-w-[412px] lg:h-[440px] h-auto bg-transparent rounded-2xl border border-white/10 p-6 text-white relative overflow-hidden group hover:shadow-[0_0_40px_#00ffff33] transition-shadow duration-300 box-border cursor-pointer"
              onClick={() => setModalData(card)}
            >
              <div
                className="absolute top-1/2 left-1/2 w-[337px] h-[295px] opacity-40 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"
                style={{ background: "#00829B" }}
              />
              <div className="italic text-2xl text-white font-extrabold pt-3">
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

      {/* Mobile Carousel View */}
      <div className="relative w-full flex justify-center overflow-hidden mt-10 block md:hidden">
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="overflow-x-auto snap-x snap-mandatory flex scrollbar-hide scroll-smooth"
          style={{ width: "340px" }}
        >
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div
                key={card.id}
                className="w-[340px] flex-shrink-0 snap-center mx-4"
              >
                <div
                  className="w-full h-auto bg-transparent  rounded-2xl border border-white/10  text-white relative overflow-hidden group hover:shadow-[0_0_40px_#00ffff33] transition-shadow duration-300 cursor-pointer  px-6 mr-10"
                  onClick={() => setModalData(card)}
                >
                  <div
                    className="absolute top-1/2 left-1/2 w-[337px] h-[295px] opacity-40 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"
                    style={{ background: "#00829B" }}
                  />
                  <div className="italic text-2xl text-white font-extrabold pt-3">
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
              </div>
            ))
          ) : (
            <p className="text-white text-lg italic mt-6">
              No matching jobs found.
            </p>
          )}
        </div>

        {/* Right Button */}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full w-[20px] h-[20px] flex items-center justify-center"
          onClick={() => scroll("right")}
        >
          <img
            src={rightArrow}
            alt="Scroll Right"
            className="w-5 h-5 object-contain"
          />
        </button>

        {/* Left Button */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full w-[20px] h-[20px] flex items-center justify-center"
          onClick={() => scroll("left")}
        >
          <img
            src={leftArrow}
            alt="Scroll Left"
            className="w-5 h-5 object-contain"
          />
        </button>
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
      <div className="lg:mx-14 mt-14" ref={formRef}>
        <div className="flex flex-col md:flex-row md:items-center font-sans font-bold italic gap-4 px-4">
          <div className="text-[25px] whitespace-nowrap">ONE STEP AWAY</div>
          <div className="bg-white/90 h-[1px]  md:h-px md:flex-1 mx-10 md:mx-0 w-[230px] md:w-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-12 px-4 sm:px-10">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-10">
            <div className="text-[16px] md:text-xl italic font-bold mb-6">
              WHAT WE CARE ABOUT
            </div>
            <ul className="space-y-6 text-white/90 text-[16px] list-disc pl-5">
              <li>
                <span className="font-bold">People First, Always:</span> We
                believe great work happens when our team feels heard, valued,
                and supported.
              </li>
              <li>
                <span className="font-bold">Kindness Over Everything:</span>{" "}
                We're all about good vibes, mutual respect, and lifting each
                other up.
              </li>
              <li>
                <span className="font-bold">
                  We hire for hunger, not just degrees:
                </span>{" "}
                If you're eager to learn, you'll thrive here.
              </li>
              <li>
                <span className="font-bold">We work from everywhere:</span> but
                stay deeply connected. Slack memes are our love language.
              </li>
              <li>
                <span className="font-bold">We don't clock-watch:</span> We care
                about meaningful work, not busywork.
              </li>
              <li>
                <span className="font-bold">We give you the space:</span> to
                experiment, question, and design without fear.
              </li>
              <li>
                <span className="font-bold">We move fast but protect:</span> our
                people from burnout. Ambition meets balance.
              </li>
              <li>
                <span className="font-bold">No matter where you're from:</span>{" "}
                or what your story is — your voice matters here.
              </li>
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

              <div className="flex items-start space-x-2 mb-4">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) =>
                    setFormData({ ...formData, consent: e.target.checked })
                  }
                  className="appearance-none w-7 h-5 border border-white rounded-full checked:bg-blue-500 checked:ring-2 checked:ring-black transition-all cursor-pointer"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-white text-[14px] md:text-[20px]"
                >
                  I consent to the processing of my personal data for
                  recruitment purposes.
                </label>
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start space-x-2 mb-4">
                <input
                  type="checkbox"
                  name="agreePrivacy"
                  id="agreePrivacy"
                  checked={formData.agreePrivacy}
                  className="appearance-none w-5 h-5 border border-white rounded-full checked:bg-blue-500 checked:ring-2 checked:ring-black transition-all cursor-pointer"
                />
                <label
                  htmlFor="agreePrivacy"
                  className="text-sm text-white text-[14px] md:text-[20px]"
                >
                  "I have read and agree to the{" "}
                  <a
                    href="/privacy"
                    target="_blank"
                    className="text-white/80 underline text-[14px] md:text-[20px]"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
              <div className="flex items-start space-x-2 mb-4">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 border border-white rounded-full bg-white checked:bg-blue-500 checked:ring-2 checked:ring-black transition-all cursor-pointer"
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm text-white text-[14px] md:text-[20px]"
                >
                  Subscribing to newsletter{" "}
                </label>
              </div>

              <button
                type="submit"
                className="bg-white text-black font-semibold rounded-xl h-12 w-36 sm:w-40 hover:bg-gray-200 flex items-center justify-center gap-2 mt-4"
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
