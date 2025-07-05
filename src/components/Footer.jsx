import React from "react";
import logo from "../assets/logoblack.png";
import facebookIcon from "../assets/blackfacebookLogo.png";
import instaIcon from "../assets/blackinstaLogo.png";
import xIcon from "../assets/BlackXLogo.png";
import linkedinIcon from "../assets/blacklinkedinLogo.png";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t border-gray-200 font-semibold   py-8 text-gray-700 items-center">
      <div className="px-14  mx-auto lg:gap-16   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 ">
        {/* Brand Info */}
        <div className="flex flex-col">
          <img src={logo} alt="Brandloomi Logo" className="h-[48px] w-[176px]" />
          <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed ">
            Affordable, high-quality digital solutions to help startups and
            small businesses launch, grow, and thrive.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instaIcon}
                alt="Instagram"
                className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={xIcon}
                alt="X"
                className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-3">Services</h3>
          <ul className="space-y-1.5 text-xs sm:text-sm">
            <li>
              <span
                onClick={() => navigate("/services/Softwaredevelopment")}
                className="cursor-pointer hover:text-black transition-colors duration-200"
              >
                Software Development
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/services/websitedevelopment")}
                className="cursor-pointer hover:text-black transition-colors duration-200"
              >
                Web App Development
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/services/MobileAppDevelopment")}
                className="cursor-pointer hover:text-black transition-colors duration-200"
              >
                Mobile App Development
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/services/SocialmediaAndmarketing")}
                className="cursor-pointer hover:text-black transition-colors duration-200"
              >
                Social & Digital Media Marketing
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/services/BrandingAndDesign")}
                className="cursor-pointer hover:text-black transition-colors duration-200"
              >
                Branding & Design
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/services/StartupConsulting")}
                className="cursor-pointer hover:text-black transition-colors duration-200"
              >
                Startup Consulting
              </span>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-3">Company</h3>
          <ul className="space-y-1.5 text-xs sm:text-sm">
            <li>
              <span
                onClick={() => navigate("/about")}
                className="cursor-pointer hover:text-black transition-colors duration-200"
              >
                About Us
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/portfolio")}
                className="cursor-pointer hover:text-black transition-colors duration-200"
              >
                Portfolio
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/contact")}
                className="cursor-pointer hover:text-black transition-colors duration-200"
              >
                Contact
              </span>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-black transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-3">Contact</h3>
          <ul className="space-y-1.5 text-xs sm:text-sm">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-600" />
              <a
                href="mailto:hello@brandloomi.com"
                className="hover:text-black transition-colors duration-200"
              >
                hello@brandloomi.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-gray-600" />
              <a
                href="tel:+3531299898982"
                className="hover:text-black transition-colors duration-200"
              >
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
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-8 border-t pt-4 text-center text-xs sm:text-sm text-gray-500 mx-14">
        <p>© 2025 Brandloomi. All rights reserved.</p>
        <a
          href="/terms-of-service"
          className="hover:text-black transition-colors duration-200"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
