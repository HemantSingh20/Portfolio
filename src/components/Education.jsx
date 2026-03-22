import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="w-[90%] mx-auto px-4">

        {/* SAME AS ABOUT ME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Education</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="timeline">

          <div className="timeline-item">
            <h3>Lovely Professional University</h3>
            <p>B.Tech in Computer Science</p>
            <span>2023 - 2027</span>
            <p>
              Pursuing B.Tech in Computer Science Engineering with focus on
              Data Structures, Data Science, and Web Development.
            </p>
          </div>

          <div className="timeline-item">
            <h3>M.S. Memorial Academy</h3>
            <p>Intermediate (Class XII)</p>
            <span>2021 - 2022</span>
            <p>Completed Higher Secondary Education.</p>
          </div>

          <div className="timeline-item">
            <h3>New Patliputra Central School</h3>
            <p>Matriculation (Class X)</p>
            <span>2019 - 2020</span>
            <p>Completed Secondary Education.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;