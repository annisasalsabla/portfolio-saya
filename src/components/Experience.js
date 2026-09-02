import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const [topIndex, setTopIndex] = useState(0);
  
  const images = [
    '/images/magang1.jpeg',
    '/images/magang2.png',
    '/images/magang3.png',
    '/images/magang4.png',
    '/images/magang5.png'
  ];

  const handleNextImage = () => {
    setTopIndex((prev) => (prev + 1) % images.length);
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 50 }
    }
  };

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Pengalaman Kerja</h2>
        </motion.div>

        <div className="timeline">
          <motion.div 
            className="timeline-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <div className="timeline-header">
                <h3 className="timeline-role">Backend Developer / IT Programmer (Magang)</h3>
                <span className="timeline-date">Februari 2026 – Mei 2026</span>
              </div>
              <h4 className="timeline-company">PT Rapier Technology International — Kota Tangerang, Banten</h4>
              <p className="timeline-desc">
                Menjalani Praktik Kerja Lapangan (PKL) sebagai Intern Backend Developer di divisi Development. Bertanggung jawab dalam pengembangan REST API untuk Sistem Informasi POS-HALOEMAS, mencakup perancangan endpoint, integrasi data, dan optimasi alur komunikasi antara backend dan frontend. Berkolaborasi dengan tim developer, business analyst, dan QA dalam siklus pengembangan software berbasis kebutuhan klien.
              </p>
              
              <div className="experience-gallery" onClick={handleNextImage} title="Klik untuk gambar selanjutnya">
                <AnimatePresence mode="popLayout">
                  {images.map((img, index) => {
                    // Calculate offset relative to topIndex
                    const offset = (index - topIndex + images.length) % images.length;
                    
                    // We only show top 3 images to prevent clutter
                    if (offset > 2) return null;
                    
                    return (
                      <motion.div
                        key={img}
                        className="gallery-image-wrapper"
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ 
                          opacity: 1 - (offset * 0.15), 
                          scale: 1,
                          x: offset * 35,
                          y: offset * -15,
                          rotate: offset * 4,
                          zIndex: images.length - offset
                        }}
                        exit={{ opacity: 0, scale: 0.8, x: -50, rotate: -10 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        whileHover={offset === 0 ? { scale: 1.05, y: -5 } : {}}
                      >
                        <img src={img} alt={`Magang ${index + 1}`} loading="lazy" />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
                <div className="gallery-hint">
                  <i className="fas fa-hand-pointer"></i> Klik gambar
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
