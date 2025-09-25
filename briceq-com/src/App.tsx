import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Modern Projects component with light theme

const App: React.FC = () => {
  return (
    <div className="relative bg-dark-bg min-h-screen overflow-hidden font-sans text-off-white">
      <Router>
        <Navbar />
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        
        {/* Dark theme background */}
        <div className="fixed inset-0 -z-20">
          {/* Base dark background */}
          <div className="absolute inset-0 bg-dark-bg"></div>

          {/* Subtle animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-accent-500/3 to-primary-500/5 bg-300% animate-gradient"></div>

          {/* Soft radial gradients for depth */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

          {/* Ultra-subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(240,244,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(240,244,248,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </Router>
    </div>
  );
};

export default App;
