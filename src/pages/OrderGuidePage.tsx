import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MessageCircle, 
  CreditCard, 
  Truck, 
  Check, 
  Copy, 
  ShieldCheck
} from 'lucide-react';
import { getWhatsAppGeneralUrl, getBrandName, getWhatsAppNumber } from '../utils/whatsapp';

export const OrderGuidePage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const brandName = getBrandName();
  const waNumber = getWhatsAppNumber();

  const templateFormat = `Halo Admin ${brandName}! 👋
Saya ingin order merchandise:
- Nama Produk: 
- Size / Ukuran: 
- Jumlah (Pcs): 1
- Nama Lengkap: 
- No. WhatsApp: 
- Alamat Lengkap & Kode Pos: 
- Ekspedisi (JNE/J&T/SiCepat): 

Mohon info total biaya dan nomor rekening ya. Hatur nuhun!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(templateFormat);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const steps = [
    {
      step: '01',
      title: 'Pilih Produk & Ukuran',
      desc: 'Buka halaman Katalog, pilih artikel merchandise yang kamu inginkan, dan tentukan ukuran yang pas sesuai size chart.',
      icon: ShoppingBag,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
    },
    {
      step: '02',
      title: 'Klik Tombol WhatsApp',
      desc: 'Klik "Order via WhatsApp" pada produk, atau salin format pemesanan. Kamu akan langsung terhubung ke chat admin resmi.',
      icon: MessageCircle,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    },
    {
      step: '03',
      title: 'Konfirmasi & Pembayaran',
      desc: 'Admin akan memeriksa ketersediaan stok, menghitung total ongkos kirim ke kotamu, dan mengirimkan nomor rekening resmi.',
      icon: CreditCard,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
    },
    {
      step: '04',
      title: 'Pengiriman & Resi',
      desc: 'Setelah pembayaran terverifikasi, barang dipacking rapi dan dikirim hari itu juga. Nomor resi otomatis dikirim via WhatsApp.',
      icon: Truck,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30'
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-bold text-blue-400">
          Panduan Praktis
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-['Outfit']">
          CARA PEMESANAN VIA WHATSAPP
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Order langsung ke official CS {brandName} dalam hitungan menit tanpa perlu repot registrasi akun.
        </p>
      </div>

      {/* 4 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.step}
              className="p-6 rounded-2xl bg-[#0d172a] border border-blue-900/30 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-white/20 font-mono">{s.step}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${s.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-['Outfit']">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Copyable WhatsApp Order Format */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0d172a] border border-blue-900/30 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
              Format Chat WhatsApp Cepat
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Kamu juga bisa menyalin format teks di bawah ini dan langsung mengirimkannya ke WhatsApp kami (+{waNumber}).
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-colors shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Format Berhasil Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Salin Format Pesan</span>
              </>
            )}
          </button>
        </div>

        {/* Code Block Display */}
        <div className="p-4 rounded-xl bg-[#070e1b] border border-blue-900/40 font-mono text-xs text-blue-300 leading-relaxed whitespace-pre-wrap select-all">
          {templateFormat}
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
          <span className="text-xs text-gray-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Pembayaran hanya melalui rekening resmi yang diinfokan CS kami.
          </span>

          <a
            href={getWhatsAppGeneralUrl(templateFormat)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-xs shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Kirim Format ke WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Payment & Shipping Logos Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[#0d172a] border border-blue-900/30 space-y-3">
          <h3 className="font-bold text-base text-white font-['Outfit'] flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-blue-400" />
            Metode Pembayaran
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Mendukung transfer ke bank utama di Indonesia (BCA, Mandiri, BRI, BNI) serta scan QRIS untuk semua e-wallet (GoPay, OVO, Dana, ShopeePay, LinkAja).
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold">
            <span className="px-3 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/10">BCA</span>
            <span className="px-3 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/10">Bank Mandiri</span>
            <span className="px-3 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/10">BRI</span>
            <span className="px-3 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/10">QRIS All Payment</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#0d172a] border border-blue-900/30 space-y-3">
          <h3 className="font-bold text-base text-white font-['Outfit'] flex items-center gap-2">
            <Truck className="w-5 h-5 text-emerald-400" />
            Jasa Ekspedisi Pengiriman
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Setiap paket dikemas dalam polymailer waterproof tebal + bonus stiker pack gratis. Pengiriman setiap hari Senin hingga Sabtu pukul 16.00 WIB.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold">
            <span className="px-3 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/10">JNE Express</span>
            <span className="px-3 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/10">J&T Express</span>
            <span className="px-3 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/10">SiCepat</span>
            <span className="px-3 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/10">Gosend / Grab (Bandung)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
