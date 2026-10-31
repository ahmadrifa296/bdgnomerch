import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Flame, 
  Layers, 
  Star, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { InstagramIcon } from '../components/ui/Icons';
import { PRODUCTS, REVIEWS, FAQS } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { getWhatsAppGeneralUrl, getBrandName, getInstagramUrl } from '../utils/whatsapp';

export const HomePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const brandName = getBrandName();
  const instagramUrl = getInstagramUrl();

  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);
  const newReleases = PRODUCTS.filter((p) => p.isNewRelease || !p.isBestSeller).slice(0, 4);

  return (
    <div className="space-y-24 pb-20 pt-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/10 to-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>OFFICIAL BANDUNG STREETWEAR & MERCHANDISE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-['Outfit']">
              DARI BANDUNG, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
                UNTUK KEBANGGAAN.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Koleksi apparel distro & suporter Bandung dengan bahan katun heavyweight 24s/30s, sablon plastisol premium, dan fitting boxy modern. Langsung order via WhatsApp tanpa ribet.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/catalog"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Lihat Semua Katalog</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={getWhatsAppGeneralUrl('Halo Admin BDG BOYS MERCH, saya mau lihat katalog dan promo terbaru!')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-base shadow-lg shadow-green-600/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Pesan Cepat via WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left border-t border-white/10 mt-10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 text-blue-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">100% Cotton</h4>
                  <p className="text-[11px] text-gray-400">Heavyweight Combed</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Truck className="w-7 h-7 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Kirim Cepat</h4>
                  <p className="text-[11px] text-gray-400">JNE, J&T, SiCepat, Gosend</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Layers className="w-7 h-7 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Sablon Awet</h4>
                  <p className="text-[11px] text-gray-400">High-Density Plastisol</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Star className="w-7 h-7 text-yellow-400 shrink-0 fill-current" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">4.9 / 5.0 Rating</h4>
                  <p className="text-[11px] text-gray-400">1.500+ Pelanggan Puas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES PILLS / QUICK DISCOVERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-[#0c1220] to-[#090d16] border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-black text-white font-['Outfit']">Kategori Pilihan</h2>
              <p className="text-xs sm:text-sm text-gray-400">Pilih lini merchandise yang sesuai dengan gaya & kebutuhanmu.</p>
            </div>
            <Link to="/catalog" className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-blue-400 hover:text-blue-300 font-semibold">
              <span>Buka filter katalog lengkap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              { name: 'T-Shirt 24s/30s', query: 'T-Shirt', icon: '👕', desc: 'Heavyweight & Boxy Cut' },
              { name: 'Hoodie & Pullover', query: 'Hoodie %26 Sweatshirt', icon: '🧥', desc: 'Taiwan Fleece 330 GSM' },
              { name: 'Supporter Jersey', query: 'Jersey', icon: '⚽', desc: 'Sublimation Milano' },
              { name: 'Caps & Bucket Hat', query: 'Headwear', icon: '🧢', desc: 'Trucker & Reversible' },
              { name: 'Syal & Aksesoris', query: 'Aksesoris', icon: '🧣', desc: 'Jacquard Knit & Tote Bag' },
            ].map((cat) => (
              <Link
                key={cat.name}
                to={`/catalog?cat=${cat.query}`}
                className="group p-4 rounded-2xl bg-white/5 hover:bg-blue-600/20 border border-white/5 hover:border-blue-500/30 transition-all duration-300 text-center flex flex-col items-center"
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
                <span className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors">{cat.name}</span>
                <span className="text-[11px] text-gray-400 mt-1">{cat.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Flame className="w-4 h-4 fill-current" />
              <span>Paling Banyak Dipesan</span>
            </div>
            <h2 className="text-3xl font-black text-white font-['Outfit']">Koleksi Best Seller</h2>
            <p className="text-gray-400 text-sm mt-1">Item paling dicari para supporter & pecinta streetwear Bandung.</p>
          </div>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-bold"
          >
            <span>Semua Produk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* BRAND STORY & QUALITY SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1426] via-[#090d16] to-[#0d1627] border border-white/10 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/20 text-blue-400 border border-blue-500/30">
                Crafted in Bandung
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit'] leading-tight">
                BUKAN SEKADAR MERCHANDISE, INI IDENTITAS.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Bandung selalu dikenal sebagai kiblat fashion, musik, dan fanatisme suporter sepak bola di Indonesia. {brandName} berdiri untuk mewadahi energi tersebut dalam bentuk pakaian berkualitas tinggi.
              </p>

              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Kain Cotton Combed Asli:</strong> Gramasi stabil, tidak mudah kusut, serat kapas lembut anti gerah.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Sablon Distro Premium:</strong> Tinta plastisol curring matang, elastis, dan tahan cuci berkali-kali.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Boxy & Street Fitting:</strong> Pola potong disesuaikan dengan proporsi tren fashion kasual modern.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors border border-white/10"
                >
                  Baca Cerita Lengkap Kami
                </Link>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 font-semibold text-sm border border-pink-500/30 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Follow @bdgboysmerch</span>
                </a>
              </div>
            </div>

            {/* Visual Showcase Card */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80"
                  alt="Bandung Streetwear Culture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-widest text-amber-400 font-bold">Kualitas Terjamin</p>
                  <p className="text-lg font-bold text-white font-['Outfit']">Jahitan Rantai Standar Distro Bandung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW DROPS & ACCESSORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Rilisan Terbaru</span>
            </div>
            <h2 className="text-3xl font-black text-white font-['Outfit']">Drop Terbaru Musim Ini</h2>
            <p className="text-gray-400 text-sm mt-1">Syal rajut, jersey suporter, dan hoodie edisi khusus.</p>
          </div>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-bold"
          >
            <span>Buka Katalog Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newReleases.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
            <Star className="w-4 h-4 fill-current" />
            <span>Testimoni Pelanggan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
            KATA MEREKA TENTANG BDG BOYS MERCH
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Ulasan nyata dari kawan-kawan supporter dan pecinta streetwear di berbagai kota di Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-300 italic leading-relaxed mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.customerName}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="font-bold text-xs text-white">{rev.customerName}</h4>
                  <p className="text-[10px] text-gray-400">{rev.city} • <span className="text-blue-400">{rev.date}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white font-['Outfit']">Pertanyaan Sering Diajukan (FAQ)</h2>
          <p className="text-gray-400 text-sm mt-1">Semua hal yang perlu kamu ketahui seputar pemesanan dan pengiriman.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0c1220] border border-white/10 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-bold text-white text-sm sm:text-base">{faq.question}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-blue-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BIG WHATSAPP CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-950 via-slate-900 to-blue-950 border border-green-500/30 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-green-500/20 text-green-300 border border-green-500/40">
              Ready Stock & Siap Kirim Hari Ini
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
              SIAP TAMPIL BEDA DENGAN MERCHANDISE BDG BOYS?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Konsultasikan ukuran atau langsung kirim pesananmu ke admin kami via WhatsApp. Pelayanan ramah, cepat, dan terpercaya.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppGeneralUrl('Halo Admin BDG BOYS MERCH, saya mau order merchandise hari ini.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-base shadow-xl shadow-green-700/30 hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat Admin WhatsApp Sekarang</span>
              </a>

              <Link
                to="/order-guide"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors border border-white/10"
              >
                Pelajari Cara Order
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
