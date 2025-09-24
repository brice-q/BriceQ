import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Modern Projects component with light theme
const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <div className="animate-fade-in-up delay-200 mb-8">
        </div>
        
        {/* Subtitle */}
        <div className="animate-fade-in-up delay-500 mb-12">
          <p className="text-xl text-off-white max-w-2xl mx-auto leading-relaxed mb-4">
            Explore my portfolio of innovative web applications and creative solutions.
          </p>
          <p className="text-lg text-off-white">
            Each project represents a unique challenge and learning experience.
          </p>
        </div>
        
        {/* Under Construction Card */}
        <div className="animate-scale-in delay-700">
          <div className="bg-dark-bg/80 backdrop-blur-sm border border-off-white/20 shadow-xl rounded-3xl p-12 mb-8">
            <div className="text-6xl mb-6">🚧</div>
            <h3 className="text-3xl font-display font-bold text-off-white mb-4">
              Coming Soon
            </h3>
            <p className="text-off-white text-lg mb-6 max-w-lg mx-auto">
              I'm currently working on some exciting projects that will be showcased here. 
              Stay tuned for updates!
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full border border-primary-200">React</span>
              <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full border border-accent-200">TypeScript</span>
              <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full border border-success-200">Next.js</span>
              <span className="bg-warning-100 text-warning-700 px-3 py-1 rounded-full border border-warning-200">Node.js</span>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="animate-fade-in-up delay-1000">
          <p className="text-off-white mb-6">
            Interested in seeing my work in progress?
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="relative bg-dark-bg min-h-screen overflow-hidden font-sans text-off-white">
      <Router>
        <Navbar />
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
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
