import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './Navbar.css';
import logoImg from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar glass-card"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <a href="#home" className="nav-logo">
          <img src={logoImg} alt="Raihan Mahmud" className="nav-logo-img" />
        </a>
        <ul className="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#workspace">Workspace</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
