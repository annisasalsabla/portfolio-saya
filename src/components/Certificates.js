import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Certificates.css';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certData = [
    { id: 1, img: '/images/s8.png', title: 'AWS Academy Graduate – Cloud Foundations', issuer: 'AWS Academy', date: 'Juni 2025 – Juni 2028' },
    { id: 2, img: '/images/s6.png', title: 'Red Hat System Administration I (RH124)', issuer: 'Red Hat', date: 'Juli 2024 – Juli 2028' },
    { id: 3, img: '/images/s5.png', title: 'NDG Linux Essentials', issuer: 'Cisco Networking Academy', date: '30 Juni 2024' },
    { id: 4, img: '/images/s3.png', title: 'Database Foundations', issuer: 'Oracle Academy', date: '6 Juli 2024' },
    { id: 5, img: '/images/s1.png', title: 'Database Programming with SQL', issuer: 'Oracle Academy', date: '7 Juli 2024' },
    { id: 6, img: '/images/s4.png', title: 'Java Programming', issuer: 'Oracle Academy', date: '13 Juni 2024' },
    { id: 7, img: '/images/s2.png', title: 'Java Fundamentals', issuer: 'Oracle Academy', date: '16 April 2024' },
    { id: 8, img: '/images/s7.png', title: 'Peserta Lomba Desain Poster', issuer: 'UKM Cybertech PNP', date: '28 April – 2 Mei 2025' }
  ];

  return (
    <section id="certificates" className="section certs-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Sertifikat & Pelatihan</h2>
          <p className="section-subtitle">Pengakuan atas kompetensi dan keaktifan saya dalam mengembangkan diri.</p>
        </motion.div>

        <div className="certs-grid">
          {certData.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              style={{ height: '100%' }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            >
              <div className="cert-img-wrapper">
                <img src={cert.img} alt={cert.title} loading="lazy" />
                <div className="cert-overlay">
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <h4>{cert.issuer}</h4>
                <span className="cert-date">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="cert-modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedCert(null)}>
                <i className="fas fa-times"></i>
              </button>
              <div className="modal-body">
                <img src={selectedCert.img} alt={selectedCert.title} />
                <div className="modal-details">
                  <h3>{selectedCert.title}</h3>
                  <p><strong>Penerbit:</strong> {selectedCert.issuer}</p>
                  <p><strong>Tanggal:</strong> {selectedCert.date}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
