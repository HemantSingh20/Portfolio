import React from "react";
import { motion } from "framer-motion";
import cert from "../assets/intern-certificate.jpeg";

const WorkExperience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="w-[90%] mx-auto px-4">

        {/* SAME TITLE STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="timeline">

          <div className="timeline-item">
            <h3>Web Developer Intern</h3>
            <h4>Vanillakart</h4>
            <span>September 2025 - November 2025</span>

            <ul className="experience-list">
              <li>Built scalable web applications using MERN and WordPress.</li>
              <li>Improved UI/UX using React.js and performance optimization.</li>
              <li>Worked on backend integration using Node.js.</li>
            </ul>

            <p className="tech-stack">
              <strong>Tech:</strong> WordPress, React.js, Node.js, MongoDB, REST API
            </p>

            <a 
              href={cert}  
              target="_blank" 
              rel="noreferrer"
              className="certificate-btn"
            >
              View Certificate
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkExperience;