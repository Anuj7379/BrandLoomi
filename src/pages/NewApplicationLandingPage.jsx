import { useState, useEffect } from "react";
import Services from "../components/Services";
import Process from "../components/Process";
import Footer from "../components/Footer";
import FAQs from "../components/FAQ";
import NewApplicationLandingPageForm from "../components/newApplicationLandingPageForm";
import { FaChevronRight } from "react-icons/fa6";
import HeroOfLandingPage from "../components/HeroOfLandingPage";
import WhoWeAre from "../components/WhoWeAre";

const testimonials = [
  {
    text: `"We got our website live in under four weeks and for less than half the price quoted elsewhere. The team’s support was phenomenal!"`,
    name: "Anna M",
    title: "Startup Founder",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: `"Exceptional design and super friendly team. Our brand now looks professional and modern."`,
    name: "Rahul K",
    title: "Marketing Head",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: `"Reliable, fast, and efficient. We couldn't have asked for more. Highly recommended!"`,
    name: "Sana P",
    title: "Business Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Card = () => {
  const [index, setIndex] = useState(0);
  const currentTestimonial = testimonials[index];

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#00080A] py-10 font-creato overflow-x-hidden">
      <div className="relative rounded-[35px] p-6 sm:p-10 text-center bg-transparent h-[261px] max-w-screen-xl w-full mx-auto overflow-hidden">
        <div className="absolute top-52 left-[-100px] w-[214px] h-[175px] bg-cyan-400 opacity-60 blur-[100px] z-0" />
        <div className="absolute -top-[80px] -right-[70px] w-[210px] h-[170px] bg-cyan-400 opacity-60 blur-[100px] z-0" />

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-4 mt-5 mb-6 text-left">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-[50px] h-[50px] md:w-[71px] md:h-[71px] rounded-full object-cover"
              />
              <div>
                <p className="italic text-[14px] md:text-[25px] font-black">
                  {currentTestimonial.name}
                </p>
                <p className="text-[12px] md:text-[18px] text-white/80 italic">
                  {currentTestimonial.title}
                </p>
              </div>
            </div>
            <p className="text-white text-[12px] md:text-[18px] font-normal leading-relaxed italic">
              {currentTestimonial.text}
            </p>
          </div>

          <div className="flex justify-end mb-2 mr-4">
            <button
              onClick={handleNext}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewApplicationLandingPage = () => {
  return (
    <div className="bg-[#00080A] overflow-x-hidden">
      <HeroOfLandingPage />
      <WhoWeAre />
      <div>
        <Services />
      </div>
      <Process />
      <Card />
      <FAQs />
      <NewApplicationLandingPageForm />
      <Footer />
    </div>
  );
};

export default NewApplicationLandingPage;
