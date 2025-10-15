import React, { useEffect, useState } from 'react';
import {
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaDocker,
} from 'react-icons/fa';
import { SiMysql, SiFlutter, SiDart, SiKotlin } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Data projects yang lengkap
const projectsData = {
  web: [
    {
      id: 'sik-pnp',
      title: 'SIK PNP - Sistem Informasi Kuesioner',
      category: 'Website',
      image: '/images/web1.png',
      description: 'Sistem informasi kuesioner Politeknik Negeri Padang yang dikembangkan menggunakan PHP dengan dukungan HTML, CSS, dan JavaScript untuk memudahkan pengelolaan dan pengisian kuesioner di lingkungan PNP.',
      technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'XAMPP'],
      features: [
        'Manajemen data kuesioner',
        'Pengisian kuesioner online',
        'Generate laporan otomatis',
        'Multi-user access system',
        'Dashboard admin'
      ],
      githubUrl: 'https://github.com/annisasalsabla/PBL6-Arsip',
      demoUrl: 'https://www.mibers23.my.id/PBL/', // TAMBAHAN: URL demo
      liveUrl: '#'
    },
    {
      id: 'wisata-padang',
      title: 'Website Wisata Kota Padang',
      category: 'Website',
      image: '/images/web2.png',
      description: 'Website wisata dengan Sistem Informasi Geografis (SIG) untuk menampilkan lokasi wisata pada peta secara interaktif, membantu pengguna menemukan destinasi wisata dengan visualisasi peta.',
      technologies: ['PHP', 'JavaScript', 'Google Maps API', 'HTML5', 'CSS3', 'MySQL'],
      features: [
        'Peta wisata interaktif',
        'Informasi detail lokasi',
        'Kategori wisata',
        'Search & filter',
        'Responsive design'
      ],
      githubUrl: 'https://github.com/annisasalsabla/ProjectWisataGIS',
      liveUrl: '#'
    },
    {
      id: 'rs-antrian',
      title: 'Sistem Antrian RS Annisa',
      category: 'Website',
      image: '/images/web3.png',
      description: 'Sistem antrian digital rumah sakit yang dikembangkan menggunakan Laravel untuk mempermudah proses pendaftaran pasien, pengelolaan antrian, dan monitoring pelayanan.',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery'],
      features: [
        'Pendaftaran pasien online',
        'Manajemen antrian real-time',
        'Dashboard admin & petugas',
        'Laporan harian',
        'Notifikasi antrian'
      ],
      githubUrl: 'https://github.com/annisasalsabla/Tugas_Besar_Antrian_Rs_2301092005',
      liveUrl: '#'
    }
  ],
  mobile: [
    {
      id: 'yummy-apps',
      title: 'YUMMY - Food Explorer App',
      category: 'Mobile App',
      image: '/images/mobile1.png',
      description: 'Aplikasi mobile makanan yang dikembangkan menggunakan Flutter untuk menjelajahi makanan, melihat bahan-bahan, dan mengetahui lokasi makanan di peta dengan UI yang bersih dan modern.',
      technologies: ['Flutter', 'Dart', 'Android Studio', 'Google Maps API'],
      features: [
        'Explorasi berbagai makanan',
        'Detail bahan dan resep',
        'Lokasi makanan di peta',
        'UI modern dan clean',
        'Favorite system'
      ],
      githubUrl: 'https://github.com/annisasalsabla/YummyApps',
      liveUrl: '#'
    },
    {
      id: 'campus-explorer',
      title: 'Campus Explorer App',
      category: 'Mobile App',
      image: '/images/mobile2.png',
      description: 'Aplikasi explorer kampus dengan Flutter frontend yang terhubung ke Lumen REST API, mendukung fungsi CRUD lengkap dan integrasi Google Maps API untuk visualisasi lokasi kampus.',
      technologies: ['Flutter', 'Dart', 'Lumen API', 'RESTful API', 'Google Maps'],
      features: [
        'CRUD operations',
        'Google Maps integration',
        'Campus location visualization',
        'REST API connectivity',
        'Modern UI design'
      ],
      githubUrl: 'https://github.com/annisasalsabla/kampus_flutter',
      liveUrl: '#'
    },
    {
      id: 'clinic-app',
      title: 'Clinic App - Doctor Appointment',
      category: 'Mobile App',
      image: '/images/mobile3.png',
      description: 'Prototipe antarmuka pengguna untuk aplikasi kesehatan mobile bernama Self Care, dirancang menggunakan Android Studio dengan Kotlin untuk membantu pengguna membuat janji dengan dokter.',
      technologies: ['Kotlin', 'Android Studio', 'XML', 'Material Design'],
      features: [
        'Doctor appointment booking',
        'Modern healthcare UI',
        'Patient profile management',
        'Appointment scheduling',
        'Clean user interface'
      ],
      githubUrl: 'https://github.com/annisasalsabla/Clinic_Apps',
      liveUrl: '#'
    }
  ]
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('web');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const fadeInOnScroll = () => {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 150) {
          element.classList.add('fade-in-up');
        }
      });
    };
    
    fadeInOnScroll();
    window.addEventListener('scroll', fadeInOnScroll);
    return () => window.removeEventListener('scroll', fadeInOnScroll);
  }, []);

  const certificates = [
    { id: 1, image: "/images/s1.png" },
    { id: 2, image: "/images/s2.png" },
    { id: 3, image: "/images/s3.png" },
    { id: 4, image: "/images/s4.png" },
    { id: 5, image: "/images/s5.png" },
    { id: 6, image: "/images/s6.png" },
    { id: 7, image: "/images/s7.png" },
    { id: 8, image: "/images/s8.png" },
    { id: 9, image: "/images/s9.png" },
  ];

  const contactInfo = [
    {
      id: 1,
      icon: 'fas fa-phone',
      title: 'Telepon',
      link: 'tel:+6285194713488',
      color: '#25D366'
    },
    {
      id: 2,
      icon: 'fas fa-envelope',
      title: 'Email',
      link: 'mailto:nisasalsabila23050505@gmail.com',
      color: '#EA4335'
    },
    {
      id: 3,
      icon: 'fab fa-github',
      title: 'GitHub',
      link: 'https://github.com/annisasalsabla',
      color: '#333'
    },
    {
      id: 4,
      icon: 'fab fa-instagram',
      title: 'Instagram',
      link: 'https://www.instagram.com/chaslbl?igsh=MXVsOXZnZmM5M3Z4ZQ==',
      color: '#E4405F'
    }
  ];

  const projects = projectsData[activeCategory];

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div>
{/* ===== SECTION 1: HERO ===== */}
<section
  id="home"
  className="hero-section d-flex align-items-center justify-content-center"
  style={{
    backgroundColor: "#2F3640",
    color: "white",
    minHeight: "100vh",
    padding: "60px 0",
  }}
>
  <div className="container text-center text-lg-start d-flex flex-column flex-lg-row align-items-center gap-5">
    <img
      src="/images/aku.jpeg"
      alt="Annisa Salsabila"
      className="rounded-circle shadow-lg"
      style={{
        width: "280px",
        height: "280px",
        objectFit: "cover",
        border: "5px solid rgba(255,255,255,0.1)",
      }}
    />
    <div>
      <h1 className="fw-bold display-5 mb-3">
        Halo, Saya <span className="text-warning">Annisa Salsabila</span>
      </h1>
      <h4 className="fw-normal">
        Backend Developer | Passionate about building reliable and scalable web applications
      </h4>
    </div>
  </div>
</section>

      {/* ===== SECTION 2: ABOUT ===== */}
      <section
        id="about"
        className="about-section py-5"
        style={{ backgroundColor: "#F1F2F6", color: "#2F3640" }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ letterSpacing: "3px", fontSize: "2.5rem" }}>
            TENTANG
          </h2>
          <hr
            style={{
              width: "200px",
              height: "4px",
              backgroundColor: "#2F3640",
              margin: "0 auto 40px auto",
              opacity: "0.3",
            }}
          />
          <p
            className="mx-auto"
            style={{
              maxWidth: "800px",
              fontSize: "1.2rem",
              lineHeight: "1.8",
            }}
          >
            Halo, saya <b>Annisa Salsabila</b>, seorang{" "}
            <b>Backend Developer</b> yang berfokus pada pengembangan logika dan
            arsitektur sistem web. Saat ini saya menempuh studi{" "}
            <b>D3 Manajemen Informatika, Jurusan Teknologi Informasi</b> di{" "}
            <b>Politeknik Negeri Padang</b>. Saya berkomitmen untuk menciptakan 
            sistem yang efisien, aman, dan mudah diintegrasikan dengan layanan lain. 
            Saya bersemangat untuk terus belajar dan menerapkan teknologi terbaru 
            di bidang backend development.
          </p>
        </div>
      </section>

      {/* ===== SECTION 3: SKILLS ===== */}
      <section 
        id="skills"
        className="skills-section py-5"
        style={{ backgroundColor: '#F1F2F6', color: '#2F3640', minHeight: '100vh' }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ letterSpacing: '3px', fontSize: '2.5rem' }}>
            SKILLS
          </h2>
          <hr
            style={{
              width: '200px',
              height: '4px',
              backgroundColor: '#2F3640',
              margin: '0 auto 40px auto',
              opacity: '0.3',
            }}
          />

          {/* Programming Languages & Technologies */}
          <div className="mb-5 fade-in-up">
            <h3 className="fw-bold mb-4" style={{ fontSize: '1.8rem' }}>Teknologi & Bahasa Pemrograman</h3>
            <div className="logo-grid mx-auto">
              <FaLaravel size={70} color="#FF2D20" title="Laravel" />
              <FaReact size={70} color="#61DAFB" title="React" />
              <SiFlutter size={70} color="#02569B" title="Flutter" />
              <SiKotlin size={70} color="#7F52FF" title="Kotlin" />
              <FaPhp size={70} color="#777BB4" title="PHP" />
              <FaJs size={70} color="#F7DF1E" title="JavaScript" />
              <SiDart size={70} color="#0175C2" title="Dart" />
              <FaHtml5 size={70} color="#E34F26" title="HTML5" />
              <FaCss3Alt size={70} color="#1572B6" title="CSS3" />
              <SiMysql size={70} color="#4479A1" title="MySQL" />
            </div>
          </div>

          {/* Development Tools */}
          <div className="mb-5 fade-in-up">
            <h3 className="fw-bold mb-4" style={{ fontSize: '1.8rem' }}>Development Tools</h3>
            <div className="logo-grid mx-auto">
              <img src="/images/vscode.png" alt="VS Code" className="skill-logo" title="VS Code" />
              <FaGithub size={70} color="#181717" title="GitHub" />
              <FaGitAlt size={70} color="#F05032" title="Git" />
              <FaFigma size={70} color="#F24E1E" title="Figma" />
              <img src="/images/androidstudio.png" alt="Android Studio" className="skill-logo" title="Android Studio" />
              <FaDocker size={70} color="#2496ED" title="Docker" />
              <img src="/images/xampp.jpg" alt="XAMPP" className="skill-logo" title="XAMPP" />
            </div>
          </div>

          {/* Office & Design Tools */}
          <div className="fade-in-up">
            <h3 className="fw-bold mb-4" style={{ fontSize: '1.8rem' }}>Office & Design Tools</h3>
            <div className="logo-grid mx-auto">
              <img src="/images/canva.png" alt="Canva" className="skill-logo" title="Canva" />
              <img src="/images/msword.png" alt="MS Word" className="skill-logo" title="MS Word" />
              <img src="/images/msppt.png" alt="MS PowerPoint" className="skill-logo" title="MS PowerPoint" />
              <img src="/images/msexcel.png" alt="MS Excel" className="skill-logo" title="MS Excel" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: PROJECTS ===== */}
      <section 
        id="projects"
        className="projects-section py-5"
        style={{ backgroundColor: '#F1F2F6', color: '#2F3640', minHeight: '100vh' }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ letterSpacing: '3px', fontSize: '2.5rem' }}>
            PROJEK
          </h2>
          <hr
            style={{
              width: '200px',
              height: '4px',
              backgroundColor: '#2F3640',
              margin: '0 auto 40px auto',
              opacity: '0.3',
            }}
          />
          
          {/* Category Tabs */}
          <div className="row justify-content-center mb-5 fade-in-up">
            <div className="col-md-8">
              <div className="nav nav-pills justify-content-center" role="tablist">
                <button
                  className={`category-btn ${activeCategory === 'web' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('web')}
                >
                  <i className="fas fa-laptop-code me-2"></i>
                  Website Projects
                </button>

                <button
                  className={`category-btn ${activeCategory === 'mobile' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('mobile')}
                >
                  <i className="fas fa-mobile-alt me-2"></i>
                  Mobile Apps
                </button>
              </div>
            </div>
          </div>

          {/* Projects Carousel */}
          <div className="fade-in-up">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              className="projects-swiper"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="project-card">
                    <div className={`project-frame ${activeCategory === 'web' ? 'laptop-frame' : 'mobile-frame'}`}>
                      <div className="frame-content">
                        <img src={project.image} alt={project.title} />
                      </div>
                      <div className="project-overlay">
                        <button 
                          className="btn btn-primary"
                          onClick={() => handleViewDetails(project)}
                        >
                          <i className="fas fa-eye me-2"></i>
                          View Details
                        </button>
                        
                        {/* TAMBAHAN: Button Demo di Card untuk SIK PNP */}
                        {project.id === 'sik-pnp' && project.demoUrl && (
                          <a 
                            href={project.demoUrl}
                            className="btn btn-success mt-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-external-link-alt me-2"></i>
                            Live Demo
                          </a>
                        )}
                        
                        <a 
                          href={project.githubUrl} 
                          className={`btn ${project.id === 'sik-pnp' ? 'btn-outline-light mt-2' : 'btn-outline-light'}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github me-2"></i>
                          View Code
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h5 style={{ color: '#2F3640' }}>{project.title}</h5>
                      <p style={{ color: '#666' }}>{project.description}</p>
                      <div className="project-technologies">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="tech-badge">{tech}</span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="tech-badge">+{project.technologies.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: CERTIFICATES ===== */}
<section 
  id="certificates"
  className="certificates-section py-5"
  style={{ backgroundColor: '#F1F2F6', color: '#2F3640', minHeight: '100vh' }}
>
  <div className="container text-center">
    <h2 className="fw-bold mb-4" style={{ letterSpacing: '3px', fontSize: '2.5rem' }}>
      SERTIFIKAT
    </h2>
    <hr
      style={{
        width: '200px',
        height: '4px',
        backgroundColor: '#2F3640',
        margin: '0 auto 40px auto',
        opacity: '0.3',
      }}
    />

    {/* Desktop View */}
    <div className="d-none d-md-block">
      <div className="row justify-content-center">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="col-md-4 col-sm-6 mb-4 fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="certificate-card shadow-lg rounded-4 p-3 bg-white text-center position-relative">
              <div className="certificate-frame">
                <img
                  src={cert.image}
                  alt={`Sertifikat ${cert.id}`}
                  className="img-fluid rounded-3"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Mobile Carousel */}
    <div className="d-md-none">
      <Swiper
        modules={[Pagination]}
        spaceBetween={15}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
        className="certificates-swiper"
      >
        {certificates.map((cert, index) => (
          <SwiperSlide key={index}>
            <div className="certificate-card shadow-lg rounded-4 p-3 bg-white text-center position-relative">
              <div className="certificate-frame">
                <img
                  src={cert.image}
                  alt={`Sertifikat ${cert.id}`}
                  className="img-fluid rounded-3"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>

      {/* ===== SECTION 6: CONTACT ===== */}
<section 
  id="contact"
  className="contact-section py-5"
  style={{ backgroundColor: '#F1F2F6', color: '#2F3640', minHeight: '100vh' }}
>
  <div className="container text-center">
    <h2 className="fw-bold mb-4" style={{ letterSpacing: '3px', fontSize: '2.5rem' }}>
      KONTAK
    </h2>
    <hr
      style={{
        width: '200px',
        height: '4px',
        backgroundColor: '#2F3640',
        margin: '0 auto 40px auto',
        opacity: '0.3',
      }}
    />

    <p className="lead mb-5 fade-in-up" style={{ fontSize: '1.2rem', color: '#666' }}>
      Terhubung dengan saya melalui platform berikut:
    </p>

    <div className="d-flex justify-content-center flex-wrap gap-4 fade-in-up mb-5">
      {contactInfo.map((contact, index) => (
        <a 
          key={contact.id}
          href={contact.link}
          target={contact.link.startsWith('http') ? '_blank' : '_self'}
          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
          className="contact-icon-link"
          style={{ color: contact.color }}
        >
          <i className={`${contact.icon}`}></i>
        </a>
      ))}
    </div>

    {/* Tambahan Portfolio Detail */}
    <div className="fade-in-up mt-5">
      <p className="mb-3" style={{ fontSize: '1.1rem', color: '#666' }}>
        Untuk portfolio lebih detailnya bisa lihat disini:
      </p>
      <a 
        href="https://drive.google.com/file/d/1P57aE4gWgYmiRgvW5qabwmJkzyIaKaWN/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg"
        style={{
          backgroundColor: '#2F3640',
          borderColor: '#2F3640',
          padding: '12px 30px',
          fontSize: '1.1rem',
          fontWeight: '600',
          borderRadius: '25px'
        }}
      >
        <i className="fas fa-file-pdf me-2"></i>
        Lihat Portfolio Lengkap
      </a>
    </div>
  </div>
</section>

      {/* Project Detail Modal */}
      {showModal && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <button className="close-btn" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="project-showcase mb-4">
                <div className={`project-frame-large ${activeCategory === 'web' ? 'laptop-frame-large' : 'mobile-frame-large'}`}>
                  <div className="frame-content-large">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              
              <div className="project-details">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="project-description mb-4">
                      <h4 className="mb-3">Tentang Project</h4>
                      <p>{selectedProject.description}</p>
                    </div>

                    {selectedProject.features && (
                      <div className="project-features mb-4">
                        <h4 className="mb-3">Fitur Utama</h4>
                        <div className="row">
                          {selectedProject.features.map((feature, index) => (
                            <div key={index} className="col-md-6 mb-2">
                              <div className="feature-item">
                                <i className="fas fa-check-circle text-primary me-2"></i>
                                <span>{feature}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="col-lg-4">
                    <div className="project-info-card">
                      <h5 className="mb-3">Detail Project</h5>
                      
                      <div className="mb-4">
                        <h6 className="fw-semibold mb-2">Teknologi yang Digunakan</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span key={index} className="tech-badge-modal">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="project-links">
                        {/* TAMBAHAN: Button Demo di Modal untuk SIK PNP */}
                        {selectedProject.id === 'sik-pnp' && selectedProject.demoUrl && (
                          <a 
                            href={selectedProject.demoUrl}
                            className="btn btn-success w-100 py-2 fw-semibold mb-3"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-external-link-alt me-2"></i>
                            Lihat Demo
                          </a>
                        )}
                        
                        <a 
                          href={selectedProject.githubUrl} 
                          className="btn btn-dark w-100 py-2 fw-semibold"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github me-2"></i>
                          Lihat Kode di GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


<style jsx>{`
  /* FIX UNTUK NAVBAR TIDAK MENUTUPI KONTEN */
  [id] {
    scroll-margin-top: 80px;
  }

  /* SETIAP SECTION 1 LAYAR PENUH UNTUK DESKTOP */
  .hero-section,
  .about-section,
  .skills-section,
  .projects-section,
  .certificates-section,
  .contact-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  /* Hero section khusus */
  .hero-section {
    padding-top: 80px;
    min-height: calc(100vh - 80px);
  }

  /* PERBAIKAN: Foto Profil LEBIH BESAR di Desktop */
  .hero-section img {
    width: 320px !important;
    height: 320px !important;
    object-fit: cover;
    border: 6px solid white;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }

  /* Skills Section Styles */
  .logo-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    max-width: 900px;
  }

  .skill-logo {
    width: 70px;
    height: 70px;
    object-fit: contain;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .logo-grid svg {
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .skill-logo:hover,
  .logo-grid svg:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.2));
  }

  /* Projects Section Styles */
  .category-buttons-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
  }

  .category-btn {
    margin: 0 10px;
    padding: 12px 24px;
    border-radius: 25px;
    border: 2px solid #2F3640;
    background-color: transparent;
    color: #2F3640;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .category-btn.active {
    background-color: #2F3640;
    color: white;
  }

  .category-btn:hover {
    background-color: #2F3640;
    color: white;
  }

  .category-btn:focus,
  .category-btn:active {
    outline: none !important;
    box-shadow: none !important;
  }

  .category-btn::after {
    display: none !important;
  }

  .project-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    height: 100%;
  }

  .project-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  }

  /* FRAME PROJECT - Desktop */
  .project-frame {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .laptop-frame {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 25px 25px 0;
    border-radius: 12px 12px 0 0;
    position: relative;
    height: auto;
    width: 100%;
  }

  .laptop-frame::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 12px;
    background: #e9ecef;
    border-radius: 0 0 12px 12px;
  }

  .mobile-frame {
    background: linear-gradient(135deg, #2a2a3c 0%, #3a3a4c 100%);
    padding: 35px 18px;
    border-radius: 35px;
    position: relative;
    margin: 25px auto;
    width: 170px;
    height: auto;
  }

  .mobile-frame::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 45px;
    height: 6px;
    background: #2a2a3c;
    border-radius: 0 0 6px 6px;
  }

  .frame-content {
    width: 100%;
    height: auto;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 0;
  }

  .frame-content img {
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: all 0.3s ease;
    display: block;
  }

  .project-card:hover .frame-content img {
    transform: scale(1.05);
  }

  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(47, 54, 64, 0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease;
    border-radius: inherit;
  }

  .project-card:hover .project-overlay {
    opacity: 1;
  }

  .project-content {
    padding: 1.5rem;
    flex-shrink: 0;
  }

  .project-content h5 {
    font-weight: 700;
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
  }

  .project-content p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-badge {
    background: #2F3640;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .projects-swiper {
    padding: 20px 10px 60px;
  }

  :global(.swiper-button-next),
  :global(.swiper-button-prev) {
    color: #2F3640;
    background: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }

  :global(.swiper-pagination-bullet-active) {
    background: #2F3640;
  }

  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
  }

  .modal-content {
    background: white;
    border-radius: 20px;
    max-width: 900px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #eee;
  }

  .modal-header h3 {
    margin: 0;
    color: #2F3640;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #666;
    cursor: pointer;
    padding: 0.5rem;
  }

  .close-btn:hover {
    color: #2F3640;
  }

  .modal-body {
    padding: 1.5rem;
  }

  .project-showcase {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* MODAL FRAMES - Desktop */
  .project-frame-large {
    position: relative;
    overflow: hidden;
  }

  .laptop-frame-large {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 35px 35px 0;
    border-radius: 15px;
    width: 100%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    height: auto;
  }

  .mobile-frame-large {
    background: linear-gradient(135deg, #2a2a3c 0%, #3a3a4c 100%);
    padding: 45px 22px;
    border-radius: 45px;
    max-width: 320px;
    width: 100%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    position: relative;
    height: auto;
    margin: 0 auto;
  }

  .mobile-frame-large::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 65px;
    height: 8px;
    background: #2a2a3c;
    border-radius: 0 0 8px 8px;
  }

  .frame-content-large {
    width: 100%;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .frame-content-large img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }

  .feature-item {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    background: #f8f9fa;
    border-radius: 8px;
    margin-bottom: 8px;
  }

  .project-info-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 12px;
  }

  .tech-badge-modal {
    background: #2F3640;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  /* Certificates Section Styles */
  .certificate-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #eee;
  }

  .certificate-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .certificate-frame {
    background: #fff;
    border-radius: 15px;
    padding: 10px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
  }

  /* PERBAIKAN: Section Contact lebih dekat dengan Certificates di Desktop */
  .certificates-section {
    padding-bottom: 20px;
  }
  
  .contact-section {
    padding-top: 20px;
  }

  /* Contact Section Styles */
  .contact-icon-link {
    font-size: 3rem;
    transition: all 0.3s ease;
  }

  .contact-icon-link:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }

  /* Global Styles */
  .fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.6s forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* TAMBAHAN: Responsive styles untuk button demo */
  .project-overlay .btn {
    width: 160px;
    font-size: 0.85rem;
    padding: 8px 12px;
    margin: 3px 0;
  }

  .project-overlay .btn-success {
    background-color: #28a745;
    border-color: #28a745;
  }

  .project-overlay .btn-success:hover {
    background-color: #218838;
    border-color: #1e7e34;
  }

  /* Responsive untuk mobile */
  @media (max-width: 768px) {
    .project-overlay .btn {
      width: 140px;
      font-size: 0.75rem;
      padding: 6px 10px;
    }
  }

  @media (max-width: 576px) {
    .project-overlay .btn {
      width: 120px;
      font-size: 0.7rem;
      padding: 5px 8px;
      margin: 2px 0;
    }
  }

  @media (max-width: 400px) {
    .project-overlay .btn {
      width: 110px;
      font-size: 0.65rem;
      padding: 4px 6px;
    }
  }

  /* Modal button responsive */
  .project-info-card .btn {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .project-info-card .btn {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 576px) {
    .project-info-card .btn {
      font-size: 0.75rem;
      padding: 8px 12px;
    }
  }

  /* Responsive Styles - MOBILE */
  @media (max-width: 768px) {
    /* Semua Section - Nonaktifkan 100vh di mobile */
    .hero-section,
    .about-section,
    .skills-section,
    .projects-section,
    .certificates-section,
    .contact-section {
      min-height: auto;
      display: block;
      padding: 20px 0;
    }

    /* PERBAIKAN: Section Contact BENAR-BENAR DEKAT di Mobile */
    .certificates-section {
      padding-bottom: 0px !important;
    }
    
    .contact-section {
      padding-top: 0px !important;
      padding-bottom: 15px !important;
    }

    /* PERBAIKAN: Foto Profil Lebih Besar di Tablet */
    .hero-section img {
      width: 240px !important;
      height: 240px !important;
    }

    /* Typography Scaling untuk Tablet */
    h2 {
      font-size: 1.8rem !important;
      margin-bottom: 1.5rem !important;
    }
    
    h3 {
      font-size: 1.4rem !important;
      margin-bottom: 1rem !important;
    }

    h4 {
      font-size: 1.2rem !important;
    }

    .lead {
      font-size: 1rem !important;
    }

    p {
      font-size: 0.9rem !important;
    }

    /* Hero Section */
    .hero-section {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .hero-section h1 {
      font-size: 1.8rem !important;
    }

    .hero-section h4 {
      font-size: 1rem !important;
    }

    /* Skills Section */
    .logo-grid {
      gap: 1.5rem;
    }
    
    .skill-logo, .logo-grid svg {
      width: 50px;
      height: 50px;
    }

    /* Project Frames Mobile - MINIMALIS */
    .laptop-frame {
      padding: 15px 15px 0;
      border-radius: 10px 10px 0 0;
      min-height: 120px;
    }

    .laptop-frame::before {
      height: 8px;
      border-radius: 0 0 10px 10px;
    }

    .mobile-frame {
      padding: 20px 10px;
      border-radius: 25px;
      width: 130px;
      min-height: 180px;
      margin: 15px auto;
    }

    .mobile-frame::before {
      width: 35px;
      height: 4px;
      top: -4px;
    }

    .frame-content {
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    /* Nonaktifkan hover effects di mobile */
    .project-card:hover .frame-content img {
      transform: none;
    }

    /* Contact Section */
    .contact-icon-link {
      font-size: 2.2rem;
    }

    /* Modal */
    .modal-content {
      margin: 10px;
      max-height: 95vh;
    }

    .laptop-frame-large {
      padding: 20px 20px 0;
      border-radius: 12px;
      min-height: 180px;
    }
    
    .mobile-frame-large {
      padding: 25px 15px;
      border-radius: 30px;
      max-width: 220px;
      min-height: 320px;
    }

    .mobile-frame-large::before {
      width: 45px;
      height: 6px;
      top: -6px;
    }
  }

  @media (max-width: 576px) {
    /* PERBAIKAN: Jarak Section Contact SUPER RAPAT di HP */
    .hero-section,
    .about-section,
    .skills-section,
    .projects-section {
      padding: 15px 0;
    }

    .certificates-section {
      padding-bottom: 0px !important;
    }
    
    .contact-section {
      padding-top: 0px !important;
      padding-bottom: 10px !important;
    }

    /* PERBAIKAN: Foto Profil Lebih Besar di HP */
    .hero-section img {
      width: 200px !important;
      height: 200px !important;
    }

    /* Typography Scaling untuk HP Kecil */
    h2 {
      font-size: 1.5rem !important;
      margin-bottom: 1rem !important;
    }
    
    h3 {
      font-size: 1.2rem !important;
      margin-bottom: 0.8rem !important;
    }

    h4 {
      font-size: 1rem !important;
    }

    h5 {
      font-size: 0.9rem !important;
    }

    h6 {
      font-size: 0.8rem !important;
    }

    .lead {
      font-size: 0.9rem !important;
    }

    p {
      font-size: 0.8rem !important;
      line-height: 1.4;
    }

    .display-5 {
      font-size: 1.6rem !important;
    }

    /* Hero Section HP */
    .hero-section h1 {
      font-size: 1.5rem !important;
    }

    .hero-section h4 {
      font-size: 0.9rem !important;
    }

    /* Category Buttons */
    .category-buttons-wrapper {
      overflow-x: auto;
      white-space: nowrap;
      padding-bottom: 8px;
      margin: 0 -10px 1.5rem -10px;
      padding: 0 10px;
    }

    .category-btn {
      display: inline-block;
      padding: 6px 12px;
      font-size: 10px;
      margin: 0 3px;
      flex-shrink: 0;
    }

    /* Project Cards */
    .project-card {
      margin-bottom: 20px;
      transform: none !important;
    }

    .project-card:hover {
      transform: none;
    }

    .project-content {
      padding: 1rem;
    }

    .project-content h5 {
      font-size: 0.85rem !important;
      margin-bottom: 0.4rem;
    }

    .project-content p {
      font-size: 0.75rem !important;
      margin-bottom: 0.6rem;
      line-height: 1.3;
    }

    .tech-badge {
      font-size: 0.65rem;
      padding: 0.15rem 0.5rem;
    }

    /* Project Frames HP Kecil */
    .laptop-frame {
      padding: 12px 12px 0;
      border-radius: 8px 8px 0 0;
      min-height: 100px;
    }

    .laptop-frame::before {
      height: 6px;
      border-radius: 0 0 8px 8px;
    }

    .mobile-frame {
      padding: 15px 8px;
      border-radius: 20px;
      width: 110px;
      min-height: 150px;
      margin: 12px auto;
    }

    .mobile-frame::before {
      width: 30px;
      height: 3px;
      top: -3px;
    }

    /* Project Overlay Buttons */
    .project-overlay .btn {
      padding: 4px 8px;
      font-size: 0.7rem;
      margin: 2px;
    }

    /* Skills Grid HP */
    .logo-grid {
      gap: 1rem;
    }
    
    .skill-logo, .logo-grid svg {
      width: 40px;
      height: 40px;
    }

    /* Contact Section HP */
    .contact-icon-link {
      font-size: 1.8rem;
    }

    /* Portfolio Button HP */
    .contact-section .btn-lg {
      padding: 6px 12px !important;
      font-size: 0.8rem !important;
    }

    /* Modal HP */
    .modal-header {
      padding: 0.8rem;
    }

    .modal-header h3 {
      font-size: 1.1rem !important;
    }

    .modal-body {
      padding: 0.8rem;
    }

    .close-btn {
      font-size: 1.2rem;
    }

    /* MODAL FRAMES HP Kecil */
    .laptop-frame-large {
      padding: 15px 15px 0;
      min-height: 140px;
    }

    .mobile-frame-large {
      padding: 20px 12px;
      max-width: 180px;
      min-height: 260px;
    }

    .mobile-frame-large::before {
      width: 35px;
      height: 4px;
    }

    /* Project Detail Modal HP */
    .feature-item {
      padding: 4px 8px;
      font-size: 0.75rem;
      margin-bottom: 4px;
    }

    .feature-item i {
      font-size: 0.8rem;
    }

    .project-info-card {
      padding: 1rem;
    }

    .tech-badge-modal {
      font-size: 0.65rem;
      padding: 0.15rem 0.5rem;
    }

    .project-info-card .btn {
      padding: 6px 12px;
      font-size: 0.75rem;
    }

    /* About Section HP */
    .about-section p {
      font-size: 0.85rem !important;
      line-height: 1.5;
    }

    /* Certificates Text */
    .certificate-card {
      padding: 0.8rem;
    }

    /* Button umum di mobile */
    .btn {
      font-size: 0.8rem !important;
      padding: 6px 12px !important;
    }

    .btn-lg {
      font-size: 0.85rem !important;
      padding: 8px 16px !important;
    }

    /* Swiper pagination text */
    :global(.swiper-pagination) {
      bottom: 5px !important;
    }
  }

  @media (max-width: 400px) {
    /* Extra Small Devices - SUPER RAPAT */
    .hero-section,
    .about-section,
    .skills-section,
    .projects-section {
      padding: 10px 0;
    }

    .certificates-section {
      padding-bottom: 0px !important;
    }
    
    .contact-section {
      padding-top: 0px !important;
      padding-bottom: 5px !important;
    }

    /* PERBAIKAN: Foto Profil Lebih Besar di HP Kecil */
    .hero-section img {
      width: 180px !important;
      height: 180px !important;
    }

    h2 {
      font-size: 1.3rem !important;
    }
    
    h3 {
      font-size: 1.1rem !important;
    }

    h4 {
      font-size: 0.9rem !important;
    }

    .hero-section h1 {
      font-size: 1.3rem !important;
    }

    .hero-section h4 {
      font-size: 0.8rem !important;
    }

    /* Project Frames Extra Small */
    .laptop-frame {
      padding: 10px 10px 0;
      min-height: 80px;
    }

    .mobile-frame {
      padding: 12px 6px;
      width: 95px;
      min-height: 130px;
    }

    .logo-grid {
      gap: 0.8rem;
    }
    
    .skill-logo, .logo-grid svg {
      width: 35px;
      height: 35px;
    }

    .contact-icon-link {
      font-size: 1.6rem;
    }

    .project-content p {
      font-size: 0.7rem !important;
    }

    /* MODAL FRAMES Extra Small */
    .mobile-frame-large {
      padding: 15px 10px;
      max-width: 150px;
      min-height: 220px;
    }
  }
`}</style>
    </div>
  );
};

export default Portfolio;