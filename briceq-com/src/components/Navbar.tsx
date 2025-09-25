import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 md:hidden bg-navbar-bg backdrop-blur-md p-2 rounded-lg shadow-lg border border-primary/10"
        aria-label="Toggle mobile menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-off-white transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
          }`}></span>
          <span className={`block w-5 h-0.5 bg-off-white transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span className={`block w-5 h-0.5 bg-off-white transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
          }`}></span>
        </div>
      </button>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 h-full w-35 bg-navbar-bg backdrop-blur-md shadow-2xl shadow-secondary/20 border-r border-primary/10 z-50 transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div className="flex flex-col justify-center space-y-6 items-center pb-20 px-6 h-full">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className={`transition-all duration-300 px-4 py-2 rounded-xl text-base ${
              isActive('/')
                ? 'text-off-white font-bold'
                : 'text-off-white font-medium hover:text-secondary hover:bg-secondary hover:scale-120 hover:shadow-lg hover:shadow-secondary/20'
            }`}
          >
            Home
          </Link>
{/*           <Link
            to="/about"
            onClick={closeMobileMenu}
            className={`transition-all duration-300 px-4 py-2 rounded-xl text-base ${
              isActive('/about')
                ? 'text-off-white font-bold'
                : 'text-off-white font-medium hover:text-secondary hover:bg-secondary hover:scale-120 hover:shadow-lg hover:shadow-secondary/20'
            }`}
          >
            About
          </Link> */}
          <Link
            to="/projects"
            onClick={closeMobileMenu}
            className={`transition-all duration-300 px-4 py-2 rounded-xl text-base ${
              isActive('/projects')
                ? 'text-off-white font-bold'
                : 'text-off-white font-medium hover:text-secondary hover:bg-secondary hover:scale-120 hover:shadow-lg hover:shadow-secondary/20'
            }`}
          >
            Projects
          </Link>
{/*           <Link
            to="/contact"
            onClick={closeMobileMenu}
            className={`transition-all duration-300 px-4 py-2 rounded-xl text-base ${
              isActive('/contact')
                ? 'text-off-white font-bold'
                : 'text-off-white font-medium hover:text-secondary hover:bg-secondary hover:scale-120 hover:shadow-lg hover:shadow-secondary/20'
            }`}
          >
            Contact
          </Link> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
