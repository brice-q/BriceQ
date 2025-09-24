import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-dark-bg backdrop-blur-md shadow-lg shadow-off-white/20 rounded-3xl px-10 py-3 flex space-x-25 items-center z-50 animate-fade-in-down border border-off-white/20">
      <Link 
        to="/" 
        className={`transition-all duration-300 px-4 py-2 rounded-xl text-sm ${
          isActive('/')
            ? 'text-off-white font-bold'
            : 'text-off-white font-medium hover:text-off-white hover:bg-off-white/10 hover:scale-105'
        }`}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className={`transition-all duration-300 px-4 py-2 rounded-xl text-sm ${
          isActive('/about')
            ? 'text-off-white font-bold'
            : 'text-off-white font-medium hover:text-off-white hover:bg-off-white/10 hover:scale-105'
        }`}
      >
        About
      </Link>
      <Link 
        to="/projects" 
        className={`transition-all duration-300 px-4 py-2 rounded-xl text-sm ${
          isActive('/projects')
            ? 'text-off-white font-bold'
            : 'text-off-white font-medium hover:text-off-white hover:bg-off-white/10 hover:scale-105'
        }`}
      >
        Projects
      </Link>
      <Link 
        to="/contact" 
        className={`transition-all duration-300 px-4 py-2 rounded-xl text-sm ${
          isActive('/contact')
            ? 'text-off-white font-bold'
            : 'text-off-white font-medium hover:text-off-white hover:bg-off-white/10 hover:scale-105'
        }`}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
