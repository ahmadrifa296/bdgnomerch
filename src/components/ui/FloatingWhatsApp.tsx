import React, { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck } from 'lucide-react';
import { getWhatsAppGeneralUrl, getBrandName } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const brandName = getBrandName();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppGeneralUrl(customMsg || `Halo Admin ${brandName}, saya mau tanya stok merchandise.`);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end">
      {/* Pop-up Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-28px)] max-w-sm sm:w-96 bg-[#0d172a] rounded-2xl border border-blue-900/40 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/logo.jpg"
                  alt="BDG BOYS MERCH"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/30 shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-emerald-700 rounded-full animate-pulse"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight flex items-center gap-1">
                  CS {brandName}
                  <ShieldCheck className="w-3.5 h-3.5 inline text-emerald-200" />
                </h4>
                <p className="text-xs text-emerald-100">Online • Respon Cepat (10.00 - 22.00)</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-black/10 transition-colors"
              aria-label="Tutup Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Message */}
          <div className="p-4 space-y-3 bg-[#091222]">
            <div className="bg-[#0e1930] p-3 rounded-xl border border-blue-900/30 text-xs text-slate-200 leading-relaxed">
              <p className="font-semibold text-white mb-1">Sampurasun! 🙏</p>
              Ada yang bisa kami bantu seputar ukuran, stok produk, atau pengiriman hari ini?
            </div>

            <form onSubmit={handleSend} className="space-y-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Ketik pertanyaan kamu..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-green-600/30"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Mulai Chat di WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Buka WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 text-white shadow-xl shadow-green-900/40 hover:shadow-green-600/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-green-400/30"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="font-bold text-sm tracking-wide hidden sm:inline">
          Order via WhatsApp
        </span>
      </button>
    </div>
  );
};
