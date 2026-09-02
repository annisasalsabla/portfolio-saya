import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('magang');
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    },
    exit: { opacity: 0 }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, type: 'spring', stiffness: 50 }
    }
  };

  const projectsData = {
    magang: [
      {
        id: 'haloemas',
        title: "Sistem Informasi POS-HALOEMAS",
        description: "Pengembangan REST API backend untuk sistem POS — perancangan endpoint, integrasi data, optimasi komunikasi backend-frontend.",
        type: "hybrid",
        images: {
          web: "/images/apihaloemas.png",
          mobile: ["/images/mobile1.png", "/images/mobile2.png"]
        },
        tech: ["Laravel", "REST API", "PostgreSQL", "PHP"],
        features: [
          'Perancangan endpoint REST API',
          'Integrasi data backend & frontend',
          'Optimasi performa query database',
          'Dokumentasi teknis API',
          'Manajemen pengguna & transaksi'
        ]
      },
      {
        id: 'easywarehouse',
        title: "Sistem Informasi Easy Warehouse",
        description: "Backend REST API untuk sistem manajemen gudang (warehouse), pengelolaan data inventaris.",
        type: "hybrid",
        images: {
          web: "/images/apiaesywarehouse.png",
          mobile: ["/images/mobile3.png"]
        },
        tech: ["Laravel", "REST API", "MySQL"],
        features: [
          'Pengelolaan data barang masuk/keluar',
          'Integrasi API manajemen gudang',
          'Laporan inventaris otomatis',
          'Sistem pencatatan real-time'
        ]
      }
    ],
    mobile: [
      {
        id: 'ta',
        title: "Sistem Manajemen Inventory & Penjualan (Tugas Akhir)",
        description: "Aplikasi mobile manajemen inventory & penjualan toko grosir dengan 3 role (Admin, Owner, Kasir), dashboard ringkasan penjualan/laba/piutang, grafik mingguan, dan monitoring stok masuk-keluar.",
        type: "mobile",
        images: ["/images/projekta.png"],
        tech: ["Flutter", "Laravel", "MySQL", "REST API"],
        features: [
          'Sistem 3 Role (Admin, Owner, Kasir)',
          'Frontend dikembangkan dengan Flutter',
          'Backend REST API dikembangkan dengan Laravel',
          'Dashboard ringkasan penjualan & laba',
          'Monitoring stok barang masuk-keluar',
          'Grafik penjualan mingguan'
        ]
      }
    ]
  };

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

        {/* Tabs Filter */}
        <div className="project-tabs">
          <button 
            className={`tab-btn ${activeCategory === 'magang' ? 'active' : ''}`}
            onClick={() => setActiveCategory('magang')}
          >
            Projek Magang
          </button>
          <button 
            className={`tab-btn ${activeCategory === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mobile')}
          >
            Mobile Apps (TA)
          </button>
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {projectsData[activeCategory].map((project) => (
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
                    <button 
                      className="btn btn-text"
                      onClick={() => setSelectedProject(project)}
                    >
                      Lihat Detail <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <i className="fas fa-times"></i>
              </button>
              
              <div className="modal-body">
                <div className="modal-visuals">
                  {selectedProject.type === 'mobile' && (
                    <div className="visual-center">
                      <MobileMockup src={selectedProject.images[0]} />
                    </div>
                  )}
                  {selectedProject.type === 'hybrid' && (
                    <div className="visual-hybrid">
                      <WebMockup src={selectedProject.images.web} />
                    </div>
                  )}
                </div>
                
                <div className="modal-details">
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <div className="modal-tech">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="badge">{t}</span>
                    ))}
                  </div>
                  <p className="modal-desc">{selectedProject.description}</p>
                  
                  <h4 className="modal-subtitle">Fitur Utama:</h4>
                  <ul className="modal-features">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  
                  <div className="modal-btn-actions">
                    <button className="btn btn-primary" onClick={() => setSelectedProject(null)}>Tutup</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
