import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        type: 'spring',
        stiffness: 50
      }
    }
  };

  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        
        <motion.div 
          className="about-headline-wrapper"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="about-label">ABOUT ME</span>
          <h2 className="about-headline">Software Developer.<br />Tech Enthusiast.</h2>
        </motion.div>

        <motion.div 
          className="about-profile-row"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="profile-avatar">
            <img src="/images/aboutme.jpeg" alt="Annisa Salsabila" loading="lazy" />
          </div>
          <div className="profile-details">
            <div className="profile-name-row">
              <h3 className="profile-name">ANNISA SALSABILA</h3>
              <i className="fas fa-check-circle verified-icon"></i>
            </div>
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-label">PROJECTS</span>
                <span className="stat-value">15+</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">CERTIFICATES</span>
                <span className="stat-value">10+</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">GRADUATED</span>
                <span className="stat-value">2026</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-text-content"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p>
            D3 graduate in Information Technology from Politeknik Negeri Padang with a strong interest in IT. I have hands-on experience in IT, particularly in web and mobile application development. Skilled in end-to-end project delivery using Laravel, React, Flutter, and other programming languages — from database design to system integration. I am highly curious, quick to adapt to new technologies, and ready to contribute enthusiastically to any IT team.
          </p>
          <p className="resume-prompt">
            Want to know more about my experience? <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">Download my CV</a>
          </p>
        </motion.div>

        <motion.div 
          className="about-footer"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="currently-label">CURRENTLY</span>
          <div className="currently-grid">
            <div className="currently-item">
              <i className="fas fa-code currently-icon"></i>
              <div className="currently-text">
                <span className="currently-title">Building</span>
                <span className="currently-desc">Web &amp; Mobile Projects</span>
              </div>
            </div>
            <div className="currently-item">
              <i className="fas fa-flask currently-icon"></i>
              <div className="currently-text">
                <span className="currently-title">Exploring</span>
                <span className="currently-desc">Backend Optimization &amp; APIs</span>
              </div>
            </div>
            <div className="currently-item">
              <i className="fas fa-rocket currently-icon"></i>
              <div className="currently-text">
                <span className="currently-title">Learning</span>
                <span className="currently-desc">Full-stack Development</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
