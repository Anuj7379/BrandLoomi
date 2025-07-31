import React, { useState } from "react";
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
      <div className="flex flex-col md:flex-row items-center justify-center font-creato max-w-screen-xl gap-10 px-4">
        {/* Left: Why Participate */}
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex items-center font-sans gap-4 font-black italic mb-4 mt-4">
            <div className="text-[24px] md:text-[30px] whitespace-nowrap">
              Why Participate?
            </div>
            <div className="h-px bg-white w-full" />
          </div>
          {[
            "Apply by telling us your story and business vision.",
            "Each month, we select a deserving startup or small business.",
            "We build your website or app with the same quality and care as our full-price clients.",
            "You pay what you can afford – even if that's less than our usual launch fee.",
            "All we ask in return is your honest testimonial and permission to share your success story.",
          ].map((text, idx) => (
            <div key={idx} className="flex text-white items-start gap-4 mt-6">
              <img
                src={greenTick} // Replace with appropriate icons if needed
                alt="check"
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
              />
              <p className="font-creato font-normal text-[16px] md:text-[20px]">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Right: How It Works */}
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex items-center gap-4 md:gap-8 font-creato font-black italic mb-4 mt-4">
            <p className="text-[22px] md:text-[25px] whitespace-nowrap">
              How It Works?
            </p>
            <div className="h-px bg-white/70 w-full" />
          </div>
          {[
            {
              img: submit,
              text: "Kickstart your online presence without financial strain.",
            },
            {
              img: winner,
              text: "Benefit from expert design, development, and marketing.",
            },
            {
              img: code,
              text: "Join a community of startups supported by our agency.",
            },
            {
              img: achievement,
              text: "Help us build a more inclusive startup ecosystem in Ireland.",
            },

          ].map((item, idx) => (
            <div key={idx} className="flex text-white items-start gap-4 mt-6">
              <img
                src={item.img}
                alt="step"
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
              />
              <p className="font-creato font-normal text-[16px] md:text-[20px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Card Section */}
      <div className="px-4">
        <Card />
      </div>

      {/* Belief Statement & Info */}
      <div className="max-w-screen-xl mx-auto mt-10 px-4">
        <p className="font-black italic text-[30px] md:text-[50px] leading-tight">
          We believe every great idea deserves a digital home - regardless of
          budget.
        </p>

        <div className="mt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8 font-creato font-black italic mb-4">
            <p className="text-[20px] md:text-[25px] whitespace-nowrap">
              Fill out this form
            </p>
            <div className="h-px bg-white w-full sm:w-[200px]" />
          </div>
          <div className="text-[16px] md:text-[18px] font-creato font-normal text-white space-y-2">
            <p>
              Thank you for your interest in our "Pay What You Can" website
              initiative. We’re excited to learn more about you and your
              business!
            </p>
            <p>
              This short application should take around 15–20 minutes to
              complete.
            </p>
            <p>
              To get the most out of it, please be honest, clear, and concise.
            </p>
            <p>
              Pro Tip: Have your branding assets and a short pitch video ready
              before you begin.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mt-8 gap-4 items-start sm:items-center leading-tight mb-10">
          <img
            src={messageImage}
            alt="message"
            className="w-[50px] md:w-[61px] h-[46px] md:h-[56px]"
          />
          <p className="font-creato font-bold text-white/80 text-[18px] md:text-[25px]">
            Your participation implies agreement—review the Terms & Conditions
            thoroughly.
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
    <section className="w-full bg-[#00080A] py-10 font-creato">
      <div className="relative rounded-[35px] p-6 sm:p-10 text-center bg-transparent h-[261px] sm:w-full md:w-[95%] lg:w-[100%] max-w-screen-xl mx-[5px] md:mx-auto overflow-hidden">
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
                className="w-[50px] h-[50px]  md:w-[71px] md:h-[71px] rounded-full object-cover"
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

          {/* Bottom Button Fixed in Flex */}
          <div className="flex justify-end  mb-2 mr-4">
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
