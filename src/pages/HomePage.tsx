import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { InstagramIcon } from '../components/ui/Icons';
import { PRODUCTS, FAQS } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { getWhatsAppGeneralUrl, getBrandName, getInstagramUrl } from '../utils/whatsapp';

export const HomePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const brandName = getBrandName();
  const instagramUrl = getInstagramUrl();

  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);
  const newReleases = PRODUCTS.filter((p) => p.isNewRelease || !p.isBestSeller).slice(0, 4);

  return (
    <div className="space-y-20 pb-20 pt-20">
      {/* HERO SECTION */}
      <section className="pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Authentic Brand Badge */}
            <div className="flex justify-center">
              <img
                src="/logo.jpg"
                alt="BDG BOYS MERCH Official Badge"
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-blue-400/40 shadow-2xl shadow-blue-950/80 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08] font-['Outfit']">
              MERCHANDISE RESMI DARI BDG BOYS MERCH.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Kaos katun 20s & 24s heavyweight serta official sticker pack eksklusif khas kultur jalanan Bandung. Pemesanan langsung ke WhatsApp admin resmi atau Shopee Official tanpa registrasi akun.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                to="/catalog"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>Lihat Katalog Produk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppGeneralUrl('Halo Admin BDG BOYS MERCH, saya mau cek katalog dan tanya stok produk ready.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Pesan Cepat via WhatsApp</span>
              </a>
            </div>

            {/* Honest Product Standards (No Fake Statistics) */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left border-t border-white/10 mt-10">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Cotton Heavy</h4>
                  <p className="text-[11px] text-gray-400">Combed 20s & 24s tebal</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Layers className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sablon & Vinyl</h4>
                  <p className="text-[11px] text-gray-400">Plastisol & Waterproof UV</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Kirim Hari Ini</h4>
                  <p className="text-[11px] text-gray-400">JNE, J&T, SiCepat</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quality Control</h4>
                  <p className="text-[11px] text-gray-400">Inspeksi rapi sebelum kirim</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-['Outfit']">Kategori Produk</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Pilih koleksi kaos atau official sticker pack.</p>
          </div>
          <Link to="/catalog" className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-blue-400 hover:text-blue-300 font-semibold shrink-0">
            <span>Buka Katalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 max-w-2xl">
          {[
            { 
              name: 'Kaos & T-Shirt', 
              query: 'T-Shirt', 
              desc: 'Combed 20s & 24s Heavy',
              badge: 'Apparel',
              badgeColor: 'bg-blue-600/20 text-blue-300 border-blue-500/30'
            },
            { 
              name: 'Sticker Pack', 
              query: 'Stiker', 
              desc: 'Vinyl Die-Cut Waterproof',
              badge: 'Aksesoris',
              badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
            },
          ].map((cat) => (
            <Link
              key={cat.name}
              to={`/catalog?cat=${cat.query}`}
              className="p-3.5 sm:p-4 rounded-xl bg-[#091222] hover:bg-[#0e1930] border border-blue-950/80 hover:border-blue-500/40 transition-all duration-200 block group shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${cat.badgeColor}`}>
                  {cat.badge}
                </span>
                <span className="text-xs text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-blue-300 transition-colors leading-tight">
                {cat.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-400 mt-1 line-clamp-1">
                {cat.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-['Outfit']">Produk Paling Dicari</h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Pilihan favorit suporter dan penikmat streetwear Bandung.</p>
          </div>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-blue-400 hover:text-blue-300 font-semibold shrink-0"
          >
            <span>Semua Produk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* AUTHENTIC WORKSHOP & CRAFTSMANSHIP SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0d121f] border border-white/10 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] leading-tight">
                STANDAR GARMEN DISTRO KOTA BANDUNG
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Kami memilih jalur produksi lokal di Bandung dengan pengawasan bahan langsung. Tidak menggunakan katun tipis yang tembus pandang atau sablon transfer yang mudah retak setelah dua kali pencucian.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Kain Cotton Combed 24s Reaktif:</strong> Serat kapas murni, menyerap keringat di tribun dan cuaca terik, tidak kaku.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Rib Kerah 2.5 cm Spandex:</strong> Tidak mudah melar atau bergelombang setelah pemakaian berulang.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Jahitan Rantai Pundak Standar Ekspor:</strong> Memperkuat sambungan bahu saat beraktivitas berat.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm transition-colors border border-white/10"
                >
                  Tentang {brandName}
                </Link>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 hover:text-pink-300 font-semibold text-xs sm:text-sm border border-white/10 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram @bdgnomercyy</span>
                </a>
              </div>
            </div>

            {/* Visual Lookbook Photo */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#131929] border border-white/10 relative">
              <img
                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80"
                alt="Streetwear Lookbook Bandung"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-xs">
                <p className="font-bold text-white">Workshop & QC Bandung</p>
                <p className="text-gray-400 text-[11px]">Setiap jahitan dan kerapian sablon diperiksa sebelum dipacking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT DROPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">Rilisan Terbaru</h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">Kaos boxy heavyweight dan official sticker pack edisi terbaru.</p>
          </div>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-blue-400 hover:text-blue-300 font-semibold"
          >
            <span>Katalog Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {newReleases.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* FAQ SECTION (HONEST, PRODUCT-SPECIFIC ONLY) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">Pertanyaan Seputar Pemesanan</h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">Informasi penting mengenai pembayaran, ukuran, dan jadwal pengiriman.</p>
        </div>

        <div className="space-y-2.5">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#0d121f] border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-white/5"
              >
                <span className="font-semibold text-white text-sm">{faq.question}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-blue-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 pt-1 text-xs text-gray-300 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DIRECT WHATSAPP ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0d121f] border border-white/10 p-8 sm:p-10 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">
            Butuh Rekomendasi Ukuran atau Cek Stok Ready?
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Admin customer service kami siap membantu mengecek ketersediaan produk dan panduan ukuran kaos secara langsung.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppGeneralUrl('Halo Admin BDG BOYS MERCH, saya ingin konsultasi ukuran dan cek stok barang ready.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat Admin WhatsApp</span>
            </a>

            <Link
              to="/order-guide"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Panduan Cara Order
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
