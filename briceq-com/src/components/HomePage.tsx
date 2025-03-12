import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl font-bold text-white mt-4 pb-5">Welcome to My Website</h1>
      <p className="text-white mt-2 max-w-lg">
        This is a simple homepage built with React and TailwindCSS.
      </p>
    </div>
  );
};

export default HomePage;
