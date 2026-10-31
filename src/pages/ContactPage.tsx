import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Send, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from '../components/ui/Icons';
import { getBrandName, getInstagramUrl, getWhatsAppNumber } from '../utils/whatsapp';

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
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-bold text-blue-400">
          Hubungi Kami
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-['Outfit']">
          KONTAK & STUDIO BANDUNG
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Punya pertanyaan seputar ukuran, ketersediaan artikel, atau ingin kolaborasi komunitas? Kami siap menyapa kawan-kawan semua.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column: Direct WhatsApp Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1220] border border-white/10 space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Fast Response Form</span>
            </div>
            <h2 className="text-2xl font-black text-white font-['Outfit']">
              Kirim Pesan Langsung ke Admin
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Isi data di bawah ini untuk membuka chat WhatsApp resmi kami dengan draf otomatis.
            </p>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                Nama Kamu
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Rian Bandung"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                Topik Pertanyaan
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-green-500"
              >
                <option value="Tanya Ketersediaan Stok" className="bg-[#0c1220] text-white">Tanya Ketersediaan Stok Artikel</option>
                <option value="Cek Status Pengiriman & Resi" className="bg-[#0c1220] text-white">Cek Status Pengiriman / Nomor Resi</option>
                <option value="Konsultasi Size & Bahan" className="bg-[#0c1220] text-white">Konsultasi Rekomendasi Ukuran (Size)</option>
                <option value="Custom Order / Kolaborasi" className="bg-[#0c1220] text-white">Custom Order / Partnership Komunitas</option>
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
                placeholder="Tuliskan pertanyaan atau detail pesanan yang ingin kamu tanyakan..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm shadow-xl shadow-green-700/30 hover:scale-[1.01] transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Buka Chat di WhatsApp</span>
            </button>
          </form>
        </div>

        {/* Right Column: Address & Store Hours */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1220] border border-white/10 space-y-6">
            <h2 className="text-2xl font-black text-white font-['Outfit']">
              Informasi Offline Studio
            </h2>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Alamat Pick-up & Studio</h4>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                    Kawasan Trunojoyo - Dago Creative Hub, Kota Bandung, Jawa Barat 40115, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Jam Operasional CS</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Senin - Minggu: 10.00 - 22.00 WIB <br />
                    (Order online WhatsApp 24 jam, diproses di jam kerja)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">WhatsApp CS Official</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    +{whatsappNumber} (Direct Chat)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/20">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Instagram Official</h4>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-0.5"
                  >
                    <span>@bdgboysmerch</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Preview Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-950/40 to-[#0c1220] border border-blue-500/30 space-y-3">
            <h3 className="font-bold text-white text-sm font-['Outfit']">Bandung Distro & Creative District</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Titik pengiriman warehouse kami berlokasi di pusat garmen Bandung sehingga paket ke Jabodetabek dan kota-kota lain sampai lebih cepat dan aman.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
