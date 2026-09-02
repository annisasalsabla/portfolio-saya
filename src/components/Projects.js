import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('web');
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
    web: [
      {
        id: 'sik-pnp',
        title: 'SIK PNP - Sistem Informasi Kuesioner',
        description: 'Sistem informasi kuesioner Politeknik Negeri Padang yang dikembangkan menggunakan PHP dengan dukungan HTML, CSS, dan JavaScript untuk memudahkan pengelolaan dan pengisian kuesioner.',
        type: 'web',
        images: ['/images/web1.png'],
        tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
        features: [
          'Manajemen data kuesioner',
          'Pengisian kuesioner online',
          'Generate laporan otomatis',
          'Multi-user access system',
          'Dashboard admin'
        ]
      },
      {
        id: 'wisata-padang',
        title: 'Website Wisata Kota Padang',
        description: 'Website wisata dengan Sistem Informasi Geografis (SIG) untuk menampilkan lokasi wisata pada peta secara interaktif.',
        type: 'web',
        images: ['/images/web2.png'],
        tech: ['PHP', 'JavaScript', 'Google Maps API', 'HTML5', 'CSS3'],
        features: [
          'Peta wisata interaktif',
          'Informasi detail lokasi',
          'Kategori wisata',
          'Search & filter',
          'Responsive design'
        ]
      },
      {
        id: 'rs-antrian',
        title: 'Sistem Antrian RS Annisa',
        description: 'Sistem antrian digital rumah sakit yang dikembangkan menggunakan Laravel untuk mempermudah proses pendaftaran pasien dan monitoring pelayanan.',
        type: 'web',
        images: ['/images/web3.png'],
        tech: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery'],
        features: [
          'Pendaftaran pasien online',
          'Manajemen antrian real-time',
          'Dashboard admin & petugas',
          'Laporan harian',
          'Notifikasi antrian'
        ]
      }
    ],
    aplikasi: [
      {
        id: 'ta',
        title: "Sistem Manajemen Inventory & Penjualan (TA)",
        description: "Aplikasi mobile manajemen inventory & penjualan toko grosir dengan 3 role (Admin, Owner, Kasir), dashboard ringkasan penjualan, grafik mingguan, dan monitoring stok masuk-keluar.",
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
      },
      {
        id: 'yummy',
        title: 'YUMMY - Food Explorer App',
        description: 'Aplikasi mobile makanan yang dikembangkan menggunakan Flutter untuk menjelajahi makanan, melihat bahan-bahan, dan mengetahui lokasi makanan di peta.',
        type: 'mobile',
        images: ['/images/mobile1.png'],
        tech: ['Flutter', 'Dart', 'Android Studio', 'Google Maps API'],
        features: [
          'Explorasi berbagai makanan',
          'Detail bahan dan resep',
          'Lokasi makanan di peta',
          'UI modern dan clean',
          'Favorite system'
        ]
      },
      {
        id: 'campus',
        title: 'Campus Explorer App',
        description: 'Aplikasi explorer kampus dengan Flutter frontend yang terhubung ke Lumen REST API, mendukung fungsi CRUD lengkap dan integrasi Google Maps API.',
        type: 'mobile',
        images: ['/images/mobile2.png'],
        tech: ['Flutter', 'Dart', 'Lumen API', 'REST API', 'Google Maps'],
        features: [
          'CRUD operations',
          'Google Maps integration',
          'Campus location visualization',
          'REST API connectivity',
          'Modern UI design'
        ]
      },
      {
        id: 'clinic',
        title: 'Clinic App - Doctor Appointment',
        description: 'Prototipe antarmuka pengguna untuk aplikasi kesehatan mobile bernama Self Care, dirancang menggunakan Android Studio dengan Kotlin.',
        type: 'mobile',
        images: ['/images/mobile3.png'],
        tech: ['Kotlin', 'Android Studio', 'XML', 'Material Design'],
        features: [
          'Doctor appointment booking',
          'Modern healthcare UI',
          'Patient profile management',
          'Appointment scheduling',
          'Clean user interface'
        ]
      }
    ],
    magang: [
      {
        id: 'haloemas',
        title: "Sistem Informasi POS-HALOEMAS",
        description: "Pengembangan REST API backend untuk sistem POS — perancangan endpoint, integrasi data, optimasi komunikasi backend-frontend.",
        type: "web",
        images: ["/images/apihaloemas.png"],
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
        type: "web",
        images: ["/images/apiaesywarehouse.png"],
        tech: ["Laravel", "REST API", "MySQL"],
        features: [
          'Pengelolaan data barang masuk/keluar',
          'Integrasi API manajemen gudang',
          'Laporan inventaris otomatis',
          'Sistem pencatatan real-time'
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
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projek Terselesaikan</h2>
          <p className="section-subtitle">Studi kasus dan implementasi sistem nyata yang pernah saya bangun.</p>
        </motion.div>

        {/* Tabs Filter */}
        <div className="project-tabs">
          <button 
            className={`tab-btn ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('web')}
          >
            Projek Web
          </button>
          <button 
            className={`tab-btn ${activeCategory === 'aplikasi' ? 'active' : ''}`}
            onClick={() => setActiveCategory('aplikasi')}
          >
            Projek Aplikasi
          </button>
          <button 
            className={`tab-btn ${activeCategory === 'magang' ? 'active' : ''}`}
            onClick={() => setActiveCategory('magang')}
          >
            Projek Magang
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
              <Tilt 
                key={project.id} 
                tiltMaxAngleX={10} 
                tiltMaxAngleY={10} 
                perspective={1000} 
                scale={1.02}
                transitionSpeed={2000}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                style={{ height: '100%' }}
              >
                <motion.div 
                  className="project-card"
                  variants={projectVariants}
                  style={{ height: '100%' }}
                >
                  <div className="project-visuals">
                    {project.type === 'mobile' && (
                      <div className="visual-center">
                        <MobileMockup src={project.images[0]} />
                      </div>
                    )}
                    {project.type === 'web' && (
                      <div className="visual-center">
                        <WebMockup src={project.images[0]} />
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
              </Tilt>
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
                  {selectedProject.type === 'web' && (
                    <div className="visual-center">
                      <WebMockup src={selectedProject.images[0]} />
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
