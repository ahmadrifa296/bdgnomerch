import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Award, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/ui/Icons';
import { getBrandName, getInstagramUrl, getWhatsAppGeneralUrl } from '../utils/whatsapp';

export const AboutPage: React.FC = () => {
  const brandName = getBrandName();
  const instagramUrl = getInstagramUrl();

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-bold text-blue-400">
          Tentang Brand
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-['Outfit']">
          CERITA DI BALIK {brandName}
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Dari tribun sepak bola, gang-gang kreatif kota Bandung, hingga panggung streetwear nasional.
        </p>
      </div>

      {/* Hero Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
            Lahir Dari Cinta Pada Kota & Budaya Suporter
          </h2>
          <p>
            {brandName} berdiri dengan satu misi sederhana namun kuat: menghadirkan merchandise yang merepresentasikan jiwa anak muda Bandung seutuhnya. Tidak sekadar menempelkan logo, kami meriset bahan katun, kerapatan gramasi, dan ketahanan sablon agar tahan dipakai di segala cuaca dan atmosfer.
          </p>
          <p>
            Setiap produk kami diproduksi langsung bersama para pengrajin garmen lokal di Bandung, ibu kota distro Indonesia yang telah diakui kreativitasnya selama puluhan tahun.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-4 text-white">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="block text-2xl font-black text-blue-400 font-['Outfit']">100%</span>
              <span className="text-xs text-gray-400">Kapas Alami Heavyweight</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="block text-2xl font-black text-amber-400 font-['Outfit']">10K+</span>
              <span className="text-xs text-gray-400">Merchandise Terjual</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80"
              alt="Workshop BDG BOYS MERCH"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Workshop Bandung</span>
              <p className="text-base font-bold text-white font-['Outfit']">Dibuat dengan dedikasi pengrajin lokal profesional</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
            Nilai & Standar Kualitas Kami
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Mengapa ribuan kawan mempercayakan outfit harian dan matchday-nya kepada kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">Material Tanpa Kompromi</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Kami hanya menggunakan Cotton Combed 24s/30s asli reaktif, fleece tebal 330 gsm, dan material sublimasi Milano yang sejuk serta awet bertahun-tahun.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">Dukungan Komunitas Nyata</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Merchandise kami dipakai bersama di stadion, cafe, jalanan, dan festival. Kami bangga menjadi bagian dari denyut nadi budaya alternatif Bandung.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">Pelayanan WhatsApp Personal</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Tidak ada bot kaku. Tim customer service kami adalah anak Bandung yang siap membantu konsultasi ukuran dan pengiriman dengan ramah dan cepat.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/40 via-[#0c1220] to-[#090d16] border border-blue-500/30 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
          Ingin Bergabung Menjadi Bagian Dari Keluarga BDG BOYS?
        </h2>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Lihat rilisan produk terbaru kami sekarang atau hubungi admin via WhatsApp untuk tanya stok dan pemesanan.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-600/30 transition-colors"
          >
            <span>Buka Katalog Merchandise</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={getWhatsAppGeneralUrl('Halo Admin BDG BOYS, saya ingin berkenalan dan tanya produk.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-bold border border-white/10 transition-colors"
          >
            Hubungi Kami di WhatsApp
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 text-sm font-bold border border-pink-500/30 transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@bdgboysmerch</span>
          </a>
        </div>
      </div>
    </div>
  );
};
