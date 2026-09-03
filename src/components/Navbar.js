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

const languages = [
  { code: 'en',    label: 'English',    flag: '🇺🇸' },
  { code: 'id',    label: 'Indonesia',  flag: '🇮🇩' },
  { code: 'ar',    label: 'العربية',    flag: '🇸🇦' },
  { code: 'zh-CN', label: '中文',        flag: '🇨🇳' },
  { code: 'fr',    label: 'Français',   flag: '🇫🇷' },
  { code: 'de',    label: 'Deutsch',    flag: '🇩🇪' },
  { code: 'ja',    label: '日本語',      flag: '🇯🇵' },
  { code: 'ko',    label: '한국어',      flag: '🇰🇷' },
  { code: 'ms',    label: 'Melayu',     flag: '🇲🇾' },
  { code: 'es',    label: 'Español',    flag: '🇪🇸' },
  { code: 'pt',    label: 'Português',  flag: '🇧🇷' },
  { code: 'ru',    label: 'Русский',    flag: '🇷🇺' },
];

// Helper: read a cookie value by name
const getCookie = (name) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
};

// Helper: set cookie on all relevant domains/paths
const setGoogtrans = (value) => {
  const host = window.location.hostname;
  document.cookie = `googtrans=${value}; path=/`;
  document.cookie = `googtrans=${value}; path=/; domain=.${host}`;
  document.cookie = `googtrans=${value}; path=/; domain=${host}`;
};

// Helper: clear the googtrans cookie everywhere
const clearGoogtrans = () => {
  const host = window.location.hostname;
  const expired = '; expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/';
  document.cookie = `googtrans=${expired}`;
  document.cookie = `googtrans=${expired}; domain=.${host}`;
  document.cookie = `googtrans=${expired}; domain=${host}`;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [activeSection, setActiveSection]   = useState('home');
  const [isMobileMenuOpen, setMobileOpen]   = useState(false);
  const [theme, setTheme]                   = useState('light');
  const [showLangMenu, setShowLangMenu]     = useState(false);
  const [currentLang, setCurrentLang]       = useState(languages[0]); // default English
  const langMenuRef = useRef(null);

  // ── On mount: read googtrans cookie to restore active language ──────────
  useEffect(() => {
    const val = getCookie('googtrans'); // e.g. "/en/id"
    if (val) {
      const parts = val.split('/').filter(Boolean);
      const targetCode = parts[parts.length - 1]; // "id"
      const found = languages.find(l => l.code === targetCode);
      if (found) setCurrentLang(found);
    }
  }, []);

  // ── Theme initialization ────────────────────────────────────────────────
  useEffect(() => {
    const saved   = localStorage.getItem('portfolio-theme');
    const dark    = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const theme   = saved || (dark ? 'dark' : 'light');
    setTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  // ── Close lang menu on outside click / tap ──────────────────────────────
  useEffect(() => {
    const close = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target))
        setShowLangMenu(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('touchstart', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('touchstart', close);
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('portfolio-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  // ── Main translate function ─────────────────────────────────────────────
  const translatePage = (langCode) => {
    setShowLangMenu(false);
    const lang = languages.find(l => l.code === langCode);

    // Update UI immediately so the checkmark moves right away
    if (lang) setCurrentLang(lang);

    // ── Restore English ──
    if (langCode === 'en') {
      clearGoogtrans();
      window.location.reload();
      return;
    }

    // ── Strategy 1: use the hidden <select> for instant (no-reload) translation
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = langCode;
      ['change', 'input'].forEach(evt =>
        select.dispatchEvent(new Event(evt, { bubbles: true }))
      );
      // Also persist via cookie so a manual refresh keeps the language
      setGoogtrans(`/en/${langCode}`);
      return;
    }

    // ── Strategy 2 (fallback): set cookie + reload (100% reliable, all browsers)
    setGoogtrans(`/en/${langCode}`);
    window.location.reload();
  };

  // ── Scroll handler ──────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const pos = window.scrollY + 100;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= pos) { setActiveSection(navLinks[i].id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    };
    if (isMobileMenuOpen) { setMobileOpen(false); setTimeout(scroll, 320); }
    else scroll();
  };

  // ── Translate dropdown (shared between desktop & mobile) ────────────────
  const TranslateBtn = ({ className = '' }) => (
    <div className={`translate-wrapper ${className}`} ref={langMenuRef}>
      <button
        className="translate-btn"
        onClick={() => setShowLangMenu(p => !p)}
        aria-label="Translate page"
        title="Translate page"
      >
        <span className="translate-globe">🌐</span>
        <span className="translate-label">{currentLang.code === 'en' ? 'EN' : currentLang.code.split('-')[0].toUpperCase()}</span>
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

        {/* Desktop links */}
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
                <motion.div
                  className="nav-indicator"
                  layoutId="activeSection"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}

          <TranslateBtn />

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', fontSize: '1.2rem', cursor: 'pointer', marginLeft: '0.25rem' }}
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
        </div>

        {/* Mobile: translate + theme + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="mobile-actions">
          <TranslateBtn className="mobile-only" />

          <button
            className="theme-toggle-btn mobile-only"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', fontSize: '1.2rem', cursor: 'pointer' }}
          >
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle Menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu glass"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(link => (
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