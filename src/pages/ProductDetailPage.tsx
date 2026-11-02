import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, 
  MessageCircle, 
  Ruler, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Plus, 
  Minus,
  Share2,
  Check
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { formatPriceIDR, createWhatsAppOrderUrl, getBrandName } from '../utils/whatsapp';
import { SizeChartModal } from '../components/ui/SizeChartModal';
import { ProductCard } from '../components/ui/ProductCard';
import { ShopeeIcon } from '../components/ui/Icons';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const product = PRODUCTS.find((p) => p.id === id);

  // States
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors && product.colors.length > 0 ? product.colors[0] : ''
  );
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[0] || 'L');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(product?.image || '');
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Update active image and defaults when product changes
  React.useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setSelectedSize(product.sizes[0] || 'L');
      setSelectedColor(product.colors && product.colors.length > 0 ? product.colors[0] : '');
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white font-['Outfit']">Produk tidak ditemukan</h2>
        <p className="text-gray-400 text-sm">Produk yang kamu cari mungkin sudah habis atau tautan tidak valid.</p>
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm"
        >
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  const brandName = getBrandName();
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="pt-20 sm:pt-28 pb-28 sm:pb-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
        <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
        <Link to="/catalog" className="hover:text-white transition-colors">Katalog</Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
        <Link to={`/catalog?cat=${product.category}`} className="hover:text-white transition-colors">
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
        <span className="text-blue-400 font-medium truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Left Column: Image Gallery */}
        <div className="space-y-4">
          {/* Main Large Image */}
          <div className="aspect-[4/4] rounded-3xl overflow-hidden bg-[#141b2d] border border-white/10 relative shadow-2xl">
            <img
              src={activeImage || product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {product.isBestSeller && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-extrabold uppercase bg-amber-500 text-black shadow-lg">
                Best Seller
              </span>
            )}
          </div>

          {/* Thumbnails (if secondary image available) */}
          {product.secondaryImage && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveImage(product.image)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === product.image ? 'border-blue-500 scale-95 shadow-lg shadow-blue-600/30' : 'border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={product.image} alt="Tampilan 1" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setActiveImage(product.secondaryImage!)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === product.secondaryImage ? 'border-blue-500 scale-95 shadow-lg shadow-blue-600/30' : 'border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={product.secondaryImage} alt="Tampilan 2" className="w-full h-full object-cover" />
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Details & Order Controls */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-blue-400 font-bold uppercase tracking-wider">
                {product.category}
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">Link Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Bagikan Produk</span>
                  </>
                )}
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Outfit'] leading-tight">
              {product.name}
            </h1>

            {/* Stock & Origin Status */}
            <div className="flex items-center gap-3 mt-3 text-xs text-gray-300">
              <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> Ready Stock ({product.stockCount} pcs)
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400 font-mono">Original Distro Bandung</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-baseline gap-4">
            <span className="text-3xl font-black text-white font-['Outfit']">
              {formatPriceIDR(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-gray-500 line-through">
                  {formatPriceIDR(product.originalPrice)}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-rose-600/30 text-rose-400 text-xs font-bold border border-rose-500/30">
                  Hemat {discountPercent}%
                </span>
              </>
            )}
          </div>

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                  Pilih Warna Kaos:
                </span>
                <span className="text-xs font-bold text-blue-400">
                  {selectedColor}
                </span>
              </div>

              <div className="flex items-center gap-2.5 flex-wrap">
                {product.colors.map((c) => {
                  const isBlack = c.toLowerCase().includes('hitam') || c.toLowerCase().includes('black');
                  return (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                        selectedColor === c
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 border border-blue-400'
                          : 'bg-[#141b2d] text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                      }`}
                    >
                      <span
                        className={`w-3.5 h-3.5 rounded-full border ${
                          isBlack
                            ? 'bg-black border-white/50 shadow-sm'
                            : 'bg-white border-black/40 shadow-sm'
                        }`}
                      />
                      <span>{c}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Size Selector */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                {product.category === 'Stiker' ? 'Pilihan Paket:' : 'Pilih Ukuran:'}
              </span>
              {product.category !== 'Stiker' && (
                <button
                  onClick={() => setIsSizeChartOpen(true)}
                  className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Panduan Ukuran (Size Chart)</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2.5 flex-wrap">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all duration-200 ${
                    selectedSize === s
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 border border-blue-400'
                      : 'bg-[#141b2d] text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              Jumlah (Qty):
            </span>
            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-xl bg-white/5 border border-white/10 p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Kurangi jumlah"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold text-white font-mono text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Tambah jumlah"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <span className="text-xs text-gray-400">
                Total perkiraan: <strong className="text-white">{formatPriceIDR(product.price * quantity)}</strong>
              </span>
            </div>
          </div>

          {/* Order Actions */}
          <div className="pt-2 space-y-2.5">
            {product.shopeeUrl && (
              <a
                href={product.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#ee4d2d] hover:bg-[#d73211] text-white font-bold text-sm shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <ShopeeIcon className="w-5 h-5 fill-current" />
                <span>Beli Langsung di Shopee Official</span>
              </a>
            )}

            <a
              href={createWhatsAppOrderUrl(product.name, selectedSize, quantity, selectedColor)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Order via WhatsApp CS</span>
            </a>

            <p className="text-[11px] text-center text-gray-400">
              Pemesanan WhatsApp otomatis menyusun rincian: {product.name} {selectedColor ? `(Warna ${selectedColor}, Size ${selectedSize}, ${quantity} pcs)` : `(Size ${selectedSize}, ${quantity} pcs)`}.
            </p>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>100% Original {brandName}</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pengiriman Cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Quality Control Rapi</span>
            </div>
          </div>

          {/* Description & Specifications */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <h3 className="font-bold text-base text-white font-['Outfit']">Deskripsi & Spesifikasi</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {product.description}
            </p>

            <div className="p-4 rounded-xl bg-[#0d172a] border border-blue-900/30 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-400">Material Bahan:</span>
                <span className="text-white font-medium">{product.material}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-400">Tipe Sablon / Patch:</span>
                <span className="text-white font-medium">{product.printType}</span>
              </div>
              {product.cutting && (
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Pola / Cutting:</span>
                  <span className="text-white font-medium">{product.cutting}</span>
                </div>
              )}
              {product.colors && product.colors.length > 0 && (
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Pilihan Warna:</span>
                  <span className="text-white font-medium">{product.colors.join(' & ')}</span>
                </div>
              )}
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Kota Produksi:</span>
                <span className="text-white font-medium">Bandung, Jawa Barat</span>
              </div>
            </div>

            {/* Key Features Bullet List */}
            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-bold text-gray-300">Keunggulan Produk:</span>
              <ul className="space-y-1 text-xs text-gray-300">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Recommendation */}
      {relatedProducts.length > 0 && (
        <section className="pt-12 border-t border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-white font-['Outfit']">
              Produk Terkait Lainnya
            </h2>
            <Link to="/catalog" className="text-xs text-blue-400 hover:text-blue-300 font-semibold">
              Lihat Semua →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Mobile Sticky Bottom Order Bar (Phone-First UX) */}
      <div 
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#070e1c]/95 backdrop-blur-lg border-t border-blue-900/40 px-3 pt-3 shadow-2xl"
        style={{ paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 12px)' }}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] text-gray-400 block leading-tight">
              Total ({quantity} pcs {selectedColor ? `• ${selectedColor}` : ''}):
            </span>
            <span className="text-base font-black text-white font-mono">
              {formatPriceIDR(product.price * quantity)}
            </span>
          </div>

          <a
            href={createWhatsAppOrderUrl(product.name, selectedSize, quantity, selectedColor)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/60 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Order WA Sekarang</span>
          </a>
        </div>
      </div>

      {/* Size Chart Modal */}
      <SizeChartModal
        isOpen={isSizeChartOpen}
        onClose={() => setIsSizeChartOpen(false)}
        category={product.category}
      />
    </div>
  );
};
