import { useState } from "react";
import greenTick from "../assets/greenTick.png";
import api from "../utils/api";


const NewApplicationLandingPageForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    referralId: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await api.post("/inquire", formData);
      if (response.data.success) {
        setMessage(" Submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          referralId: "",
        });
      } else {
        setMessage(" Submission failed. Try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage(" Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8 mb-8 md:justify-center text-white font-creato mx-6">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-1/2">
        <div>
          <div className="flex items-center font-sans gap-4 font-black italic mb-4 mt-4">
            <div className="text-[20px] md:text-[25px] whitespace-nowrap ">
              Start Now:   Pay What You Can!
            </div>
            <div className="h-px bg-white w-full" />
          </div>
          <p className="text-[16px] md:text-[25px] font-thin">
            Every month, we select a deserving startup to receive a professional
            landing page—regardless of their budget.
          </p>
        </div>

        <div className="text-[16px] md:text-[20px] font-black italic mt-4">
          How It Works
        </div>

        {[
          "Submit your story and a short video.",
          "We select one winner each month.",
          "We build your landing page. You pay what you can.",
          "Share your testimonial and success story.",
        ].map((text, idx) => (
          <div key={idx} className="flex text-white items-start gap-4 mt-6">
            <img
              src={greenTick}
              alt="check"
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            />
            <p className="font-normal text-[16px] md:text-[20px]">{text}</p>
          </div>
        ))}
      </div>

      {/* Vertical Divider */}
      <div className="h-[420px] w-[1px] bg-white/80 mt-10 hidden md:block" />

      {/* Right Section (Form) */}
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex items-center font-creato gap-4 font-black italic mb-4">
          <div className="text-[20px] md:text-[25px] whitespace-nowrap">
            Work Inquiries
          </div>
          <div className="h-px bg-white w-full" />
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-5 text-white">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full h-[55px] bg-transparent border border-white rounded-2xl px-6 text-white placeholder-white focus:outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            required
            className="w-full h-[55px] bg-transparent border border-white rounded-2xl px-6 text-white placeholder-white focus:outline-none"
          />

          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile number"
            required
            className="w-full h-[55px] bg-transparent border border-white rounded-2xl px-6 text-white placeholder-white focus:outline-none"
          />

          <input
            type="text"
            name="referralId"
            value={formData.referralId}
            onChange={handleChange}
            placeholder="Referral ID"
            className="w-full h-[55px] bg-transparent border border-white rounded-2xl px-6 text-white placeholder-white focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-white text-black font-semibold rounded-xl px-8 py-3 flex items-center space-x-2 transition duration-200"
          >
            {loading ? "Submitting..." : "SUBMIT →"}
          </button>

          {message && <p className="text-sm mt-2 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default NewApplicationLandingPageForm;
