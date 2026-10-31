/**
 * WhatsApp & Social Media Helper Utilities
 * BDG BOYS MERCH
 */

const DEFAULT_PHONE = '6281234567890';
const DEFAULT_BRAND_NAME = 'BDG BOYS MERCH';
const DEFAULT_INSTAGRAM = 'https://instagram.com/bdgboysmerch';

export const getBrandName = (): string => {
  return import.meta.env.VITE_BRAND_NAME || DEFAULT_BRAND_NAME;
};

export const getWhatsAppNumber = (): string => {
  const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER || DEFAULT_PHONE;
  let cleaned = rawNumber.replace(/[^0-9]/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.slice(1);
  }
  return cleaned;
};

export const getInstagramUrl = (): string => {
  return import.meta.env.VITE_INSTAGRAM_URL || DEFAULT_INSTAGRAM;
};

export const formatPriceIDR = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const createWhatsAppOrderUrl = (
  productName: string,
  size: string = 'L',
  quantity: number = 1,
  notes: string = ''
): string => {
  const phone = getWhatsAppNumber();
  const brand = getBrandName();

  const message = `Halo Admin ${brand}! 👋\nSaya ingin memesan merchandise berikut:\n\n📦 *Produk:* ${productName}\n📏 *Size:* ${size}\n🔢 *Jumlah:* ${quantity} pcs${notes ? `\n📝 *Catatan:* ${notes}` : ''}\n\nMohon info ketersediaan stok, total harga, dan ongkir ke alamat saya. Terima kasih!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const getWhatsAppGeneralUrl = (
  customMessage?: string
): string => {
  const phone = getWhatsAppNumber();
  const brand = getBrandName();

  const message = customMessage || `Halo Admin ${brand}, saya mau tanya informasi produk merchandise. Boleh dibantu?`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const createWhatsAppInquiryUrl = getWhatsAppGeneralUrl;
