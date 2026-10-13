import React, { useState } from 'react';
import PageMeta from '../components/PageMeta';
import { GALLERY_ITEMS } from '../data/gallery';
import { BAKERY_WHATSAPP_BASE } from '../data/products';

export const GalleryPage: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="gallery-page">
      <PageMeta
        title="Gallery"
        description="Real photos of cakes, cupcakes, brownies, and cookies baked fresh in our Mardan kitchen at Sweet Crust Bakery."
      />

      <section className="section-py" aria-label="Bakery Gallery">
        <div className="container">
          {/* Header as requested in PRD: Heading and one line only */}
          <div className="section-header">
            <div className="section-pill">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>photo_camera</span>
              <span>Artisanal Archive</span>
            </div>
            <h1>Our Sweet Gallery</h1>
            <p style={{ fontSize: '1.15rem' }}>
              Real photos of cakes and cupcakes from my kitchen.
            </p>
          </div>

          {/* Clean 6-8 photos grid (3 in a row on computer, 1 or 2 in a row on phone) */}
          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className={`gallery-card ${item.spanCol ? 'gallery-card-span-2' : ''}`}
              >
                <div className="gallery-img-wrap">
                  {!failedImages[item.id] ? (
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="gallery-img"
                      loading="lazy"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <div className="img-fallback" style={{ height: '100%', minHeight: '300px' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>bakery_dining</span>
                      <span style={{ fontWeight: 600 }}>{item.title}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Brown bottom button: "Order Your Cake on WhatsApp" */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href={`${BAKERY_WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sweet Crust Bakery! I would like to order a cake.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-lg"
              id="gallery-order-btn"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
              <span>Order Your Cake on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default GalleryPage;
