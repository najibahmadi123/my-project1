
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase,
  FaGithub, FaBootstrap, FaNodeJs, FaGitAlt
} from 'react-icons/fa';
import { SiTailwindcss, SiJquery } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-blue-300" /> },
  { name: 'jQuery', icon: <SiJquery className="text-blue-400" /> },
  { name: 'Database', icon: <FaDatabase className="text-green-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-400" /> },

];

const Skills = () => {
  return (
    <div id='Skills' className="bg-black text-white py-8 px-4 lg:px-15">
      <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-10 w-full bg-gray-600 rounded-lg hover:scale-105 shadow-2xl hover:outline-2 outline-indigo-700 hover:shadow-indigo-700 hover:bg-white duration-900 group"
            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-2  " color='white'>{skill.icon}</div>
            <p className="text-lg   group-hover:text-black group-hover:font-bold ">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;