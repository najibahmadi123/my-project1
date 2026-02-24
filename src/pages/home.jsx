import React from "react";
import { motion } from "framer-motion";
import Navbar from './components/Navbar'
import { section } from "framer-motion/client";


const Home = () => {
  return (
<section id="Home" className="bg-black min-h-screen flex flex-col md:flex-row items-center justify-between "> 
    <Navbar />
    <section className="bg-black min-h-screen flex flex-col md:flex-row items-center justify-between px-4 lg:px-20 py-20 w-full mt-4 lg:mt-10">
    
      {/* Text Part */}
      <div className="text-center md:text-left max-w-xl space-y-4  text-white">
        <motion.h1
          className="text-3xl   md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
         <span className="text-start items-start float-start">Hi I am</span>  <br /> <br />
         <span className="text-indigo-600 text-3xl text-center  lg:text-7xl"> Najibullah Ahmadi</span> <br />
          <span className="text-white">Frontend Developer</span>
          
        </motion.h1>

        <motion.p
          className="text-white text-lg max-w-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
         I build modren and responsive websites using React,Tialwind CSS, and JavaScript
        </motion.p>

        <motion.a
          href="#projects"className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          View my work
        </motion.a>
      </div>

      {/* Image Part */}
      <motion.img
        src="./this is.png"
        alt="Profile"
        className="lg:w-80 lg:h-80 h-56 w-56 mt-10 md:mt-0 rounded-full shadow-2xl object-cover outline-2 outline-indigo-600 hover:scale-105 overflow-hidden duration-500  hover:shadow-indigo-700"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        
      />
    </section>
    </section>
  );
};
export default Home;
