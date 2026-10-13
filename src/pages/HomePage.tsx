import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import PageMeta from '../components/PageMeta';
import { PRODUCTS, TESTIMONIALS, BAKERY_WHATSAPP_BASE, getWhatsAppOrderUrl } from '../data/products';

export const HomePage: React.FC = () => {
  const [heroImageError, setHeroImageError] = useState(false);
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);

  const heroImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDe6rDh4y4b8qd0RhpUrjsfajkCSU5KY2YUGAyJTSKpkA6vsEFWO119qT8Q08_pfZlyZgxQdl_4de0fzDepmeoANFquo6AZtIuK9cg17nYRTNCn1RDMvdPwFBT352ds5iC44qmEo1czsNTcIfDiOmQT3-KCYqnMvZVImh-1NIHj36ERJNSf0wX9d7dOQjq2R4pr4yq3090dkxLTZ-YpvYt6mW4w3BrmumU9AG9rFLI2qA0KkPuqLT6G';

  const orderGeneralUrl = getWhatsAppOrderUrl();

  return (
    <div className="home-page">
      <PageMeta
        title="Home"
        description="Fresh cakes, cupcakes and brownies baked with love in Mardan. Order custom birthday cakes and sweet treats from Sweet Crust Bakery."
      />

      {/* 1. Hero Section */}
      <section className="hero-section" aria-label="Welcome banner">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-pill">
                <span className="material-symbols-outlined">bakery_dining</span>
                <span>Artisanal Home Bakery • Mardan</span>
              </div>

              <h1 className="hero-title">
                Fresh Cakes, Baked with Love
              </h1>

              <p className="hero-subtitle">
                Sweet Crust Bakery bakes fresh cakes, cupcakes and brownies in Mardan - made to order, just for you.
              </p>

              <div className="hero-buttons">
                <Link to="/menu" className="btn-primary btn-lg" id="home-hero-menu-btn">
                  See Our Menu
                </Link>
                <a
                  href={orderGeneralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-white btn-lg"
                  id="home-hero-whatsapp-btn"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--color-warm-peach)' }}>
                    chat
                  </span>
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-item">
                  <span className="material-symbols-outlined">star</span>
                  <span>5.0 Star Bakes</span>
                </div>
                <div className="trust-item">
                  <span className="material-symbols-outlined">local_shipping</span>
                  <span>Mardan Fast Delivery</span>
                </div>
              </div>
            </div>

            <div className="hero-image-wrap">
              {!heroImageError ? (
                <img
                  src={heroImageUrl}
                  alt="Artisanal chocolate fudge cake and tiered strawberry cream cake baked fresh daily"
                  className="hero-image"
                  onError={() => setHeroImageError(true)}
                />
              ) : (
                <div className="img-fallback" style={{ height: '420px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '64px' }}>cake</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>Sweet Crust Bakery</span>
                  <span>Fresh Cakes, Baked with Love in Mardan</span>
                </div>
              )}

              <div className="hero-floating-card">
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--color-bakery-brown)', fontSize: '0.925rem' }}>
                    Today's Oven Special
                  </p>
                  <p style={{ fontSize: '0.825rem', color: 'var(--color-cocoa-muted)' }}>
                    Strawberry Drip &amp; Dark Fudge
                  </p>
                </div>
                <span className="floating-card-pill">
                  Baked This Morning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Welcome Section */}
      <section className="welcome-section" aria-label="About our kitchen">
        <div className="container">
          <div className="welcome-inner">
            <span className="section-pill">Handcrafted in Small Batches</span>
            <h2>Welcome to Sweet Crust Bakery</h2>
            <div className="section-divider"></div>
            <p className="welcome-lead">
              Every cake leaves my kitchen fresh, soft and full of flavour. I bake small batches every day, so you always get the best taste - for birthdays, weddings or a sweet evening at home.
            </p>

            <div className="welcome-stats">
              <div className="stat-box">
                <span className="stat-val">100%</span>
                <span className="stat-lbl">Fresh Butter &amp; Cream</span>
              </div>
              <div className="stat-box">
                <span className="stat-val">Daily</span>
                <span className="stat-lbl">Oven-Fresh Batches</span>
              </div>
              <div className="stat-box">
                <span className="stat-val">Mardan</span>
                <span className="stat-lbl">Home Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Best Sellers Section */}
      <section className="section-py" aria-label="Customer favorite bakes">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Customer Favorites</span>
            <h2>Our Best Sellers</h2>
            <div className="section-divider"></div>
            <p>Freshly whipped, delicately decorated, and baked to delight your sweetest moments.</p>
          </div>

          <div className="products-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/menu" className="btn-primary">
              <span>View Full Menu</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="welcome-section" aria-label="Why choose our bakery">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Our Promise To You</span>
            <h2>Why Choose Us</h2>
            <div className="section-divider"></div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <h3 className="feature-title">Baked Fresh Daily</h3>
              <p className="feature-desc">
                Prepared every morning for peak flavor and moisture.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h3 className="feature-title">Best Quality Ingredients</h3>
              <p className="feature-desc">
                Pure butter, rich cocoa, and farm-fresh dairy in every batch.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap">
                <span className="material-symbols-outlined">cake</span>
              </div>
              <h3 className="feature-title">Made to Order</h3>
              <p className="feature-desc">
                Customized fresh specifically for your special celebration.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrap">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <h3 className="feature-title">Home Delivery in Mardan</h3>
              <p className="feature-desc">
                Prompt, safe, and doorstep delivery across Mardan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What Customers Say Section */}
      <section className="section-py" aria-label="Customer testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Sweet Reviews</span>
            <h2>What Customers Say</h2>
            <div className="section-divider"></div>
            <p>Cherished stories from our community in Mardan.</p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div>
                  <div className="stars-row" aria-label="5 stars rating">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="testimonial-text">
                    “{item.text}”
                  </p>
                </div>

                <div className="testimonial-author">
                  <div className="author-avatar">{item.name.charAt(0)}</div>
                  <div>
                    <p className="author-name">{item.name}</p>
                    <p className="author-city">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Big Order Banner */}
      <section className="cta-banner-wrap" aria-label="Order call to action">
        <div className="container">
          <div className="cta-banner">
            <span className="section-pill" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFF8F0' }}>
              Custom Celebrations &amp; Daily Treats
            </span>
            <h2>Ready to Order Something Sweet?</h2>
            <p>
              Send us a quick message with your date, flavor ideas, or favorite cake from our menu. We'll bake it fresh for you!
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <a
                href={`${BAKERY_WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sweet Crust Bakery, I'd like to place an order!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white btn-lg"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--color-warm-peach)' }}>
                  chat
                </span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
