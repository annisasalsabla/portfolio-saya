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
          <motion.div variants={itemVariants} className="badge hero-badge">
            Backend Developer
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            Halo, saya <span className="text-primary">Annisa Salsabila</span>.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-desc">
            Fresh graduate dengan pengalaman langsung di bidang IT, khususnya pengembangan sistem berbasis web dan aplikasi.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Lihat Projek Saya
            </a>
            <a href="#contact" className="btn btn-secondary">
              Hubungi Saya
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
            <div className="image-frame">
              <img src="/images/aku.jpeg" alt="Annisa Salsabila" loading="eager" />
            </div>

            {/* Floating Badge */}
            <div className="status-badge">
              <div className="status-dot"></div>
              <span>Open to Work</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
