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
          {/* Education badge */}
          <div className="education-badge">
            <i className="fas fa-graduation-cap edu-icon"></i>
            <div className="edu-info">
              <span className="edu-degree">D3 — Informatics Management</span>
              <span className="edu-school">Politeknik Negeri Padang &nbsp;·&nbsp; 2023 – 2026</span>
            </div>
          </div>

          <p>
            I am Annisa Salsabila, a D3 Informatics Management graduate from Politeknik Negeri Padang.
            I have a strong interest in IT, particularly in the development of web-based systems and mobile applications.
            My technical background, combined with an analytical mindset, allows me to approach problems
            thoughtfully and deliver solutions that are both functional and well-structured.
          </p>
          <p>
            I have a solid foundation in web and mobile application development, covering both the
            frontend and backend sides of a system. I am capable of working through the full development
            cycle — from planning and database design all the way to building and integrating the final product.
            These skills allow me to contribute meaningfully to digital projects that require reliable and scalable solutions.
          </p>
          <p>
            Throughout my studies, I was actively involved in various real-world projects and an industry internship,
            which gave me practical exposure to how software is built and delivered in a professional setting.
            Those experiences strengthened my ability to work in a team, tackle technical challenges, and think
            critically when designing digital systems — skills I carry into every project I take on.
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
