import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './HeroSection.css';

const HeroSection = () => {
  const { name, title, socialLinks } = portfolioData.hero;

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">

        {/* Left side: Floating Profile Card */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="profile-card glass-card"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img src="WhatsApp Image 2026-04-30 at 2.12.19 PM.jpeg" alt={name} className="profile-img" />
            <div className="glow-effect"></div>
          </motion.div>
        </motion.div>

        {/* Right side: Typography and Icons */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h2
            className="greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Hello, I am
          </motion.h2>
          <motion.h1
            className="name text-gradient"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
          >
            {name}
          </motion.h1>
          <motion.h3
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {title}
          </motion.h3>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="social-icon glass-card"
                whileHover={{ scale: 1.2, y: -5, boxShadow: "0 0 15px var(--accent-blue)" }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="#contact"
            className="cta-button glass-card"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent-violet)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
