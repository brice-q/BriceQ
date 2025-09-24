import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "brice@briceq.com",
      href: "mailto:brice@briceq.com",
      color: "primary"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "#",
      color: "accent"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "View my code",
      href: "#",
      color: "success"
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      value: "Follow me",
      href: "#",
      color: "warning"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <div className="animate-fade-in-up delay-200 mb-8">
        </div>
        
        {/* Subtitle */}
        <div className="animate-fade-in-up delay-500 mb-12">
          <p className="text-xl text-off-white max-w-2xl mx-auto leading-relaxed mb-4">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
          <p className="text-lg text-off-white">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="animate-fade-in-up delay-700 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  className={`group bg-dark-bg/80 backdrop-blur-sm border border-off-white/20 shadow-lg rounded-2xl p-6 hover:border-${method.color}-500/50 hover:shadow-xl hover:shadow-${method.color}-500/10 transition-all duration-300 hover:scale-105`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-${method.color}-100 group-hover:bg-${method.color}-200 transition-colors duration-300`}>
                      <IconComponent className={`text-2xl text-${method.color}-600`} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-off-white font-semibold text-lg mb-1">
                        {method.label}
                      </h3>
                      <p className="text-off-white group-hover:text-off-white transition-colors duration-300">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        
        {/* Primary CTA */}
        <div className="animate-fade-in-up delay-1000">
          <div className="bg-dark-bg/80 backdrop-blur-sm border border-off-white/20 shadow-xl rounded-3xl p-8 mb-8">
            <h3 className="text-2xl font-display font-semibold text-off-white mb-4">
              Ready to start a project?
            </h3>
            <p className="text-off-white mb-6">
              Send me an email and I'll get back to you within 24 hours.
            </p>
            <a
              href="mailto:brice@briceq.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25"
            >
              <FaEnvelope />
              <span>Send Email</span>
            </a>
          </div>
        </div>
        
        {/* Response time note */}
        <div className="animate-fade-in-up delay-1200">
          <p className="text-sm text-off-white">
            ⚡ Usually responds within a few hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
