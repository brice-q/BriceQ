import React from "react";
import profilePic from "../assets/disc.png";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <img src={profilePic} alt="Picture" className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-lg" />
      <h1 className="text-5xl font-bold text-white pt-5">About Me</h1>
      <p className="text-white mt-4 max-w-3xl">
        I'm a full-stack developer passionate about building amazing web experiences. This site is a personal project to showcase my work and ideas.
      </p>
    </div>
  );
};

export default About;
