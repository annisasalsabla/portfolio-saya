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
            Halo, nama saya
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            Annisa Salsabila
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="hero-subtitle">
            Saya seorang <span className="text-secondary-accent">Web / Mobile Developer</span>
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
              UNDUH CV
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div 
          className="hero-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Glow */}
          <div className="hero-glow">
            <div className="dot-matrix dot-matrix-1"></div>
            <div className="dot-matrix dot-matrix-2"></div>
            
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            
            <svg viewBox="0 0 200 200" className="blob-svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur1" />
                  <feGaussianBlur stdDeviation="4" result="blur2" />
                  <feGaussianBlur stdDeviation="6" result="blur3" />
                  <feMerge>
                    <feMergeNode in="blur3" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path 
                className="blob-path" 
                d="M48.2,-61C62.7,-51.2,74.6,-36.8,79.8,-20.3C85,-3.8,83.5,14.8,75,30.3C66.5,45.8,51.1,58.2,33.9,65.8C16.8,73.4,-2.2,76.2,-20.4,72.6C-38.6,69.1,-55.9,59.3,-67.2,44.7C-78.5,30.1,-83.8,10.7,-81.1,-7.2C-78.4,-25.1,-67.7,-41.5,-53.4,-51.3C-39,-61.2,-19.5,-64.5,-1.3,-62.9C16.9,-61.3,33.8,-70.8,48.2,-61Z" 
                transform="translate(100 100)" 
              />
            </svg>
          </div>
          
          <img src="/images/aku.jpg" alt="Annisa Salsabila" className="hero-photo floating-animation" loading="eager" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
