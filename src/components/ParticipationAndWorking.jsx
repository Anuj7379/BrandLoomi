import React ,{useState} from "react";
import messageImage from "../assets/messa.png";
import greenTick from "../assets/greenTick.png";
import winner from "../assets/winner.png";
import code from "../assets/code.png";
import achievement from "../assets/achievement.png";
import submit from "../assets/submit.png";
import { FaChevronRight } from "react-icons/fa6";


function ParticipationAndWorking() {
  return (
    <div className="mx-auto">
      {/* Section: Why Participate & How It Works */}
      <div className="flex flex-row items-center justify-center font-creato max-w-screen-xl gap-10 ">
        {/* Left: Why Participate */}
        <div className="flex flex-col w-1/2">
          <div className="flex items-center font-sans gap-4 px-4 font-black italic mb-4 mt-4 -ml-4">
            <div className="text-[30px] whitespace-nowrap">Why Participate ?</div>
            <div className="h-px bg-white w-full" />
          </div>
          {[
            "Submit your story and a short video.",
            "We select one winner each month.",
            "We build your landing page. You pay what you can.",
            "Share your testimonial and success story.",
          ].map((text, idx) => (
            <div key={idx} className="flex text-white items-center gap-4 mt-6">
              <img src={greenTick} alt="check" className="w-[40px] h-[40px]" />
              <p className="font-creato font-normal text-[20px]">{text}</p>
            </div>
          ))}
        </div>

        {/* Right: How It Works */}
        <div className="flex flex-col">
          <div className="flex items-center gap-8 font-creato font-black italic mb-4 mt-4 -ml-4">
            <p className="text-[25px] whitespace-nowrap">How It Works ?</p>
            <div className="h-px bg-white/70 w-full" />
          </div>
          {[
            { img: submit, text: "Submit your story and a short video." },
            { img: winner, text: "We select one winner each month." },
            { img: code, text: "We build your landing page. You pay what you can." },
            { img: achievement, text: "Share your testimonial and success story." },
          ].map((item, idx) => (
            <div key={idx} className="flex text-white items-center gap-4 mt-6">
              <img src={item.img} alt="step" className="w-[40px] h-[40px]" />
              <p className="font-creato font-normal text-[20px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Card/>
      </div>

      {/* Section: Belief Statement & Info */}
      <div className="max-w-screen-xl mx-auto mt-10 px-4">
        <p className="font-black italic text-[50px] leading-tight">
          We believe every great idea deserves a digital home - regardless of budget.
        </p>

        <div className="mt-8">
          <div className="flex items-center gap-8 font-creato font-black italic mb-4 ">
            <p className="text-[25px] whitespace-nowrap">Fill ot this form</p>
            <div className="h-px bg-white w-[200px]" />
          </div>
          <div className="text-[18px] font-creato font-normal text-white ">
            <p>Thank you for your interest in our "Pay What You Can" website initiative. We’re excited to learn more about you and your business!</p>
            <p>This short application should take around 15–20 minutes to complete.</p>
            <p>To get the most out of it, please be honest, clear, and concise.</p>
            <p>Pro Tip: Have your branding assets and a short pitch video ready before you begin.</p>
          </div>
        </div>

        <div className="flex mt-8 gap-4 items-center  leading-tight mb-10">
          <img src={messageImage} alt="message" className="w-[61px] h-[56px]" />
          <p className="font-creato font-bold text-white/80 text-[25px]">
            Your participation implies agreement—review the Terms & Conditions thoroughly.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ParticipationAndWorking;



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

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#00080A] py-14 font-creato">
      <div className="relative rounded-3xl p-6 sm:p-10 text-center bg-transparent h-[261px] sm:w-full md:w-[90%] lg:w-[100%] max-w-screen-xl mx-[10px] sm:mx-auto overflow-hidden">
        <div className="absolute top-52 left-[-100px] w-[214px] h-[175px] bg-cyan-400 opacity-60 blur-[100px] z-0" />
        <div className="absolute -top-[80px] -right-[70px] w-[210px] h-[170px] bg-cyan-400 opacity-60 blur-[100px] z-0" />

        {/* Main Card Content as Flex Column */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Top Content */}
          <div>
            <div className="flex items-center space-x-4 mt-5 mb-6 text-left">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-[71px] h-[71px] rounded-full object-cover"
              />
              <div>
                <p className="italic text-[25px] font-black">
                  {currentTestimonial.name}
                </p>
                <p className="text-[18px] text-white/80 italic">
                  {currentTestimonial.title}
                </p>
              </div>
            </div>
            <p className="text-white text-[18px] leading-relaxed italic">
              {currentTestimonial.text}
            </p>
          </div>

          {/* Bottom Button Fixed in Flex */}
          <div className="flex justify-end  mb-5 mr-4">
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
