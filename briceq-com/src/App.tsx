import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="relative bg-gray-700 min-h-screen">
      <Router>
        <Navbar />
        <div className="text-3xl font-bold p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
