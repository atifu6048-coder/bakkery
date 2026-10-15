import React from 'react';
import ProductCard from '../components/ProductCard';
import PageMeta from '../components/PageMeta';
import { PRODUCTS, BAKERY_PHONE_DISPLAY, BAKERY_PHONE_TEL, BAKERY_WHATSAPP_BASE, getWhatsAppOrderUrl } from '../data/products';

export const MenuPage: React.FC = () => {
  const cakes = PRODUCTS.filter((p) => p.category === 'cakes');
  const treats = PRODUCTS.filter((p) => p.category === 'cupcakes-brownies-cookies');

  return (
    <div className="menu-page">
      <PageMeta
        title="Our Menu"
        description="Fresh prices, honest prices. Explore our cakes, cupcakes, brownies, and cookies baked fresh in Mardan."
      />

      {/* Header Banner */}
      <section className="page-hero-banner" aria-label="Menu header banner">
        <div className="container">
          <div className="page-hero-card">
            <div className="page-hero-decor-1"></div>
            <div className="page-hero-decor-2"></div>

            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '640px' }}>
              <div className="section-pill" style={{ width: 'fit-content' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>local_fire_department</span>
                <span>Handcrafted in Mardan</span>
              </div>
              <h1>Our Menu</h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--color-cocoa-muted)' }}>
                Fresh prices, honest prices. Call or WhatsApp to order.
              </p>
            </div>

            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
                <span>Direct WhatsApp Order</span>
              </a>
              <a
                href={BAKERY_PHONE_TEL}
                className="btn-white"
                aria-label={`Call ${BAKERY_PHONE_DISPLAY}`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-warm-peach)' }}>call</span>
                <span>{BAKERY_PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="section-py" style={{ paddingTop: '1rem' }} aria-label="Menu list">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          
          {/* Category 1: Cakes */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-soft-pink)', color: 'var(--color-warm-peach)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>cake</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-warm-peach)', fontWeight: 600, display: 'block' }}>
                    Category 1
                  </span>
                  <h2>Cakes</h2>
                </div>
              </div>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-cocoa-muted)', fontWeight: 500 }}>
                4 Fresh Creations
              </span>
            </div>

            <div className="products-grid">
              {cakes.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Category 2: Cupcakes, brownies and cookies */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-soft-pink)', color: 'var(--color-warm-peach)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>bakery_dining</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-warm-peach)', fontWeight: 600, display: 'block' }}>
                    Category 2
                  </span>
                  <h2>Cupcakes, brownies and cookies</h2>
                </div>
              </div>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-cocoa-muted)', fontWeight: 500 }}>
                4 Treat Boxes
              </span>
            </div>

            <div className="products-grid">
              {treats.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Freshness Guarantee Notice */}
          <div className="freshness-notice-card card-soft-pink">
            <div className="freshness-notice-inner">
              <div className="freshness-notice-icon-box">
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>schedule</span>
              </div>
              <div className="freshness-notice-text">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Freshness Guarantee &amp; Advance Notice</h3>
                <p style={{ fontSize: '0.95rem' }}>
                  All orders are baked fresh upon request. Please place custom cake orders at least 24 hours in advance on WhatsApp.
                </p>
              </div>
              <div className="freshness-notice-action">
                <a
                  href={`${BAKERY_WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sweet Crust Bakery, I would like to place a pre-order.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
                  <span>Pre-order Now</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
export default MenuPage;
