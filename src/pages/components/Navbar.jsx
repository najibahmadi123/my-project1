import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-600/70 shadow-gray-800 shadow-lg fixed top-0 w-full z-50 text-white">
        <div className="max-w-7xl mx-auto lg:px-16 px-4 h-16 flex justify-between items-center">
          <h1 className="text-xl font-bold text-cyan-400">Na</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a className="hover:text-blue-600 hover:font-bold " href="#Home">Home</a>
            <a className="hover:text-blue-600 hover:font-bold" href="#About">About</a>
            <a className="hover:text-blue-600 hover:font-bold" href="#Skills">Skills</a>
            <a className="hover:text-blue-600 hover:font-bold" href="#Contact">Contact</a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Right Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-600 text-white z-50 shadow shadow-gray-400
        w-[45%] max-w-[794px]
        transform transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="  p-4 border-b">
        
          <button
            className="text-2xl text-center hover:text-cyan-400 "
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col  text-center  space-y-4 text-lg">
          <a href="#Home" className="hover:text-blue-600 hover:bg-black/30 px-4 py-1 hover:font-bold">Home</a>
          <a href="#About" className="hover:text-blue-600 hover:bg-black/30 px-4 py-1 hover:font-bold">About</a>
          <a href="#Skills" className="hover:text-blue-600 hover:bg-black/30 px-4 py-1 hover:font-bold">Skills</a>
          <a href="#Contact" className="hover:text-blue-600 hover:bg-black/30 px-4 py-1 hover:font-bold">Contact</a>
        </div>
      </div>
    </>
  );
}
