import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Truck, MapPin, CheckCircle2 } from 'lucide-react';
import { ShopeeIcon } from './Icons';
import type { Product } from '../../types';
import { formatPriceIDR, createWhatsAppOrderUrl } from '../../utils/whatsapp';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const defaultSize = product.sizes[0] || 'L';

  return (
    <div className="group flex flex-col bg-[#091222] rounded-xl lg:rounded-2xl border border-blue-950/80 hover:border-blue-500/50 shadow-md hover:shadow-2xl hover:shadow-blue-950/40 transition-all duration-300 overflow-hidden text-left relative hover:-translate-y-1">
      {/* Thumbnail Container (1:1 Aspect Ratio) */}
      <Link 
        to={`/product/${product.id}`} 
        className="relative aspect-square overflow-hidden bg-[#0e1930] block focus:outline-none"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* BDG Authentic Badges on Top-Left */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10 pointer-events-none">
          {product.isBestSeller && (
            <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-black text-[9px] uppercase tracking-wider shadow-sm">
              BEST SELLER
            </span>
          )}
          {product.isNewRelease && (
            <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-black text-[9px] uppercase tracking-wider shadow-sm">
              NEW RELEASE
            </span>
          )}
        </div>

        {/* Discount Badge on Top-Right */}
        {discountPercent > 0 && (
          <div className="absolute top-2 right-2 z-10 pointer-events-none">
            <span className="px-1.5 py-0.5 rounded bg-rose-600 text-white font-black text-[10px] tracking-tight shadow-sm">
              -{discountPercent}%
            </span>
          </div>
        )}

        {/* Subtle Category Pill on Bottom */}
        <div className="absolute bottom-2 left-2 z-10 pointer-events-none">
          <span className="px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-xs text-[9px] font-bold uppercase tracking-wider text-blue-300 border border-white/10">
            {product.category}
          </span>
        </div>
      </Link>

      {/* BDG Product Details */}
      <div className="p-2.5 sm:p-3.5 lg:p-4 flex flex-col flex-1 justify-between gap-1.5 sm:gap-2">
        <div>
          {/* Title with BDG Brand Tag */}
          <Link 
            to={`/product/${product.id}`} 
            className="hover:text-blue-400 transition-colors focus:outline-none block"
          >
            <h3 className="font-semibold text-white text-xs sm:text-[13px] lg:text-sm leading-snug line-clamp-2 min-h-[32px] sm:min-h-[38px] lg:min-h-[42px] group-hover:text-blue-300 transition-colors">
              <span className="inline-flex items-center px-1.5 py-0.5 mr-1.5 rounded bg-blue-900/40 text-blue-300 border border-blue-500/30 text-[9px] font-black uppercase tracking-wider align-middle">
                BDG
              </span>
              {product.name}
            </h3>
          </Link>

          {/* Authentic Price Section (Streetwear Terrace Style) */}
          <div className="mt-1.5 sm:mt-2 flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
            <span className="text-sm sm:text-lg lg:text-xl font-black text-white font-['Outfit'] tracking-tight">
              {formatPriceIDR(product.price)}
            </span>

            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs text-gray-500 line-through">
                {formatPriceIDR(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-1.5 mt-1.5 text-[10px] sm:text-[11px] text-gray-400">
            <span className="inline-flex items-center gap-1 font-medium text-emerald-400">
              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>Ready Stock</span>
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 font-mono text-[10px]">{product.sizes.length} Varian</span>
          </div>

          {/* Shipping & Location Footer */}
          <div className="flex items-center justify-between text-[10px] text-gray-400 mt-2 pt-2 border-t border-white/5">
            <div className="flex items-center gap-1 text-gray-300 font-medium">
              <Truck className="w-3 h-3 text-blue-400 shrink-0" />
              <span>Kirim Cepat</span>
            </div>
            <div className="flex items-center gap-0.5 text-gray-400 truncate">
              <MapPin className="w-2.5 h-2.5 text-amber-400 shrink-0" />
              <span className="truncate">Kota Jambi</span>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 gap-1.5 mt-2 pt-2 border-t border-white/5">
          <a
            href={createWhatsAppOrderUrl(product.name, defaultSize)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-1.5 lg:py-2 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] lg:text-xs font-bold shadow-sm transition-colors"
            title="Chat Order WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
            <span>WA</span>
          </a>

          {product.shopeeUrl ? (
            <a
              href={product.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-1.5 lg:py-2 px-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-[11px] lg:text-xs font-bold shadow-sm transition-colors"
              title="Beli di Shopee Official"
            >
              <ShopeeIcon className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>Shopee</span>
            </a>
          ) : (
            <Link
              to={`/product/${product.id}`}
              className="flex items-center justify-center gap-1 py-1.5 lg:py-2 px-2 rounded-lg bg-white/10 hover:bg-white/15 text-gray-200 text-[11px] lg:text-xs font-bold shadow-sm transition-colors border border-white/10"
            >
              <span>Detail</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
