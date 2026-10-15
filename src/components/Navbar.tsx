import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { BAKERY_WHATSAPP_BASE } from '../data/products';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand */}
        <Link to="/" className="brand-logo-link" aria-label="Sweet Crust Bakery Home">
          <img src="/logo.svg" alt="Sweet Crust Bakery Logo" className="brand-icon" />
          <span className="brand-text">Sweet Crust Bakery</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links-desktop" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <a
            href={`${BAKERY_WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sweet Crust Bakery, I would like to place an order!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm header-cta-btn"
            aria-label="Order on WhatsApp (opens in new tab)"
          >
            <span className="material-symbols-outlined header-cta-icon" style={{ fontSize: '18px' }}>chat</span>
            <span className="header-cta-label">Order</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-header">
          <Link to="/" className="brand-logo-link" onClick={() => setMobileMenuOpen(false)}>
            <img src="/logo.svg" alt="Sweet Crust Bakery" className="brand-icon" />
            <span style={{ fontSize: '1.1rem' }}>Sweet Crust Bakery</span>
          </Link>
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{link.label}</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                chevron_right
              </span>
            </NavLink>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href={`${BAKERY_WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sweet Crust Bakery, I would like to place an order!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
            <span>Order on WhatsApp</span>
          </a>
          <p style={{ fontSize: '0.8rem', textAlign: 'center', color: 'var(--color-cocoa-muted)' }}>
            Fresh Cakes & Cupcakes in Mardan
          </p>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
