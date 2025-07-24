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
    <footer className="bg-white border-t border-gray-200 font-medium py-8 text-black/80 items-center  font-creato">
      <div className="px-4 mx-4 flex flex-col md:flex-row  justify-between gap-10 sm:gap-8">
        {/* Brand Info */}
        <div className="flex flex-col w-[314px]">
          <img
            src={logo}
            alt="Brandloomi Logo"
            className="h-[50px] w-[176px]"
          />
          <p className="text-[#000000]/80 mb-4 leading-tight mt-4 sm:text-[16px] md:text-[18px] font-normal">
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
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
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
        <div className="w-[300px">
          <h3 className="font-black text-[25px] mb-3">Services</h3>
          <ul className="space-y-1.5">
            {[
              {
                label: "Software Development",
                path: "/services/Softwaredevelopment",
              },
              {
                label: "Web App Development",
                path: "/services/websitedevelopment",
              },
              {
                label: "Mobile App Development",
                path: "/services/MobileAppDevelopment",
              },
              {
                label: "Social & Digital Media Marketing",
                path: "/services/SocialmediaAndmarketing",
              },
              {
                label: "Branding & Design",
                path: "/services/BrandingAndDesign",
              },
              {
                label: "Startup Consulting",
                path: "/services/StartupConsulting",
              },
            ].map((item, i) => (
              <li key={i}>
                <span
                  onClick={() => navigate(item.path)}
                  className="cursor-pointer  text-black/80 transition-colors duration-200 sm:text-[16px] md:text-[18px] font-creato font-normal"
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
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-2 gap-x-4 text-[16px] md:text-[18px] font-creato font-normal">
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
                onClick={() => navigate("/contact")}
                className="cursor-pointer hover:text-black transition-colors duration-200"
              >
                FAQs
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
              <span
                onClick={() => navigate("/contact")}
                className="cursor-pointer hover:text-black transition-colors duration-200"
              >
                Blog
              </span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-[22px] mb-3">Contact</h3>
          <ul className="space-y-1.5  sm:text-[16px] md:text-[18px] font-creato font-normal">
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
      <div className="flex flex-row justify-between items-center gap-8 mt-10 lg:mb-10 border-t pt-4 text-start md:text-left text-[12px] md:text-[16px] text-[#000000]/80 font-creato font-normal mx-2 md:mx-6">
        <p>© 2025 Brandloomi. All rights reserved.</p>

        <div className="flex  md:flex-row items-center gap-2 md:gap-6 text-[14px] md:text-[16px]">
          <a
            href="https://drive.google.com/file/d/1E1FSyZYgqBoaNq3lheAzeo6kYUgDlQPC/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            Privacy Policy
          </a>
          <a
            href="https://drive.google.com/file/d/1-_Knw7morQiatWLt1cHpxx7hKZj2Ec-v/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            Refund Policy
          </a>
          <a
            href="https://drive.google.com/file/d/1dvEnZJKM6XLmqnaRtp6ObRaHGi1mJ0mB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
