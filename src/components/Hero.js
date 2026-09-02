import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15 }
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
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
        >
          <div className="image-frame">
            <img src="/images/aku.jpeg" alt="Annisa Salsabila" loading="eager" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
