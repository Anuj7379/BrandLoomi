import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

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

export default function Testimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[testimonialIndex];

  const handlePrev = () =>
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  const handleNext = () =>
    setTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="pb-16 border-b border-white/10 px-10 mt-6 text-white  font-creato  ">
      <div className="flex flex-col  mb-6 font-black">
        <h2 className="sm:text-[25px] mg:text-[45px] lg:text-[60px] italic whitespace-nowrap">
          LOVED BY OUR USERS
        </h2>

        <div className="flex items-center justify-center gap-3 flex-1 ">
          <span className="h-px bg-white/60 w-[162px] md:w-[480px]" />
          <span className="text-md text-white/60 shrink-0">
            {String(testimonialIndex + 1).padStart(2, "0")}/
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-creato  ">
        <div className="  md:ml-auto">
          <p className="sm:[15px] md:text-[25px] max-w-[600px] text-gray-300 mb-6 font-normal">
            {currentTestimonial.text}
          </p>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex  gap-4 items-center">
              {" "}
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-12 h-12 sm:w-[54px] sm:h-[54px] md:w-[89px] md:h-[89px] rounded-full object-cover"
              />
              <div>
                <p className="italic  sm:text-[15px] md:text-[25px] font-black">
                  {currentTestimonial.name}
                </p>
                <p className="italic  sm:text-[11px] md:text-[18px] text-white/80">
                  {currentTestimonial.title}
                </p>
              </div>
            </div>

            <div className="flex space-x-4 ml-auto">
              <button
                onClick={handlePrev}
                className="p-2 bg-[#207AA6]/30 rounded-full hover:bg-white/20 transition"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-[#207AA6]/30 rounded-full hover:bg-white/20 transition"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
