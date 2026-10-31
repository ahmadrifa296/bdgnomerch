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

export interface FaqItem {
  question: string;
  answer: string;
}
