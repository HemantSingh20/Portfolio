import React from "react";
import cert from "../assets/intern-certificate.jpeg";
const WorkExperience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Work Experience</h2>

      <div className="timeline">

        <div className="timeline-item">
  <h3>Web Developer Intern</h3>
  <h4>Vanillakart</h4>
  <span>September 2025 - November 2025</span>

  <ul className="experience-list">
    <li>Built scalable web applications using the MERN stack and customized WordPress solutions.</li>
    <li>Improved user experience using React.js and optimized websites for performance.</li>
    <li>Assisted in backend integration using Node.js and ensured site stability.</li>
  </ul>

  <p className="tech-stack">
    <strong>Tech:</strong> WordPress, React.js, Node.js, MongoDB, REST API
  </p>

  {/*Certificate Button */}
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
    </section>
  );
};

export default WorkExperience;