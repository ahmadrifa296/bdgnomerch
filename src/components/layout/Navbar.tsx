import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from '../ui/Icons';
import { getWhatsAppGeneralUrl, getBrandName, getInstagramUrl } from '../../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Katalog', path: '/catalog' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Cara Order', path: '/order-guide' },
    { name: 'Kontak', path: '/contact' },
  ];

  const brandName = getBrandName();
  const instagramUrl = getInstagramUrl();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3'
          : 'bg-[#090d16]/70 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-amber-500 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-blue-600/30">
              <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300 font-mono">
                  BDG
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-lg sm:text-xl text-white group-hover:text-blue-400 transition-colors uppercase font-['Outfit']">
                {brandName}
              </span>
              <span className="text-[10px] tracking-widest text-gray-400 uppercase -mt-1 font-semibold flex items-center gap-1">
                Bandung Pride <ShieldCheck className="w-3 h-3 text-blue-400 inline" />
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram BDG BOYS MERCH"
              className="p-2.5 rounded-lg text-gray-400 hover:text-pink-400 hover:bg-pink-500/10 transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <a
              href={getWhatsAppGeneralUrl('Halo Admin BDG BOYS MERCH, saya mau tanya-tanya produk.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-sm font-semibold shadow-lg shadow-green-600/20 hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppGeneralUrl('Halo Admin BDG BOYS MERCH!')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-green-600/20 text-green-400 border border-green-500/30"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0c1220] border-b border-white/10 px-4 pt-3 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs text-gray-500">→</span>
              </NavLink>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <a
                href={getWhatsAppGeneralUrl('Halo Admin BDG BOYS MERCH, saya ingin konsultasi produk.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold shadow-lg shadow-green-600/30"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat Admin WhatsApp</span>
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-pink-400 transition-colors text-sm"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow Instagram @bdgboysmerch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
