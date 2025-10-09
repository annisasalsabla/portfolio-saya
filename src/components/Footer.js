import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">© Portfolio Annisa</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2rem 0;
        }
        
        .footer-content {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .footer-text {
          color: rgba(255, 255, 255, 0.7);
          font-family: 'Inter', 'Segoe UI', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          letter-spacing: 0.5px;
          margin: 0;
          transition: all 0.3s ease;
        }
        
        .footer-text:hover {
          color: rgba(255, 255, 255, 0.9);
        }
        
        @media (max-width: 576px) {
          .footer {
            padding: 1.5rem 0;
          }
          
          .footer-text {
            font-size: 0.85rem;
            text-align: center;
          }
        }
        
        @media (max-width: 380px) {
          .footer-text {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;