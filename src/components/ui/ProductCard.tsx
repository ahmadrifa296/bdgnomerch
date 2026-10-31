import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Truck, MapPin, Star, Ticket } from 'lucide-react';
import { ShopeeIcon } from './Icons';
import type { Product } from '../../types';
import { createWhatsAppOrderUrl } from '../../utils/whatsapp';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const defaultSize = product.sizes[0] || 'L';

  // Format price into IDR string without Rp prefix for custom Shopee styling
  const formattedPrice = new Intl.NumberFormat('id-ID').format(product.price);
  const formattedOriginalPrice = product.originalPrice 
    ? new Intl.NumberFormat('id-ID').format(product.originalPrice)
    : null;

  return (
    <div className="group flex flex-col bg-[#0c1322] rounded-xl border border-white/10 hover:border-orange-500/50 shadow-md hover:shadow-xl hover:shadow-orange-950/20 transition-all duration-200 overflow-hidden text-left">
      {/* Thumbnail Container (Shopee 1:1 Aspect Ratio) */}
      <Link 
        to={`/product/${product.id}`} 
        className="relative aspect-square overflow-hidden bg-[#131929] block focus:outline-none"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />

        {/* Shopee-style Promo Ribbon on Top-Left */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {product.isBestSeller && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-tight bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-sm">
              BEST SELLER
            </span>
          )}
          {product.isNewRelease && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-tight bg-blue-600 text-white shadow-sm">
              NEW RELEASE
            </span>
          )}
        </div>

        {/* Shopee Bottom Image Badges: PROMO XTRA & DISKON */}
        <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between z-10 pointer-events-none">
          <div className="flex items-center gap-1">
            <span className="px-1.5 py-0.5 rounded bg-[#f6a700] text-[#780000] font-black text-[9px] uppercase tracking-tighter shadow-sm flex items-center gap-0.5">
              PROMO <span className="text-white bg-[#d0011b] px-1 rounded-sm">XTRA</span>
            </span>
          </div>

          {discountPercent > 0 && (
            <span className="px-1.5 py-0.5 rounded bg-[#ee4d2d] text-white font-extrabold text-[10px] shadow-sm">
              -{discountPercent}%
            </span>
          )}
        </div>
      </Link>

      {/* Shopee-style Product Details */}
      <div className="p-2.5 sm:p-3.5 flex flex-col flex-1 justify-between gap-1.5">
        <div>
          {/* Title with Shopee 'Star+' Badge */}
          <Link 
            to={`/product/${product.id}`} 
            className="hover:text-orange-400 transition-colors focus:outline-none block"
          >
            <h3 className="font-medium text-gray-100 text-xs sm:text-[13px] leading-snug line-clamp-2 min-h-[34px] sm:min-h-[38px]">
              <span className="inline-flex items-center px-1.5 py-0.5 mr-1 rounded bg-[#ee4d2d] text-white text-[9px] font-black uppercase tracking-tight align-middle shadow-xs">
                Star+
              </span>
              {product.name}
            </h3>
          </Link>

          {/* Shopee Price Section */}
          <div className="mt-1.5 flex items-baseline gap-1.5 flex-wrap">
            <div className="text-[#ee4d2d] flex items-baseline font-bold font-['Outfit']">
              <span className="text-[11px] sm:text-xs font-semibold mr-0.5">Rp</span>
              <span className="text-base sm:text-lg font-black tracking-tight">{formattedPrice}</span>
            </div>

            {formattedOriginalPrice && (
              <span className="text-[10px] sm:text-xs text-gray-500 line-through">
                Rp{formattedOriginalPrice}
              </span>
            )}

            <Ticket className="w-3.5 h-3.5 text-[#ee4d2d] shrink-0" />
          </div>

          {/* Shopee Voucher / Promo Badges */}
          <div className="flex items-center gap-1 mt-1 flex-wrap">
            <span className="px-1 py-0.2 rounded border border-[#ee4d2d]/60 bg-[#ee4d2d]/10 text-[#ee4d2d] text-[9px] font-bold tracking-tight">
              KOMISI <span className="font-black">XTRA</span>
            </span>
            <span className="px-1 py-0.2 rounded border border-amber-500/60 bg-amber-500/10 text-amber-400 text-[9px] font-bold tracking-tight">
              GRATIS ONGKIR
            </span>
          </div>

          {/* Rating & Sold Indicator */}
          <div className="flex items-center gap-1.5 mt-2 text-[10px] sm:text-[11px] text-gray-300">
            <div className="flex items-center gap-0.5 text-amber-400 font-bold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>5.0</span>
            </div>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 font-medium">{product.category}</span>
            <span className="text-gray-600">•</span>
            <span className="text-emerald-400 font-medium">Ready Stock</span>
          </div>

          {/* Shipping Info & Location (Shopee Bottom Row) */}
          <div className="flex items-center justify-between text-[10px] text-gray-400 mt-1.5 pt-1.5 border-t border-white/5">
            <div className="flex items-center gap-1 text-emerald-400 font-medium">
              <Truck className="w-3 h-3 shrink-0" />
              <span>2-4 Hari</span>
            </div>
            <div className="flex items-center gap-0.5 text-gray-400 truncate max-w-[90px] sm:max-w-none">
              <MapPin className="w-2.5 h-2.5 shrink-0 text-blue-400" />
              <span className="truncate">Kota Jambi</span>
            </div>
          </div>
        </div>

        {/* Shopee Quick Action Buttons */}
        <div className="grid grid-cols-2 gap-1.5 mt-2.5 pt-2 border-t border-white/5">
          <a
            href={createWhatsAppOrderUrl(product.name, defaultSize)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white text-[11px] font-bold shadow-sm transition-colors"
            title="Chat Order WhatsApp"
          >
            <MessageCircle className="w-3 h-3 fill-current shrink-0" />
            <span>WA</span>
          </a>

          {product.shopeeUrl ? (
            <a
              href={product.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-[#ee4d2d] hover:bg-[#d73211] text-white text-[11px] font-bold shadow-sm transition-colors"
              title="Beli di Shopee"
            >
              <ShopeeIcon className="w-3 h-3 fill-current shrink-0" />
              <span>Shopee</span>
            </a>
          ) : (
            <Link
              to={`/product/${product.id}`}
              className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white text-[11px] font-bold shadow-sm transition-colors"
            >
              <span>Detail</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
