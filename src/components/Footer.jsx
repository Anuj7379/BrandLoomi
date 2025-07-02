import React from "react";
import logo from "../assets/logoblack.png";
import facebookIcon from "../assets/blackfacebookLogo.png";
import instaIcon from "../assets/blackinstaLogo.png";
import xIcon from "../assets/BlackXLogo.png";
import linkedinIcon from "../assets/blacklinkedinLogo.png";
import { useNavigate } from 'react-router-dom';

import {
  
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {

    const navigate = useNavigate();


  return (
    <footer className="bg-white border-t border-gray-200 font-semibold px-4 sm:px-6 py-8 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Brand Info */}
        <div className="flex flex-col">
          <img src={logo} alt="" className="h-[48px] w-[176px]" />
          <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
            Affordable, high-quality digital solutions to help startups and
            small businesses launch, grow, and thrive
          </p>
          <div className="flex space-x-4">
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

        {/* Services */}
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-3">Services</h3>
          <ul className="space-y-1.5 text-xs sm:text-sm">
            <li>
              <a
                href="/services/software"
                className="hover:text-black transition-colors duration-200"
              >
                Software Development
              </a>
            </li>
            <li>
              <a
                href="/services/webapp"
                className="hover:text-black transition-colors duration-200"
              >
                Web App Development
              </a>
            </li>
            <li>
              <a
                href="/services/mobile"
                className="hover:text-black transition-colors duration-200"
              >
                Mobile App Development
              </a>
            </li>
            <li>
              <a
                href="/services/marketing"
                className="hover:text-black transition-colors duration-200"
              >
                Social & Digital Media Marketing
              </a>
            </li>
            <li>
              <a
                href="/services/branding"
                className="hover:text-black transition-colors duration-200"
              >
                Branding & Design
              </a>
            </li>
            <li>
              <a
                href="/services/consulting"
                className="hover:text-black transition-colors duration-200"
              >
                Startup Consulting
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-3">Company</h3>
            <ul className="space-y-1.5 text-xs sm:text-sm">
      <li>
        <a
          onClick={() => navigate('/about')}
          className="hover:text-black transition-colors duration-200 cursor-pointer"
        >
          About Us
        </a>
      </li>
      <li>
        <a
          onClick={() => navigate('/portfolio')}
          className="hover:text-black transition-colors duration-200 cursor-pointer"
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          onClick={() => navigate('/contact')}
          className="hover:text-black transition-colors duration-200 cursor-pointer"
        >
          Contact
        </a>
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
      <div className="flex justify-between mt-8 border-t pt-4 text-center text-xs sm:text-sm text-gray-500">
        <p className="mb-2 sm:mb-0">© 2025 Brandloomi. All rights reserved.</p>
        <a href="" className="hover:text-black transition-colors duration-200">
          Terms of Services
        </a>
      </div>
    </footer>
  );
};

export default Footer;
