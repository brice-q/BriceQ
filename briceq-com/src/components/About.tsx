import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const skills = [
    { name: "React", level: "Expert" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "Python", level: "Intermediate" },
    { name: "UI/UX Design", level: "Advanced" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Description */}
        <div className="animate-fade-in-up delay-700 mb-12">
          <p className="text-xl text-off-white max-w-3xl mx-auto leading-relaxed mb-6">
            I'm a passionate full-stack developer who loves creating exceptional digital experiences.
            With a keen eye for design and a deep understanding of modern web technologies,
            I bring ideas to life through clean, efficient code.
          </p>
          <p className="text-lg text-off-white max-w-2xl mx-auto leading-relaxed">
            This portfolio showcases my journey in web development, featuring projects that
            demonstrate my skills in both frontend and backend technologies.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="animate-fade-in-up delay-1000">
          <h3 className="text-2xl font-display font-semibold text-off-white mb-8">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-dark-bg/80 backdrop-blur-sm border border-off-white/20 shadow-lg rounded-2xl p-4 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${1200 + index * 100}ms` }}
              >
                <div className="text-off-white font-semibold mb-1">{skill.name}</div>
                <div className="text-sm text-off-white">{skill.level}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="animate-fade-in-up delay-1500 mt-12">
          <p className="text-off-white mb-6">
            Interested in working together?
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
