import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './SkillsSection.css';

const SkillBar = ({ skill, index }) => (
  <div className="skill-item">
    <div className="skill-info">
      <span className="skill-name">{skill.name}</span>
      <span className="skill-percentage">{skill.level}%</span>
    </div>
    <div className="skill-bar-bg glass-card">
      <motion.div 
        className="skill-bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
      >
        <div className="skill-glow"></div>
      </motion.div>
    </div>
  </div>
);

const SkillsSection = () => {
  const { skills, certifications } = portfolioData;

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Certifications
        </motion.h2>

        <div className="skills-grid">
          {/* Left Column: Skills Bars */}
          <motion.div 
            className="skills-container glass-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="sub-title">Technical Skills</h3>
            <div className="skills-list">
              {skills.map((skill, idx) => (
                <SkillBar key={skill.id} skill={skill} index={idx} />
              ))}
            </div>
          </motion.div>

          {/* Right Column: Certifications */}
          <motion.div 
            className="certifications-container glass-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="sub-title">Certifications & Awards</h3>
            <div className="cert-list">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={cert.id} 
                  className="cert-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                >
                  <div className="cert-icon">🏆</div>
                  <div className="cert-details">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer} - {cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
