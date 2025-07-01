import React, { useState } from "react";
import logo from "../assets/brandloomiLogo.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import facebookIcon from "../assets/facebook.png";
import instaIcon from "../assets/insta.png";
import xIcon from "../assets/X.png";
import linkedinIcon from "../assets/linkedin.png";
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
      {/* Full Page with Dark Background */}
      <div className="relative min-h-screen text-white font-['General_Sans',sans-serif] overflow-hidden bg-[#00080A]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[200px] rounded-full bg-cyan-400 blur-[200px] opacity-100 top-[270px] left-[-28px] z-0" />

        <Header />

        {/* Hero Section */}
        <div className="relative z-10 px-4 md:px-10 pt-24 pb-32 max-w-7xl mx-auto">
          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-black italic uppercase">
            <div>LET'S</div>
            <div>BUILD GREAT</div>
            <div>SOMETHING </div>
          </h1>
        </div>

        <section className="flex justify-center px-6 py-10">
          {/* Left Section */}
          <div className="text-white pr-10 border-r border-white w-1/3 flex flex-col items-center">
            <div className=" w-60">
              <img className="h-[48px]" src={logo} alt="logo" />

              <p className="mt-3 text-sm leading-6">
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
          </div>

          {/* Right Form Section */}
          <div className="pl-32 w-2/3">
            <div className="flex items-center space-x-4 mb-8">
              <h3 className="text-white text-2xl font-bold italic">
                Work Inquiries
              </h3>
              <div className="h-px w-[400px] bg-white"></div>
              <span class="material-symbols-outlined ">asterisk</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 items-center">
              <input
                name="name"
                type="text"
                placeholder="Enter Your Full Name"
                onChange={handleChange}
                className="w-[614px] h-[59px] bg-transparent border border-white rounded-3xl px-6 text-white placeholder-white"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-[614px] h-[59px] bg-transparent border border-white rounded-3xl px-6 text-white placeholder-white"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Mobile Number"
                onChange={handleChange}
                className="w-[614px] h-[59px] bg-transparent border border-white rounded-3xl px-6 text-white placeholder-white"
              />

              <select
                name="subject"
                onChange={handleChange}
                className="w-[614px] h-[59px] bg-transparent border border-white rounded-3xl px-6 text-white"
              >
                <div className="text-black">
                  <option value="">Subject</option>
                  <option value="branding">Branding</option>
                  <option value="development">Development</option>
                </div>
              </select>

              <input
                name="company"
                type="text"
                placeholder="Company Name"
                onChange={handleChange}
                className="w-[614px] h-[59px] bg-transparent border border-white rounded-3xl px-6 text-white placeholder-white"
              />

              <select
                name="referral"
                onChange={handleChange}
                className="w-[614px] h-[59px] bg-transparent border border-white rounded-3xl px-6 text-white"
              >
                <div className="text-black ">
                  <option value="">How did you hear about us?</option>
                  <option value="google">Google</option>
                  <option value="instagram">Instagram</option>
                  <option value="linkedin">LinkedIn</option>
                </div>
              </select>

              <div className="relative w-full text-white md:w-[614px]">
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
                  <span className="text-white opacity-100">
                    Upload Your File
                  </span>
                  <span className="material-symbols-outlined !text-white">
                    upload
                  </span>
                </label>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                onChange={handleChange}
                className="w-[614px] h-[209px] bg-transparent border border-white rounded-2xl px-6 py-4 text-white placeholder-white resize-none"
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

        {/* */}
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
