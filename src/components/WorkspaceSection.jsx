import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './WorkspaceSection.css';
import { FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="modal-content glass-card"
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}><FaTimes /></button>
        
        <div className="modal-media">
          {project.previewType === 'video' ? (
            <video src={project.videoUrl} autoPlay loop muted controls className="modal-video" />
          ) : project.images && project.images.length > 0 ? (
            <div className="modal-image-gallery">
              {project.images.map((img, idx) => (
                <img key={idx} src={img} alt={`${project.title} screen ${idx + 1}`} className="modal-image" />
              ))}
            </div>
          ) : (
            <img src={project.image} alt={project.title} className="modal-image" />
          )}
        </div>

        <div className="modal-details">
          <h3>{project.title}</h3>
          <span className="category-tag">{project.category}</span>
          <p>{project.description}</p>
          
          <div className="tech-tags">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
          
          <a href={project.link} target="_blank" rel="noreferrer" className="view-project-btn">
            View Project
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WorkspaceSection = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Images', 'Videos', 'Websites'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="workspace" className="workspace-section">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Workspace Gallery
        </motion.h2>

        <motion.div 
          className="filter-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {filters.map(f => (
            <button 
              key={f} 
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="project-card glass-card"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-thumbnail">
                  {project.previewType === 'video' ? (
                     <div className="video-placeholder">
                       <span className="play-icon">▶</span>
                       <img src={project.image} alt="video thumb" />
                     </div>
                  ) : (
                    <img src={project.image} alt={project.title} />
                  )}
                  <div className="project-overlay">
                    <span>View Details</span>
                  </div>
                </div>
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <span className="project-category">{project.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default WorkspaceSection;
