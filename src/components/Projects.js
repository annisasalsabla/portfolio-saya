import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        title: 'SIK PNP - Questionnaire Information System',
        description: 'A questionnaire information system for Politeknik Negeri Padang developed using PHP with HTML, CSS, and JavaScript support, designed to simplify questionnaire management and submission.',
        type: 'web',
        images: ['/images/web1.png'],
        tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
        features: [
          'Questionnaire data management',
          'Online questionnaire submission',
          'Automatic report generation',
          'Multi-user access system',
          'Admin dashboard'
        ]
      },
      {
        id: 'wisata-padang',
        title: 'Padang City Tourism Website',
        description: 'A tourism website with a Geographic Information System (GIS) to display tourist locations interactively on a map.',
        type: 'web',
        images: ['/images/web2.png'],
        tech: ['PHP', 'JavaScript', 'Google Maps API', 'HTML5', 'CSS3'],
        features: [
          'Interactive tourism map',
          'Detailed location information',
          'Tourism categories',
          'Search & filter',
          'Responsive design'
        ]
      },
      {
        id: 'rs-antrian',
        title: 'RS Annisa Queue System',
        description: 'A digital hospital queue system developed using Laravel to simplify patient registration and service monitoring processes.',
        type: 'web',
        images: ['/images/web3.png'],
        tech: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery'],
        features: [
          'Online patient registration',
          'Real-time queue management',
          'Admin & staff dashboard',
          'Daily reports',
          'Queue notifications'
        ]
      }
    ],
    aplikasi: [
      {
        id: 'ta',
        title: "Inventory & Sales Management System (Final Project)",
        description: "A mobile inventory & sales management application for a wholesale store with 3 roles (Admin, Owner, Cashier), a sales summary dashboard, weekly charts, and stock monitoring.",
        type: "mobile",
        images: ["/images/projekta.png"],
        tech: ["Flutter", "Laravel", "MySQL", "REST API"],
        features: [
          '3-Role System (Admin, Owner, Cashier)',
          'Frontend built with Flutter',
          'Backend REST API built with Laravel',
          'Sales & profit summary dashboard',
          'Incoming/outgoing stock monitoring',
          'Weekly sales charts'
        ]
      },
      {
        id: 'yummy',
        title: 'YUMMY - Food Explorer App',
        description: 'A mobile food application built with Flutter to explore foods, view ingredients, and find food locations on a map.',
        type: 'mobile',
        images: ['/images/mobile1.png'],
        tech: ['Flutter', 'Dart', 'Android Studio', 'Google Maps API'],
        features: [
          'Explore various foods',
          'Ingredient and recipe details',
          'Food locations on the map',
          'Modern and clean UI',
          'Favorite system'
        ]
      },
      {
        id: 'campus',
        title: 'Campus Explorer App',
        description: 'A campus explorer app with a Flutter frontend connected to a Lumen REST API, supporting full CRUD operations and Google Maps API integration.',
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
        description: 'A user interface prototype for a mobile health application called Self Care, designed using Android Studio with Kotlin.',
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
        title: "POS-HALOEMAS Information System",
        description: "Backend REST API development for a POS system — endpoint design, data integration, backend-frontend communication optimization.",
        type: "web",
        images: ["/images/apihaloemas.png"],
        tech: ["Laravel", "REST API", "PostgreSQL", "PHP"],
        features: [
          'REST API endpoint design',
          'Backend & frontend data integration',
          'Database query performance optimization',
          'API technical documentation',
          'User & transaction management'
        ]
      },
      {
        id: 'easywarehouse',
        title: "Easy Warehouse Information System",
        description: "Backend REST API for a warehouse management system, handling inventory data management.",
        type: "web",
        images: ["/images/apiaesywarehouse.png"],
        tech: ["Laravel", "REST API", "MySQL"],
        features: [
          'Incoming/outgoing goods management',
          'Warehouse management API integration',
          'Automatic inventory reports',
          'Real-time record-keeping system'
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
          <h2 className="section-title">Completed Projects</h2>
          <p className="section-subtitle">Case studies and real system implementations I have built.</p>
        </motion.div>

        {/* Tabs Filter */}
        <div className="project-tabs">
          <button 
            className={`tab-btn ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('web')}
          >
            Web Projects
          </button>
          <button 
            className={`tab-btn ${activeCategory === 'aplikasi' ? 'active' : ''}`}
            onClick={() => setActiveCategory('aplikasi')}
          >
            App Projects
          </button>
          <button 
            className={`tab-btn ${activeCategory === 'magang' ? 'active' : ''}`}
            onClick={() => setActiveCategory('magang')}
          >
            Internship Projects
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
                style={{ height: '100%' }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
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
                      View Details <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
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
                  
                  <h4 className="modal-subtitle">Key Features:</h4>
                  <ul className="modal-features">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  
                  <div className="modal-btn-actions">
                    <button className="btn btn-primary" onClick={() => setSelectedProject(null)}>Close</button>
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
