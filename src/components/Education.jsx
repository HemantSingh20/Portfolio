import React from "react";

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>

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
    </section>
  );
};

export default Education;