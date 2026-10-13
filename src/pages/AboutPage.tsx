import React, { useState } from 'react';
import PageMeta from '../components/PageMeta';
import { BAKERY_WHATSAPP_BASE } from '../data/products';

export const AboutPage: React.FC = () => {
  const [bakerImgError, setBakerImgError] = useState(false);

  const bakerPhotoUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBsoDI_0KmatJQCGIs81cvTaLPHAXdibGAMT2ne-aJhpTVgRnbgOa8KhheaIi-lfkEssvO2Q4dnzC-FQ1zCxKJvOZB_HHfULmCyCfiVd8Y3HtwlbpwJpwtS0PllM3ZQVZDwEDuXIfeMKxQGNI9TeS1YLHYW5es6l8wy_2PUC3JeIGz8KdfARdNSRUlmsh-k0kfIs9VHhhdrv3nfbupGptLpW9s5eoL8gKBdS2kUkj0gvKEaECpp5bj9';

  const secondaryImg1 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAOOSnOil38uUQ8sHtaSyeQWzxuIoLbAFNP5ebJbBZpt9bnmfHI5Vx4N1kYBwQKt0k8GrMH7UvUcYnxbt3F8FdKW4gzrN_jc6JIDTl5MSADPwSgyLEUp3b9I4AalU4Y2ecadCrYPq6zFcnj_2Pji6gkiFpI2SsExbajWFuagXpgC8geHVsMjoAXLcKj33PpzQrK3_A1g9v0WEdKGleGGh-Wt8uBDxPpvswQIqLwTAhNZ05eBygsYJ_M';

  const secondaryImg2 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDp30TgkflU8Y7Be6arn7Iwfi4RDtqhRDxHGty4XXL6XTg-Yu3tQ4vnrqCzPLBoy9z7z-57ePPMmQePOHPsjsMbzvYZZlVYBXBEPzNSXYmpXjh14kCSSmDCJsQt-egSVoDEz4gK-bTg8SgFBkZOgWTog-pDXNAg587VoYG6-PkBSqIaXuOXp8tSXXTkhyM0d6NxFOrIEamVRrRVO2SNAfBBIg7fKd4_8k7H8XfGmdbP5YIdUpQb2CWW';

  return (
    <div className="about-page">
      <PageMeta
        title="About Us"
        description="Learn the story of Sweet Crust Bakery. Baking small batches in Mardan with love, honest prices, and oven-fresh ingredients since 2020."
      />

      <section className="section-py" aria-label="Our Story">
        <div className="container">
          {/* Kicker */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
            <span style={{ width: '32px', height: '2px', backgroundColor: 'var(--color-warm-peach)' }}></span>
            <span className="section-pill" style={{ margin: 0 }}>Boutique Kitchen • Mardan</span>
          </div>

          <div className="about-hero-grid">
            {/* Story Text */}
            <div>
              <h1 style={{ marginBottom: '0.5rem' }}>My Story</h1>
              <div className="section-divider" style={{ margin: '0 0 1.5rem 0' }}></div>

              <p className="about-story-text">
                I started baking in 2020, in my small home kitchen, for my family and neighbours. They loved my cakes and told their friends. Slowly, my small hobby became Sweet Crust Bakery. Today I bake for birthdays, weddings and happy family days all over Mardan. I still bake every order myself, with love, one cake at a time.
              </p>

              {/* Quote Block */}
              <div className="about-quote-box">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-warm-peach)', fontSize: '26px' }}>
                    favorite
                  </span>
                  <div>
                    <h3 className="about-quote-title">
                      From our kitchen heart to your celebration table
                    </h3>
                    <p style={{ fontSize: '0.925rem', color: 'var(--color-cocoa-muted)', lineHeight: 1.6 }}>
                      Baking isn't just measuring flour and vanilla; it is taking part in your sweetest milestones with care you can taste.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder Sign-off */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-soft-pink)', color: 'var(--color-warm-peach)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>cookie</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: 'var(--color-bakery-brown)', fontSize: '1rem' }}>
                      Ayesha Khan
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-cocoa-muted)' }}>
                      Founder &amp; Home Baker, Sweet Crust Bakery
                    </p>
                  </div>
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', backgroundColor: 'var(--color-soft-pink)', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-full)', color: 'var(--color-bakery-brown)', fontSize: '0.825rem', fontWeight: 600 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-warm-peach)' }}>verified</span>
                  <span>Est. 2020</span>
                </div>
              </div>
            </div>

            {/* Photo Showcase Mosaic */}
            <div className="about-mosaic-grid">
              <div style={{ position: 'relative' }}>
                {!bakerImgError ? (
                  <img
                    src={bakerPhotoUrl}
                    alt="Ayesha Khan artisan baker decorating a cake in Mardan kitchen"
                    className="about-img-main"
                    onError={() => setBakerImgError(true)}
                  />
                ) : (
                  <div className="img-fallback" style={{ height: '380px', borderRadius: 'var(--radius-lg)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>cookie</span>
                    <span>Sweet Crust Bakery Kitchen</span>
                  </div>
                )}
                <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.94)', backdropFilter: 'blur(8px)', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.4rem', boxShadow: 'var(--shadow-sm)' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-warm-peach)', fontSize: '18px' }}>
                    oven_gen
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-bakery-brown)' }}>
                    100% Small Batch Baked
                  </span>
                </div>
              </div>

              <div className="about-img-col">
                <img
                  src={secondaryImg1}
                  alt="Pastel cupcakes cooling in kitchen"
                  className="about-img-thumb"
                  loading="lazy"
                />
                <img
                  src={secondaryImg2}
                  alt="Pure natural baking ingredients"
                  className="about-img-thumb"
                  loading="lazy"
                />
                <div className="about-stat-pill">
                  <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-warm-peach)' }}>
                    6+ Yrs
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-cocoa-muted)', fontWeight: 500 }}>
                    Home-Baking Joy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Promises Divider */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '3.5rem 0 2.5rem' }}>
            <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--color-border-subtle)' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-bakery-brown)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-warm-peach)' }}>local_florist</span>
              <span>OUR CORE PROMISES</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-warm-peach)' }}>local_florist</span>
            </div>
            <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--color-border-subtle)' }}></div>
          </div>

          {/* 3 Value Cards as specified in PRD */}
          <div className="about-values-grid">
            {/* Value Card 1 */}
            <div className="value-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-soft-pink)', color: 'var(--color-warm-peach)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>timer</span>
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-cocoa-muted)' }}>01</span>
              </div>

              <div>
                <h2 style={{ fontSize: '1.3rem', color: 'var(--color-bakery-brown)', marginBottom: '0.25rem' }}>
                  Fresh Always
                </h2>
                <p className="value-quote">
                  “I never sell old stock.”
                </p>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-cocoa-muted)', lineHeight: 1.6 }}>
                Every sponge is whipped and baked specifically for your designated pickup time. No display cabinets, no sitting under glass for days. If it leaves my oven, it was made that morning.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-warm-peach)', fontSize: '0.825rem', fontWeight: 600, marginTop: 'auto', paddingTop: '0.75rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                <span>Bake-to-order discipline</span>
              </div>
            </div>

            {/* Value Card 2 */}
            <div className="value-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-soft-pink)', color: 'var(--color-warm-peach)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>payments</span>
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-cocoa-muted)' }}>02</span>
              </div>

              <div>
                <h2 style={{ fontSize: '1.3rem', color: 'var(--color-bakery-brown)', marginBottom: '0.25rem' }}>
                  Honest Prices
                </h2>
                <p className="value-quote">
                  “Good taste should not be costly.”
                </p>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-cocoa-muted)', lineHeight: 1.6 }}>
                By running a pure home kitchen right here in Mardan, we eliminate commercial retail overheads. You pay strictly for top-grade butter, real cocoa, fresh cream, and honest labor.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-warm-peach)', fontSize: '0.825rem', fontWeight: 600, marginTop: 'auto', paddingTop: '0.75rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                <span>Fair &amp; transparent always</span>
              </div>
            </div>

            {/* Value Card 3 */}
            <div className="value-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-soft-pink)', color: 'var(--color-warm-peach)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>volunteer_activism</span>
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-cocoa-muted)' }}>03</span>
              </div>

              <div>
                <h2 style={{ fontSize: '1.3rem', color: 'var(--color-bakery-brown)', marginBottom: '0.25rem' }}>
                  Made with Love
                </h2>
                <p className="value-quote">
                  “Every order is personal for me.”
                </p>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-cocoa-muted)', lineHeight: 1.6 }}>
                Whether it is an intimate 1st birthday or a grand family reunion, I prepare every recipe as if it were for my own family members. Your happiness is the real reward for my craft.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-warm-peach)', fontSize: '0.825rem', fontWeight: 600, marginTop: 'auto', paddingTop: '0.75rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                <span>Handcrafted attention</span>
              </div>
            </div>
          </div>

          {/* Personal WhatsApp CTA */}
          <div className="card-soft-pink" style={{ marginTop: '3.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', maxWidth: '680px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-white)', color: 'var(--color-warm-peach)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>chat_bubble</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>Have a special celebration in mind?</h3>
                  <p style={{ fontSize: '0.95rem' }}>
                    Message me directly on WhatsApp to chat about designs, flavors, or pre-order timing for your upcoming event in Mardan.
                  </p>
                </div>
              </div>

              <a
                href={`${BAKERY_WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sweet Crust Bakery, I would love to discuss a custom cake!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
                <span>Chat with the Baker</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
export default AboutPage;
