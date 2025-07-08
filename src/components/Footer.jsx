import React from "react";
import SecondLogo from "../assets/SecondLogo.png";
import facebookIcon from "../assets/blackfacebookLogo.png";
import instaIcon from "../assets/blackinstaLogo.png";
import xIcon from "../assets/BlackXLogo.png";
import linkedinIcon from "../assets/blacklinkedinLogo.png";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t border-gray-200 font-medium py-8 text-black items-center  font-creato">
      <div className="px-14 mx-auto lg:gap- flex flex-wrap  justify-between gap-10 sm:gap-8">
        {/* Brand Info */}
        <div className="flex flex-col w-[314px]">
          <img src={SecondLogo} alt="Brandloomi Logo" className="h-[32px] w-[176px]" />
          <p className="text-gray-600 mb-4 leading-tight mt-4 text-[20px] font-normal">
            Affordable, high-quality digital solutions to help startups and
            small businesses launch, grow, and thrive.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instaIcon} alt="Instagram" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src={xIcon} alt="X" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="w-[300px">
          <h3 className="font-black text-[25px] mb-3">Services</h3>
          <ul className="space-y-1.5">
            {[
              { label: "Software Development", path: "/services/Softwaredevelopment" },
              { label: "Web App Development", path: "/services/websitedevelopment" },
              { label: "Mobile App Development", path: "/services/MobileAppDevelopment" },
              { label: "Social & Digital Media Marketing", path: "/services/SocialmediaAndmarketing" },
              { label: "Branding & Design", path: "/services/BrandingAndDesign" },
              { label: "Startup Consulting", path: "/services/StartupConsulting" }
            ].map((item, i) => (
              <li key={i}>
                <span
                  onClick={() => navigate(item.path)}
                  className="cursor-pointer hover:text-black transition-colors duration-200 text-[18px] font-creato font-normal"
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-[22px] mb-3">Company</h3>
          <ul className="space-y-1.5 text-[18px] font-creato font-normal">
            <li>
              <span onClick={() => navigate("/about")} className="cursor-pointer hover:text-black transition-colors duration-200 text-[16px]">About Us</span>
            </li>
            <li>
              <span onClick={() => navigate("/portfolio")} className="cursor-pointer hover:text-black transition-colors duration-200 text-[16px]">Portfolio</span>
            </li>
            <li>
              <span onClick={() => navigate("/contact")} className="cursor-pointer hover:text-black transition-colors duration-200 text-[16px]">Contact</span>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-black transition-colors duration-200 text-[16px]">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-[22px] mb-3">Contact</h3>
          <ul className="space-y-1.5  text-[18px] font-creato font-normal">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-600" />
              <a href="mailto:hello@brandloomi.com" className="hover:text-black transition-colors duration-200">
                hello@brandloomi.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-gray-600" />
              <a href="tel:+3531299898982" className="hover:text-black transition-colors duration-200">
                +353 129 989 8982
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-600" />
              <span>Dublin, Ireland</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-10 lg:mb-10 border-t pt-4 text-center text-[20px] text-gray-700 mx-14 font-creato font-normal">
        <p>© 2025 Brandloomi. All rights reserved.</p>
        <a href="/terms-of-service" className="hover:text-black transition-colors duration-200">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
