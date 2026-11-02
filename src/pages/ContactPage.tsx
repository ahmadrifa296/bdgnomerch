import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Send,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon, ShopeeIcon } from '../components/ui/Icons';
import { getBrandName, getInstagramUrl, getWhatsAppNumber, getShopeeStoreUrl } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const brandName = getBrandName();
  const instagramUrl = getInstagramUrl();
  const whatsappNumber = getWhatsAppNumber();

  // Form states
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('Tanya Ketersediaan Stok');
  const [userMsg, setUserMsg] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Halo Admin ${brandName}!\nNama saya: ${name || 'Kawan BDG'}\nTopik: ${topic}\nPesan: ${userMsg || 'Saya ingin menanyakan informasi produk.'}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formatted)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-20 sm:pt-28 pb-28 sm:pb-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-blue-400">
          Hubungi Kami
        </span>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit']">
          KONTAK & STUDIO BDG BOYS MERCH
        </h1>
        <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
          Punya pertanyaan seputar ukuran, ketersediaan produk, atau ingin kolaborasi komunitas? Kami siap menyapa kawan-kawan semua.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Left Column: Direct WhatsApp Form */}
        <div className="p-4 sm:p-8 rounded-2xl bg-[#070e1c] border border-blue-900/40 space-y-4 sm:space-y-6 shadow-xl">
          <div>
            <h2 className="text-2xl font-bold text-white font-['Outfit']">
              Kirim Pesan Langsung ke Admin
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Isi formulir di bawah ini untuk memulai chat WhatsApp dengan format pesan otomatis.
            </p>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                Nama Lengkap / Panggilan
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Rian Pratama"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#091222] border border-blue-900/40 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                Topik Pertanyaan
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#091222] border border-blue-900/40 text-white text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="Tanya Ketersediaan Stok" className="bg-[#091222] text-white">Tanya Ketersediaan Stok Produk</option>
                <option value="Cek Status Pengiriman & Resi" className="bg-[#091222] text-white">Cek Status Pengiriman / Nomor Resi</option>
                <option value="Konsultasi Size & Bahan" className="bg-[#091222] text-white">Konsultasi Rekomendasi Ukuran (Size)</option>
                <option value="Custom Order / Kolaborasi" className="bg-[#091222] text-white">Custom Order / Partnership Komunitas</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                Pesan atau Catatan
              </label>
              <textarea
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                rows={4}
                placeholder="Tuliskan pertanyaan atau detail produk yang ingin kamu tanyakan..."
                className="w-full px-4 py-3 rounded-lg bg-[#091222] border border-blue-900/40 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <Send className="w-4 h-4" />
              <span>Buka Chat di WhatsApp</span>
            </button>
          </form>
        </div>

        {/* Right Column: Address & Store Hours */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0d172a] border border-blue-900/30 space-y-6">
            <h2 className="text-2xl font-bold text-white font-['Outfit']">
              Informasi Offline Studio
            </h2>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Alamat Workshop & Pengiriman</h4>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                    Kota Jambi, Provinsi Jambi, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Jam Operasional CS</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Senin - Minggu: 10.00 - 22.00 WIB <br />
                    (Pemesanan via WhatsApp tetap aktif 24 jam)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">WhatsApp CS Official</h4>
                  <p className="text-xs text-gray-400 mt-0.5 font-mono">
                    +{whatsappNumber} (Direct Chat)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
                  <ShopeeIcon className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Shopee Official Store</h4>
                  <a
                    href={getShopeeStoreUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1 mt-0.5 font-mono"
                  >
                    <span>@dim4swelah</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/30">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Instagram Official</h4>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-0.5 font-mono"
                  >
                    <span>@bdgnomercyy</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map / Origin Note */}
          <div className="p-6 rounded-2xl bg-[#0b1426] border border-blue-900/30 space-y-2">
            <h3 className="font-bold text-white text-sm font-['Outfit']">Pusat Distribusi & Pengiriman</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Pengiriman setiap hari kerja menggunakan ekspedisi resmi JNE, J&T, dan SiCepat ke seluruh wilayah Indonesia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
