import React from 'react';
import { BAKERY_WHATSAPP_BASE } from '../data/products';

export const WhatsAppFloat: React.FC = () => {
  const whatsappUrl = `${BAKERY_WHATSAPP_BASE}?text=${encodeURIComponent(
    'Hi Sweet Crust Bakery, I would like to place an order!'
  )}`;

  return (
    <aside aria-label="Quick WhatsApp order assistance">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Order on WhatsApp (opens in new tab)"
        id="mobile-floating-whatsapp"
      >
        <span className="material-symbols-outlined whatsapp-float-icon">chat</span>
        <span className="whatsapp-float-text">Order on WhatsApp</span>
      </a>
    </aside>
  );
};

export default WhatsAppFloat;
