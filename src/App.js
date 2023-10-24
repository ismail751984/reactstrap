import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactNavbar from './components/ReactNavbar';
import Home from './pages/Home';
import AsiaNews from './components/AsiaNews';
import WestrenNews from './components/WestrenNews';
import Weather from './components/Weather';
import Sports from './components/Sports';
import Celebrity from './components/Celebrity';


function App() {
  return (
   //<MapsLeaflet />
    <Router>
    <div>
      <ReactNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/an" element={<AsiaNews />} />
        <Route path="/wn" element={<WestrenNews />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/celb" element={<Celebrity />} />
        
      </Routes>
    </div>
  </Router>

  );
}

export default App;
