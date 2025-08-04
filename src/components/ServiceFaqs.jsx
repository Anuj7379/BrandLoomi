// FigmaStyleFAQs.jsx
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const figmaFaqs = [
  {
    question: "What types of software do you develop?",
    answer: "We develop custom web, mobile, desktop, and enterprise software.",
  },
  {
    question: "Can you integrate with my existing systems or APIs?",
    answer: "Yes, we specialize in integrating with third-party APIs and legacy systems.",
  },
  {
    question: "What programming languages and frameworks do you use?",
    answer: "We use technologies like JavaScript, Python, React, Node.js, and more.",
  },
  {
    question: "How do you ensure software quality and reliability?",
    answer: "Through testing, code reviews, CI/CD pipelines, and agile practices.",
  },
];

export default function ServiceFaqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-transparent text-white px-6 md:px-16 pt-16 pb-10 font-sans">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between  gap-16">
        <div className="md:w-1/3 ">
          <h2 className="text-3xl md:text-7xl font-black italic">FAQs</h2>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 gap-8">
          {figmaFaqs.map((faq, index) => (
            <div
              key={index}
              className="border-l-2 border-cyan-500 pl-5 transition-all"
            >
              <div
                className="flex justify-between items-start cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-white/80 text-xl font-medium leading-snug max-w-[90%]">
                  {faq.question}
                </h3>
                <FaPlus
                  className={`transition-transform duration-300 mt-1 ${
                    openIndex === index
                      ? "rotate-45 text-white"
                      : "text-cyan-400"
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out text-[16px] mt-2 text-white/70 ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
