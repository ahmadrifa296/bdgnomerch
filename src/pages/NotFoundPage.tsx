import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingBag } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-36 pb-24 max-w-3xl mx-auto px-4 text-center space-y-6">
      <div className="w-24 h-24 mx-auto rounded-3xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-4xl font-black font-mono text-blue-400">
        404
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
          Tautan yang kamu tuju mungkin salah ketik, sudah dipindahkan, atau artikel sudah habis masa tayang.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-600/30 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-bold border border-white/10 transition-colors"
        >
          <ShoppingBag className="w-4 h-4 text-blue-400" />
          <span>Jelajahi Katalog Produk</span>
        </Link>
      </div>
    </div>
  );
};
