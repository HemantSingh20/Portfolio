import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import ayushImage from '../assets/Hemant.png';
import cvFile from '../assets/HemantSinghGeneralCV.pdf';

const Home = () => {
  const [role, setRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = ['Full Stack Developer', 'AI Enthusiast', 'Data Analyst'];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'HemantSinghGeneralCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    let timer;
    const handleType = () => {
      const currentRole = roles[loopNum];
      const updatedRole = isDeleting
        ? currentRole.substring(0, role.length - 1)
        : currentRole.substring(0, role.length + 1);

      setRole(updatedRole);

      if (!isDeleting && updatedRole === currentRole) {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedRole === '') {
        setIsDeleting(false);
        setLoopNum((prev) => (prev + 1) % roles.length);
        setTypingSpeed(100);
      } else {
        setTypingSpeed(isDeleting ? 30 : 100);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [role, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-[90%] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left md:w-1/2"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-4">Hi, I am <span className="text-purple-400">Hemant Singh</span></h1>
            <h2 className="text-3xl md:text-4xl text-gray-300 mb-8 h-12"><span className="text-purple-400">{role}</span>
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
            From campus to code - my journey through CSE
            </p>
            <div className="flex flex-col items-start gap-4 mt-8">

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={handleDownloadCV}
    className="px-8 py-3 bg-purple-600 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
    </svg>
    Download CV
  </motion.button>

  <div className="flex gap-6 text-3xl text-purple-400">

    <a
      href="https://github.com/HemantSingh20"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white hover:scale-110 transition"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/hemant--singh"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white hover:scale-110 transition"
    >
      <FaLinkedin />
    </a>

  </div>

</div>
</motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-500 rounded-full blur-xl opacity-20"></div>
              <img
                src={ayushImage}
                alt="Profile"
                className="relative w-96 h-96 object-cover rounded-full border-4 border-purple-500 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 