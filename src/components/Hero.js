import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, type: 'spring', stiffness: 50, delay: 0.4 }
    }
  };

  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container">
        
        {/* Text Content */}
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="hero-greeting">
            Hello, my name is
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            Annisa Salsabila
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="hero-subtitle">
            I'm a <span className="text-secondary-accent">Web / Mobile Developer</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="hero-socials">
            <a href="https://github.com/annisasalsabla" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:email@example.com" className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
              DOWNLOAD CV
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Photo */}
        <div className="hero-image-container">
          {/* Decorative Blob */}
          <div className="hero-blob"></div>
          
          <motion.div 
            className="hero-image-wrapper floating-animation"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="image-frame-cutout">
              <img src="/images/aku.jpeg" alt="Annisa Salsabila" loading="eager" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
