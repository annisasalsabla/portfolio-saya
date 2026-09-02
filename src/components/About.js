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
          viewport={{ once: false, margin: "-100px" }}
        >
          <span className="about-label">ABOUT ME</span>
          <h2 className="about-headline">Backend Developer. Tech Enthusiast.</h2>
        </motion.div>

        <motion.div 
          className="about-profile-row"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
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
                <span className="stat-value">5+</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">CERTIFICATES</span>
                <span className="stat-value">10+</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">GRADUATING</span>
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
          viewport={{ once: false, margin: "-100px" }}
        >
          <p>
            Fresh graduate dengan pengalaman langsung di bidang IT, khususnya pengembangan sistem berbasis web dan aplikasi. Pernah menjalani program magang di PT Rapier Technology International, mengerjakan pengembangan REST API untuk sistem informasi perusahaan.
          </p>
          <p>
            Terbiasa mengerjakan proyek end-to-end menggunakan Laravel, React, dan Flutter, mulai dari perancangan database hingga integrasi sistem. Memiliki rasa ingin tahu tinggi, cepat beradaptasi dengan teknologi baru, dan siap berkontribusi penuh semangat di tim IT mana pun.
          </p>
          <p className="resume-prompt">
            Ingin tahu lebih lanjut tentang pengalaman saya? <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">Download my resume</a>
          </p>
        </motion.div>

        <motion.div 
          className="about-footer"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          <span className="currently-label">CURRENTLY</span>
          <div className="currently-grid">
            <div className="currently-item">
              <i className="fas fa-code currently-icon"></i>
              <div className="currently-text">
                <span className="currently-title">Building</span>
                <span className="currently-desc">Web & mobile projects</span>
              </div>
            </div>
            <div className="currently-item">
              <i className="fas fa-flask currently-icon"></i>
              <div className="currently-text">
                <span className="currently-title">Exploring</span>
                <span className="currently-desc">Backend optimization & API</span>
              </div>
            </div>
            <div className="currently-item">
              <i className="fas fa-rocket currently-icon"></i>
              <div className="currently-text">
                <span className="currently-title">Learning</span>
                <span className="currently-desc">Full-stack development</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
