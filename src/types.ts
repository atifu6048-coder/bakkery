export interface Product {
  id: string;
  name: string;
  category: 'cakes' | 'cupcakes-brownies-cookies';
  categoryLabel: string;
  description: string;
  price: string;
  badge?: string;
  isBestSeller?: boolean;
  image: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  spanCol?: boolean;
}
