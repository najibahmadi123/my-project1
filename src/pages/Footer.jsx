import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowUp } from "react-icons/fa";

const FooterWithScroll = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-600 text-white py-4 md:py-8 relative">
    
  

      {/* Footer Links */}
      <div className="flex justify-center md:space-x-8 space-x-5 text-sm mb-4">
        <a href="#Home" className="hover:underline hover:text-purple-300 transition">Home</a>
        <a href="#Skills" className="hover:underline hover:text-purple-300 transition">Skills</a>
        <a href="#About" className="hover:underline hover:text-purple-300 transition">About Me</a>
        <a href="#Contact" className="hover:underline hover:text-purple-300 transition">Contact</a>
        <a href="#" className="hover:underline hover:text-purple-300 transition">Privacy Policy</a>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-400">© 2025 Najib | All Rights Reserved</p>
      <p className="text-center text-xs text-gray-400 cursor-pointer" href='/about'>Email: najib.ahmadi.2026.12@gmail.com</p>
      

      {/* Scroll to top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-800 text-white p-3 rounded-full shadow-md transition transform hover:scale-110 animate-bounce"
        >
          <FaArrowUp />
        </button>
      )}</footer>
  );
};

export default FooterWithScroll;