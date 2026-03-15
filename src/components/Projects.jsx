import React from 'react';
import { motion } from 'framer-motion';
import Ai_loan_planner from '../assets/Ai_loan_planner.png';
import appoint_booking from '../assets/appoint_booking.png';
import Vendor_performance from '../assets/Vendor_performance.png';

const projects = [
  {
    title: 'AI Loan Repayment Planner',
    description: 'An AI-powered financial tool that helps users plan and optimize loan repayment strategies by analyzing loan details and suggesting the most efficient repayment plan.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    image: Ai_loan_planner,
  },
  {
    title: 'Appointment Booking System',
    description: 'A full-stack web application that allows users to schedule, manage, and track appointments online with secure authentication and seamless payment integration.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Razorpay', 'JWT'],
    image: appoint_booking,
  },
  {
    title: 'Vendor Performance Dashboard',
    description: 'A data analytics dashboard that visualizes vendor performance metrics, helping businesses analyze sales, efficiency, and overall vendor contributions using interactive charts.',
    technologies: ['SQL', 'Python', 'Power BI'],
    image: Vendor_performance,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-800 text-white">
      <div className="w-[90%] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title + ' screenshot'}
                className="w-full h-48 object-cover object-top"
                style={{ borderBottom: '1px solid #4B5563' }}
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-600 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 