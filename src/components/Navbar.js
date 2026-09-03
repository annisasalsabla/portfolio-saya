import React, { useState, useEffect, useRef } from 'react';
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

const languages = [
  { code: 'id',    label: 'Indonesia',  flag: '🇮🇩' },
  { code: 'en',    label: 'English',    flag: '🇺🇸' },
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

const DEFAULT_LANG = languages[0]; // Indonesia

/* ── cookie helpers ─────────────────────────────────────── */
const getCookie = (name) => {
  const m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return m ? decodeURIComponent(m[2]) : null;
};

const setGoogtrans = (value) => {
  const h = window.location.hostname;
  document.cookie = `googtrans=${value}; path=/;`;
  document.cookie = `googtrans=${value}; path=/; domain=.${h};`;
  document.cookie = `googtrans=${value}; path=/; domain=${h};`;
};

const clearGoogtrans = () => {
  const h = window.location.hostname;
  const ex = '; expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/;';
  document.cookie = `googtrans=${ex}`;
  document.cookie = `googtrans=${ex} domain=.${h};`;
  document.cookie = `googtrans=${ex} domain=${h};`;
};
/* ─────────────────────────────────────────────────────────── */

const Navbar = () => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setMobileOpen] = useState(false);
  const [theme, setTheme]                 = useState('light');
  const [showLangMenu, setShowLangMenu]   = useState(false);
  const [currentLang, setCurrentLang]     = useState(DEFAULT_LANG);
  const langMenuRef = useRef(null);

  /* Read googtrans cookie on mount to restore active language display */
  useEffect(() => {
    const val = getCookie('googtrans'); // e.g. "/id/en"
    if (val) {
      const parts = val.split('/').filter(Boolean);
      const target = parts[parts.length - 1]; // "en"
      const found = languages.find(l => l.code === target);
      if (found) setCurrentLang(found);
    }
  }, []);

  /* Theme */
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    const dark  = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const t     = saved || (dark ? 'dark' : 'light');
    setTheme(t);
    document.documentElement.setAttribute('data-theme', t);
  }, []);

  /* Close lang dropdown on outside click */
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

  /* ── TRANSLATE — Works seamlessly on desktop & mobile ── */
  const translatePage = (langCode) => {
    setShowLangMenu(false);
    const lang = languages.find(l => l.code === langCode);
    if (lang) setCurrentLang(lang); // update UI immediately

    if (langCode === 'id') {
      clearGoogtrans();
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = 'id';
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }
      setTimeout(() => window.location.reload(), 150);
      return;
    }

    setGoogtrans(`/id/${langCode}`);

    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      select.dispatchEvent(new Event('input', { bubbles: true }));
    } else {
      window.location.reload();
    }
  };

  /* Scroll tracking */
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
        window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    };
    if (isMobileMenuOpen) { setMobileOpen(false); setTimeout(scroll, 320); }
    else scroll();
  };

  /* Shared translate dropdown */
  const TranslateBtn = ({ className = '' }) => (
    <div className={`translate-wrapper ${className}`} ref={langMenuRef}>
      <button
        className="translate-btn"
        onClick={() => setShowLangMenu(p => !p)}
        aria-label="Ubah bahasa"
        title="Ubah bahasa"
      >
        <span className="translate-globe">🌐</span>
        <span className="translate-label">{currentLang.code === 'id' ? 'ID' : currentLang.code.split('-')[0].toUpperCase()}</span>
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
            <div className="lang-dropdown-header">Terjemahkan halaman</div>
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
          <TranslateBtn />
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Ganti tema"
            style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', fontSize: '1.2rem', cursor: 'pointer', marginLeft: '0.25rem' }}>
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
        </div>

        {/* Mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="mobile-actions">
          <TranslateBtn className="mobile-only" />
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