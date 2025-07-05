import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/brandloomiLogo.png";

const Header = ({ title }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="flex justify-between items-center px-6 lg:px-24 pt-8 text-sm relative z-50 font-medium bg-transparent">
      <div className="flex items-center italic font-extrabold ">
        <Link to="/">
          <img className="h-[48px]" src={logo} alt="logo" />
        </Link>
        <div className="text-white text-[25px] mt-1">{title}</div>
      </div>

      <ul className="hidden md:flex space-x-6 gap-6 items-center relative text-white text-[18px]">
        {/* Home */}
        <li>
          <Link to="/" className="hover:text-cyan-400 transition duration-200">
            Home
          </Link>
        </li>

        {/* Services Dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("services")}
            className="hover:text-cyan-400 transition duration-200 focus:outline-none"
          >
            Services
          </button>
          {openDropdown === "services" && (
            <ul className="absolute top-full left-0 w-56 mt-2 bg-transparent rounded-lg text-white shadow-lg  z-50 text-[15px]">
              <li>
                <Link
                  to="/services"
                  className="block px-4 py-2 hover:text-cyan-400 transition"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/how-it-works"
                  className="block px-4 py-2 hover:text-cyan-400 transition"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/services/industries"
                  className="block px-4 py-2 hover:text-cyan-400 transition"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/services/pay-what-you-can"
                  className="block px-4 py-2 hover:text-cyan-400 transition"
                >
                  Pay What You Can
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Company Dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("company")}
            className="hover:text-cyan-400 transition duration-200 focus:outline-none"
          >
            Company
          </button>
          {openDropdown === "company" && (
            <ul className="absolute text-[15px] top-full left-0 w-56 mt-2 bg-transparent text-white shadow-lg rounded-md z-50">
              <li>
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:text-cyan-400 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/company/careers"
                  className="block px-4 py-2 hover:text-cyan-400 transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/company/faq"
                  className="block px-4 py-2 hover:text-cyan-400 transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/company/blogs"
                  className="block px-4 py-2 hover:text-cyan-400 transition"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Contact */}
        <li>
          <Link
            to="/contact"
            className="flex items-center hover:text-cyan-400 space-x-1"
          >
            <span className="text-cyan-400 text-xl">•</span>
            <span>Let's Connect</span>
            <span className="bg-cyan-400 text-black rounded-full w-6 h-6 flex items-center justify-center">
              →
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
