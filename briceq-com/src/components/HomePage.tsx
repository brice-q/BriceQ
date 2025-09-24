import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Creative Developer & Designer";
  const typingSpeed = 80; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto">
        
        {/* Typewriter subtitle */}
        <div className="animate-fade-in-up delay-500">
          <div className="text-2xl md:text-3xl font-medium text-off-white mb-4 min-h-[3rem] flex items-center justify-center">
            <span className="font-mono">
              {displayText}
              <span className="animate-pulse ml-1 text-primary-500">|</span>
            </span>
          </div>
        </div>
        
        {/* Description */}
        <div className="animate-fade-in-up delay-700">
          <p className="text-lg text-off-white max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting exceptional digital experiences with modern technologies and creative solutions. 
            Explore my portfolio of innovative projects and creative work.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="animate-fade-in-up delay-1000">
          <Link 
            to="/projects" 
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25"
          >
            <span>View My Work</span>
            <div className="animate-float">
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>
      
      {/* Floating elements - adjusted for light theme */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-primary-400/60 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent-400/60 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary-300/60 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-accent-300/60 rounded-full animate-pulse delay-2500"></div>
      </div>
    </div>
  );
};

export default HomePage;
