import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'material-symbols';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';

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
      </Routes>
    </Router>
  );
}

export default App;
