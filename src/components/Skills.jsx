import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Java', level: 90 },
  { name: 'HTML/CSS', level: 85 },
  { name: 'Data Structures and Algorithms', level: 90 },
  { name: 'Python', level: 80 },
  { name: 'JavaScript', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Node.js', level: 75 },
  { name: 'React', level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="w-[90%] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-purple-500 h-2.5 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 