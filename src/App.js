import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'material-symbols';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        {/* default route handling  */ }
        <Route path="*" element={<LandingPage />} />
        

        {/* Other routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
