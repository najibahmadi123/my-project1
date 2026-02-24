import React from "react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Project One", img: "./Capture.PNG" },
  { id: 2, title: "Project Two", img: "./Capture1.PNG" },
  { id: 3, title: "Project Three", img: "./Capture2.PNG" },
  { id: 4, title: "Project Four", img: "./Capture12.PNG" },
  { id: 5, title: "Project Five", img: "./Capture43.PNG" },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-black text-white py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="flex overflow-x-scroll gap-5 scrollbar-hide">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="min-w-[300px] bg-gray-800 rounded-lg shadow-md"
            whileHover={{ x: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-t-lg w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;