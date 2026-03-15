import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-gray-800 text-white">
      <div className="w-[90%] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-300 mb-4">
              Hi! I'm a passionate and curious learner who enjoys building practical tech solutions. 
              Whether it's writing clean code, exploring new tools, or collaborating on cool projects, 
              I'm always excited to grow and create. Currently focused on sharpening my skills in Web Development, 
              Data Science and Data structures and Algorithm.
            </p>
            <p className="text-gray-300">
            Outside of coding, I enjoy gaming, going on road trips, and exploring new places. Adventure and creativity drive me—both in life and in code.

            Let’s build something awesome together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Projects</h4>
              <p className="text-gray-300">15+ Completed</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Problem Solving</h4>
              <p className="text-gray-300">100+ Challenges Solved</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Tools Used</h4>
              <p className="text-gray-300">15+ Tools & Platforms</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Certifications</h4>
              <p className="text-gray-300">10+ Earned</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 