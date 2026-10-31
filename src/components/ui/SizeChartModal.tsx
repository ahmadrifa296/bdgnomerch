import React from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

export const SizeChartModal: React.FC<SizeChartModalProps> = ({ isOpen, onClose, category = 'T-Shirt' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0d172a] rounded-2xl border border-blue-900/40 p-6 shadow-2xl text-white">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-blue-400" />
            <h3 className="font-bold text-lg font-['Outfit']">Panduan Ukuran ({category})</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-4">
          <p className="text-xs text-gray-400">
            Toleransi ukuran jahitan sekitar ±1 - 1.5 cm. Ukuran di bawah ini menggunakan standar lokal distro Bandung.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 uppercase tracking-wider bg-white/5">
                  <th className="py-2.5 px-3">Size</th>
                  <th className="py-2.5 px-3">Lebar Dada (cm)</th>
                  <th className="py-2.5 px-3">Panjang Badan (cm)</th>
                  <th className="py-2.5 px-3">Panjang Lengan (cm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                <tr className="hover:bg-white/5">
                  <td className="py-2 px-3 font-bold text-blue-400">S</td>
                  <td className="py-2 px-3">48 - 50</td>
                  <td className="py-2 px-3">68</td>
                  <td className="py-2 px-3">21</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-2 px-3 font-bold text-blue-400">M</td>
                  <td className="py-2 px-3">52 - 53</td>
                  <td className="py-2 px-3">71</td>
                  <td className="py-2 px-3">22</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-2 px-3 font-bold text-blue-400">L</td>
                  <td className="py-2 px-3">55 - 56</td>
                  <td className="py-2 px-3">74</td>
                  <td className="py-2 px-3">23</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-2 px-3 font-bold text-blue-400">XL</td>
                  <td className="py-2 px-3">58 - 59</td>
                  <td className="py-2 px-3">77</td>
                  <td className="py-2 px-3">24</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-2 px-3 font-bold text-blue-400">XXL</td>
                  <td className="py-2 px-3">61 - 63</td>
                  <td className="py-2 px-3">80</td>
                  <td className="py-2 px-3">25</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-950/40 border border-blue-800/30 p-3 rounded-xl text-xs text-blue-200">
            <strong>Tips Memilih Ukuran:</strong> Jika menyukai gaya santai atau oversized modern, disarankan memilih 1 tingkat ukuran lebih besar (upsize).
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
