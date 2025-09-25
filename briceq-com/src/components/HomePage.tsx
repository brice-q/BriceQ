import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
      <h1 className="text-4xl font-bold mb-8">BriceQ</h1>

      {/* Main content section with image and text */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-8 mb-12">
        {/* Left side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/src/assets/disc.png"
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Right side - Welcoming message */}
        <div className="flex-1 text-left lg:text-left">
          <h2 className="text-3xl font-bold mb-4 text-off-white">Welcome to My Portfolio</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I'm BriceQ, a passionate developer creating innovative solutions and beautiful digital experiences.
            Explore my work, learn about my journey, and let's connect to build something amazing together.
          </p>
        </div>
      </div>

      {/* Navigation buttons section */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        </div>
      </div>
    </div>
  );
};

export default HomePage;
