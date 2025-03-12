import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl font-bold text-white">Contact Me</h1>
      <p className="text-gray-300 mt-4 max-w-2xl">
        Feel free to reach out via email.
      </p>

      <div className="mt-6 space-y-4">
        <p className="text-lg text-white">
          📧 Email: <a href="mailto:brice@briceq.com" className="text-blue-500 hover:underline">brice@briceq.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
