import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "material-symbols";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import ContactUs from "./pages/ContactUs";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import BrandingAndDesign from "./pages/Branding&Design";
import StartupAndConsulting from "./pages/StartupConsulting";
import SocialmediaAndmarketing from "./pages/SocialMediaAndDigitalmarketing";
import Careers from "./pages/Careers";
import PayWhatYouCanPage from "./pages/PayWhatYouCanPage";
import HowWeWork from "./pages/HowWeWork";
import Industries from "./pages/Industries";

function App() {
  return (
    <Router>
      <Routes>
        {/* default route handling  */}
        <Route path="*" element={<LandingPage />} />

        {/* Other routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services/websitedevelopment" element={<WebsiteDevelopment />} />
        <Route path="/services/MobileAppDevelopment" element={<MobileAppDevelopment />}/>
        <Route path="/services/Softwaredevelopment" element={<SoftwareDevelopment />} />
        <Route path="/services/BrandingAndDesign" element={<BrandingAndDesign/>} />
        <Route path="/services/StartupConsulting" element={<StartupAndConsulting/>} />
        <Route path="/services/SocialmediaAndmarketing" element={<SocialmediaAndmarketing/>} />
        <Route path="/company/careers" element={<Careers/>} />
        <Route path="/services/PayWhatYouCanPage" element={<PayWhatYouCanPage/>} />
        <Route path="/company/HowWeWork" element={<HowWeWork/>} />
        <Route path="/services/industries" element={<Industries/>} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
