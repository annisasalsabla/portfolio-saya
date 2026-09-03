import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const phrases = [
  "Tech Enthusiast.",
  "Web & Mobile Developer.",
  "Problem Solver.",
  "Full-Stack Enthusiast."
];

const TypewriterHeadline = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[textIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && charIndex === currentPhrase.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <h2 className="about-headline">
      Software Developer.<br />
      <span className="typewriter-text">{phrases[textIndex].substring(0, charIndex)}</span>
      <span className="typing-cursor">|</span>
    </h2>
  );
};

const About = () => {
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', stiffness: 50 } }
  };

  return (
    <section id="about" className="section about-section">
      <div className="container about-container">

        <motion.div className="about-headline-wrapper" variants={scrollVariants}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <span className="about-label">TENTANG SAYA</span>
          <TypewriterHeadline />
        </motion.div>

        <motion.div className="about-profile-row" variants={scrollVariants}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
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

        <motion.div className="about-text-content" variants={scrollVariants}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>

          {/* Badge Pendidikan */}
          <div className="education-badge">
            <i className="fas fa-graduation-cap edu-icon"></i>
            <div className="edu-info">
              <span className="edu-degree">D3 — Manajemen Informatika</span>
              <span className="edu-school">Politeknik Negeri Padang &nbsp;·&nbsp; 2023 – 2026</span>
            </div>
          </div>

          <p>
            Saya Annisa Salsabila, lulusan D3 Manajemen Informatika dari Politeknik Negeri Padang.
            Saya memiliki ketertarikan yang kuat di bidang IT, khususnya dalam pengembangan
            sistem berbasis web dan aplikasi mobile. Dengan latar belakang teknis yang solid
            dan kemampuan berpikir analitis, saya terbiasa memecahkan masalah secara terstruktur
            dan menghasilkan solusi yang efisien.
          </p>
          <p>
            Saya memiliki kemampuan yang baik dalam pengembangan web dan aplikasi mobile, mencakup
            sisi frontend maupun backend. Saya mampu menjalani siklus pengembangan secara penuh —
            mulai dari perencanaan, desain database, pembuatan sistem, hingga integrasi produk akhir.
            Kemampuan ini memungkinkan saya untuk berkontribusi secara nyata dalam proyek digital
            yang membutuhkan solusi yang andal dan terukur.
          </p>
          <p>
            Selama masa studi, saya aktif terlibat dalam berbagai proyek nyata serta menjalani
            magang di dunia industri. Pengalaman tersebut memberikan gambaran langsung tentang
            bagaimana perangkat lunak dibangun dan diselesaikan dalam lingkungan profesional.
            Hal ini memperkuat kemampuan saya dalam bekerja sama dengan tim, menghadapi
            tantangan teknis, dan merancang sistem digital yang tepat guna.
          </p>

          <p className="resume-prompt">
            Ingin tahu lebih lanjut? <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">Unduh CV saya</a>
          </p>
        </motion.div>

        <motion.div className="about-footer" variants={scrollVariants}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <span className="currently-label">SAAT INI</span>
          <div className="currently-grid">
            <div className="currently-item">
              <i className="fas fa-code currently-icon"></i>
              <div className="currently-text">
                <span className="currently-title">Membangun</span>
                <span className="currently-desc">Projek Web &amp; Mobile</span>
              </div>
            </div>
            <div className="currently-item">
              <i className="fas fa-flask currently-icon"></i>
              <div className="currently-text">
                <span className="currently-title">Mengeksplorasi</span>
                <span className="currently-desc">Optimasi Backend &amp; API</span>
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
