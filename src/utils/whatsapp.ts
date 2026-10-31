/**
 * WhatsApp & Social Media Helper Utilities
 * BDG BOYS MERCH
 */

const DEFAULT_PHONE = '6283854950915';
const DEFAULT_BRAND_NAME = 'BDG BOYS MERCH';
const DEFAULT_INSTAGRAM = 'https://www.instagram.com/bdgnomercyy/';

export const getBrandName = (): string => {
  return import.meta.env.VITE_BRAND_NAME || DEFAULT_BRAND_NAME;
};

export const getWhatsAppNumber = (): string => {
  const envPhone = import.meta.env.VITE_WHATSAPP_NUMBER;
  const rawNumber = (envPhone && !envPhone.includes('81234567890')) ? envPhone : DEFAULT_PHONE;
  let cleaned = rawNumber.replace(/[^0-9]/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.slice(1);
  }
  return cleaned;
};

export const getInstagramUrl = (): string => {
  const envUrl = import.meta.env.VITE_INSTAGRAM_URL;
  if (envUrl && !envUrl.includes('bdgboysmerch')) {
    return envUrl;
  }
  return DEFAULT_INSTAGRAM;
};

const DEFAULT_SHOPEE_URL = 'https://shopee.co.id/dim4swelah';

export const getShopeeStoreUrl = (): string => {
  const envUrl = import.meta.env.VITE_SHOPEE_URL;
  if (envUrl && !envUrl.includes('bdgnomercyy')) {
    return envUrl;
  }
  return DEFAULT_SHOPEE_URL;
};

export const STICKER_SHOPEE_URL = 'https://shopee.co.id/Sticker-Persib-Casual-Ex-Undis-Sol-Bandung-i.713581501.41834547390?extraParams=%7B%22display_model_id%22%3A311528753052%2C%22model_selection_logic%22%3A3%7D&image_ids=sg-11134207-8258v-mtatzv9c70ua13';

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
