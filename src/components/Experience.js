import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
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
          viewport={{ once: false, margin: "-100px" }}
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
            viewport={{ once: false, margin: "-100px" }}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
