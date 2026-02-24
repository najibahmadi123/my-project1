import { motion } from 'framer-motion';
const About = () => {
  return (
    <div id='About' className="bg-black text-white max-h-screen flex items-start justify-center px-6 pb-10">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        <p className=" text-xs md:text-lg leading-relaxed">
          Hello! I’m a <span className="text-blue-400 font-semibold">Frontend Developer</span> with love
          for creating clean, modern, and responsive web applications. My main tools include{' '}
          <span className="text-cyan-400">React</span>, <span className="text-pink-400">Tailwind CSS</span>, and
          Javascript.
        </p>
        <p className="text-xs md:text-lg mt-4 leading-relaxed">
          I enjoy bringing ideas to life through code and design. I’m always exploring new technologies
          and improving my skills to stay ahead in the frontend world.
        </p>
      <hr className='h-1 text-white mt-10' />
        
      </motion.div>
    </div>
  )}
  export default About;