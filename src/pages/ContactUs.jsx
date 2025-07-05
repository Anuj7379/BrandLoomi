import React, { useState } from "react";
import logo from "../assets/brandloomiLogo.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import facebookIcon from "../assets/facebook.png";
import instaIcon from "../assets/insta.png";
import xIcon from "../assets/X.png";
import linkedinIcon from "../assets/linkedin.png";
import Lottie from "lottie-react";
import ContactAnimation from "../assets/animation/contactAnimation.json";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    company: "",
    referral: "",
    file: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      data.append(key, val);
    });

    try {
      const res = await fetch("https://", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      alert("Submitted Successfully!");
    } catch (err) {
      console.error(err);
      alert("Submission failed!");
    }
  };

  return (
    <>
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-[#00080A]">
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />

        <div className="relative z-10 px-6 pt-24 pb-10 max-w-screen-xl mx-auto lg:mx-16">
          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-black italic uppercase leading-[1.08]">
            <div>LET'S</div>
            <div>BUILD GREAT</div>
            <div>SOMETHING </div>
          </h1>
        </div>

        <section className="flex flex-col lg:flex-row justify-center gap-12 px-6 pb-20">
          {/* Left Section */}
          <div className="text-white border-r lg:pr-10 border-white lg:w-1/3 w-full flex flex-col items-center">
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

            <div className="w-72 h-72 lg:w-96 lg:h-96 mt-16">
              <Lottie animationData={ContactAnimation} loop={true} />
            </div>
          </div>

          {/* Right Form Section */}
          <div className="lg:pl-16 w-full lg:w-2/3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-8">
              <h3 className="text-white text-2xl font-bold italic">
                Work Inquiries
              </h3>
              <div className="hidden sm:block h-px flex-1 bg-white"></div>
              <div className="text-2xl">
                <span className="material-symbols-outlined animate-[spin_5s_linear_infinite]">
                  asterisk
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  onChange={handleChange}
                  className="w-full lg:w-[614px] h-[59px] bg-transparent border border-white rounded-3xl px-6 text-white placeholder-white"
                />
              ))}

              <select
                name="subject"
                onChange={handleChange}
                className="w-full lg:w-[614px] h-[59px] bg-transparent border border-white rounded-3xl px-6 text-white"
              >
                <option value="">Subject</option>
                <option value="branding">Branding</option>
                <option value="development">Development</option>
              </select>

              <select
                name="referral"
                onChange={handleChange}
                className="w-full lg:w-[614px] h-[59px] bg-transparent border border-white rounded-3xl px-6 text-white"
              >
                <option value="">How did you hear about us?</option>
                <option value="google">Google</option>
                <option value="instagram">Instagram</option>
                <option value="linkedin">LinkedIn</option>
              </select>

              <div className="relative text-white w-full lg:w-[614px]">
                <input
                  id="fileUpload"
                  name="file"
                  type="file"
                  onChange={handleChange}
                  className="hidden"
                />
                <label
                  htmlFor="fileUpload"
                  className="flex items-center justify-between w-full h-[59px] px-6 border border-white rounded-3xl bg-transparent cursor-pointer"
                >
                  <span className="text-white">Upload Your File</span>
                  <span className="material-symbols-outlined">upload</span>
                </label>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                onChange={handleChange}
                className="w-full lg:w-[614px] h-[209px] bg-transparent border border-white rounded-2xl px-6 py-4 text-white placeholder-white resize-none"
              />

              <button
                type="submit"
                className="bg-white text-black font-semibold rounded-xl px-8 py-3 flex items-center space-x-2 hover:bg-gray-200"
              >
                <span>SUBMIT</span>
                <span>➡</span>
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
