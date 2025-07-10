import React, { useState } from "react";
import api from "../utils/api.js";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import logo from "../assets/brandloomiLogo.png";
import messageImage from "../assets/messa.png";
import greenTick from "../assets/greenTick.png";
import winner from "../assets/winner.png";
import code from "../assets/code.png";
import achievement from "../assets/achievement.png";
import submit from "../assets/submit.png";
import { toast } from "sonner";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";




const Hero = () => {

  return (
    <div
      className="relative text-white font-creato overflow-hidden bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${vector1})` }}
    >
      {/* Top Layer Content */}
      <Header />

       <div className="text-white font-sans mx-auto relative overflow-hidden">
      <div className="relative lg:ml-20 md:ml-8 sm:ml-2 mt-20">
        <div className="z-10 relative leading-none pt-24">
          <div className="italic sm:text-[18px] md:text-[30px] lg:text-[50px] lg:pl-5">
            NO STARTUP LEFT BEHIND
          </div>
          <div className="italic sm:text-[30px] md:text-[50px] lg:text-[80px] leading-tight font-extrabold">
            <div>INTRODUCING</div>
            <div>PAY WHAT YOU CAN</div>
          </div>
        </div>
        <div className="flex gap-4 lg:w-[600px] md:w-[450px] sma:w-[250px] lg:text-[18px] sm:[16px] mt-16">
          <div className="text-3xl">+</div>
          <div className="pb-10 mb-14">
            Every month, we select a deserving startup to receive a professional
            landing page—regardless of their budget.
          </div>
        </div>
      </div>
    </div>

      {/* Bottom-right Vector  */}
      <img
        src={vector2}
        alt="Bottom Right Vector"
        className="absolute bottom-[-750px] right-[-250px] w-[1076px] h-[1718px] pointer-events-none z-0"
      />
    </div>
  );
};


const LaunchBanner = ({ headingText }) => (
  <section className="w-full bg-[#00080A] h-[500px] py-14 font-creato">
    <div className="relative rounded-3xl p-6 sm:p-10 text-center bg-transparent h-[357px] sm:w-full md:w-[90%] lg:w-[95%] max-w-[1700px] mx-[10px] sm:mx-auto overflow-hidden">
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
          <div className="relative flex items-center justify-between w-[290px] h-[52px] sm:h-[56px] pl-5 sm:pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group">
            <input
              type="email"
              disabled
              placeholder="Fill Out This Form"
              className="bg-transparent outline-none text-white placeholder-white text-sm sm:text-base w-full pr-16"
            />
            <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-cyan-500 text-[28px] sm:text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF] cursor-pointer">
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

// Main component export
export default function PayWhatYouCanPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    businessIndustry: "",
    businessLocation: "",
    website: "",
    socialMediaLinks: "",
    description: "",
    problemSolve: "",
    marketingChallenges: "",
    targetAudience: "",
    foundedDate: "",
    employeesCount: "",
    websiteGoals: "",
    websiteGoalsOther: "",
    admiredWebsites: "",
    brandingAssets: false,
    brandingAssetsDescription: "",
    videoLink: "",
    heardAboutUs: "",
    heardAboutUsOther: "",
    yearsInBusiness: "",
    annualRevenue: "",
    agreementPayWhatYouCan: false,
    agreementTerms: false,
  });

  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreementTerms || !formData.agreementPayWhatYouCan) {
      toast("Please agree to all terms to proceed.");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    if (videoFile) {
      data.append("videoUpload", videoFile);
    }

    try {
      setLoading(true);
      const res = await api.post("/submit", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Submission successful! 🎉");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMessage("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#00080A] text-white font-creato ">
      
      <Hero />

      <div className="lg:mt-32 md:mt-24 sm:mt-10">
        <div className="leading-none w-full">
          <div className="lg:text-[80px] md:text-[50px] sm:text-[30px] font-bold italic ml-8">
            MEET OUR CHAMPS
          </div>

          <div className="flex justify-end items-center mt-4 mr-8 space-x-2 lg:mr-40">
            <div className="h-px bg-white w-[150px] sm:w-[130px] md:w-[200px] lg:w-[372px] 2xl:w-[583px]" />
            <div className="text-2xl">
              <span className="material-symbols-outlined animate-[spin_5s_linear_infinite]">
                asterisk
              </span>
            </div>
          </div>
        </div>

        <ImageSlider />

        <div className="mt-10 mb-4 pr-8">
          <button className="relative flex items-center justify-between w-[200px] h-[56px] pl-6 pr-0 border border-cyan-400 rounded-full bg-black text-white overflow-hidden group ml-auto">
            <span className="text-base font-medium z-10">Let's Discuss</span>
            <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-cyan-500 text-[32px] flex items-center justify-center shadow-[0_0_10px_#00FFFF]">
              <span className="material-symbols-outlined leading-none text-[28px]">
                arrow_outward
              </span>
            </span>
          </button>
        </div>
      </div>

      <div className="lg:mx-14 font-creato">
        <div className="flex items-center font-sans   gap-4 px-4 font-black italic ">
          <div className="text-[30px] whitespace-nowrap">Why Participate ?</div>
          <div className="h-px sm:w-[100px] md:w-[250px] lg:w-[490px] bg-white/90" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-12 px-4 sm:px-10">
          <div className="flex flex-col font-creato max-w-[530px] ">
            <p className="font-black italic text-[50px] leading-tight">
              We believe every great idea deserves a digital home - regardless
              of budget.
            </p>
            <div className=" flex mt-4 gap-4 items-center justify-center leading-tight mb-4">
              <img src={messageImage} alt="" className="w-[61px] h-[56px]" />
              <p className=" font-creato font-bold text-white/80 text-[25px]">
                Your participation implies agreement—review the Terms &
                Conditions thoroughly.
              </p>
            </div>
            {[
              { text: "Submit your story and a short video." },
              { text: "We select one winner each month." },
              {
                text: "We build your landing page. You pay what you can.",
              },
              {
                text: "Share your testimonial and success story.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex text-white items-center gap-4 mt-6"
              >
                <img
                  src={greenTick}
                  alt="logo"
                  className="w-[40px] h-[40px] "
                />
                <p className="font-creato font-normal text-[20px]">
                  {item.text}
                </p>
              </div>
            ))}
            <div className="flex items-center gap-8 font-creato font-black italic mt-10 -ml-6">
              <p className="text-[25px]">how It wroks</p>
              <div className="h-px  bg-white w-[150px] lg:w-[300px]"></div>
            </div>
            {[
              { img: submit, text: "Submit your story and a short video." },
              { img: winner, text: "We select one winner each month." },
              {
                img: code,
                text: "We build your landing page. You pay what you can.",
              },
              {
                img: achievement,
                text: "Share your testimonial and success story.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex text-white items-center gap-4 mt-6"
              >
                <img src={item.img} alt="logo" className="w-[40px] h-[40px] " />
                <p className="font-creato font-normal text-[20px]">
                  {item.text}
                </p>
              </div>
            ))}
            <Card />
          </div>

          <div className="hidden lg:block w-px bg-white/60" />

          <div className="w-full lg:w-1/2 pl-0 lg:pl-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: "businessName", name: "businessName" },
                { label: "Contact Person Full Name", name: "contactName" },
                {
                  label: "Contact Person Email ",
                  name: "contactEmail",
                  type: "email",
                },
                { label: "Conact person Phone", name: "contactPhone" },
                { label: "businessIndustry", name: "businessIndustry" },
                { label: "businessLocation", name: "businessLocation" },
                { label: "websiteUrl", name: "website" },
                { label: "Social Media Links", name: "socialMediaLinks" },
                { label: "Business Description", name: "description" },
                { label: "Problem Solved", name: "problemSolve" },
                { label: "Marketing Challenges", name: "marketingChallenges" },
                { label: "Target Audience", name: "targetAudience" },
                { label: "Founded Date", name: "foundedDate", type: "date" },
                { label: "Employees Count", name: "employeesCount" },
                { label: "Website Goals", name: "websiteGoals" },
                { label: "Other Website Goals", name: "websiteGoalsOther" },
                { label: "Admired Websites", name: "admiredWebsites" },
                {
                  label: "Branding Assets Description",
                  name: "brandingAssetsDescription",
                },
                { label: "Video Link (Optional)", name: "videoLink" },
                { label: "How did you hear about us?", name: "heardAboutUs" },
                { label: "Other (Heard About Us)", name: "heardAboutUsOther" },
                { label: "Years in Business", name: "yearsInBusiness" },
                { label: "Annual Revenue", name: "annualRevenue" },
              ].map((field, i) => (
                <input
                  key={i}
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={field.label}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-white/50 rounded-xl text-white placeholder-white focus:outline-none"
                />
              ))}

              {/* Branding Assets Checkbox */}
              {[
                { label: "Business Description", name: "description" },
                { label: "Problem Solved", name: "problemSolve" },
                { label: "Marketing Challenges", name: "marketingChallenges" },
                { label: "Target Audience", name: "targetAudience" },

                {
                  label: "Branding Assets Description",
                  name: "brandingAssetsDescription",
                },
              ].map((field, i) => (
                <textarea
                  key={i}
                  name={field.name}
                  placeholder={field.label}
                  value={formData[field.name]}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-white/50 rounded-xl text-white placeholder-white focus:outline-none resize-none"
                />
              ))}

              {/* Video File Upload */}
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="w-full px-4 py-3 bg-transparent border border-white/50 rounded-xl text-white focus:outline-none "
              />

              {/* Agreements */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreementPayWhatYouCan"
                  checked={formData.agreementPayWhatYouCan}
                  onChange={handleChange}
                  className="appearance-none w-[20px] mt-2 aspect-square border border-white rounded-full checked:bg-blue-500 transition duration-200"
                />
                <p className="text-[18px] text-white/90">
                  I consent to the processing of my personal data for
                  recruitment purposes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreementTerms"
                  checked={formData.agreementTerms}
                  onChange={handleChange}
                  className="font-creato font-normal appearance-none mt-1 w-4 h-4 border border-white rounded-full checked:bg-blue-500 transition duration-200"
                />
                <p className="text-[19px] text-white/70">
                  *I have read and agree to the{" "}
                  <a href="#" className="underline text-white">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-white text-black font-bold rounded-xl px-6 py-3 hover:bg-gray-200"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {/* Message */}
              {message && (
                <p className="text-sm mt-4 font-medium text-red-500">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <LaunchBanner headingText="So? Pay What You can " />
      <Footer />
    </div>
  );
}

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
      <div className="relative rounded-3xl p-6 sm:p-10 text-center bg-transparent h-[447px] sm:w-full md:w-[90%] lg:w-[95%] max-w-[380px] mx-[10px] sm:mx-auto overflow-hidden">
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
            <p className="text-white text-[16px] leading-relaxed italic">
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
