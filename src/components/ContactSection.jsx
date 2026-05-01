import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  const { references, hero, about } = portfolioData;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, integrate with Formspree or EmailJS here
    alert("This is a mock form submission for now!");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-grid">
          {/* Left Column: Form */}
          <motion.div 
            className="contact-form-container glass-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" required />
                <label>Name</label>
              </div>
              <div className="input-group">
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-group">
                <input type="text" required />
                <label>Subject</label>
              </div>
              <div className="input-group">
                <textarea required rows="4"></textarea>
                <label>Message</label>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </motion.div>

          {/* Right Column: Contact Info & References */}
          <motion.div 
            className="contact-info-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="direct-contact glass-card">
              <h3>Contact Info</h3>
              <ul>
                <li><FaEnvelope className="icon" /> <a href={`mailto:${hero.contactInfo.email}`}>{hero.contactInfo.email}</a></li>
                <li><FaPhone className="icon" /> <a href={`tel:${hero.contactInfo.phone}`}>{hero.contactInfo.phone}</a></li>
                <li><FaMapMarkerAlt className="icon" /> {about.personalDetails.location}</li>
              </ul>
            </div>

            <div className="references-section">
              <h3 className="sub-title">References</h3>
              <div className="references-grid">
                {references.map(ref => (
                  <div key={ref.id} className="reference-card glass-card">
                    <h4>{ref.name}</h4>
                    <p className="ref-designation">{ref.designation}</p>
                    <p className="ref-institution">{ref.institution}</p>
                    {ref.relation && <p className="ref-relation" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '15px' }}><strong>Relation:</strong> {ref.relation}</p>}
                    <div className="ref-contact">
                      {ref.email && <a href={`mailto:${ref.email}`}><FaEnvelope /></a>}
                      {ref.phone && <a href={`tel:${ref.phone}`}><FaPhone /></a>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
