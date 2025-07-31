import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/brandloomiLogo.png";
import Connect from "../assets/Connect.png";

const Header = ({ title }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to apply background/shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50 font-creato ${
        scrolled
          ? "bg-[#00080A]/70 backdrop-blur-md shadow-md"
          : "bg-transparent "
      }`}
    >
      <div className="flex justify-between items-center px-6 lg:px-12 pt-5 ">
        {/* Logo + Title */}
        <div className="flex items-center italic font-extrabold">
          <Link to="/">
            <img className="h-[34px] md:h-[58px]" src={logo} alt="logo" />
          </Link>
          <div className="text-[16px] md:text-[25px]  mt-2">{title}</div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="material-symbols-outlined text-white text-[24px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 items-center text-[20px] text-white/80 font-normal">
          <li className="relative">
            <button
              onClick={() => toggleDropdown("company")}
              className="hover:text-cyan-400 transition duration-200"
            >
              Company
            </button>
            {openDropdown === "company" && (
              <ul className="absolute top-full left-0 w-56 mt-2 bg-black/80 rounded-lg shadow-lg z-50 text-[16px]">
                <li>
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:text-cyan-400"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company/careers"
                    className="block px-4 py-2 hover:text-cyan-400"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company/HowWeWork"
                    className="block px-4 py-2 hover:text-cyan-400"
                  >
                    How It Works
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/services/PayWhatYouCanPage"
              className="block px-4 py-2 hover:text-cyan-400 text-white/80"
            >
              Pay What You Can
            </Link>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="hover:text-cyan-400 transition duration-200"
            >
              Services
            </button>
            {openDropdown === "services" && (
              <ul className="absolute top-full left-0 w-56 mt-2 bg-black/80 rounded-lg shadow-lg z-50 text-[16px]">
                <li>
                  <Link
                    to="/services"
                    className="block px-4 py-2 hover:text-cyan-400"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/industries"
                    className="block px-4 py-2 hover:text-cyan-400"
                  >
                    Industries
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/contact"
              className="flex items-center gap-2 group text-white hover:text-cyan-400 transition-colors duration-200"
            >
              <span className="text-cyan-400 text-xl">•</span>
              <span className="group-hover:text-cyan-400 text-[20px]">
                Let's Connect
              </span>
              <img
                src={Connect}
                alt="connectImage"
                className="w-[35px] h-[35px]"
              />
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 px-6 pt-6 pb-4 space-y-6 text-[16px] md:text-[18px] leading-tight">
          <div>
            <p className="text-cyan-400 uppercase mb-2 ">Company</p>
            <ul className="space-y-2 pl-2 text-white/80">
              <li>
                <Link to="/about" className="block hover:text-cyan-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/company/careers"
                  className="block hover:text-cyan-400"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/company/HowWeWork"
                  className="block hover:text-cyan-400"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link
                  to="/services/PayWhatYouCanPage"
                  className="text-cyan-400 uppercase mb-2"
                >
                  Pay What You Can
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-cyan-400 uppercase mb-2">Services</p>
            <ul className="space-y-2 pl-2 text-white/80">
              <li>
                <Link to="/services" className="block hover:text-cyan-400">
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/industries"
                  className="block hover:text-cyan-400"
                >
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Link
              to="/contact"
              className="flex items-center gap-2 group text-white hover:text-cyan-400 transition-colors duration-200"
            >
              <span className="text-cyan-400 text-xl">•</span>
              <span className="group-hover:text-cyan-400 text-[18px]">
                Let's Connect
              </span>
              <img src={Connect} alt="connectImage" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
