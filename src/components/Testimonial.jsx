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
    setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () =>
    setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className="pb-16 border-b border-white/10 px-16 mt-6 text-white">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold italic ">Testimonials</h2>
        <span className="h-px w-[330px] bg-white" />
        <span className="text-md text-white">
          {String(testimonialIndex + 1).padStart(2, "0")}/
          {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <p className="text-5xl font-bold mb-2">50+</p>
          <p className="text-white text-lg">Happy Clients</p>
        </div>

        <div className="md:w-3/5">
          <p className="text-lg max-w-[600px] text-gray-100 mb-6">{currentTestimonial.text}</p>
          <div className="flex items-center space-x-4">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold italic">{currentTestimonial.name}</p>
              <p className="text-sm text-gray-400">{currentTestimonial.title}</p>
            </div>
            <div className="flex space-x-4 ml-auto">
              <button
                onClick={handlePrev}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
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
