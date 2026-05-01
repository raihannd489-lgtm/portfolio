import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './AboutSection.css';

const TimelineItem = ({ data, index }) => (
  <motion.div 
    className="timeline-item glass-card"
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
  >
    <div className="timeline-dot"></div>
    <h4>{data.degree || data.role}</h4>
    <span className="timeline-date">{data.year || data.duration}</span>
    <p className="timeline-institution">{data.institution || data.company}</p>
    <p className="timeline-desc">{data.description}</p>
  </motion.div>
);

const AboutSection = () => {
  const { about, education, experience } = portfolioData;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About & Experience
        </motion.h2>

        <div className="about-grid">
          {/* Left Column: About & Quick Stats HUD */}
          <div className="about-content">
            <motion.div 
              className="about-text glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Career Objective</h3>
              <p>{about.careerObjective}</p>
              
              <div className="personal-details">
                <p><strong>Location:</strong> {about.personalDetails.location}</p>
                <p><strong>Languages:</strong> {about.personalDetails.languages}</p>
              </div>

              <h4>Special Qualifications</h4>
              <ul>
                {about.specialQualifications.map((q, idx) => (
                  <li key={idx}>⚡ {q}</li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Stats HUD */}
            <motion.div 
              className="quick-stats-hud glass-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="hud-grid">
                {about.quickStats.map((stat, idx) => (
                  <div key={idx} className="hud-item">
                    <span className="hud-value text-gradient">{stat.value}</span>
                    <span className="hud-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Timeline */}
          <div className="timeline-container">
            <div className="timeline-section">
              <h3 className="timeline-title">Education</h3>
              <div className="timeline">
                {education.map((edu, idx) => (
                  <TimelineItem key={edu.id} data={edu} index={idx} />
                ))}
              </div>
            </div>

            <div className="timeline-section">
              <h3 className="timeline-title">Experience</h3>
              <div className="timeline">
                {experience.map((exp, idx) => (
                  <TimelineItem key={exp.id} data={exp} index={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
