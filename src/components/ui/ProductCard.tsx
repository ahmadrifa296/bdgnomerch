import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
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
    <div className="group flex flex-col bg-[#0d121f] rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors duration-200 overflow-hidden">
      {/* Thumbnail Container */}
      <Link 
        to={`/product/${product.id}`} 
        className="relative aspect-square overflow-hidden bg-[#131929] block focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.isBestSeller && (
            <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-amber-500 text-black">
              Best Seller
            </span>
          )}
          {product.isNewRelease && (
            <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-600 text-white">
              Rilisan Baru
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-600 text-white">
              Hemat {discountPercent}%
            </span>
          )}
        </div>

        {/* Stock Status Indicator */}
        <div className="absolute bottom-2.5 right-2.5 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-black/80 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" /> Ready
          </span>
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-[11px]">
            {product.category}
          </span>
          <span className="text-gray-400 text-[11px] font-mono">
            {product.sizes.length} Ukuran
          </span>
        </div>

        {/* Title */}
        <Link 
          to={`/product/${product.id}`} 
          className="hover:text-blue-400 transition-colors focus:outline-none focus:underline"
        >
          <h3 className="font-bold text-white text-base leading-snug line-clamp-2 min-h-[44px]">
            {product.name}
          </h3>
        </Link>

        {/* Available Sizes Preview */}
        <div className="flex items-center gap-1 mt-2.5 flex-wrap">
          {product.sizes.map((s) => (
            <span
              key={s}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Price Section */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-baseline justify-between">
          <div>
            <div className="text-lg font-bold text-white font-['Outfit']">
              {formatPriceIDR(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-gray-500 line-through">
                {formatPriceIDR(product.originalPrice)}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-4 pt-1">
          <Link
            to={`/product/${product.id}`}
            className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-semibold transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span>Detail</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
          </Link>

          <a
            href={createWhatsAppOrderUrl(product.name, defaultSize)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Order WA</span>
          </a>
        </div>
      </div>
    </div>
  );
};
