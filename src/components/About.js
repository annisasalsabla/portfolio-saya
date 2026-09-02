import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
    <section id="about" className="section about-section">
      <div className="container">
        
        <motion.div 
          className="section-header"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Tentang Saya</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="about-text-content"
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p>
              Fresh graduate dengan pengalaman langsung di bidang IT, khususnya pengembangan sistem berbasis web dan aplikasi. Pernah menjalani program magang di PT Rapier Technology International, mengerjakan pengembangan REST API untuk sistem informasi perusahaan.
            </p>
            <p>
              Terbiasa mengerjakan proyek end-to-end menggunakan Laravel, React, dan Flutter, mulai dari perancangan database hingga integrasi sistem. Memiliki rasa ingin tahu tinggi, cepat beradaptasi dengan teknologi baru, dan siap berkontribusi penuh semangat di tim IT mana pun.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
