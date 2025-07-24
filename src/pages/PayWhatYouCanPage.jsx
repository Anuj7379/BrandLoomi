import React, { useState } from "react";
import api from "../utils/api.js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/brandloomiLogo.png";

import { toast } from "sonner";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import ParticipationAndWorking from "../components/ParticipationAndWorking.jsx";

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
              <div   style={{
                background: `linear-gradient(to bottom,  #34BDFE 53%, #17E48A 70%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>PAY WHAT YOU CAN</div>
            </div>
          </div>
          <div className=" max-w-[1240px] font-creato mt-16">
            <p className="text-[38px] leading-tight font-black italic">We believe every great idea deserves a digital home - regardless of budget. Apply for our monthly draw and get a professional website or app built at a price you decide.</p>
            <div className="pb-10 mb-14 text-[18px] mt-4 font-normal">
              At Brandloomi, we understand that many startups and small businesses struggle to afford quality digital services. That’s why we created the “Pay What You Can” program - a unique initiative designed to democratize access to professional websites, mobile apps, and digital marketing.
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

      <ParticipationAndWorking />

      <div className=" font-creato">
        <div className="w-full max-w-screen-xl mx-auto ">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Heading -1 */}
            <div className="gap-4">
              <div className="flex flex-col font-creato  mb-4 ">
                <p className="text-[50px] font-black italic space-y-4">
                  Contact & Business Information
                </p>
                <p>
                  We need some basic details about you and your business so we
                  can get in touch and understand your context better.
                </p>
                <p>
                  Please double-check your email and phone number — that’s how
                  we’ll contact you if you’re selected!
                </p>
              </div>
              <div className="flex flex-row mb-10 gap-10">
                {/* first half */}
                <div className="w-1/2 space-y-4">
                  {[
                    { label: "businessName", name: "businessName" },
                    { label: "Contact Person Full Name", name: "contactName" },
                    {
                      label: "Contact Person Email ",
                      name: "contactEmail",
                      type: "email",
                    },
                    { label: "Conact person Phone", name: "contactPhone" },
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
                </div>
                {/* second half */}
                <div className="w-1/2 space-y-4">
                  {[
                    { label: "businessIndustry", name: "businessIndustry" },
                    { label: "businessLocation", name: "businessLocation" },
                    { label: "websiteUrl", name: "website" },
                    { label: "Social Media Links", name: "socialMediaLinks" },
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
                </div>
              </div>
              {/* ......... */}
              <div className="flex-col mt-4">
                <div className="flex flex-col font-creato mb-4 ">
                  <p className="text-[50px] font-black italic  space-y-4">
                    About Your Business/Startup
                  </p>
                  <p>We’d love to know what drives you.</p>
                  <p>
                    This section helps us understand what your business is all
                    about, what makes it special, and how a website could
                    support your growth. Be authentic — we value honesty over
                    perfection!
                  </p>
                </div>
                <div className="flex gap-10">
                  <div className="w-1/2  space-y-4">
                    {[
                      { label: "Business Description", name: "description" },
                      { label: "Problem Solved", name: "problemSolve" },

                      {
                        label: "Founded Date",
                        name: "foundedDate",
                        type: "date",
                      },
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
                  </div>
                  <div className="1/2  space-y-4">
                    {[
                      {
                        label: "Marketing Challenges",
                        name: "marketingChallenges",
                      },
                      { label: "Target Audience", name: "targetAudience" },

                      { label: "Employees Count", name: "employeesCount" },
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
                  </div>
                </div>
              </div>
              {/* ..... */}
              <div className="flex-col mt-4">
                <div className="flex flex-col font-creato mb-4 ">
                  <p className="text-[50px] font-black italic  space-y-4">
                    Your Vision for a Website
                  </p>
                  <p>You don’t need to be a tech expert!</p>
                  <p>
                    Just tell us what you'd love your future website to do.
                    Whether it’s about getting more customers, showcasing your
                    work, or simplifying bookings — we’re here to help you bring
                    that vision to life. Feel free to dream big!
                  </p>
                </div>
                <div className="flex gap-10">
                  <div className="w-1/2  space-y-4">
                    {[
                      { label: "Website Goals", name: "websiteGoals" },
                      {
                        label: "Branding Assets Description",
                        name: "brandingAssetsDescription",
                      },
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
                  </div>
                  <div className="w-1/2  space-y-4">
                    {[
                      {
                        label: "Other Website Goals",
                        name: "websiteGoalsOther",
                      },

                      { label: "Admired Websites", name: "admiredWebsites" },
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
                  </div>
                </div>
              </div>
              {/* ................... */}
              <div className="flex-col mt-4">
                <div className="flex flex-col font-creato mb-4 ">
                  <p className="text-[50px] font-black italic  space-y-4">
                    The 2-Minute Video Submission (Essential!)
                  </p>
                  <p>
                    This short video is your chance to shine! We want to see the
                    real, passionate human behind the business. Don’t stress
                    about making it “perfect” — we’re not judging your video
                    editing skills, just your sincerity and drive. <br />
                    Keep it under 2 minutes. Make sure the file is under 200MB
                    if uploading. <br /> Or share a public link (Google Drive,
                    YouTube, etc.).
                  </p>
                </div>
                <div className="flex gap-10">
                  <div className="w-1/2  space-y-4">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 bg-transparent border border-white/50 rounded-xl text-white focus:outline-none "
                    />
                  </div>
                  <div className="w-1/2  space-y-4">
                    {[
                      { label: "Video Link (Optional)", name: "videoLink" },
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
                  </div>
                </div>
              </div>
              {/* ......... */}
              <div className="flex-col mt-4">
                <div className="flex flex-col font-creato mb-4">
                  <p className="text-[50px] font-black italic  space-y-4">
                    How You Heard About Us
                  </p>
                  <p>This part is totally optional.</p>
                  <p>
                    It helps us understand who we’re reaching and how we can
                    improve. Your answers here will not affect your application.
                  </p>
                </div>
                <div className="flex gap-10">
                  <div className="w-1/2  space-y-4">
                    {[
                      {
                        label: "How did you hear about us?",
                        name: "heardAboutUs",
                      },
                      {
                        label: "Other (Heard About Us)",
                        name: "heardAboutUsOther",
                      },
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
                  </div>
                  <div className="w-1/2  space-y-4">
                    {[
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
                  </div>
                </div>
              </div>
              {/* ,............ */}

              <div className="mt-8 mb-4 space-x-4">
                <div className="text-[18px] mb-4 font-creato ">
                  <p className="font-normal">
                    A quick recap before you hit submit. <br /> We believe in
                    making professional websites accessible. If you’re selected,
                    we’ll build your site — and you’ll pay what you truly can
                    afford, no pressure. <br />
                    Please review and accept the terms to complete your
                    application.
                  </p>
                </div>

                <div className="font-creato ">
                  <p className="text-[50px] font-black italic">
                    "Pay What You Can" Agreement & Terms
                  </p>
                  <p className="font-black italic text-[30px] ">
                    Understanding the "Pay What You Can" Model:
                  </p>
                  <p className="text-[18px] font-normal">
                    "As part of our commitment to supporting small businesses,
                    if you are selected as our monthly winner, we will design
                    and develop a professional website tailored to your needs.
                    In return, we ask you to contribute what you genuinely can
                    afford. This is a voluntary contribution, and your ability
                    to pay will not influence your selection."
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <input
                      type="checkbox"
                      name="agreementPayWhatYouCan"
                      checked={formData.agreementPayWhatYouCan}
                      onChange={handleChange}
                      className="font-creato font-normal appearance-none mt-1 w-4 h-4 border border-white rounded-full checked:bg-blue-500 transition duration-200"
                    />
                    <p className="text-[18px] text-white/90 leading-snug">
                      I understand and agree to the{" "}
                      <strong>"Pay What You Can"</strong> model.
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="font-black italic text-[30px]">
                    Terms and Conditions:
                  </p>
                  <ul className="text-white/80 list-disc pl-6  text-[18px] leading-relaxed">
                    <li>
                      By submitting this application, you agree to our full
                      terms and conditions{" "}
                      <a
                        href="https://drive.google.com/file/d/1dvEnZJKM6XLmqnaRtp6ObRaHGi1mJ0mB/view?usp=sharing"
                        className="underline hover:text-white"
                      >
                        (View T&Cs)
                      </a>
                      .
                    </li>
                    <li>
                      You acknowledge that only one winner will be selected each
                      month. We reserve the right to verify all information
                      provided.
                    </li>
                    <li>
                      Winners will be notified via email and phone. If a winner
                      cannot be reached or does not respond within (e.g., 48
                      hours), another winner may be selected.
                    </li>
                  </ul>
                </div>
                {/* .. */}
                {/* Agreements */}

                <div className="flex items-start gap-3 mt-2">
                  <input
                    type="checkbox"
                    name="agreementTerms"
                    checked={formData.agreementTerms}
                    onChange={handleChange}
                    className="font-creato font-normal appearance-none mt-1 w-4 h-4 border border-white rounded-full checked:bg-blue-500 transition duration-200"
                  />
                  <p className="text-[19px] text-white/70">
                    *I have read and agree to the{" "}
                    <a
                      href="https://drive.google.com/file/d/1E1FSyZYgqBoaNq3lheAzeo6kYUgDlQPC/view?usp=drive_link"
                      className="underline text-white"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black font-bold rounded-xl px-6 py-3 hover:bg-gray-200"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {/* Message */}
            {message && (
              <p className="text-sm mt-4 font-medium text-red-500">{message}</p>
            )}
          </form>
        </div>
      </div>

      <LaunchBanner headingText="So? Pay What You can " />
      <Footer />
    </div>
  );
}
