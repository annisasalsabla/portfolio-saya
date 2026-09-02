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
          <span className="about-label">TENTANG SAYA</span>
          <h2 className="about-headline">Web/Mobile Developer. Tech Enthusiast.</h2>
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
                <span className="stat-label">PROJEK</span>
                <span className="stat-value">15+</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">SERTIFIKAT</span>
                <span className="stat-value">10+</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">LULUS</span>
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
            Lulusan D3 Teknologi Informasi Politeknik Negeri Padang dengan ketertarikan pada bidang IT. Memiliki pengalaman langsung di bidang IT, khususnya pengembangan sistem berbasis web dan aplikasi. Terbiasa mengerjakan proyek end-to-end menggunakan Laravel, React, Flutter dan bahasa pemrograman lainnya mulai dari perancangan database hingga integrasi sistem. Memiliki rasa ingin tahu tinggi, cepat beradaptasi dengan teknologi baru, dan siap berkontribusi penuh semangat di tim IT mana pun.
          </p>
          <p className="resume-prompt">
            Ingin tahu lebih lanjut tentang pengalaman saya? <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">Unduh CV saya</a>
          </p>
        </motion.div>

        <motion.div 
          className="about-footer"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="currently-label">SAAT INI</span>
          <div className="currently-grid">
            <div className="currently-item">
              <i className="fas fa-code currently-icon"></i>
              <div className="currently-text">
                <span className="currently-title">Membangun</span>
                <span className="currently-desc">Projek Web & Mobile</span>
              </div>
            </div>
            <div className="currently-item">
              <i className="fas fa-flask currently-icon"></i>
              <div className="currently-text">
                <span className="currently-title">Mengeksplorasi</span>
                <span className="currently-desc">Optimasi Backend & API</span>
              </div>
            </div>
            <div className="currently-item">
              <i className="fas fa-rocket currently-icon"></i>
              <div className="currently-text">
                <span className="currently-title">Mempelajari</span>
                <span className="currently-desc">Pengembangan Full-stack</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
