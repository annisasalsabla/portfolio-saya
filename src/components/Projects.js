import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 50 }
    }
  };

  const projectsData = [
    {
      id: 1,
      title: "Sistem Manajemen Inventory & Penjualan (Tugas Akhir)",
      description: "Aplikasi mobile manajemen inventory & penjualan toko grosir dengan 3 role (Admin, Owner, Kasir), dashboard ringkasan penjualan/laba/piutang, grafik mingguan, dan monitoring stok masuk-keluar.",
      type: "mobile",
      images: ["/images/projekta.png"],
      tech: ["Flutter", "Laravel", "MySQL", "REST API"]
    },
    {
      id: 2,
      title: "Sistem Informasi POS-HALOEMAS",
      description: "Pengembangan REST API backend untuk sistem POS — perancangan endpoint, integrasi data, optimasi komunikasi backend-frontend.",
      type: "hybrid",
      images: {
        web: "/images/apihaloemas.png",
        mobile: ["/images/mobile1.png", "/images/mobile2.png"]
      },
      tech: ["Laravel", "REST API", "PostgreSQL", "PHP"]
    },
    {
      id: 3,
      title: "Sistem Informasi Easy Warehouse",
      description: "Backend REST API untuk sistem manajemen gudang (warehouse), pengelolaan data inventaris.",
      type: "hybrid",
      images: {
        web: "/images/apiaesywarehouse.png",
        mobile: ["/images/mobile3.png"]
      },
      tech: ["Laravel", "REST API", "MySQL"]
    }
  ];

  const renderTechBadges = (tech) => (
    <div className="project-tech">
      {tech.map((t, idx) => (
        <span key={idx} className="badge">{t}</span>
      ))}
    </div>
  );

  const MobileMockup = ({ src }) => (
    <div className="mockup-smartphone">
      <div className="mockup-notch"></div>
      <img src={src} alt="Mobile App Screenshot" loading="lazy" />
    </div>
  );

  const WebMockup = ({ src }) => (
    <div className="mockup-browser">
      <div className="browser-header">
        <span className="dot dot-red"></span>
        <span className="dot dot-yellow"></span>
        <span className="dot dot-green"></span>
      </div>
      <img src={src} alt="Web App Screenshot" loading="lazy" />
    </div>
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projek Terselesaikan</h2>
          <p className="section-subtitle">Studi kasus dan implementasi sistem nyata yang pernah saya bangun.</p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={projectVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="project-visuals">
                {project.type === 'mobile' && (
                  <div className="visual-center">
                    <MobileMockup src={project.images[0]} />
                  </div>
                )}
                {project.type === 'hybrid' && (
                  <div className="visual-hybrid">
                    <WebMockup src={project.images.web} />
                    <div className="hybrid-mobile-gallery">
                      {project.images.mobile.map((mobSrc, idx) => (
                        <MobileMockup key={idx} src={mobSrc} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                {renderTechBadges(project.tech)}
                <p className="project-desc">{project.description}</p>
                <div className="project-actions">
                  <button className="btn btn-text">Lihat Detail</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
