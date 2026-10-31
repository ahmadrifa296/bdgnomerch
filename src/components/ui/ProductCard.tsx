import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
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
    <div className="group flex flex-col bg-[#0c1220] rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 overflow-hidden">
      {/* Thumbnail Container */}
      <Link to={`/product/${product.id}`} className="relative aspect-[4/4] overflow-hidden bg-[#141b2d] block">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestSeller && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-amber-500 text-black shadow-md">
              Best Seller
            </span>
          )}
          {product.isNewRelease && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-blue-600 text-white shadow-md">
              New Drop
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-rose-600 text-white shadow-md">
              Hemat {discountPercent}%
            </span>
          )}
        </div>

        {/* Stock Status Indicator */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" /> Ready Stock
          </span>
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category & Rating */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
          <span className="text-blue-400 font-semibold tracking-wide uppercase text-[11px]">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-amber-400 font-medium">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-gray-500 text-[11px]">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/product/${product.id}`} className="group-hover:text-blue-400 transition-colors">
          <h3 className="font-bold text-white text-base leading-snug line-clamp-2 min-h-[44px]">
            {product.name}
          </h3>
        </Link>

        {/* Available Sizes Preview */}
        <div className="flex items-center gap-1.5 mt-3 flex-wrap">
          {product.sizes.slice(0, 4).map((s) => (
            <span
              key={s}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300"
            >
              {s}
            </span>
          ))}
          {product.sizes.length > 4 && (
            <span className="text-[10px] text-gray-400">+{product.sizes.length - 4}</span>
          )}
        </div>

        {/* Price Section */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-baseline justify-between">
          <div>
            <div className="text-lg font-black text-white font-['Outfit']">
              {formatPriceIDR(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-gray-500 line-through">
                {formatPriceIDR(product.originalPrice)}
              </div>
            )}
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <Link
            to={`/product/${product.id}`}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-semibold transition-colors border border-white/10"
          >
            <span>Detail</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
          </Link>

          <a
            href={createWhatsAppOrderUrl(product.name, defaultSize)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-xs font-semibold shadow-md shadow-green-700/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Order WA</span>
          </a>
        </div>
      </div>
    </div>
  );
};
