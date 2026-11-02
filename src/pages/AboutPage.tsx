import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Award, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/ui/Icons';
import { getBrandName, getInstagramUrl, getWhatsAppGeneralUrl } from '../utils/whatsapp';

export const AboutPage: React.FC = () => {
  const brandName = getBrandName();
  const instagramUrl = getInstagramUrl();

  return (
    <div className="pt-20 sm:pt-28 pb-28 sm:pb-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-blue-400">
          Tentang Brand
        </span>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit']">
          CERITA DI BALIK {brandName}
        </h1>
        <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
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
              <span className="block text-xl font-bold text-blue-400 font-mono">Cotton Combed 24s</span>
              <span className="text-xs text-gray-400">Kain adem & nyaman dipakai</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0d121f] border border-white/10">
              <span className="block text-xl font-bold text-amber-400 font-mono">Vinyl Die-Cut</span>
              <span className="text-xs text-gray-400">Laminasi doff tahan cuaca & air</span>
            </div>
          </div>
        </div>

        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#131929] border border-white/10 relative">
          <img
            src="/bdg-merch-showcase.jpg"
            alt="BDG BOYS MERCH Official Apparel"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-xs">
            <p className="font-bold text-white">Original BDG BOYS MERCH</p>
            <p className="text-gray-400 text-[11px]">Kultur tribun dan streetwear jalanan dengan standar material premium.</p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-4 sm:space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <h2 className="text-xl sm:text-3xl font-black text-white font-['Outfit']">
            Standar Produksi Kami
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            Prinsip yang kami pegang dalam merilis setiap produk merchandise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5">
          <div className="p-3.5 sm:p-5 rounded-xl bg-[#091222] border border-blue-950/80 flex items-start gap-3 sm:flex-col sm:gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs sm:text-base font-bold text-white font-['Outfit']">Material Asli Heavyweight</h3>
              <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                Katun Combed 24s adem berkualitas dan sablon plastisol awet yang tidak mudah retak.
              </p>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl bg-[#091222] border border-blue-950/80 flex items-start gap-3 sm:flex-col sm:gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
              <Users className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs sm:text-base font-bold text-white font-['Outfit']">Kultur Suporter & Streetwear</h3>
              <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                Desain orisinal lahir dari kecintaan nyata pada kultur tribun sepak bola dan streetwear khas Bandung.
              </p>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl bg-[#091222] border border-blue-950/80 flex items-start gap-3 sm:flex-col sm:gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Award className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs sm:text-base font-bold text-white font-['Outfit']">Layanan WhatsApp & Shopee</h3>
              <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                Konsultasi ukuran langsung via WhatsApp CS resmi atau transaksi praktis via Shopee Official Store.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Contact Action */}
      <div className="p-6 sm:p-10 rounded-2xl bg-[#091222] border border-blue-950/80 text-center space-y-4">
        <h2 className="text-xl sm:text-3xl font-black text-white font-['Outfit']">
          Ingin Menanyakan Stok atau Kunjungi Studio Kami?
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto">
          Hubungi admin kami di WhatsApp untuk menanyakan stok produk atau panduan memilih ukuran yang pas.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <Link
            to="/catalog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
          >
            <span>Buka Katalog Produk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={getWhatsAppGeneralUrl('Halo Admin BDG BOYS, saya ingin tanya informasi produk dan studio.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
          >
            <span>Chat Admin WhatsApp</span>
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-pink-300 text-xs sm:text-sm font-semibold border border-white/10 transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@bdgnomercyy</span>
          </a>
        </div>
      </div>
    </div>
  );
};
