import React from 'react';
import { Link } from 'react-router-dom';
import { BAKERY_PHONE_DISPLAY, BAKERY_PHONE_TEL, BAKERY_ADDRESS } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <img src="/logo.svg" alt="Sweet Crust Bakery" style={{ width: '32px', height: '32px' }} />
              <h3>Sweet Crust Bakery</h3>
            </div>
            <p>
              Small-batch homemade cakes, cupcakes and sweet treats baked fresh daily with love in our Mardan kitchen.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Explore</h4>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/menu" className="footer-link">Menu</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/gallery" className="footer-link">Gallery</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>

          {/* Visit & Inquiries */}
          <div className="footer-col">
            <h4 className="footer-col-title">Visit &amp; Inquiries</h4>
            <div className="footer-contact-item">
              <span className="material-symbols-outlined">location_on</span>
              <span>{BAKERY_ADDRESS}</span>
            </div>
            <div className="footer-contact-item">
              <span className="material-symbols-outlined">call</span>
              <a href={BAKERY_PHONE_TEL} style={{ color: 'inherit' }} aria-label="Call Sweet Crust Bakery">
                {BAKERY_PHONE_DISPLAY}
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="material-symbols-outlined">schedule</span>
              <span>Pre-orders &amp; Fresh Bakes daily</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>Copyright 2026 Sweet Crust Bakery. Made with love in Mardan.</p>
          <div className="footer-badges">
            <span style={{ fontWeight: 500, fontSize: '0.8rem', color: 'var(--color-bakery-brown)' }}>
              Artisanal Quality
            </span>
            <span className="footer-dot"></span>
            <span style={{ fontWeight: 500, fontSize: '0.8rem', color: 'var(--color-bakery-brown)' }}>
              Oven Fresh
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
