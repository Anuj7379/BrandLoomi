import React from "react";
import Hero from "../components/Hero";
import Empowering from "../components/Empowering";
import Services from "../components/Services";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #0A0F1A 0%, #003E41 100%)",
          color: "#ffffff",
        }}
        className="text-white min-h-screen flex flex-col justify-between px-6 lg:px-20 pt-2  pb-40 font-instink"
      >
        {/* Navbar */}
        <nav className="flex justify-between items-center pt-8 text-sm mb-0">
          <div className="text-xl font-bold font-instink">Brand Kraft</div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                Launchpad
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition">
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center hover:text-cyan-400 text-white space-x-1"
              >
                <span>•</span>
                <span>Let's Connect</span>
                <span className="bg-cyan-400 text-black rounded-full w-6 h-6 flex items-center justify-center">
                  →
                </span>
              </a>
            </li>
          </ul>
        </nav>

      
        <div className="mt-16">
          <Hero />
        </div>
      </div>

      {/* Other Sections */}
      <Empowering />
      <Services />
      <Footer />
    </>
  );
};

export default LandingPage;
