import React, { useState, useRef } from "react";
import Recaptcha from "../reCaptcha/Recaptcha.jsx";
import { toast } from "sonner";
import logo from "../assets/brandloomiLogo.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import facebookIcon from "../assets/facebook.png";
import instaIcon from "../assets/insta.png";
import xIcon from "../assets/X.png";
import linkedinIcon from "../assets/linkedin.png";
import Lottie from "lottie-react";
import ContactAnimation from "../assets/animation/contactAnimation.json";
import api from "../utils/api.js";

const ContactUs = () => {
  // ReCaptcha reference
  const recaptchaRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    company: "",
    referral: "",
    file: null,
    message: "",
    agreeTerms: false, // checkbox state
    agreePrivacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (name === "file") {
      const selectedFile = files[0];
      setFileName(selectedFile?.name || "");
      setFormData((prev) => ({ ...prev, file: selectedFile }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get reCAPTCHA token

    const token = await recaptchaRef.current.getToken();
    console.log("reCAPTCHA token:", token);

    // Basic frontend validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.agreeTerms ||
      !formData.agreePrivacy
    ) {
      toast.error(
        "Please fill all required fields and agree to both policies."
      );
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (key !== "agreeTerms" && key !== "agreePrivacy") {
        data.append(key, val);
      }
    });

    try {
      setIsSubmitting(true);

      await api.post("/contact", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Submitted Successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        company: "",
        referral: "",
        file: null,
        message: "",
        agree: false,
      });
      setFileName("");
    } catch (err) {
      toast.error("Submission failed. " + (err?.response?.data?.message || ""));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-[#00080A]">
        {/* Background Blur Circles */}
        <div className="absolute w-[200px] h-[200px] md:w-[240px] md:h-[200px] rounded-full bg-cyan-400 blur-[120px] opacity-100 top-[50px] md:top-[150px] left-[80px] z-0" />
        <div className="absolute w-[240px] h-[200px] rounded-full bg-[#009252] blur-[120px] opacity-100 top-[240px] left-80 z-0 hidden md:block" />
        <div className="absolute -top-[60px] -right-[60px] w-[250px] h-[250px] bg-[#009252] opacity-40 blur-[80px] sm:blur-[80px]  z-0 xs:hidden" />

        <Header />

        <div className="relative z-10  px-5 pt-24 pb-10 max-w-screen-xl mx-auto lg:mx-12 mt-10 ">
          <h1 className="text-[25px]  md:text-[50px] lg:text-[80px] font-black italic uppercase leading-none hidden md:block">
            <div>LET'S BUILD</div>
            <div>SOMETHING Great</div>
            <div>together</div>
          </h1>
          <h1 className="text-[25px]  md:text-[50px] lg:text-[80px] font-black italic uppercase leading-tight block md:hidden">
            <div>LET'S BUILD SOMETHING</div>
            <div> Great together</div>
          </h1>
        </div>
        <div className="flex flex-col  gap-4  md:hidden ">
          <span className="text-[#fff] text-[25px] font-black italic pl-6">
            Work Inquiries
          </span>
          <div className="h-px w-[280px] bg-white/90 ml-auto "></div>
        </div>

        <section className="flex flex-col lg:flex-row justify-center gap-12 px-2 md:px-6 pb-20 mt-10">
          {/* Left Section */}
          <div className= "hidden md:block text-white border-r lg:pr-10 border-white lg:w-1/3 w-full flex flex-col items-center ">
            <div className="w-full max-w-xs text-left">
              <img className="h-[57px]" src={logo} alt="logo" />
              <p className="mt-3 text-[20px] leading-6">
                Affordable, high-quality digital solutions to help startups and
                small businesses launch, grow, and thrive
              </p>
              <div className="flex gap-4 mt-6">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="w-10 h-10 cursor-pointer"
                />
                <img
                  src={instaIcon}
                  alt="Instagram"
                  className="w-10 h-10 cursor-pointer"
                />
                <img src={xIcon} alt="X" className="w-10 h-10 cursor-pointer" />
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-10 h-10 cursor-pointer"
                />
              </div>
            </div>
            <div className="w-72 h-72 lg:w-96 lg:h-96 mt-16 hidden md:block">
              <Lottie animationData={ContactAnimation} loop={true} />
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full px-4 sm:px-8 lg:pl-16 max-w-3xl ">
            <div className="hidden md:flex md:flex-row items-center space-x-4 mb-8">
              <h3 className="text-white text-2xl font-bold italic whitespace-nowrap">
                Work Inquiries
              </h3>

              <div className="flex-1 h-[1px] bg-white/80" />

              <div className="text-2xl">
                <span className="material-symbols-outlined animate-[spin_5s_linear_infinite]">
                  asterisk
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              {/* Text Inputs */}
              {[
                {
                  name: "name",
                  placeholder: "Enter Your Full Name",
                  type: "text",
                },
                { name: "email", placeholder: "Email Address", type: "email" },
                { name: "phone", placeholder: "Mobile Number", type: "tel" },
                { name: "company", placeholder: "Company Name", type: "text" },
              ].map((input, i) => (
                <input
                  key={i}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={formData[input.name]}
                  onChange={handleChange}
                  className="w-full h-[55px] bg-transparent border border-white rounded-2xl px-6 text-white placeholder-white focus:outline-none"
                />
              ))}

              {/* Subject Dropdown */}
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full h-[55px] bg-black border border-white rounded-2xl px-6 text-white focus:outline-none"
              >
                <option value="">Subject</option>
                <option value="branding">Branding</option>
                <option value="development">Development</option>
              </select>

              {/* Referral Dropdown */}
              <select
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                className="w-full h-[55px] bg-black border border-white rounded-2xl px-6 text-white focus:outline-none"
              >
                <option value="">How did you hear about us?</option>
                <option value="google">Google</option>
                <option value="instagram">Instagram</option>
                <option value="linkedin">LinkedIn</option>
              </select>

              {/* File Upload */}
              <div className="relative w-full text-white">
                <input
                  id="fileUpload"
                  name="file"
                  type="file"
                  onChange={handleChange}
                  className="hidden"
                />
                <label
                  htmlFor="fileUpload"
                  className="flex items-center justify-between w-full h-[55px] px-6 border border-white rounded-2xl bg-transparent cursor-pointer"
                >
                  <span>{fileName || "Upload Your File"}</span>
                  <span className="material-symbols-outlined">upload</span>
                </label>
              </div>

              {/* Message Box */}
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-white rounded-2xl px-6 py-4 text-white placeholder-white resize-none focus:outline-none"
              />

              {/* Terms & Conditions */}
              <div className="flex items-start space-x-2 mb-2">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="appearance-none w-5 h-5 border border-white rounded-full checked:bg-blue-500 checked:ring-2 checked:ring-black transition-all cursor-pointer"
                />
                <label
                  htmlFor="agreeTerms"
                  className="text-sm text-white text-[14px] md:text-[20px]"
                >
                  I understand and agree to the{" "}
                  <a
                    href="/terms"
                    target="_blank"
                    className="text-white underline text-[14px] md:text-[20px]"
                  >
                    Terms & Conditions
                  </a>
                </label>
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start space-x-2 mb-4">
                <input
                  type="checkbox"
                  name="agreePrivacy"
                  id="agreePrivacy"
                  checked={formData.agreePrivacy}
                  onChange={handleChange}
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
                    className="text-white underline text-[14px] md:text-[20px]"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
              {/* news letter */}
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

              <Recaptcha ref={recaptchaRef} />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-white text-black font-semibold rounded-xl px-8 py-3 flex items-center space-x-2 transition duration-200 ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-200"
                }`}
              >
                <span>{isSubmitting ? "Submitting..." : "SUBMIT"}</span>
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </button>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
