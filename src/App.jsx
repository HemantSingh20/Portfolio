import React from 'react';
import { motion } from 'framer-motion';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Certificates from './components/Certificates';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
        <div className="w-[90%] mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-purple-400"
            >
              Portfolio
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <a href="#certificates" className="hover:text-purple-400 transition-colors">Certificates</a>
              <a href="#education" className="hover:text-purple-400 transition-colors">Education</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      <main>
        <Home />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <Certificates />
        <Education />        
        <Contact />
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="w-[90%] mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Hemant Singh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
