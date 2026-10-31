export type ProductCategory = 'Semua' | 'T-Shirt' | 'Hoodie & Sweatshirt' | 'Jersey' | 'Headwear' | 'Aksesoris';

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  image: string;
  secondaryImage?: string;
  tags: string[];
  rating: number;
  reviewsCount: number;
  isBestSeller?: boolean;
  isNewRelease?: boolean;
  description: string;
  material: string;
  printType: string;
  sizes: string[];
  inStock: boolean;
  stockCount: number;
  features: string[];
}

export interface Review {
  id: string;
  customerName: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  productPurchased: string;
  city: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
