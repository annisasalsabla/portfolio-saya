import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (sectionId) => {
    closeMobileMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          {/* Brand dengan Portofolio Annisa */}
          <div className="navbar-brand-wrapper">
            <a 
              className="navbar-brand" 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              <div className="brand-content">
                <span className="portfolio-text">PORTFOLIO</span>
                <span className="name-text">ANNISA</span>
              </div>
            </a>
          </div>
          
          {/* Hamburger Menu */}
          <button 
            className={`navbar-toggler ${isOpen ? 'active' : ''}`}
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          
          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('home');
                  }}
                >
                  <i className="nav-icon fas fa-home"></i>
                  <span className="nav-text">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('about');
                  }}
                >
                  <i className="nav-icon fas fa-user"></i>
                  <span className="nav-text">Tentang</span>
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} 
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('skills');
                  }}
                >
                  <i className="nav-icon fas fa-code"></i>
                  <span className="nav-text">Skills</span>
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} 
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('projects');
                  }}
                >
                  <i className="nav-icon fas fa-project-diagram"></i>
                  <span className="nav-text">Projek</span>
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'certificates' ? 'active' : ''}`} 
                  href="#certificates"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('certificates');
                  }}
                >
                  <i className="nav-icon fas fa-certificate"></i>
                  <span className="nav-text">Sertifikat</span>
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('contact');
                  }}
                >
                  <i className="nav-icon fas fa-envelope"></i>
                  <span className="nav-text">Kontak</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          backdrop-filter: blur(20px);
          padding: 1rem 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .navbar.scrolled {
          padding: 0.8rem 0;
          background: rgba(15, 23, 42, 0.95);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(20px);
        }
        
        .navbar-brand-wrapper {
          display: flex;
          align-items: center;
        }
        
        .navbar-brand {
          text-decoration: none;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }
        
        .brand-content {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        
        .portfolio-text {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          letter-spacing: 3px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          margin-bottom: 2px;
          transition: all 0.3s ease;
        }
        
        .name-text {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          font-size: 1.4rem;
          font-weight: 400;
          color: #ffffff;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }
        
        .navbar-brand:hover .portfolio-text {
          color: rgba(255, 255, 255, 0.9);
        }
        
        .navbar-brand:hover .name-text {
          color: #f8fafc;
        }
        
        .navbar-toggler {
          border: none;
          background: transparent;
          padding: 0.5rem;
          position: relative;
          width: 30px;
          height: 30px;
        }
        
        .toggler-icon {
          display: block;
          position: relative;
          width: 24px;
          height: 18px;
        }
        
        .toggler-icon span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: #f8fafc;
          border-radius: 1px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: all 0.3s ease;
        }
        
        .toggler-icon span:nth-child(1) {
          top: 0px;
        }
        
        .toggler-icon span:nth-child(2) {
          top: 8px;
        }
        
        .toggler-icon span:nth-child(3) {
          top: 16px;
        }
        
        .navbar-toggler.active .toggler-icon span:nth-child(1) {
          top: 8px;
          transform: rotate(135deg);
        }
        
        .navbar-toggler.active .toggler-icon span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }
        
        .navbar-toggler.active .toggler-icon span:nth-child(3) {
          top: 8px;
          transform: rotate(-135deg);
        }
        
        .nav-link {
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 400;
          margin: 0 0.3rem;
          padding: 0.7rem 1rem !important;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          font-size: 0.95rem;
          text-decoration: none;
        }
        
        .nav-link:hover {
          color: white !important;
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-1px);
        }
        
        .nav-link.active {
          color: white !important;
          background: transparent;
          font-weight: 500;
        }
        
        /* Garis bawah untuk desktop */
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background: #f8fafc;
          border-radius: 1px;
        }
        
        .nav-icon {
          font-size: 0.8rem;
          width: 16px;
          text-align: center;
          opacity: 0.8;
        }
        
        .nav-link.active .nav-icon {
          opacity: 1;
        }

        .nav-text {
          font-weight: 400;
        }
        
        /* Hapus garis outline saat navbar toggle diklik */
        .navbar-toggler:focus {
          box-shadow: none !important;
          outline: none !important;
        }

        /* ==================== */
        /* RESPONSIVE MOBILE */
        /* ==================== */
        
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(30px);
            border-radius: 12px;
            margin-top: 0.8rem;
            padding: 1rem;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.08);
            position: absolute;
            top: 100%;
            left: 1rem;
            right: 1rem;
            z-index: 1000;
          }
          
          .nav-link {
            margin: 0.15rem 0;
            padding: 0.7rem 0.8rem !important;
            border-radius: 6px;
            justify-content: flex-start;
            border: none;
            font-size: 0.9rem;
            /* NONAKTIFKAN SEMUA HOVER EFFECTS DI MOBILE */
            transition: none !important;
          }
          
          /* NONAKTIFKAN HOVER EFFECTS DI MOBILE */
          .nav-link:hover {
            transform: none !important;
            background: transparent !important;
            color: rgba(255, 255, 255, 0.8) !important;
          }
          
          .nav-link.active {
            background: rgba(255, 255, 255, 0.1);
            color: white !important;
            font-weight: 500;
          }
          
          /* HAPUS SEMUA GARIS UNTUK MOBILE */
          .nav-link::before,
          .nav-link::after {
            display: none !important;
          }
          
          .nav-icon {
            font-size: 0.75rem;
            width: 14px;
          }
          
          .nav-text {
            font-size: 0.85rem;
            font-weight: 400;
          }

          /* FIX: Hapus efek hover untuk touch devices */
          @media (hover: none) and (pointer: coarse) {
            .nav-link:hover {
              background: transparent !important;
              color: rgba(255, 255, 255, 0.8) !important;
              transform: none !important;
            }
            
            .nav-link:active {
              background: rgba(255, 255, 255, 0.1) !important;
              color: white !important;
            }
          }
        }
        
        @media (max-width: 768px) {
          .navbar {
            padding: 0.8rem 0;
          }
          
          .navbar.scrolled {
            padding: 0.6rem 0;
          }
          
          .portfolio-text {
            font-size: 0.75rem;
            letter-spacing: 2px;
          }
          
          .name-text {
            font-size: 1.2rem;
          }
          
          .navbar-toggler {
            width: 28px;
            height: 28px;
          }
          
          .toggler-icon {
            width: 22px;
            height: 16px;
          }
        }

        @media (max-width: 576px) {
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
          
          .portfolio-text {
            font-size: 0.7rem;
            letter-spacing: 1.8px;
          }
          
          .name-text {
            font-size: 1.1rem;
            font-weight: 500;
          }
          
          .navbar-collapse {
            left: 10px;
            right: 10px;
            margin-top: 0.6rem;
            padding: 0.8rem;
            border-radius: 10px;
          }
          
          .nav-link {
            padding: 0.6rem 0.7rem !important;
            font-size: 0.85rem;
            margin: 0.1rem 0;
            /* PASTIKAN TIDAK ADA HOVER EFFECT */
            transition: none !important;
          }
          
          .nav-link:hover {
            background: transparent !important;
            color: rgba(255, 255, 255, 0.8) !important;
            transform: none !important;
          }
          
          .nav-link.active {
            background: rgba(255, 255, 255, 0.1);
            color: white !important;
          }
          
          .nav-icon {
            font-size: 0.7rem;
            width: 12px;
          }
          
          .nav-text {
            font-size: 0.8rem;
            font-weight: 400;
          }
          
          .navbar-toggler {
            padding: 0.3rem;
            width: 26px;
            height: 26px;
          }
          
          .toggler-icon {
            width: 20px;
            height: 14px;
          }
          
          .toggler-icon span {
            height: 1.5px;
          }
          
          .toggler-icon span:nth-child(2) {
            top: 7px;
          }
          
          .toggler-icon span:nth-child(3) {
            top: 14px;
          }
        }

        @media (max-width: 400px) {
          .portfolio-text {
            font-size: 0.65rem;
            letter-spacing: 1.5px;
          }
          
          .name-text {
            font-size: 1rem;
            font-weight: 500;
          }
          
          .navbar-collapse {
            left: 8px;
            right: 8px;
            margin-top: 0.5rem;
            padding: 0.6rem;
            border-radius: 8px;
          }
          
          .nav-link {
            padding: 0.5rem 0.6rem !important;
            font-size: 0.8rem;
            gap: 0.4rem;
            transition: none !important;
          }
          
          .nav-link:hover {
            background: transparent !important;
            color: rgba(255, 255, 255, 0.8) !important;
          }
          
          .nav-icon {
            font-size: 0.65rem;
            width: 11px;
          }
          
          .nav-text {
            font-size: 0.75rem;
            font-weight: 400;
          }
          
          .navbar-toggler {
            width: 24px;
            height: 24px;
          }
          
          .toggler-icon {
            width: 18px;
            height: 12px;
          }
        }

        /* FIX TAMBAHAN: Nonaktifkan hover untuk semua touch devices */
        @media (hover: none) {
          .nav-link:hover {
            background: transparent !important;
            color: rgba(255, 255, 255, 0.8) !important;
            transform: none !important;
          }
        }

        /* Pastikan hanya ada efek saat benar-benar aktif/klik */
        .nav-link:active {
          background: rgba(255, 255, 255, 0.1) !important;
          color: white !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;