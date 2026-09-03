import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { id: 'home',         label: 'Beranda' },
  { id: 'about',        label: 'Tentang' },
  { id: 'skills',       label: 'Keahlian' },
  { id: 'experience',   label: 'Pengalaman' },
  { id: 'projects',     label: 'Projek' },
  { id: 'certificates', label: 'Sertifikat' },
  { id: 'contact',      label: 'Kontak' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setMobileOpen] = useState(false);
  const [theme, setTheme]                 = useState('light');

  /* Theme */
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    const dark  = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const t     = saved || (dark ? 'dark' : 'light');
    setTheme(t);
    document.documentElement.setAttribute('data-theme', t);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('portfolio-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  /* Scroll tracking with requestAnimationFrame throttling */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          const pos = window.scrollY + 100;
          for (let i = navLinks.length - 1; i >= 0; i--) {
            const el = document.getElementById(navLinks[i].id);
            if (el && el.offsetTop <= pos) {
              setActiveSection(navLinks[i].id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    };
    if (isMobileMenuOpen) { setMobileOpen(false); setTimeout(scroll, 320); }
    else scroll();
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'glass' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, 'home')}>
          Portofolio
        </a>

        {/* Desktop */}
        <div className="nav-links-desktop">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div className="nav-indicator" layoutId="activeSection"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
              )}
            </a>
          ))}
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Ganti tema"
            style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', fontSize: '1.2rem', cursor: 'pointer', marginLeft: '0.5rem' }}>
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
        </div>

        {/* Mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="mobile-actions">
          <button className="theme-toggle-btn mobile-only" onClick={toggleTheme} aria-label="Ganti tema"
            style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', fontSize: '1.2rem', cursor: 'pointer' }}>
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
          <button className="mobile-toggle" onClick={() => setMobileOpen(o => !o)} aria-label="Buka menu">
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div className="mobile-menu glass"
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            {navLinks.map(link => (
              <a key={link.id} href={`#${link.id}`}
                className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;