import React, { useState } from 'react';
import type { Product } from '../types';
import { getWhatsAppOrderUrl } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageError, setImageError] = useState(false);

  const orderUrl = getWhatsAppOrderUrl(product.name, product.price);

  return (
    <article className="product-card" aria-label={product.name}>
      <div className="product-image-wrap">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.alt || product.name}
            className="product-image"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="img-fallback">
            <span className="material-symbols-outlined">bakery_dining</span>
            <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{product.name}</span>
          </div>
        )}
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}
      </div>

      <div className="product-body">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <h3 className="product-title">{product.name}</h3>
          <p className="product-desc">{product.description}</p>
        </div>

        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm"
            aria-label={`Order ${product.name} on WhatsApp`}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>shopping_bag</span>
            <span>Order</span>
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProductCard;
