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
          <h2 className="section-title">Education</h2>
        </motion.div>

        <motion.div 
          className="education-content"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="education-card">
            <div className="education-image-container">
              <img src="/images/pendidikan.jpeg" alt="Education" loading="lazy" />
            </div>
            <div className="education-info">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <p className="education-text">
                I am a graduate of the <strong>D3 Program in Informatics Management</strong>, Department of Information Technology, <strong>Politeknik Negeri Padang (2023–2026)</strong> with a <strong>GPA of 3.65</strong>. During my studies, I focused on web-based and mobile system development.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
