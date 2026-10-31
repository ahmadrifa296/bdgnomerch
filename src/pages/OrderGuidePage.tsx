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
      title: 'Pilih Produk & Ukuran',
      desc: 'Buka halaman Katalog, pilih artikel t-shirt atau sticker pack yang kamu inginkan, dan tentukan ukuran sesuai size chart (khusus kaos).',
      icon: ShoppingBag,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
    },
    {
      step: '02',
      title: 'WhatsApp atau Shopee',
      desc: 'Klik tombol "Order via WhatsApp" untuk chat langsung dengan admin, atau klik "Beli di Shopee Official" untuk transaksi via marketplace.',
      icon: MessageCircle,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    },
    {
      step: '03',
      title: 'Konfirmasi & Pembayaran',
      desc: 'Untuk pemesanan WhatsApp, admin akan mengonfirmasi ketersediaan stok, ongkir ke kotamu, dan mengirim rekening resmi store.',
      icon: CreditCard,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
    },
    {
      step: '04',
      title: 'Pengiriman & Resi',
      desc: 'Setelah pembayaran terverifikasi, pesanan dipacking rapi dan dikirim via ekspedisi. Nomor resi pengiriman akan segera diinfokan.',
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
          CARA PEMESANAN MERCHANDISE
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Order langsung ke official CS {brandName} via WhatsApp atau Shopee Official Store resmi.
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            to="/catalog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-colors"
          >
            <span>Buka Katalog Produk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={shopeeStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition-colors"
          >
            <ShopeeIcon className="w-4 h-4 fill-current" />
            <span>Kunjungi Toko Shopee</span>
          </a>

          <a
            href={getWhatsAppGeneralUrl('Halo Admin BDG BOYS MERCH, saya mau pesan merchandise.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat Admin WhatsApp</span>
          </a>
        </div>
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
            Setiap paket dikemas dalam polymailer waterproof tebal + bonus stiker pack gratis. Pengiriman setiap hari kerja pukul 16.00 WIB.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold">
            <span className="px-3 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/10">JNE Express</span>
            <span className="px-3 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/10">J&T Express</span>
            <span className="px-3 py-1 rounded-lg bg-white/5 text-gray-200 border border-white/10">SiCepat</span>
          </div>
        </div>
      </div>

      {/* Syarat Penting: No Exchange Notice */}
      <div className="p-6 rounded-2xl bg-blue-950/30 border border-blue-900/40 flex items-start gap-3.5">
        <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div className="text-xs text-gray-300 space-y-1">
          <p className="font-bold text-white">Ketentuan Pemesanan:</p>
          <p className="leading-relaxed text-gray-400">
            Seluruh pesanan diperiksa kualitasnya (Quality Control) sebelum dikemas dan dikirim. Harap perhatikan size chart kaos dengan teliti sebelum memesan, karena kami tidak melayani penukaran ukuran (tukar size) atau retur barang setelah pesanan dikirim.
          </p>
        </div>
      </div>
    </div>
  );
};
