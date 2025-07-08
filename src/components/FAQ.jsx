import { useState } from "react";
import { FaPlus, FaChevronRight } from "react-icons/fa6";

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
  {
    question: "Can you work with existing code or platforms?",
    answer:
      "Yes, we can work with existing codebases or integrate with platforms you're already using, provided they are well-documented and maintainable.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Absolutely! We provide maintenance, updates, and technical support even after your project goes live.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines vary based on scope and complexity. However, most standard projects are completed within 3–6 weeks.",
  },
  {
    question: "Can I request changes after development starts?",
    answer:
      "Yes, we follow an agile approach. You're welcome to suggest changes anytime, and we’ll adjust accordingly with proper planning.",
  },
  {
    question: "What if I’m not satisfied with the final product?",
    answer:
      "Client satisfaction is our priority. We work closely with you at every stage and offer revisions to ensure the result matches your expectations.",
  },
  {
    question: "Do you help with domain & hosting setup?",
    answer:
      "Yes, we assist with everything from choosing a domain to setting up hosting, ensuring a smooth and professional launch.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-16 px-16 bg-transparent text-white font-creato">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-[80px] font-black italic">FAQs</h2>
        <button className="flex items-center text-[25px] font-medium text-white hover:text-cyan-400">
          All FAQs <FaChevronRight className="ml-2" size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-normal">
        {faqs.map((faq, index) => (
          <div key={index} className="border-l-2 border-cyan-500 pl-4 transition-all duration-500">
            <div className="flex justify-between items-start cursor-pointer" onClick={() => toggleFAQ(index)}>
              <h3 className="text-white text-[25px] font-medium max-w-[90%] leading-snug">{faq.question}</h3>
              <FaPlus
                className={`transition-transform duration-300 mt-1 ${
                  openIndex === index ? "rotate-45 text-cyan-400" : "text-white"
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out text-sm mt-2 text-white/70 leading-relaxed ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-white/20 mt-16" />
    </div>
  );
}
