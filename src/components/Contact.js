import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Mari Berkolaborasi</h2>
          <p className="section-subtitle mx-auto">
            Tertarik untuk bekerja sama atau ada pertanyaan? Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
          </p>
        </motion.div>

        <motion.div 
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.a 
            href="mailto:nisasalsabila23050505@gmail.com" 
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="contact-icon email">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>nisasalsabila23050505@gmail.com</p>
            <span className="contact-action">Kirim Pesan <i className="fas fa-arrow-right"></i></span>
          </motion.a>

          <motion.a 
            href="https://wa.me/6285194713488" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="contact-icon whatsapp">
              <i className="fab fa-whatsapp"></i>
            </div>
            <h3>WhatsApp</h3>
            <p>+62 851-9471-3488</p>
            <span className="contact-action">Chat Sekarang <i className="fas fa-arrow-right"></i></span>
          </motion.a>

          <motion.div 
            className="contact-card location"
            variants={itemVariants}
          >
            <div className="contact-icon map">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Lokasi</h3>
            <p>Kota Padang, Sumatera Barat</p>
            <span className="contact-action">Indonesia</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
