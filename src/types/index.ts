export type ProductCategory = 'Semua' | 'T-Shirt' | 'Stiker';

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
  cutting?: string;
  colors?: string[];
  sizes: string[];
  inStock: boolean;
  stockCount: number;
  features: string[];
  shopeeUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
