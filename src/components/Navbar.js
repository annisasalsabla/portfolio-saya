import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Pengalaman' },
  { id: 'projects', label: 'Projek' },
  { id: 'certificates', label: 'Sertifikat' },
  { id: 'contact', label: 'Kontak' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'glass' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={() => setActiveSection('home')}>
          AS.
        </a>

        {/* Desktop Menu */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => setActiveSection(link.id)}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div 
                  className="nav-indicator"
                  layoutId="activeSection"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            Lihat CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu glass"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary" 
              style={{ margin: '1rem', display: 'block', textAlign: 'center' }}
            >
              Lihat CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;