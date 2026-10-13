import React, { useState } from 'react';
import PageMeta from '../components/PageMeta';
import {
  BAKERY_ADDRESS,
  BAKERY_PHONE_DISPLAY,
  BAKERY_PHONE_TEL,
  BAKERY_EMAIL,
  BAKERY_WHATSAPP_BASE,
} from '../data/products';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
    // Visual feedback only as requested in PRD
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setMessage('');
    setDemoSubmitted(false);
  };

  const mapBgImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBrwPTRSVXQaKAnXYw4nSB13cOauQ9WdzugiIpW5TBnaxwddEQFs2lcNoGhz48QjBFXJQWDwi55x_ezA847QflFoA4bN3H-zzDmGx3u_7ntUEP21QydOZO-pFVWmrlusvgGuXBagBEVolnNncLa8b3XbfKRDRq-p2EIiXA_8V8awGyX81_GR_rcclRFofwZQ4mYVtrwFCkLCk0YyNyRIfXyjYU_Hrt_qV1O7NX1aN6oODukd8cnfxeQ';

  return (
    <div className="contact-page">
      <PageMeta
        title="Contact Us"
        description="Contact Sweet Crust Bakery in Mardan. Call or WhatsApp 0300 1234567, or email hello@sweetcrustbakery.pk for orders and inquiries."
      />

      <section className="section-py" aria-label="Contact information and form">
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <div className="section-pill">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>local_cafe</span>
              <span>Boutique Kitchen · Mardan</span>
            </div>
            <h1>Contact Us</h1>
            <p style={{ fontSize: '1.15rem' }}>
              We reply fast - usually in less than one hour.
            </p>
          </div>

          <div className="contact-grid">
            {/* Left Column: Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="contact-info-card">
                <div>
                  <span className="contact-item-title" style={{ color: 'var(--color-warm-peach)' }}>
                    Get In Touch
                  </span>
                  <h2 style={{ fontSize: '1.4rem', color: 'var(--color-bakery-brown)', marginTop: '0.25rem' }}>
                    Freshly Baked, Warmly Served
                  </h2>
                </div>

                {/* Address */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <span className="contact-item-title">Our Bakery</span>
                    <p className="contact-item-val">{BAKERY_ADDRESS}</p>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <span className="contact-item-title">Phone / WhatsApp</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <a
                        href={BAKERY_PHONE_TEL}
                        className="contact-item-val"
                        style={{ color: 'var(--color-bakery-brown)', fontWeight: 600 }}
                        aria-label={`Call ${BAKERY_PHONE_DISPLAY}`}
                      >
                        {BAKERY_PHONE_DISPLAY}
                      </a>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-cocoa-muted)' }}>(practice number)</span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <span className="contact-item-title">Email</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <a
                        href={`mailto:${BAKERY_EMAIL}`}
                        className="contact-item-val"
                        style={{ wordBreak: 'break-all' }}
                      >
                        {BAKERY_EMAIL}
                      </a>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-cocoa-muted)' }}>(practice email)</span>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <span className="contact-item-title">Opening Hours</span>
                    <p className="contact-item-val">
                      Monday to Saturday: <strong style={{ color: 'var(--color-bakery-brown)' }}>9:00 AM - 9:00 PM</strong>
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-warm-peach)', fontWeight: 600, marginTop: '0.2rem' }}>
                      Sunday: Closed.
                    </p>
                  </div>
                </div>

                {/* Direct WhatsApp Action */}
                <div style={{ paddingTop: '0.5rem' }}>
                  <a
                    href={`${BAKERY_WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sweet Crust Bakery, I would like to inquire about an order.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Mardan Map Teaser Card */}
              <div className="map-teaser-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-bakery-brown)', fontWeight: 600, fontSize: '0.925rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-warm-peach)' }}>near_me</span>
                    <span>Pickup in Mardan</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-cocoa-muted)' }}>Order in Advance</span>
                </div>
                <img
                  src={mapBgImage}
                  alt="Sweet Crust Bakery location in Mardan Pakistan"
                  className="map-teaser-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Demo Contact Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="contact-form-card">
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.45rem', color: 'var(--color-bakery-brown)', marginBottom: '0.35rem' }}>
                    Send a Note
                  </h2>
                  <p style={{ fontSize: '0.925rem' }}>
                    Custom party cakes, bulk treats, or neighborhood questions — drop us a line below.
                  </p>
                </div>

                {demoSubmitted ? (
                  <div className="form-alert" role="status">
                    <span className="material-symbols-outlined">check_circle</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <strong>Thank you! Your note has been received.</strong>
                      <p style={{ fontSize: '0.85rem' }}>
                        This contact form is a visual demo. For orders and immediate replies, please message our WhatsApp directly!
                      </p>
                      <button
                        type="button"
                        onClick={handleReset}
                        style={{ marginTop: '0.5rem', alignSelf: 'flex-start', background: 'none', border: 'none', color: 'var(--color-bakery-brown)', textDecoration: 'underline', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}
                      >
                        Send another note
                      </button>
                    </div>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} noValidate={false}>
                  {/* Your Name */}
                  <div className="form-group">
                    <label htmlFor="user-name" className="form-label">
                      Your Name
                    </label>
                    <input
                      id="user-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Fatima Ali"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Your Phone */}
                  <div className="form-group">
                    <label htmlFor="user-phone" className="form-label">
                      Your Phone
                    </label>
                    <input
                      id="user-phone"
                      type="tel"
                      className="form-input"
                      placeholder="0300 0000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  {/* Your Message */}
                  <div className="form-group">
                    <label htmlFor="user-message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      id="user-message"
                      className="form-textarea"
                      placeholder="Tell us about your celebration, preferred cake flavor, or pickup time..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  {/* Send Message Button (Brown button) */}
                  <div style={{ paddingTop: '0.5rem' }}>
                    <button
                      type="submit"
                      className="btn-primary btn-lg"
                      id="contact-send-btn"
                    >
                      <span>Send Message</span>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
                    </button>
                  </div>

                  {/* Small note under form as requested in PRD */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginTop: '1.25rem', color: 'var(--color-cocoa-muted)', fontSize: '0.875rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-warm-peach)' }}>
                      bolt
                    </span>
                    <span>For a fast reply, please message us on WhatsApp.</span>
                  </div>
                </form>
              </div>

              {/* Handcrafted Promise Strip */}
              <div className="card-soft-pink" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-white)', color: 'var(--color-bakery-brown)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>bakery_dining</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: 'var(--color-bakery-brown)', fontSize: '0.925rem' }}>
                      Small-Batch Custom Orders
                    </p>
                    <p style={{ fontSize: '0.825rem', color: 'var(--color-cocoa-muted)' }}>
                      Please allow 24-48 hours for themed celebration cakes.
                    </p>
                  </div>
                </div>

                <a
                  href={`${BAKERY_WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sweet Crust Bakery, I would like to send a cake reference photo.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-warm-peach)', fontWeight: 600, fontSize: '0.85rem' }}
                >
                  <span>Send Reference Photo</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactPage;
