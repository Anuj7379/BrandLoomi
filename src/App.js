import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/services' element={<ServicesPage/>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
