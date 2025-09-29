import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-6xl font-bold mb-40 text-[#0ea5e9] animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">BriceQ</h1>

      {/* Main content section with image and text */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-10 mb-25">
        {/* Left side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/disc.png"
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full shadow-lg border-2 border-[#0ea5e9]"
          />
        </div>

        {/* Right side - Welcoming message */}
        <div className="flex-1 text-center lg:text-center">
          <h2 className="text-3xl font-bold mb-4 text-off-white">Welcome to my Portfolio!</h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Explore my projects and skills as a full-stack developer.
          </p>
        </div>
      </div>

      {/* Navigation buttons section */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className={`transition-all duration-300 px-4 py-2 rounded-xl text-3xl font-bold text-[#0ea5e9] hover:text-secondary hover:bg-secondary hover:scale-120 hover:shadow-lg hover:shadow-secondary/20
              }`}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
