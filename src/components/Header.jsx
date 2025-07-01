import { Link } from "react-router-dom";
import logo from '../assets/brandloomiLogo.png'

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-6 lg:px-20 pt-8 text-sm relative z-10 font-medium">
      <img className="h-[48px]" src={logo} alt="logo" />
      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <Link to="/" className="hover:text-cyan-400 transition duration-200">Home</Link>
        </li>
        <li>
          <Link to="/launchpad" className="hover:text-cyan-400 transition duration-200">Launchpad</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-cyan-400 transition duration-200">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="flex items-center hover:text-cyan-400 space-x-1">
            <span className="text-cyan-400 text-xl">•</span>
            <span>Let's Connect</span>
            <span className="bg-cyan-400 text-black rounded-full w-6 h-6 flex items-center justify-center">→</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
