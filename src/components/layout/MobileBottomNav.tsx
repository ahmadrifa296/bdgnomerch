import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { getWhatsAppGeneralUrl } from '../../utils/whatsapp';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  // If viewing a product detail page, hide standard bottom nav
  // because ProductDetailPage has its own dedicated sticky checkout bar
  if (location.pathname.startsWith('/product/')) {
    return null;
  }

  const navItems = [
    { name: 'Beranda', path: '/', icon: Home },
    { name: 'Katalog', path: '/catalog', icon: ShoppingBag },
    { name: 'Cara Order', path: '/order-guide', icon: HelpCircle },
    { name: 'Kontak', path: '/contact', icon: Phone },
  ];

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070e1c]/95 backdrop-blur-lg border-t border-blue-900/40 px-2 py-1.5 shadow-2xl flex items-center justify-around"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors relative ${
              isActive ? 'text-blue-400 font-bold' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <div className={`p-1 rounded-lg transition-transform ${isActive ? 'scale-110 bg-blue-500/15' : ''}`}>
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight">{item.name}</span>
            {isActive && (
              <span className="w-1 h-1 rounded-full bg-blue-400 absolute bottom-0"></span>
            )}
          </NavLink>
        );
      })}

      {/* Direct WhatsApp Action in Bottom Nav */}
      <a
        href={getWhatsAppGeneralUrl('Halo Admin BDG BOYS MERCH!')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center flex-1 py-1 text-emerald-400 hover:text-emerald-300 transition-colors"
      >
        <div className="p-1 rounded-lg bg-emerald-500/15 relative">
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>
        <span className="text-[10px] mt-0.5 font-bold tracking-tight">Chat WA</span>
      </a>
    </nav>
  );
};
