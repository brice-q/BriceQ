import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl font-bold text-white mt-4 pb-5">Welcome to My Website</h1>
      <p className="text-white mt-2 max-w-lg">Check out my projects here!</p>
      <div className="pt-5 text-white">
        <Link to="/projects" className="text-white font-semibold hover:text-blue-500">
          <FaArrowAltCircleRight size={50}/>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
