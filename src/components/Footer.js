import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--accent-secondary)',
      color: '#ffffff',
      padding: 'var(--space-4) 0',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <div className="container">
        <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Annisa Salsabila. Dibangun dengan React & Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;