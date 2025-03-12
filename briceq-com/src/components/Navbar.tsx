import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 shadow-lg rounded-full px-6 py-3 flex space-x-8 items-center">
      <Link to="/" className="text-white font-semibold hover:text-blue-500">Home</Link>
      <Link to="/about" className="text-white font-semibold hover:text-blue-500">About</Link>
      <Link to="/contact" className="text-white font-semibold hover:text-blue-500">Contact</Link>
    </nav>
    
  );
};

export default Navbar;
