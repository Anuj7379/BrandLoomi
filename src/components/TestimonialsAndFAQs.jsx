import { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaPlus } from "react-icons/fa";

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

const faqs = [
  {
    question: "How can you offer such affordable prices?",
    answer:
      "We use efficient workflows and open-source technologies to reduce development time and cost.",
  },
  {
    question: "Do I need technical knowledge to work with you?",
    answer:
      "Not at all! We handle all technical aspects and guide you throughout the process.",
  },
  {
    question: "How does your process work after I contact you?",
    answer:
      "We schedule a consultation, understand your requirements, and create a detailed plan before development starts.",
  },
  {
    question: "What platforms or technologies do you use for development?",
    answer:
      "We use modern stacks like MERN (MongoDB, Express, React, Node.js), Next.js, Tailwind CSS, and more.",
  },
];

export default function TestimonialsAndFAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handlePrev = () => {
    setTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[testimonialIndex];

  return (
    <div className="bg-[#00080A] text-white px-6 py-16 md:px-20 font-sans">
      {/* Testimonials Section */}
      <div className="border-b  pb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold italic text-red-500 ">
            Testimonials
          </h2>
          <span className="text-lg text-red-500">
            {String(testimonialIndex + 1).padStart(2, "0")}/
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-10 md:mb-0">
            <p className="text-5xl font-bold mb-2">50+</p>
            <p className="text-white text-lg">Happy Clients</p>
          </div>

          <div className="md:w-3/5 transition-all duration-500 ease-in-out">
            {/* Animate on testimonial change */}
            <p
              key={testimonialIndex}
              className="text-lg text-gray-100 mb-6 transition-opacity duration-300 animate-fade-in"
            >
              {currentTestimonial.text}
            </p>
            <div className="flex items-center space-x-4">
              <img
                src={currentTestimonial.image}
                alt="Client"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold italic">
                  {currentTestimonial.name}
                </p>
                <p className="text-sm text-gray-400">
                  {currentTestimonial.title}
                </p>
              </div>
              <div className="flex space-x-4 ml-auto">
                <button
                  onClick={handlePrev}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="flex flex-col md:flex-row pt-16 gap-10 md:items-center">
        {/* Left Side */}
        <div className="md:w-1/4 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-2">FAQs</h2>
          <button className="flex items-center text-sm text-white hover:text-blue-400 mt-2 mx-auto md:mx-0">
            All FAQs <FaChevronRight className="ml-2" size={14} />
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-3/4 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-l-2 border-blue-500 pl-4 transition-all duration-500"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-white text-lg">{faq.question}</h3>
                <FaPlus
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-45 text-blue-400" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-400 h-px w-full mt-10"></div>
    </div>
  );
}
