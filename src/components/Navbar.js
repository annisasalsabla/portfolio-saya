import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' }
];

// Language options shown in the dropdown
const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'zh-CN', label: '中文', flag: '🇨🇳' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'ms', label: 'Melayu', flag: '🇲🇾' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [currentLang, setCurrentLang] = useState({ code: 'en', label: 'EN', flag: '🌐' });
  const langMenuRef = useRef(null);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Trigger Google Translate to switch language
  const translatePage = (langCode) => {
    const lang = languages.find(l => l.code === langCode);
    setShowLangMenu(false);

    // Update label display
    if (lang) {
      setCurrentLang({
        ...lang,
        label: lang.code === 'en' ? 'EN' : lang.code.split('-')[0].toUpperCase()
      });
    }

    // ---- Restore English ----
    if (langCode === 'en') {
      // Clear the googtrans cookie on all relevant paths/domains
      const clearCookie = (name, path, domain) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 UTC; path=${path};` +
          (domain ? ` domain=${domain};` : '');
      };
      clearCookie('googtrans', '/', '');
      clearCookie('googtrans', '/', '.' + window.location.hostname);
      clearCookie('googtrans', '/', window.location.hostname);
      window.location.reload();
      return;
    }

    // ---- Translate via the hidden Google select ----
    const doTranslate = () => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = langCode;
        // Fire multiple events — some browsers need one, some need another
        ['change', 'input'].forEach(evt =>
          select.dispatchEvent(new Event(evt, { bubbles: true }))
        );
        return true;
      }
      return false;
    };

    // Try immediately, then retry with backoff, then cookie-reload fallback
    if (!doTranslate()) {
      let attempts = 0;
      const retry = setInterval(() => {
        attempts++;
        if (doTranslate() || attempts >= 8) {
          clearInterval(retry);
          if (attempts >= 8) {
            // Final fallback: set cookie and reload (works on all browsers)
            document.cookie = `googtrans=/en/${langCode}; path=/`;
            document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${window.location.hostname}`;
            window.location.reload();
          }
        }
      }, 400);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 80;
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: elementTop, behavior: 'smooth' });
          window.history.pushState(null, '', `#${id}`);
        }
      }, 320);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80;
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: elementTop, behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  // Translate button JSX — reused in desktop & mobile
  const TranslateBtn = ({ className = '' }) => (
    <div className={`translate-wrapper ${className}`} ref={langMenuRef}>
      <button
        className="translate-btn"
        onClick={() => setShowLangMenu(prev => !prev)}
        aria-label="Translate page"
        title="Translate page"
      >
        <span className="translate-globe">🌐</span>
        <span className="translate-label">{currentLang.label === 'EN' ? 'EN' : currentLang.label}</span>
        <i className={`fas fa-chevron-${showLangMenu ? 'up' : 'down'} translate-chevron`}></i>
      </button>

      <AnimatePresence>
        {showLangMenu && (
          <motion.div
            className="lang-dropdown"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
          >
            <div className="lang-dropdown-header">Translate page</div>
            {languages.map(lang => (
              <button
                key={lang.code}
                className={`lang-option ${currentLang.code === lang.code ? 'active' : ''}`}
                onClick={() => translatePage(lang.code)}
              >
                <span className="lang-flag">{lang.flag}</span>
                <span className="lang-name">{lang.label}</span>
                {currentLang.code === lang.code && (
                  <i className="fas fa-check lang-check"></i>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'glass' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, 'home')}>
          Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.id)}
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

          {/* Desktop Translate Button */}
          <TranslateBtn />

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-main)',
              fontSize: '1.2rem',
              cursor: 'pointer',
              marginLeft: '0.25rem'
            }}
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
        </div>

        {/* Mobile: Translate + Theme + Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="mobile-actions">
          {/* Mobile Translate Button */}
          <TranslateBtn className="mobile-only" />

          <button
            className="theme-toggle-btn mobile-only"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-main)',
              fontSize: '1.2rem',
              cursor: 'pointer'
            }}
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
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
                onClick={(e) => handleNavClick(e, link.id)}
              >
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