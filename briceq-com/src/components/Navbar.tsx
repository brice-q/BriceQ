import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
      } else {
        // Scrolling up or at the top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 h-full w-35 bg-navbar-bg backdrop-blur-md shadow-2xl shadow-secondary/20 border-r border-primary/10 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="flex flex-col justify-center space-y-6 items-center pb-20 px-6 h-full">
      <Link
        to="/"
        className={`transition-all duration-300 px-4 py-2 rounded-xl text-base ${
          isActive('/')
            ? 'text-off-white font-bold'
            : 'text-off-white font-medium hover:text-secondary hover:bg-secondary hover:scale-120 hover:shadow-lg hover:shadow-secondary/20'
        }`}
      >
        Home
      </Link>
{/*       <Link
        to="/about"
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
        className={`transition-all duration-300 px-4 py-2 rounded-xl text-base ${
          isActive('/projects')
            ? 'text-off-white font-bold'
            : 'text-off-white font-medium hover:text-secondary hover:bg-secondary hover:scale-120 hover:shadow-lg hover:shadow-secondary/20'
        }`}
      >
        Projects
      </Link>
{/*       <Link
        to="/contact"
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
  );
};

export default Navbar;
