import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
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
    <section id="education" className="section education-section">
      <div className="container">
        
        <motion.div 
          className="section-header"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Pendidikan</h2>
        </motion.div>

        <motion.div 
          className="education-content"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="education-card">
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <p className="education-text">
              Saya adalah lulusan <strong>D3 Program Studi Manajemen Informatika</strong>, Jurusan Teknologi Informasi, <strong>Politeknik Negeri Padang (2023–2026)</strong> dengan <strong>IPK 3.65</strong>. Selama masa studi, saya berfokus pada pengembangan sistem berbasis web dan mobile, serta memperdalam kemampuan programming melalui program magang di <strong>PT Rapier Technology International</strong>.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
