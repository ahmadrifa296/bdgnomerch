import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Clock, Phone, Heart } from 'lucide-react';
import { InstagramIcon } from '../ui/Icons';
import { getWhatsAppGeneralUrl, getBrandName, getInstagramUrl, getWhatsAppNumber } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const brandName = getBrandName();
  const instagramUrl = getInstagramUrl();
  const whatsappNumber = getWhatsAppNumber();

  return (
    <footer className="bg-[#060e1c] border-t border-blue-900/30 pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="BDG BOYS MERCH Official Logo"
                className="w-11 h-11 rounded-full object-cover border-2 border-blue-400/40 shadow-md"
              />
              <span className="font-black text-xl text-white tracking-tight font-['Outfit']">
                {brandName}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-400">
              Official streetwear & matchday merchandise born in the heart of Bandung. Dibuat dengan dedikasi tinggi, bahan katun heavyweight terbaik, dan semangat kebanggaan tak pernah padam.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-pink-600/20 hover:text-pink-400 border border-white/10 flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-green-600/20 hover:text-green-400 border border-white/10 flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Navigasi Cepat */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-['Outfit']">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span>Beranda</span>
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span>Katalog Produk</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span>Tentang BDG BOYS</span>
                </Link>
              </li>
              <li>
                <Link to="/order-guide" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span>Panduan Cara Order</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span>Kontak & Lokasi</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Kategori Populer */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-['Outfit']">
              Koleksi Populer
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/catalog?cat=T-Shirt" className="hover:text-blue-400 transition-colors">
                  Heavyweight T-Shirt 24s
                </Link>
              </li>
              <li>
                <Link to="/catalog?cat=Hoodie%20%26%20Sweatshirt" className="hover:text-blue-400 transition-colors">
                  Oversized Fleece Hoodie
                </Link>
              </li>
              <li>
                <Link to="/catalog?cat=Jersey" className="hover:text-blue-400 transition-colors">
                  Matchday Supporter Jersey
                </Link>
              </li>
              <li>
                <Link to="/catalog?cat=Headwear" className="hover:text-blue-400 transition-colors">
                  Reversible Bucket Hat & Caps
                </Link>
              </li>
              <li>
                <Link to="/catalog?cat=Aksesoris" className="hover:text-blue-400 transition-colors">
                  Jacquard Scarf & Tote Bag
                </Link>
              </li>
            </ul>
          </div>

          {/* Info Workshop & Jam Kerja */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-['Outfit']">
              Studio & Customer Care
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>Jl. Trunojoyo - Dago Area, Kota Bandung, Jawa Barat 40115</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Senin - Minggu: 10.00 - 22.00 WIB</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-green-400 shrink-0" />
                <span>WA Order: +{whatsappNumber}</span>
              </li>
            </ul>

            <div className="mt-4 p-3 rounded-xl bg-blue-950/40 border border-blue-800/30">
              <p className="text-xs text-blue-200">
                <strong className="text-white">Pengiriman Cepat:</strong> JNE, J&T, SiCepat, dan Gosend/Grab Instant untuk wilayah Bandung.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {brandName}. All rights reserved. Crafted with <Heart className="w-3.5 h-3.5 text-red-500 inline fill-current" /> in Bandung.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">100% Original Distro Bandung</span>
            <span>•</span>
            <span className="text-gray-400">Vercel Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
