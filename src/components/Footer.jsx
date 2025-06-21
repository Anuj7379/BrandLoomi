import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 font-semibold px-4 sm:px-6 py-8 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Brand Info */}
        <div className="flex flex-col">
          <h2 className="text-xl sm:text-2xl font-semibold font-serif mb-2">
            Brand Loomi
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
            Affordable, high-quality digital solutions to help startups and small
            businesses launch, grow, and thrive
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <FaFacebookF className="text-lg sm:text-xl" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200"
            >
              <FaInstagram className="text-lg sm:text-xl" />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-700 hover:text-blue-400 transition-colors duration-200"
            >
              <FaTwitter className="text-lg sm:text-xl" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-gray-700 hover:text-blue-700 transition-colors duration-200"
            >
              <FaLinkedinIn className="text-lg sm:text-xl" />
            </a>
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
                href="/about"
                className="hover:text-black transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="hover:text-black transition-colors duration-200"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-black transition-colors duration-200"
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
                href="mailto:brandloomi@gmail.com"
                className="hover:text-black transition-colors duration-200"
              >
                brandloomi@gmail.com
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
      <div className="mt-8 border-t pt-4 text-center text-xs sm:text-sm text-gray-500">
        <p className="mb-2 sm:mb-0">
          © 2025 Brandloomi. All rights reserved.
        </p>
        <a
          href="/terms-of-services"
          className="hover:text-black transition-colors duration-200"
        >
          Terms of Services
        </a>
      </div>
    </footer>
  );
};

export default Footer;