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
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest font-bold text-blue-400">
          Tentang Brand
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-['Outfit']">
          CERITA DI BALIK {brandName}
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Kultur suporter sepak bola, semangat kemandirian, dan warisan garmen jalanan kota Bandung.
        </p>
      </div>

      {/* Hero Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5 text-gray-300 text-sm leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
            Dedikasi Pada Material & Kultur Suporter
          </h2>
          <p>
            {brandName} bermula dari kecintaan pada atmosfer tribun stadion dan kultur pakaian jalanan di Bandung. Kami tidak sekadar memproduksi kaos, tetapi memastikan pemilihan jenis benang, kestabilan gramasi, dan teknik sablon plastisol mampu bertahan dalam pemakaian jangka panjang.
          </p>
          <p>
            Seluruh proses potong pola, jahit rantai, dan sablon dikerjakan langsung oleh para tenaga penjahit berpengalaman di kawasan industri kreatif Bandung.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-3 text-white">
            <div className="p-4 rounded-xl bg-[#0d121f] border border-white/10">
              <span className="block text-xl font-bold text-blue-400 font-mono">Cotton 20s & 24s</span>
              <span className="text-xs text-gray-400">Gramasi tebal 190-210 GSM</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0d121f] border border-white/10">
              <span className="block text-xl font-bold text-amber-400 font-mono">Vinyl Die-Cut</span>
              <span className="text-xs text-gray-400">Laminasi doff tahan cuaca & air</span>
            </div>
          </div>
        </div>

        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#131929] border border-white/10 relative">
          <img
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80"
            alt="Workshop BDG BOYS MERCH"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-xs">
            <p className="font-bold text-white">Workshop & Studio Bandung</p>
            <p className="text-gray-400 text-[11px]">Dikerjakan bersama para penjahit garmen lokal Jawa Barat.</p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
            Standar Produksi Kami
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Prinsip yang kami pegang dalam merilis setiap artikel merchandise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-xl bg-[#0d121f] border border-white/10 space-y-2.5">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-['Outfit']">Material Asli Tanpa Campuran</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Katun Combed 24s reaktif, fleece tebal 330 GSM, dan kain Milano Dry-Fit yang tahan luntur dan nyaman saat dipakai beraktivitas.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0d121f] border border-white/10 space-y-2.5">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">Identitas Komunitas</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Merchandise lahir dari kebutuhan nyata kawan-kawan di tribun dan jalanan yang menginginkan pakaian berkarakter tegas.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0d121f] border border-white/10 space-y-2.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">Pelayanan WhatsApp Langsung</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Komunikasi langsung dengan admin resmi. Pertanyaan seputar ukuran, ketersediaan, dan resi pengiriman dilayani tanpa perantara.
            </p>
          </div>
        </div>
      </div>

      {/* Direct Contact Action */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0d121f] border border-white/10 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">
          Ingin Menanyakan Stok atau Kunjungi Studio Kami?
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto">
          Hubungi admin kami di WhatsApp untuk menanyakan stok artikel atau panduan memilih ukuran yang pas.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-colors"
          >
            <span>Buka Katalog Produk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={getWhatsAppGeneralUrl('Halo Admin BDG BOYS, saya ingin tanya informasi produk dan studio.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/10 transition-colors"
          >
            Chat Admin WhatsApp
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 hover:text-pink-300 text-xs sm:text-sm font-semibold border border-white/10 transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@bdgboysmerch</span>
          </a>
        </div>
      </div>
    </div>
  );
};
