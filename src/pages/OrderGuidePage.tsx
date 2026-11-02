import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  MessageCircle, 
  CreditCard, 
  Truck, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { ShopeeIcon } from '../components/ui/Icons';
import { getWhatsAppGeneralUrl, getBrandName, getShopeeStoreUrl } from '../utils/whatsapp';

export const OrderGuidePage: React.FC = () => {
  const brandName = getBrandName();
  const shopeeStoreUrl = getShopeeStoreUrl();

  const steps = [
    {
      step: '01',
      title: 'Pilih Produk',
      desc: 'Pilih kaos atau official sticker pack di katalog, lalu cek panduan size chart.',
      icon: ShoppingBag,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
    },
    {
      step: '02',
      title: 'WA atau Shopee',
      desc: 'Klik tombol WhatsApp untuk chat admin, atau beli via Shopee Official Store.',
      icon: MessageCircle,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    },
    {
      step: '03',
      title: 'Konfirmasi Bayar',
      desc: 'Admin menghitung ongkir ke kotamu dan mengirim nomor rekening resmi.',
      icon: CreditCard,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
    },
    {
      step: '04',
      title: 'Kirim & Cek Resi',
      desc: 'Pesanan dipacking rapi dan dikirim via ekspedisi. Resi diinfokan via chat.',
      icon: Truck,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30'
    }
  ];

  return (
    <div className="pt-20 sm:pt-28 pb-28 sm:pb-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest font-bold text-blue-400">
          Panduan Praktis
        </span>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit']">
          CARA PEMESANAN MERCHANDISE
        </h1>
        <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
          Order langsung ke official CS {brandName} via WhatsApp atau Shopee Official Store resmi.
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 pt-1 max-w-xl mx-auto">
          <Link
            to="/catalog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            <span>Buka Katalog Produk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
            <a
              href={shopeeStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
            >
              <ShopeeIcon className="w-3.5 h-3.5 fill-current" />
              <span>Toko Shopee</span>
            </a>

            <a
              href={getWhatsAppGeneralUrl('Halo Admin BDG BOYS MERCH, saya mau pesan produk merchandise.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp CS</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Step Cards - 2 Columns on Mobile, 4 Columns on Desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.step}
              className="p-3.5 sm:p-5 rounded-xl bg-[#091222] border border-blue-950/80 hover:border-blue-500/40 transition-all duration-200 relative overflow-hidden flex flex-col justify-between shadow-sm group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl font-black text-blue-500/30 font-mono">{s.step}</span>
                  <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center border ${s.color}`}>
                    <Icon className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                  </div>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white font-['Outfit'] leading-tight group-hover:text-blue-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-[10.5px] sm:text-xs text-gray-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Payment & Shipping Logos Info - 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="p-4 sm:p-6 rounded-xl bg-[#091222] border border-blue-950/80 space-y-2.5">
          <h3 className="font-bold text-sm sm:text-base text-white font-['Outfit'] flex items-center gap-2">
            <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            Metode Pembayaran
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Mendukung transfer ke bank utama di Indonesia (BCA, Mandiri, BRI, BNI) serta scan QRIS untuk semua e-wallet (GoPay, OVO, Dana, ShopeePay, LinkAja).
          </p>
          <div className="pt-1 flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-bold">
            <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-200 border border-white/10">BCA</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-200 border border-white/10">Bank Mandiri</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-200 border border-white/10">BRI</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-200 border border-white/10">QRIS All Payment</span>
          </div>
        </div>

        <div className="p-4 sm:p-6 rounded-xl bg-[#091222] border border-blue-950/80 space-y-2.5">
          <h3 className="font-bold text-sm sm:text-base text-white font-['Outfit'] flex items-center gap-2">
            <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            Jasa Ekspedisi Pengiriman
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Setiap paket dikemas dalam polymailer waterproof tebal + bonus stiker pack gratis. Pengiriman setiap hari kerja pukul 16.00 WIB.
          </p>
          <div className="pt-1 flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-bold">
            <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-200 border border-white/10">JNE Express</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-200 border border-white/10">J&T Express</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-200 border border-white/10">SiCepat</span>
          </div>
        </div>
      </div>

      {/* Syarat Penting: No Exchange Notice */}
      <div className="p-4 sm:p-5 rounded-xl bg-blue-950/30 border border-blue-900/40 flex items-start gap-3">
        <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0 mt-0.5" />
        <div className="text-xs text-gray-300 space-y-1">
          <p className="font-bold text-white">Ketentuan Pemesanan:</p>
          <p className="leading-relaxed text-gray-400">
            Seluruh produk diperiksa kualitasnya (Quality Control) sebelum dikemas dan dikirim. Harap perhatikan size chart kaos dengan teliti sebelum memesan, karena kami tidak melayani penukaran ukuran (tukar size) atau retur barang setelah pesanan dikirim.
          </p>
        </div>
      </div>
    </div>
  );
};
